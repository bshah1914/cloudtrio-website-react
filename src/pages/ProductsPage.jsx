import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import AnimatedSection, { StaggerContainer, StaggerItem, FloatingElement } from '../components/AnimatedSection'

/* ---- Animated Counter ---- */
function useCounter(target, duration = 2000, delay = 0) {
  const [count, setCount] = useState(0)
  const started = useRef(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (started.current) return
      started.current = true
      const start = performance.now()
      const step = (now) => {
        const progress = Math.min((now - start) / duration, 1)
        const eased = 1 - Math.pow(1 - progress, 3)
        setCount(Math.round(target * eased))
        if (progress < 1) requestAnimationFrame(step)
      }
      requestAnimationFrame(step)
    }, delay)
    return () => clearTimeout(timeout)
  }, [target, duration, delay])

  return count
}

/* ---- Progress Ring ---- */
function ProgressRing({ value, size = 70, stroke = 5, color = '#f472b6', delay = 0 }) {
  const [progress, setProgress] = useState(0)
  const radius = (size - stroke) / 2
  const circumference = 2 * Math.PI * radius

  useEffect(() => {
    const timeout = setTimeout(() => {
      let start = performance.now()
      const animate = (now) => {
        const p = Math.min((now - start) / 2000, 1)
        setProgress(value * (1 - Math.pow(1 - p, 3)))
        if (p < 1) requestAnimationFrame(animate)
      }
      requestAnimationFrame(animate)
    }, delay)
    return () => clearTimeout(timeout)
  }, [value, delay])

  return (
    <svg width={size} height={size} className="transform -rotate-90">
      <circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth={stroke} />
      <circle
        cx={size / 2} cy={size / 2} r={radius} fill="none" stroke={color} strokeWidth={stroke}
        strokeLinecap="round" strokeDasharray={circumference}
        strokeDashoffset={circumference - (progress / 100) * circumference}
        style={{ transition: 'stroke-dashoffset 0.05s ease' }}
      />
    </svg>
  )
}

/* ====== Terminal Lines for CloudLunar Preview ====== */
const termLines = [
  { text: '$ cloudlunar scan --prod', color: 'var(--text-muted)' },
  { text: '\u2713 Scanning 18 services...', color: '#10b981' },
  { text: '  Found $47,200/mo savings', color: '#a78bfa' },
]

/* ====== Comparison Table ====== */
const comparisonRows = [
  { feature: 'Focus', lunar: 'Cost Optimization', sentinel: 'Security & Compliance' },
  { feature: 'AWS Support', lunar: true, sentinel: true },
  { feature: 'Azure Support', lunar: 'Coming Soon', sentinel: true },
  { feature: 'GCP Support', lunar: 'Coming Soon', sentinel: true },
  { feature: 'AI Assistant', lunar: true, sentinel: true },
  { feature: 'Real-time Alerts', lunar: true, sentinel: true },
  { feature: 'Compliance', lunar: 'Basic (CIS, SOC2)', sentinel: '10 Frameworks' },
  { feature: 'Threat Detection', lunar: false, sentinel: '\u2713 (MITRE ATT&CK)' },
  { feature: 'Cost Analysis', lunar: '\u2713 (25+ rules)', sentinel: false },
]

/* ====== Roadmap ====== */
const roadmap = [
  { quarter: 'Q1 2026', title: 'CloudLunar Multi-Cloud', desc: 'Extend cost optimization to Azure and GCP with unified multi-cloud management.', status: 'current' },
  { quarter: 'Q2 2026', title: 'CloudSentinel v2.0', desc: 'Next-gen threat detection with AI-powered remediation and expanded compliance.', status: 'upcoming' },
  { quarter: 'Q3 2026', title: 'Unified Dashboard', desc: 'Single pane of glass for cost, security, and compliance across all products.', status: 'upcoming' },
  { quarter: 'Q4 2026', title: 'AI Copilot', desc: 'Natural language interface to manage infrastructure, costs, and security posture.', status: 'upcoming' },
]

function CellValue({ value }) {
  if (value === true) return <span className="text-emerald-400 font-bold text-lg">&check;</span>
  if (value === false) return <span className="text-zinc-600">&mdash;</span>
  return <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>{value}</span>
}

