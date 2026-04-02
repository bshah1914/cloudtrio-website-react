import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import AnimatedSection from '../components/AnimatedSection'

const providerConfig = {
  AWS: { pill: 'pill-orange', gradient: 'from-orange-500 to-amber-500', icon: '☁️' },
  Azure: { pill: 'pill-cyan', gradient: 'from-cyan-500 to-blue-500', icon: '🔷' },
  GCP: { pill: 'pill-green', gradient: 'from-green-500 to-emerald-500', icon: '🟢' },
}

export default function NewsPage() {
  const [email, setEmail] = useState('')
  const [news, setNews] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch('/data/news.json')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to load news')
        return res.json()
      })
      .then((data) => {
        setNews(data.news || [])
        setLoading(false)
      })
      .catch((err) => {
        console.error('Error loading news:', err)
        setError('Unable to load news. Please try again later.')
        setLoading(false)
      })
  }, [])

  return (
    <div>
      {/* Hero */}
      <section className="bg-hero relative overflow-hidden pt-32 pb-16">
        <div className="orb w-96 h-96 bg-orange-500 -top-48 -left-48" />
        <div className="orb w-72 h-72 bg-cyan-500 bottom-0 -right-36" style={{ animationDelay: '5s' }} />
        <div className="grid-overlay absolute inset-0 pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <nav className="flex items-center gap-2 text-sm mb-6" style={{ color: 'var(--text-muted)' }}>
              <Link to="/" className="hover:text-violet-400 transition-colors">Home</Link>
              <span>→</span>
              <span style={{ color: 'var(--text-secondary)' }}>News</span>
            </nav>
            <div className="pill pill-orange mb-5">Cloud Provider Updates</div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4" style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-display)' }}>
              Cloud <span className="gt-orange">News</span>
            </h1>
            <p className="text-lg max-w-xl" style={{ color: 'var(--text-secondary)' }}>
              Latest announcements from AWS, Azure, and Google Cloud.
            </p>
          </AnimatedSection>
        </div>
        <div className="glow-line mt-16" />
      </section>

      {/* spacer */}
      <div className="h-6" />

      {/* News Grid */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 pb-16">
        {loading && (
          <div className="text-center py-20">
            <div className="inline-block w-8 h-8 border-2 border-violet-500 border-t-transparent rounded-full animate-spin mb-4" />
            <p style={{ color: 'var(--text-muted)' }}>Loading latest cloud news...</p>
          </div>
        )}

        {error && (
          <div className="text-center py-20">
            <p style={{ color: 'var(--text-muted)' }}>{error}</p>
          </div>
        )}

        {!loading && !error && (
          <AnimatePresence mode="popLayout">
            <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {news.map((item, i) => {
                const config = providerConfig[item.provider] || providerConfig.AWS
                return (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, y: 30, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                  >
                    <a href={item.link || '#'} target={item.link ? '_blank' : undefined} rel="noopener noreferrer">
                      <motion.div
                        whileHover={{ y: -6, scale: 1.02 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                        className="card-dark p-6 h-full flex flex-col group cursor-pointer"
                      >
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-2">
                            <div className={`w-7 h-7 rounded-lg bg-gradient-to-br ${config.gradient} flex items-center justify-center text-white text-xs font-bold`}>
                              {item.provider[0]}
                            </div>
                            <span className={`${config.pill}`}>{item.provider}</span>
                          </div>
                          <span className="text-[10px] px-2 py-1 rounded-md" style={{ background: 'var(--accent-light)', color: 'var(--accent)' }}>{item.tag}</span>
                        </div>

                        <h3 className="text-lg font-semibold mb-3 group-hover:text-violet-400 transition-colors" style={{ color: 'var(--text-primary)' }}>
                          {item.title}
                        </h3>
                        <p className="text-sm leading-relaxed mb-5 flex-1" style={{ color: 'var(--text-secondary)' }}>
                          {item.desc}
                        </p>

                        <div className="flex items-center justify-between pt-4" style={{ borderTop: '1px solid var(--border)' }}>
                          <span className="text-xs" style={{ color: 'var(--text-muted)' }}>{item.date}</span>
                          <motion.span
                            className="text-xs font-medium flex items-center gap-1 group-hover:gap-2 transition-all"
                            style={{ color: 'var(--accent)' }}
                          >
                            Read more
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                          </motion.span>
                        </div>
                      </motion.div>
                    </a>
                  </motion.div>
                )
              })}
            </motion.div>
          </AnimatePresence>
        )}
      </section>

      {/* Newsletter */}
      <section className="bg-section-alt">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
          <AnimatedSection>
            <div className="card-glow p-10 text-center max-w-2xl mx-auto">
              <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-500 to-pink-500 flex items-center justify-center mx-auto mb-5">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
              </motion.div>
              <h2 className="text-2xl font-bold mb-3" style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-display)' }}>Never miss an update</h2>
              <p className="text-sm mb-6" style={{ color: 'var(--text-secondary)' }}>Get cloud provider news and analysis delivered weekly.</p>
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
