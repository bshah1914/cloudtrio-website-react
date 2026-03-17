import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import AnimatedSection, { StaggerContainer, StaggerItem } from '../components/AnimatedSection'

const categories = ['All', 'Cost Optimization', 'Security', 'DevOps', 'Tutorials']
const categoryColors = { 'Cost Optimization': 'pill-green', Security: 'pill-pink', DevOps: 'pill-cyan', Tutorials: 'pill-orange' }

const articles = [
  { id: 1, title: 'How We Reduced AWS Costs by 47%', category: 'Cost Optimization', author: 'CloudLunar Team', date: 'Mar 5, 2026', readTime: '8 min', excerpt: 'Strategies and architectural changes that slashed nearly half of a client\'s monthly AWS bill.', avatar: 'CT', avatarColor: 'from-green-500 to-emerald-600', featured: true },
  { id: 2, title: 'Achieving SOC 2 Compliance on AWS', category: 'Security', author: 'Priya Sharma', date: 'Feb 28, 2026', readTime: '6 min', excerpt: 'Step-by-step guide to pass your SOC 2 Type II audit on AWS infrastructure.', avatar: 'PS', avatarColor: 'from-pink-500 to-rose-600' },
  { id: 3, title: 'Zero-Downtime CI/CD with GitHub Actions', category: 'DevOps', author: 'Alex Chen', date: 'Feb 20, 2026', readTime: '10 min', excerpt: 'Blue-green deployments on ECS Fargate with automated rollbacks.', avatar: 'AC', avatarColor: 'from-cyan-500 to-blue-600' },
  { id: 4, title: 'Terraform Modules for Multi-Account AWS', category: 'Tutorials', author: 'Jordan Lee', date: 'Feb 14, 2026', readTime: '12 min', excerpt: 'Reusable Terraform modules for consistent multi-account infrastructure.', avatar: 'JL', avatarColor: 'from-orange-500 to-amber-600' },
  { id: 5, title: 'Reserved Instances vs Savings Plans', category: 'Cost Optimization', author: 'CloudLunar Team', date: 'Jan 30, 2026', readTime: '5 min', excerpt: 'Choose the right commitment model for your workload patterns.', avatar: 'CT', avatarColor: 'from-green-500 to-emerald-600' },
  { id: 6, title: 'Least-Privilege IAM Policies at Scale', category: 'Security', author: 'Priya Sharma', date: 'Jan 22, 2026', readTime: '7 min', excerpt: 'Audit and enforce least-privilege across thousands of identities.', avatar: 'PS', avatarColor: 'from-pink-500 to-rose-600' },
  { id: 7, title: 'Observability-Driven Development', category: 'DevOps', author: 'Alex Chen', date: 'Jan 15, 2026', readTime: '9 min', excerpt: 'Design metrics, traces, and logs into your architecture from day one.', avatar: 'AC', avatarColor: 'from-cyan-500 to-blue-600' },
  { id: 8, title: 'Automating Cost Reports with Lambda', category: 'Tutorials', author: 'Jordan Lee', date: 'Jan 8, 2026', readTime: '11 min', excerpt: 'Serverless cost reporting pipeline with Lambda and Cost Explorer API.', avatar: 'JL', avatarColor: 'from-orange-500 to-amber-600' },
]

