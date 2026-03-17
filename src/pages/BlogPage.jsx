import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import AnimatedSection, { StaggerContainer, StaggerItem } from '../components/AnimatedSection'

const categories = ['All', 'Cost Optimization', 'Security', 'DevOps', 'Tutorials']

const categoryColors = {
  'Cost Optimization': 'pill-green',
  Security: 'pill-pink',
  DevOps: 'pill-cyan',
  Tutorials: 'pill-orange',
}

const articles = [
  {
    id: 1,
    title: 'How We Reduced AWS Costs by 47%',
    category: 'Cost Optimization',
    author: 'CloudLunar Team',
    date: 'Mar 5, 2026',
    readTime: '8 min read',
    excerpt: 'A deep dive into the strategies, tools, and architectural changes that helped our client slash nearly half of their monthly AWS bill without sacrificing performance.',
    avatar: 'CT',
    avatarColor: 'from-green-500 to-emerald-600',
  },
  {
    id: 2,
    title: 'Achieving SOC 2 Compliance on AWS',
    category: 'Security',
    author: 'Priya Sharma',
    date: 'Feb 28, 2026',
    readTime: '6 min read',
    excerpt: 'Step-by-step guide to implementing the controls, monitoring, and documentation needed to pass your SOC 2 Type II audit on AWS infrastructure.',
    avatar: 'PS',
    avatarColor: 'from-pink-500 to-rose-600',
  },
  {
    id: 3,
    title: 'Zero-Downtime CI/CD with GitHub Actions and ECS',
    category: 'DevOps',
    author: 'Alex Chen',
    date: 'Feb 20, 2026',
    readTime: '10 min read',
    excerpt: 'How to build a robust CI/CD pipeline that deploys to ECS Fargate with blue-green deployments, automated rollbacks, and zero downtime.',
    avatar: 'AC',
    avatarColor: 'from-cyan-500 to-blue-600',
  },
  {
    id: 4,
    title: 'Terraform Modules for Multi-Account AWS',
    category: 'Tutorials',
    author: 'Jordan Lee',
    date: 'Feb 14, 2026',
    readTime: '12 min read',
    excerpt: 'Build reusable Terraform modules that provision consistent infrastructure across multiple AWS accounts with proper state management and access controls.',
    avatar: 'JL',
    avatarColor: 'from-orange-500 to-amber-600',
  },
  {
    id: 5,
    title: 'Reserved Instances vs Savings Plans',
    category: 'Cost Optimization',
    author: 'CloudLunar Team',
    date: 'Jan 30, 2026',
    readTime: '5 min read',
    excerpt: 'A practical comparison of AWS Reserved Instances and Savings Plans to help you choose the right commitment model for your workload patterns.',
    avatar: 'CT',
    avatarColor: 'from-green-500 to-emerald-600',
  },
  {
    id: 6,
    title: 'Least-Privilege IAM Policies at Scale',
    category: 'Security',
    author: 'Priya Sharma',
    date: 'Jan 22, 2026',
    readTime: '7 min read',
    excerpt: 'Techniques for generating, auditing, and enforcing least-privilege IAM policies across hundreds of services and thousands of identities.',
    avatar: 'PS',
    avatarColor: 'from-pink-500 to-rose-600',
  },
  {
    id: 7,
    title: 'Observability-Driven Development',
    category: 'DevOps',
    author: 'Alex Chen',
    date: 'Jan 15, 2026',
    readTime: '9 min read',
    excerpt: 'Shift observability left by designing metrics, traces, and logs into your application architecture from day one instead of bolting them on later.',
    avatar: 'AC',
    avatarColor: 'from-cyan-500 to-blue-600',
  },
  {
    id: 8,
    title: 'Automating Cost Reports with Lambda',
    category: 'Tutorials',
    author: 'Jordan Lee',
    date: 'Jan 8, 2026',
    readTime: '11 min read',
    excerpt: 'Build a serverless cost reporting pipeline with AWS Lambda, Cost Explorer API, and SNS that delivers daily spend breakdowns to Slack.',
    avatar: 'JL',
    avatarColor: 'from-orange-500 to-amber-600',
  },
]

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [email, setEmail] = useState('')
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  const filtered = activeCategory === 'All'
    ? articles
    : articles.filter((a) => a.category === activeCategory)

  return (
    <div className="t-bg min-h-screen">
      {/* Hero */}
      <section className="bg-hero relative overflow-hidden pt-32 pb-20">
        <div className="grid-overlay" />
        <div className="orb w-[500px] h-[500px] bg-violet-600/15 -top-40 -right-40" />
        <div className="orb w-[400px] h-[400px] bg-cyan-600/10 bottom-0 -left-32" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm mb-6" style={{ color: 'var(--text-muted)' }}>
              <Link to="/" className="hover:underline" style={{ color: 'var(--text-secondary)' }}>Home</Link>
              <span>/</span>
              <span style={{ color: 'var(--accent)' }}>Blog</span>
            </div>

            <div className="max-w-3xl">
              <span className="pill-cyan mb-4 inline-block">Insights & Tutorials</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>
                Blog
              </h1>
              <p className="text-lg md:text-xl leading-relaxed max-w-2xl" style={{ color: 'var(--text-body)' }}>
                Cloud engineering insights, cost optimization strategies, security best practices, and hands-on tutorials from our team.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Category Filters */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 -mt-6 relative z-10">
        <AnimatedSection>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-violet-600 text-white shadow-lg shadow-violet-600/25'
                    : 'card-dark hover:bg-white/[0.08]'
                }`}
                style={activeCategory !== cat ? { color: 'var(--text-secondary)' } : undefined}
              >
                {cat}
              </button>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* Articles Grid */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <StaggerContainer className="grid md:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((article) => (
              <StaggerItem key={article.id}>
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="card-dark rounded-2xl p-6 h-full flex flex-col group hover:border-violet-500/30 transition-all duration-300"
                >
                  {/* Category pill */}
                  <div className="mb-4">
                    <span className={`pill ${categoryColors[article.category] || 'pill-cyan'}`}>
                      {article.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h2
                    className="text-xl font-semibold mb-3 group-hover:text-violet-400 transition-colors cursor-pointer t-text"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    {article.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-sm leading-relaxed mb-6 flex-1 t-text-2" style={{ color: 'var(--text-body)' }}>
                    {article.excerpt}
                  </p>

                  {/* Author row */}
                  <div className="flex items-center gap-3 pt-4 border-t" style={{ borderColor: 'var(--border)' }}>
                    <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${article.avatarColor} flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}>
                      {article.avatar}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>{article.author}</div>
                      <div className="flex items-center gap-2 text-xs" style={{ color: 'var(--text-muted)' }}>
                        <span>{article.date}</span>
                        <span>&#183;</span>
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                    <svg className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: 'var(--accent)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </AnimatePresence>
        </StaggerContainer>

        {/* Empty state */}
        {filtered.length === 0 && (
          <div className="text-center py-20">
            <p className="text-lg" style={{ color: 'var(--text-muted)' }}>No articles found in this category.</p>
          </div>
        )}
      </section>

      {/* Newsletter Signup */}
      <section className="bg-alt">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <AnimatedSection>
            <div className="max-w-2xl mx-auto text-center">
              <span className="pill-green mb-4 inline-block">Newsletter</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
                Stay ahead of the cloud curve
              </h2>
              <p className="mb-8" style={{ color: 'var(--text-body)' }}>
                Get weekly insights on cloud cost optimization, security best practices, and DevOps strategies delivered to your inbox.
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
