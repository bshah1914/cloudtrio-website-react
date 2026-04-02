#!/usr/bin/env node

/**
 * Fetches latest cloud news from AWS, Azure, and GCP RSS/Atom feeds
 * and writes them to public/data/news.json
 */

const FEEDS = [
  {
    provider: 'AWS',
    url: 'https://aws.amazon.com/blogs/aws/feed/',
    fallbackUrl: 'https://aws.amazon.com/about-aws/whats-new/recent/feed/',
  },
  {
    provider: 'Azure',
    url: 'https://azure.microsoft.com/en-us/blog/feed/',
    fallbackUrl: 'https://azurecomcdn.azureedge.net/en-us/updates/feed/',
  },
  {
    provider: 'GCP',
    url: 'https://cloud.google.com/feeds/gcp-release-notes.xml',
    fallbackUrl: 'https://cloudblog.withgoogle.com/rss/',
  },
]

const TAG_KEYWORDS = {
  Compute: ['ec2', 'vm', 'instance', 'compute', 'graviton', 'fargate', 'lambda', 'functions', 'ecs', 'eks', 'aks', 'gke'],
  Storage: ['s3', 'storage', 'blob', 'bucket', 'ebs', 'efs', 'disk'],
  Security: ['security', 'iam', 'identity', 'compliance', 'encryption', 'waf', 'shield', 'guard', 'kms'],
  AI: ['ai', 'ml', 'machine learning', 'sagemaker', 'openai', 'bedrock', 'vertex', 'generative'],
  Database: ['database', 'rds', 'dynamodb', 'aurora', 'cosmos', 'spanner', 'sql', 'redis', 'mongo'],
  Networking: ['vpc', 'network', 'cdn', 'cloudfront', 'load balancer', 'dns', 'route 53'],
  DevOps: ['devops', 'ci/cd', 'pipeline', 'deploy', 'codepipeline', 'github', 'terraform'],
  Kubernetes: ['kubernetes', 'k8s', 'container', 'docker', 'eks', 'aks', 'gke', 'helm'],
  Serverless: ['serverless', 'lambda', 'functions', 'step functions', 'event'],
  Analytics: ['analytics', 'bigquery', 'redshift', 'athena', 'quicksight', 'data'],
  Observability: ['monitor', 'observability', 'logs', 'metrics', 'trace', 'cloudwatch', 'datadog'],
  FinOps: ['cost', 'pricing', 'savings', 'budget', 'finops', 'reserved', 'spot'],
}

function detectTag(title, description) {
  const text = `${title} ${description}`.toLowerCase()
  for (const [tag, keywords] of Object.entries(TAG_KEYWORDS)) {
    if (keywords.some((kw) => text.includes(kw))) return tag
  }
  return 'General'
}

function stripHtml(html) {
  return html
    .replace(/<[^>]*>/g, '')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

function truncate(text, maxLen = 160) {
  if (text.length <= maxLen) return text
  return text.slice(0, maxLen).replace(/\s+\S*$/, '') + '...'
}

function formatDate(dateStr) {
  try {
    const d = new Date(dateStr)
    if (isNaN(d.getTime())) return dateStr
    return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
  } catch {
    return dateStr
  }
}

function parseItems(xml, provider) {
  const items = []

  // Try RSS <item> format
  const rssItems = xml.match(/<item[\s>][\s\S]*?<\/item>/gi) || []
  for (const item of rssItems) {
    const title = stripHtml((item.match(/<title[^>]*>([\s\S]*?)<\/title>/i) || [])[1] || '')
    const desc = stripHtml((item.match(/<description[^>]*>([\s\S]*?)<\/description>/i) || [])[1] || '')
    const link = (item.match(/<link[^>]*>([\s\S]*?)<\/link>/i) || [])[1]?.trim() || ''
    const pubDate = (item.match(/<pubDate[^>]*>([\s\S]*?)<\/pubDate>/i) || [])[1]?.trim() || ''
    const category = (item.match(/<category[^>]*>([\s\S]*?)<\/category>/i) || [])[1]?.trim() || ''

    if (title) {
      items.push({
        provider,
        title,
        desc: truncate(desc),
        date: formatDate(pubDate),
        rawDate: pubDate ? new Date(pubDate).toISOString() : new Date().toISOString(),
        tag: detectTag(title, `${desc} ${category}`),
        link,
      })
    }
  }

  // Try Atom <entry> format if no RSS items found
  if (items.length === 0) {
    const entries = xml.match(/<entry[\s>][\s\S]*?<\/entry>/gi) || []
    for (const entry of entries) {
      const title = stripHtml((entry.match(/<title[^>]*>([\s\S]*?)<\/title>/i) || [])[1] || '')
      const summary = stripHtml(
        (entry.match(/<summary[^>]*>([\s\S]*?)<\/summary>/i) || [])[1] ||
        (entry.match(/<content[^>]*>([\s\S]*?)<\/content>/i) || [])[1] || ''
      )
      const link = (entry.match(/<link[^>]*href="([^"]*)"[^>]*\/>/i) || [])[1] || ''
      const updated = (entry.match(/<(?:updated|published)[^>]*>([\s\S]*?)<\/(?:updated|published)>/i) || [])[1]?.trim() || ''

      if (title) {
        items.push({
          provider,
          title,
          desc: truncate(summary),
          date: formatDate(updated),
          rawDate: updated ? new Date(updated).toISOString() : new Date().toISOString(),
          tag: detectTag(title, summary),
          link,
        })
      }
    }
  }

  return items
}

async function fetchFeed(feed) {
  for (const url of [feed.url, feed.fallbackUrl]) {
    try {
      const res = await fetch(url, {
        headers: { 'User-Agent': 'CloudTrio-News-Fetcher/1.0' },
        signal: AbortSignal.timeout(15000),
      })
      if (!res.ok) continue
      const xml = await res.text()
      const items = parseItems(xml, feed.provider)
      if (items.length > 0) {
        console.log(`✓ ${feed.provider}: fetched ${items.length} items from ${url}`)
        return items
      }
    } catch (err) {
      console.warn(`✗ ${feed.provider}: failed to fetch ${url} — ${err.message}`)
    }
  }
  console.warn(`✗ ${feed.provider}: all feeds failed`)
  return []
}

async function main() {
  console.log('Fetching cloud news feeds...\n')

  const results = await Promise.all(FEEDS.map(fetchFeed))
  const allNews = results
    .flat()
    .sort((a, b) => new Date(b.rawDate) - new Date(a.rawDate))
    .slice(0, 30) // Keep latest 30 items
    .map((item, i) => ({
      id: i + 1,
      provider: item.provider,
      title: item.title,
      desc: item.desc,
      date: item.date,
      tag: item.tag,
      link: item.link,
    }))

  const output = {
    lastUpdated: new Date().toISOString(),
    count: allNews.length,
    news: allNews,
  }

  const fs = await import('fs')
  const path = await import('path')
  const outPath = path.join(import.meta.dirname, '..', 'public', 'data', 'news.json')

  fs.writeFileSync(outPath, JSON.stringify(output, null, 2))
  console.log(`\n✓ Wrote ${allNews.length} news items to public/data/news.json`)
  console.log(`  Last updated: ${output.lastUpdated}`)
}

main().catch((err) => {
  console.error('Fatal error:', err)
  process.exit(1)
})