export default function ProductsPage() {
  const securityScore = useCounter(87, 2200, 1200)

  return (
    <div>
      {/* ================================================================ */}
      {/* HERO */}
      {/* ================================================================ */}
      <section className="bg-hero relative overflow-hidden pt-32 pb-20">
        <div className="grid-overlay absolute inset-0 pointer-events-none" />
        <div className="orb w-[500px] h-[500px] bg-violet-600 -top-40 -left-40" />
        <div className="orb w-[400px] h-[400px] bg-cyan-500 top-1/3 -right-40" style={{ animationDelay: '5s' }} />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <nav className="flex items-center gap-2 text-sm mb-8">
              <Link to="/" className="text-zinc-500 hover:text-violet-400">Home</Link>
              <span className="text-zinc-600">&rarr;</span>
              <span className="text-zinc-300">Products</span>
            </nav>
            <div className="pill mb-6">PRODUCT SUITE</div>
            <h1
              className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[0.95] tracking-tight mb-6"
              style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}
            >
              Two Products.
              <br />
              <span className="gt">One Platform.</span>
            </h1>
            <p className="text-xl max-w-2xl" style={{ color: 'var(--text-secondary)' }}>
              CloudTrio&apos;s product ecosystem — optimize costs with CloudLunar, secure everything with CloudSentinel.
            </p>
          </AnimatedSection>
        </div>
        <div className="glow-line mt-20" />
      </section>

      {/* ================================================================ */}
      {/* SECTION 1 — Product Showcases */}
      {/* ================================================================ */}
      <section className="bg-alt py-16 lg:py-24 relative overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-20">
              <h2
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-5"
                style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}
              >
                Our <span className="gt">Products</span>
              </h2>
              <p className="text-lg max-w-lg mx-auto" style={{ color: 'var(--text-secondary)' }}>
                Purpose-built tools for cloud cost and security.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* CloudLunar Card */}
            <AnimatedSection>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="card-glow p-8 relative overflow-hidden group h-full"
                style={{ borderColor: 'rgba(16, 185, 129, 0.15)' }}
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-500/[0.04] to-transparent pointer-events-none" />
                <div className="relative z-10">
                  <span className="pill pill-green mb-5 inline-flex">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    COST OPTIMIZATION
                  </span>

                  <h3
                    className="text-3xl md:text-4xl font-extrabold mb-4"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    <span className="gt-green">CloudLunar</span>
                  </h3>

                  <ul className="space-y-2 mb-6">
                    {[
                      'Auto-discover 18+ AWS services',
                      '25+ optimization rules engine',
                      'Save 40% on cloud spend',
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-emerald-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Mini Stats */}
                  <div className="flex gap-3 mb-6">
                    {[
                      { value: '18+', label: 'Services' },
                      { value: '25+', label: 'Rules' },
                      { value: '40%', label: 'Savings' },
                    ].map((s) => (
                      <div key={s.label} className="card-glass px-4 py-2.5 rounded-xl text-center flex-1">
                        <div className="stat-num text-lg gt-green">{s.value}</div>
                        <div className="text-[10px] uppercase tracking-wider font-medium" style={{ color: 'var(--text-muted)' }}>{s.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Mini Terminal */}
                  <div className="code-block overflow-hidden mb-6">
                    <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-white/[0.04]">
                      <div className="w-2 h-2 rounded-full bg-red-500/50" />
                      <div className="w-2 h-2 rounded-full bg-amber-500/50" />
                      <div className="w-2 h-2 rounded-full bg-emerald-500/50" />
                      <span className="text-[10px] ml-2 font-mono" style={{ color: 'var(--text-muted)' }}>terminal</span>
                    </div>
                    <div className="p-4 font-mono text-[12px] leading-[1.9]">
                      {termLines.map((line, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: 10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.5 + i * 0.4, duration: 0.4 }}
                          style={{ color: line.color }}
                        >
                          {line.text}
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <Link to="/products" className="btn-primary">
                    Explore CloudLunar
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                  </Link>
                </div>
              </motion.div>
            </AnimatedSection>

            {/* CloudSentinel Card */}
            <AnimatedSection delay={0.15}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="card-glow p-8 relative overflow-hidden group h-full"
                style={{ borderColor: 'rgba(244, 114, 182, 0.15)' }}
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-pink-500/[0.04] to-transparent pointer-events-none" />
                <div className="relative z-10">
                  <span className="pill pill-pink mb-5 inline-flex">
                    <span className="w-1.5 h-1.5 rounded-full bg-pink-400" />
                    SECURITY PLATFORM
                  </span>

                  <h3
                    className="text-3xl md:text-4xl font-extrabold mb-4"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    <span className="gt-warm">CloudSentinel</span>
                  </h3>

                  <ul className="space-y-2 mb-6">
                    {[
                      'Multi-cloud security scanning',
                      '10 compliance frameworks',
                      'MITRE ATT&CK threat detection',
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-pink-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Mini Stats */}
                  <div className="flex gap-3 mb-6">
                    {[
                      { value: '183', label: 'Checks' },
                      { value: '10', label: 'Frameworks' },
                      { value: '9', label: 'Threats' },
                    ].map((s) => (
                      <div key={s.label} className="card-glass px-4 py-2.5 rounded-xl text-center flex-1">
                        <div className="stat-num text-lg gt-warm">{s.value}</div>
                        <div className="text-[10px] uppercase tracking-wider font-medium" style={{ color: 'var(--text-muted)' }}>{s.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Security Score Visualization */}
                  <div className="card-dark p-4 mb-6 flex items-center gap-4">
                    <div className="relative flex-shrink-0">
                      <ProgressRing value={87} size={70} stroke={5} color="#f472b6" delay={800} />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-lg font-extrabold text-pink-400">{securityScore}</span>
                      </div>
                    </div>
                    <div>
                      <div className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>Security Score</div>
                      <div className="text-[11px]" style={{ color: 'var(--text-muted)' }}>Scanning 3 cloud providers</div>
                      <div className="flex gap-1 mt-1.5">
                        {[...Array(10)].map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ scaleY: 0 }}
                            whileInView={{ scaleY: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 1 + i * 0.08 }}
                            className={`w-2 h-3 rounded-sm origin-bottom ${i < 8 ? 'bg-pink-400/80' : 'bg-zinc-700'}`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  <Link to="/products/cloudsentinel" className="btn-primary">
                    Explore CloudSentinel
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                  </Link>
                </div>
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* SECTION 2 — Compare Products */}
      {/* ================================================================ */}
      <section className="py-16 lg:py-24 relative overflow-hidden">
        <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2
                className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-5"
                style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}
              >
                Compare <span className="gt">Products</span>
              </h2>
              <p className="text-lg max-w-lg mx-auto" style={{ color: 'var(--text-secondary)' }}>
                Choose the right tool for your needs — or use both.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="card-dark overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/[0.06]">
                      <th className="text-left px-6 py-4 text-sm font-semibold" style={{ color: 'var(--text-muted)' }}>Feature</th>
                      <th className="text-center px-6 py-4">
                        <span className="text-sm font-bold gt-green">CloudLunar</span>
                      </th>
                      <th className="text-center px-6 py-4">
                        <span className="text-sm font-bold gt-warm">CloudSentinel</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonRows.map((row, i) => (
                      <tr key={row.feature} className={`border-b border-white/[0.03] ${i % 2 === 0 ? 'bg-white/[0.01]' : ''}`}>
                        <td className="px-6 py-4 text-sm font-medium" style={{ color: 'var(--text-primary)' }}>{row.feature}</td>
                        <td className="px-6 py-4 text-center"><CellValue value={row.lunar} /></td>
                        <td className="px-6 py-4 text-center"><CellValue value={row.sentinel} /></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ================================================================ */}
      {/* SECTION 3 — Product Roadmap */}
      {/* ================================================================ */}
      <section className="bg-alt py-16 lg:py-24 relative overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2
                className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-5"
                style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}
              >
                Product <span className="gt">Roadmap</span>
              </h2>
              <p className="text-lg max-w-lg mx-auto" style={{ color: 'var(--text-secondary)' }}>
                What&apos;s coming next for the CloudTrio product suite.
              </p>
            </div>
          </AnimatedSection>

          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <div className="tl-line" />
              <div className="space-y-8">
                {roadmap.map((item, i) => (
                  <AnimatedSection key={item.quarter} delay={i * 0.1}>
                    <div className="relative pl-12">
                      <div className={`tl-dot ${item.status === 'current' ? '!bg-violet-500 !border-violet-500 shadow-lg shadow-violet-500/30' : ''}`} />
                      <div className="card-dark p-6">
                        <span className={`pill text-xs mb-3 inline-block ${item.status === 'current' ? '' : 'opacity-50'}`}>{item.quarter}</span>
                        <h3 className="text-lg font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>{item.title}</h3>
                        <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>{item.desc}</p>
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* CTA */}
      {/* ================================================================ */}
      <section className="bg-cta py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2
              className="text-3xl md:text-4xl font-bold mb-6"
              style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}
            >
              Ready to <span className="gt">get started</span>?
            </h2>
            <p className="text-lg mb-10 max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              Try both products free for 14 days. No credit card required.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact" className="btn-primary">
                Start Free Trial
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
              </Link>
              <Link to="/pricing" className="btn-secondary">View Pricing</Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
