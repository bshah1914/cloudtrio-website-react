import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import AnimatedSection, { StaggerContainer, StaggerItem } from '../components/AnimatedSection'

const providers = ['AWS', 'Azure', 'GCP']

const providerStyles = {
  AWS: { pill: 'pill-orange', color: 'from-orange-500 to-amber-500' },
  Azure: { pill: 'pill-cyan', color: 'from-cyan-500 to-blue-500' },
  GCP: { pill: 'pill-green', color: 'from-green-500 to-emerald-500' },
}

const newsItems = [
  // AWS
  {
    id: 1,
    provider: 'AWS',
    title: 'Graviton5 Instances Now Generally Available',
    description: 'AWS launches Graviton5-powered EC2 instances delivering 2x performance improvement over Graviton3 with 60% better energy efficiency. Available in 12 regions at launch.',
    date: 'Mar 12, 2026',
    link: '#',
  },
  {
    id: 2,
    provider: 'AWS',
    title: 'S3 Intelligent Cold Storage Tier',
    description: 'New S3 storage tier uses ML-driven access pattern analysis to automatically move objects between Glacier and Deep Archive, reducing storage costs by up to 35%.',
    date: 'Mar 8, 2026',
    link: '#',
  },
  {
    id: 3,
    provider: 'AWS',
    title: 'Security Hub Automated Remediation',
    description: 'AWS Security Hub now supports one-click automated remediation for 150+ common findings, with customizable playbooks and approval workflows.',
    date: 'Feb 25, 2026',
    link: '#',
  },
  {
    id: 4,
    provider: 'AWS',
    title: 'Lambda 10K Concurrency Per Function',
    description: 'AWS raises the default Lambda concurrency limit to 10,000 per function with burst capacity up to 30,000, removing a key scaling bottleneck for serverless workloads.',
    date: 'Feb 18, 2026',
    link: '#',
  },
  // Azure
  {
    id: 5,
    provider: 'Azure',
    title: 'AI-Driven Cost Management Dashboard',
    description: 'Azure Cost Management introduces AI-powered anomaly detection and predictive forecasting, automatically surfacing optimization opportunities and projected spend.',
    date: 'Mar 10, 2026',
    link: '#',
  },
  {
    id: 6,
    provider: 'Azure',
    title: 'AKS Multi-Cluster Mesh in GA',
    description: 'Azure Kubernetes Service now offers built-in multi-cluster service mesh with automatic traffic routing, mTLS, and observability across up to 50 clusters.',
    date: 'Mar 3, 2026',
    link: '#',
  },
  {
    id: 7,
    provider: 'Azure',
    title: 'Deployment Environments for Platform Engineering',
    description: 'New Azure Deployment Environments service enables platform teams to create self-service, pre-configured infrastructure templates with built-in governance.',
    date: 'Feb 22, 2026',
    link: '#',
  },
  {
    id: 8,
    provider: 'Azure',
    title: 'Azure OpenAI Expands to 12 Regions',
    description: 'Azure OpenAI Service is now available in 12 regions globally, including new availability zones in Asia-Pacific and South America with reduced latency.',
    date: 'Feb 14, 2026',
    link: '#',
  },
  // GCP
  {
    id: 9,
    provider: 'GCP',
    title: 'Confidential Computing for All VM Types',
    description: 'Google Cloud extends Confidential Computing support to all VM families including Tau and Spot instances, making encrypted-in-use data protection universally accessible.',
    date: 'Mar 11, 2026',
    link: '#',
  },
  {
    id: 10,
    provider: 'GCP',
    title: 'BigQuery Sub-Second Latency Queries',
    description: 'BigQuery introduces a new real-time query engine achieving sub-second latency for operational analytics, bridging the gap between data warehouses and real-time systems.',
    date: 'Mar 1, 2026',
    link: '#',
  },
  {
    id: 11,
    provider: 'GCP',
    title: 'Carbon-Aware Scheduling for Batch Workloads',
    description: 'GCP Batch now supports carbon-aware scheduling that automatically runs workloads in regions and time windows with the lowest carbon intensity, reducing carbon footprint by up to 40%.',
    date: 'Feb 20, 2026',
    link: '#',
  },
  {
    id: 12,
    provider: 'GCP',
    title: 'Unified Observability Platform Launch',
    description: 'Google Cloud Operations Suite merges into a unified observability platform combining metrics, logs, traces, and profiling with AI-powered root cause analysis.',
    date: 'Feb 10, 2026',
    link: '#',
  },
]