export default function BlogPage() {
  const [active, setActive] = useState('All')
  const [email, setEmail] = useState('')
  const filtered = active === 'All' ? articles : articles.filter((a) => a.category === active)
  const featured = articles[0]

  return (
    <div>
      {/* Hero */}
      <section className="bg-hero relative overflow-hidden pt-32 pb-16">
        <div className="orb w-96 h-96 bg-violet-600 -top-48 -right-48" />
        <div className="orb w-72 h-72 bg-cyan-500 bottom-0 -left-36" style={{ animationDelay: '5s' }} />
        <div className="grid-overlay absolute inset-0 pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <nav className="flex items-center gap-2 text-sm mb-6" style={{ color: 'var(--text-muted)' }}>
              <Link to="/" className="hover:text-violet-400 transition-colors">Home</Link>
              <span>→</span>
              <span style={{ color: 'var(--text-secondary)' }}>Blog</span>
            </nav>
            <div className="pill-cyan mb-5">Insights & Tutorials</div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4" style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-display)' }}>
              Cloud Engineering <span className="gt">Blog</span>
            </h1>
            <p className="text-lg max-w-xl" style={{ color: 'var(--text-secondary)' }}>
              Cost optimization, security, DevOps, and hands-on tutorials from the CloudTrio team.
            </p>
          </AnimatedSection>
        </div>
        <div className="glow-line mt-16" />
      </section>

      {/* Featured Article */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 -mt-8 relative z-10 mb-12">
        <AnimatedSection>
          <motion.div whileHover={{ y: -4 }} className="card-glow p-8 md:p-10 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <span className={`pill ${categoryColors[featured.category]}`}>{featured.category}</span>
              <h2 className="text-2xl md:text-3xl font-bold mt-4 mb-3" style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-display)' }}>
                {featured.title}
              </h2>
              <p className="mb-6" style={{ color: 'var(--text-secondary)' }}>{featured.excerpt}</p>
              <div className="flex items-center gap-3">
                <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${featured.avatarColor} flex items-center justify-center text-white text-xs font-bold`}>{featured.avatar}</div>
                <div>
                  <div className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>{featured.author}</div>
                  <div className="text-xs" style={{ color: 'var(--text-muted)' }}>{featured.date} · {featured.readTime}</div>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              {/* Visual placeholder — animated chart */}
              <div className="rounded-2xl p-6" style={{ background: 'var(--bg-surface)' }}>
                <div className="text-xs font-medium mb-3" style={{ color: 'var(--text-muted)' }}>AWS Cost Reduction Timeline</div>
                <svg viewBox="0 0 300 100" className="w-full">
                  <defs>
                    <linearGradient id="blogG" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#10b981" stopOpacity="0.3" /><stop offset="100%" stopColor="#10b981" stopOpacity="0" /></linearGradient>
                  </defs>
                  <motion.path d="M0,80 Q30,75 60,65 T120,50 T180,35 T240,25 T300,15" fill="none" stroke="#10b981" strokeWidth="2.5" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 2, ease: 'easeOut' }} />
                  <path d="M0,80 Q30,75 60,65 T120,50 T180,35 T240,25 T300,15 V100 H0 Z" fill="url(#blogG)" />
                  <motion.circle cx="300" cy="15" r="4" fill="#10b981" initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: 2 }} />
                </svg>
                <div className="flex justify-between text-xs mt-2" style={{ color: 'var(--text-muted)' }}>
                  <span>Month 1</span>
                  <span className="text-emerald-400 font-bold">-47% costs</span>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatedSection>
      </section>

      {/* Category Filters */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-10">
        <AnimatedSection>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <motion.button
                key={cat}
                onClick={() => setActive(cat)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                  active === cat ? 'btn-primary' : 'card-dark'
                }`}
                style={active !== cat ? { color: 'var(--text-secondary)' } : undefined}
              >
                {cat}
              </motion.button>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* Articles Grid */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 pb-16">
        <AnimatePresence mode="popLayout">
          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((a, i) => (
              <motion.div
                key={a.id}
                layout
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <motion.div
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className="card-dark p-6 h-full flex flex-col group cursor-pointer"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className={`pill ${categoryColors[a.category] || 'pill'}`}>{a.category}</span>
                    <span className="text-xs" style={{ color: 'var(--text-muted)' }}>{a.readTime}</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-3 group-hover:text-violet-400 transition-colors" style={{ color: 'var(--text-primary)' }}>{a.title}</h3>
                  <p className="text-sm leading-relaxed mb-5 flex-1" style={{ color: 'var(--text-secondary)' }}>{a.excerpt}</p>
                  <div className="flex items-center justify-between pt-4" style={{ borderTop: '1px solid var(--border)' }}>
                    <div className="flex items-center gap-2">
                      <div className={`w-7 h-7 rounded-full bg-gradient-to-br ${a.avatarColor} flex items-center justify-center text-white text-[10px] font-bold`}>{a.avatar}</div>
                      <div>
                        <div className="text-xs font-medium" style={{ color: 'var(--text-primary)' }}>{a.author}</div>
                        <div className="text-[10px]" style={{ color: 'var(--text-muted)' }}>{a.date}</div>
                      </div>
                    </div>
                    <motion.svg
                      className="w-5 h-5"
                      fill="none" stroke="currentColor" viewBox="0 0 24 24"
                      style={{ color: 'var(--accent)' }}
                      initial={{ x: 0, opacity: 0 }}
                      whileHover={{ x: 4 }}
                      animate={{ opacity: 1 }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </motion.svg>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {filtered.length === 0 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-20">
            <p style={{ color: 'var(--text-muted)' }}>No articles in this category yet.</p>
          </motion.div>
        )}
      </section>

      {/* Newsletter */}
      <section className="bg-section-alt">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
          <AnimatedSection>
            <div className="card-glow p-10 text-center max-w-2xl mx-auto">
              <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-500 to-cyan-500 flex items-center justify-center mx-auto mb-5">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              </motion.div>
              <h2 className="text-2xl font-bold mb-3" style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-display)' }}>Stay ahead of the curve</h2>
              <p className="text-sm mb-6" style={{ color: 'var(--text-secondary)' }}>Weekly cloud engineering insights delivered to your inbox.</p>
              <form onSubmit={(e) => { e.preventDefault(); setEmail('') }} className="flex gap-2 max-w-sm mx-auto">
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@company.com" required className="flex-1 px-4 py-2.5 rounded-xl text-sm bg-transparent border focus:outline-none focus:border-violet-500" style={{ borderColor: 'var(--border)', color: 'var(--text-primary)' }} />
                <button type="submit" className="btn-primary btn-sm">Subscribe</button>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