export default function NewsPage() {
  const [activeProvider, setActiveProvider] = useState('AWS')
  const [email, setEmail] = useState('')
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  const filtered = newsItems.filter((n) => n.provider === activeProvider)

  return (
    <div className="t-bg min-h-screen">
      {/* Hero */}
      <section className="bg-hero relative overflow-hidden pt-32 pb-20">
        <div className="grid-overlay" />
        <div className="orb w-[500px] h-[500px] bg-cyan-600/15 -top-40 -left-40" />
        <div className="orb w-[400px] h-[400px] bg-violet-600/10 bottom-0 -right-32" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm mb-6" style={{ color: 'var(--text-muted)' }}>
              <Link to="/" className="hover:underline" style={{ color: 'var(--text-secondary)' }}>Home</Link>
              <span>/</span>
              <span style={{ color: 'var(--accent)' }}>News</span>
            </div>

            <div className="max-w-3xl">
              <span className="pill-orange mb-4 inline-block">Latest Updates</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>
                Cloud News
              </h1>
              <p className="text-lg md:text-xl leading-relaxed max-w-2xl" style={{ color: 'var(--text-body)' }}>
                Stay on top of the latest announcements, feature releases, and updates from AWS, Azure, and Google Cloud Platform.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Provider Tabs */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 -mt-6 relative z-10">
        <AnimatedSection>
          <div className="flex gap-2">
            {providers.map((provider) => (
              <button
                key={provider}
                onClick={() => setActiveProvider(provider)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
                  activeProvider === provider
                    ? `bg-gradient-to-r ${providerStyles[provider].color} text-white shadow-lg`
                    : 'card-dark hover:bg-white/[0.08]'
                }`}
                style={activeProvider !== provider ? { color: 'var(--text-secondary)' } : undefined}
              >
                {provider === 'AWS' && (
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6.763 10.036c0 .296.032.535.088.71.064.176.144.368.256.576.04.063.056.127.056.183 0 .08-.048.16-.152.24l-.503.335a.383.383 0 01-.208.072c-.08 0-.16-.04-.239-.112a2.47 2.47 0 01-.287-.374 6.18 6.18 0 01-.248-.467c-.622.734-1.405 1.101-2.347 1.101-.67 0-1.205-.191-1.596-.574-.391-.384-.59-.894-.59-1.533 0-.678.239-1.23.726-1.644.487-.415 1.133-.623 1.955-.623.272 0 .551.024.846.064.296.04.6.104.918.176v-.583c0-.607-.127-1.03-.375-1.277-.255-.248-.686-.367-1.3-.367-.28 0-.568.032-.863.104-.296.072-.583.16-.863.272a2.287 2.287 0 01-.28.104.488.488 0 01-.127.024c-.112 0-.168-.08-.168-.247v-.391c0-.128.016-.224.056-.28a.597.597 0 01.224-.167c.28-.144.616-.264 1.01-.36a4.84 4.84 0 011.244-.152c.95 0 1.644.216 2.091.647.44.43.662 1.085.662 1.963v2.586z" />
                  </svg>
                )}
                {provider === 'Azure' && (
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M5.483 21h13.034l-4.655-5.248 4.655-8.752H5.483L1 21h4.483zm8.034-14L18 3H9.517l4 4z" />
                  </svg>
                )}
                {provider === 'GCP' && (
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 3L4 9v6l8 6 8-6V9l-8-6zm0 2.18L18.18 9 12 12.82 5.82 9 12 5.18z" />
                  </svg>
                )}
                {provider}
              </button>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* News Grid */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeProvider}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <StaggerContainer className="grid md:grid-cols-2 gap-6">
              {filtered.map((item) => (
                <StaggerItem key={item.id}>
                  <div className="card-dark rounded-2xl p-6 h-full flex flex-col group hover:border-violet-500/30 transition-all duration-300">
                    {/* Provider pill + date */}
                    <div className="flex items-center justify-between mb-4">
                      <span className={`pill ${providerStyles[item.provider].pill}`}>
                        {item.provider}
                      </span>
                      <span className="text-xs" style={{ color: 'var(--text-muted)' }}>{item.date}</span>
                    </div>

                    {/* Title */}
                    <h3
                      className="text-lg font-semibold mb-3 group-hover:text-violet-400 transition-colors t-text"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm leading-relaxed mb-6 flex-1 t-text-2" style={{ color: 'var(--text-body)' }}>
                      {item.description}
                    </p>

                    {/* Read more link */}
                    <a
                      href={item.link}
                      className="inline-flex items-center gap-1.5 text-sm font-medium transition-colors hover:gap-2.5"
                      style={{ color: 'var(--accent)' }}
                    >
                      Read more
                      <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </motion.div>
        </AnimatePresence>
      </section>

      {/* Stay Updated Newsletter */}
      <section className="bg-alt">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <AnimatedSection>
            <div className="max-w-2xl mx-auto text-center">
              <span className="pill-cyan mb-4 inline-block">Stay Updated</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
                Never miss a cloud update
              </h2>
              <p className="mb-8" style={{ color: 'var(--text-body)' }}>
                Get curated cloud provider news, feature releases, and impact analysis delivered weekly. We filter the noise so you don't have to.
              </p>
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  setEmail('')
                }}
                className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 px-4 py-3 rounded-xl border bg-transparent text-sm focus:outline-none focus:ring-2 focus:ring-violet-500/50"
                  style={{
                    borderColor: 'var(--border)',
                    color: 'var(--text-primary)',
                  }}
                />
                <button type="submit" className="btn-primary btn-sm whitespace-nowrap">
                  Subscribe
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </form>
              <p className="text-xs mt-4" style={{ color: 'var(--text-muted)' }}>
                No spam. Unsubscribe anytime.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
