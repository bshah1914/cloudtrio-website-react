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
function ProgressRing({ value, size = 90, stroke = 7, color = '#f472b6', delay = 0 }) {
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

/* ====== BENTO CAPABILITIES ====== */
const capabilities = [
  {
    title: 'Cloud Security Scanning',
    desc: 'Deep-scan AWS, Azure, and GCP resources in minutes.',
    pill: 'Multi-Cloud',
    pillClass: 'pill pill-cyan',
    color: 'cyan',
    span: 'col-span-2',
    icon: (
      <svg className="w-7 h-7 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
  },
  {
    title: 'Security Audit & Posture',
    desc: 'Continuous posture management with auto-remediation.',
    pill: 'CSPM',
    pillClass: 'pill pill-pink',
    color: 'pink',
    span: 'col-span-1',
    icon: (
      <svg className="w-6 h-6 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: 'Compliance Monitoring',
    desc: 'Ten frameworks checked continuously.',
    pill: '10 Frameworks',
    pillClass: 'pill pill-green',
    color: 'emerald',
    span: 'col-span-1',
    icon: (
      <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: 'Threat Detection',
    desc: 'MITRE ATT&CK mapped threat intelligence.',
    pill: 'MITRE ATT&CK',
    pillClass: 'pill pill-orange',
    color: 'orange',
    span: 'col-span-1',
    icon: (
      <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
  },
  {
    title: 'AI Security Assistant',
    desc: 'Natural language security queries and fixes.',
    pill: 'AI-Powered',
    pillClass: 'pill',
    color: 'violet',
    span: 'col-span-1',
    icon: (
      <svg className="w-6 h-6 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Comprehensive Reporting',
    desc: 'PDF, Excel, and dashboard reports on demand.',
    pill: 'Reports',
    pillClass: 'pill pill-cyan',
    color: 'cyan',
    span: 'col-span-2',
    icon: (
      <svg className="w-7 h-7 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
]

const gradientMap = {
  violet: 'from-violet-500/[0.08] to-transparent',
  pink: 'from-pink-500/[0.08] to-transparent',
  cyan: 'from-cyan-500/[0.08] to-transparent',
  emerald: 'from-emerald-500/[0.08] to-transparent',
  orange: 'from-orange-500/[0.08] to-transparent',
}

/* ====== KEY FEATURES ====== */
const keyFeatures = [
  { icon: '☁️', name: 'Multi-Cloud' },
  { icon: '⚡', name: 'Real-Time Threats' },
  { icon: '📋', name: '10 Frameworks' },
  { icon: '🤖', name: 'AI Security' },
  { icon: '🏗️', name: 'Well-Architected' },
  { icon: '🔗', name: 'Attack Paths' },
  { icon: '🔑', name: 'Secret Detection' },
  { icon: '🔒', name: 'Encryption Audit' },
  { icon: '👥', name: 'RBAC' },
  { icon: '⌨️', name: 'Command Palette' },
  { icon: '🎨', name: 'Themes' },
  { icon: '🔔', name: 'Notifications' },
]

/* ====== STATS ====== */
const stats = [
  { value: '10', label: 'Compliance Frameworks', gradient: 'gt' },
  { value: '183', label: 'Security Checks', gradient: 'gt-green' },
  { value: '9', label: 'Threat Categories', gradient: 'gt-warm' },
  { value: '15', label: 'Doc Pages', gradient: 'gt-orange' },
  { value: '30+', label: 'API Endpoints', gradient: 'gt' },
  { value: '3', label: 'Cloud Providers', gradient: 'gt-green' },
]

/* ====== TECH STACK ====== */
const techStack = [
  { name: 'React 19', cls: 'pill pill-cyan' },
  { name: 'Tailwind CSS', cls: 'pill pill-cyan' },
  { name: 'Recharts', cls: 'pill pill-green' },
  { name: 'Framer Motion', cls: 'pill pill-pink' },
  { name: 'Python FastAPI', cls: 'pill pill-green' },
  { name: 'Boto3', cls: 'pill pill-orange' },
  { name: 'Azure SDK', cls: 'pill pill-cyan' },
  { name: 'GCP SDK', cls: 'pill pill-orange' },
  { name: 'JWT', cls: 'pill pill-pink' },
  { name: 'ReportLab', cls: 'pill' },
  { name: 'OpenPyXL', cls: 'pill pill-green' },
]

/* ====== COMPLIANCE FRAMEWORKS ====== */
const frameworks = [
  { name: 'CIS Benchmarks', checks: '45 checks' },
  { name: 'NIST 800-53', checks: '32 checks' },
  { name: 'SOC 2', checks: '28 checks' },
  { name: 'ISO 27001', checks: '22 checks' },
  { name: 'PCI-DSS', checks: '18 checks' },
  { name: 'HIPAA', checks: '15 checks' },
  { name: 'GDPR', checks: '10 checks' },
  { name: 'AWS Well-Architected', checks: '8 checks' },
  { name: 'MITRE ATT&CK', checks: '3 checks' },
  { name: 'Custom', checks: '2 checks' },
]

export default function CloudSentinelPage() {
  const securityScore = useCounter(87, 2200, 800)

  return (
    <div>
      {/* ================================================================ */}
      {/* HERO — Split Layout */}
      {/* ================================================================ */}
      <section className="bg-hero relative min-h-screen overflow-hidden">
        <div className="grid-overlay absolute inset-0 pointer-events-none" />
        <div className="orb w-[600px] h-[600px] bg-pink-600 -top-60 -left-40" />
        <div className="orb w-[400px] h-[400px] bg-rose-500 top-1/4 -right-40" style={{ animationDelay: '5s' }} />
        <div className="orb w-[300px] h-[300px] bg-orange-500 bottom-0 left-1/3" style={{ animationDelay: '8s' }} />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-28 lg:pt-36 pb-16">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-8 items-center min-h-[70vh]">

            {/* LEFT — 2/5 */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="pill pill-pink mb-8"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-pink-400" />
                </span>
                SECURITY PLATFORM
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold leading-[0.95] tracking-tight mb-6"
                style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}
              >
                Secure Your
                <br />
                Cloud.
                <br />
                <span className="gt-warm">Detect Threats.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.25 }}
                className="text-lg leading-relaxed mb-10 max-w-md"
                style={{ color: 'var(--text-secondary)' }}
              >
                Enterprise multi-cloud security scanning, compliance monitoring, and threat detection in one platform.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                className="flex flex-wrap gap-4"
              >
                <Link to="/contact" className="btn-primary">
                  Start Free
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                </Link>
                <Link to="/contact" className="btn-secondary">View Demo</Link>
              </motion.div>
            </div>

            {/* RIGHT — 3/5 — Floating Security Cards */}
            <div className="lg:col-span-3 hidden lg:block">
              <div className="relative w-full" style={{ minHeight: 520 }}>

                {/* Security Score Card */}
                <FloatingElement y={8} duration={6} className="absolute top-0 left-0 w-[55%] z-10">
                  <motion.div
                    initial={{ opacity: 0, x: 60, y: 20 }} animate={{ opacity: 1, x: 0, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="card-dark p-5 relative group"
                  >
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-pink-500/[0.06] to-transparent pointer-events-none" />
                    <div className="relative z-10">
                      <span className="text-[11px] font-semibold uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>Security Score</span>
                      <div className="flex items-center gap-5 mt-3">
                        <div className="relative">
                          <ProgressRing value={87} size={100} stroke={8} color="#f472b6" delay={800} />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-2xl font-extrabold text-pink-400">{securityScore}</span>
                          </div>
                        </div>
                        <div>
                          <div className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>Good</div>
                          <div className="text-[11px]" style={{ color: 'var(--text-muted)' }}>2 critical issues remaining</div>
                          <div className="flex gap-1 mt-2">
                            {[...Array(10)].map((_, i) => (
                              <div key={i} className={`w-2 h-2 rounded-full ${i < 8 ? 'bg-pink-400' : 'bg-zinc-700'}`} />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </FloatingElement>

                {/* Threat Detection Card */}
                <FloatingElement y={12} duration={7} className="absolute top-4 right-0 w-[42%] z-10">
                  <motion.div
                    initial={{ opacity: 0, x: 80 }} animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="card-dark p-5 relative"
                  >
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-500/[0.06] to-transparent pointer-events-none" />
                    <div className="relative z-10">
                      <span className="text-[11px] font-semibold uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>Threat Detection</span>
                      <div className="text-xl font-extrabold text-orange-400 mt-2">9 Categories</div>
                      <div className="flex items-center gap-2 mt-3">
                        <span className="w-2 h-2 rounded-full bg-red-500" />
                        <span className="text-[11px]" style={{ color: 'var(--text-muted)' }}>3 High</span>
                        <span className="w-2 h-2 rounded-full bg-amber-500" />
                        <span className="text-[11px]" style={{ color: 'var(--text-muted)' }}>4 Medium</span>
                        <span className="w-2 h-2 rounded-full bg-emerald-500" />
                        <span className="text-[11px]" style={{ color: 'var(--text-muted)' }}>2 Low</span>
                      </div>
                    </div>
                  </motion.div>
                </FloatingElement>

                {/* Compliance Card */}
                <FloatingElement y={6} duration={5} className="absolute bottom-[120px] left-0 w-[48%] z-10">
                  <motion.div
                    initial={{ opacity: 0, x: 40, y: 40 }} animate={{ opacity: 1, x: 0, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.8 }}
                    className="card-dark p-4 relative"
                  >
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-500/[0.06] to-transparent pointer-events-none" />
                    <div className="relative z-10">
                      <span className="text-[11px] font-semibold uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>Compliance</span>
                      <div className="text-lg font-extrabold text-emerald-400 mt-1">183 Checks</div>
                      <div className="text-[11px] mt-1" style={{ color: 'var(--text-muted)' }}>Across 10 frameworks</div>
                      <div className="flex gap-1 mt-2">
                        {['CIS', 'SOC2', 'NIST', 'HIPAA', 'PCI'].map((f) => (
                          <span key={f} className="text-[9px] px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 font-medium">{f}</span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </FloatingElement>

                {/* Critical Alert Card */}
                <FloatingElement y={14} duration={4} className="absolute bottom-[50px] right-[5%] z-20">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 1.2 }}
                    className="card-dark p-3 px-4 relative"
                  >
                    <div className="absolute inset-0 rounded-2xl bg-red-500/[0.06] pointer-events-none" />
                    <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-red-500/20 to-orange-500/20 blur-sm pointer-events-none" />
                    <div className="relative z-10 flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-lg bg-red-500/20 flex items-center justify-center">
                        <motion.div
                          animate={{ scale: [1, 1.3, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          <svg className="w-3.5 h-3.5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                          </svg>
                        </motion.div>
                      </div>
                      <div>
                        <div className="text-[11px] font-semibold text-red-400">2 Critical Findings</div>
                        <div className="text-[10px]" style={{ color: 'var(--text-muted)' }}>Immediate action required</div>
                      </div>
                    </div>
                  </motion.div>
                </FloatingElement>

              </div>
            </div>

            {/* Mobile fallback */}
            <div className="lg:hidden">
              <motion.div
                initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="grid grid-cols-2 gap-3"
              >
                <div className="card-dark p-4">
                  <div className="text-[10px] uppercase tracking-wider mb-1" style={{ color: 'var(--text-muted)' }}>Security Score</div>
                  <div className="text-2xl font-extrabold text-pink-400">{securityScore}/100</div>
                </div>
                <div className="card-dark p-4">
                  <div className="text-[10px] uppercase tracking-wider mb-1" style={{ color: 'var(--text-muted)' }}>Checks</div>
                  <div className="text-2xl font-extrabold text-emerald-400">183</div>
                </div>
              </motion.div>
            </div>
          </div>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9, duration: 0.6 }}>
            <div className="glow-line mt-20" />
          </motion.div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* SECTION 1 — What It Does (Bento Grid) */}
      {/* ================================================================ */}
      <section className="bg-alt py-28 lg:py-36 relative overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-20">
              <span className="pill pill-pink mb-5 inline-flex">
                <span className="w-1.5 h-1.5 rounded-full bg-pink-400" />
                Capabilities
              </span>
              <h2
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-5"
                style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}
              >
                What It <span className="gt-warm">Does</span>
              </h2>
              <p className="text-lg max-w-lg mx-auto" style={{ color: 'var(--text-secondary)' }}>
                Six core modules. One unified security platform.
              </p>
            </div>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {capabilities.map((c) => (
              <StaggerItem key={c.title} className={c.span}>
                <motion.div
                  whileHover={{ y: -4, scale: 1.01 }}
                  transition={{ duration: 0.25 }}
                  className="card-dark p-6 h-full flex flex-col gap-3 relative group overflow-hidden"
                >
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${gradientMap[c.color]} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`ibox bg-gradient-to-br ${gradientMap[c.color]} border border-white/[0.06]`}>
                        {c.icon}
                      </div>
                      <span className={c.pillClass}>{c.pill}</span>
                    </div>
                    <h3 className="text-lg font-bold mb-1" style={{ color: 'var(--text-primary)' }}>{c.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>{c.desc}</p>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ================================================================ */}
      {/* SECTION 2 — Key Features (4x3 Grid) */}
      {/* ================================================================ */}
      <section className="py-28 lg:py-36 relative overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2
                className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-5"
                style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}
              >
                Key <span className="gt-warm">Features</span>
              </h2>
            </div>
          </AnimatedSection>

          <StaggerContainer className="feature-grid grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4">
            {keyFeatures.map((f) => (
              <StaggerItem key={f.name}>
                <motion.div
                  whileHover={{ scale: 1.04, backgroundColor: 'rgba(255,255,255,0.03)' }}
                  className="flex flex-col items-center justify-center py-8 px-4 gap-3 border border-white/[0.04] transition-colors"
                >
                  <span className="text-2xl">{f.icon}</span>
                  <span className="text-sm font-semibold text-center" style={{ color: 'var(--text-primary)' }}>{f.name}</span>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ================================================================ */}
      {/* SECTION 3 — Numbers That Matter */}
      {/* ================================================================ */}
      <section className="bg-alt py-28 lg:py-36 relative overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2
                className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-5"
                style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}
              >
                Numbers That <span className="gt-warm">Matter</span>
              </h2>
            </div>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {stats.map((s) => (
              <StaggerItem key={s.label}>
                <motion.div
                  whileHover={{ y: -4, boxShadow: '0 0 40px rgba(244, 114, 182, 0.08)' }}
                  transition={{ duration: 0.25 }}
                  className="card-dark p-6 text-center group"
                >
                  <div className={`stat-num text-3xl ${s.gradient}`}>{s.value}</div>
                  <div className="text-[11px] mt-2 uppercase tracking-wider font-medium" style={{ color: 'var(--text-muted)' }}>{s.label}</div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ================================================================ */}
      {/* SECTION 4 — Tech Stack */}
      {/* ================================================================ */}
      <section className="py-28 lg:py-36 relative overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2
                className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-5"
                style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}
              >
                Tech <span className="gt">Stack</span>
              </h2>
              <p className="text-lg max-w-md mx-auto" style={{ color: 'var(--text-secondary)' }}>
                Built with modern, battle-tested technologies.
              </p>
            </div>
          </AnimatedSection>

          <div className="flex flex-wrap items-center justify-center gap-3">
            {techStack.map((t, i) => (
              <motion.span
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                whileHover={{ scale: 1.1 }}
                className={`${t.cls} text-sm px-5 py-2.5 cursor-default`}
              >
                {t.name}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* SECTION 5 — Compliance Frameworks */}
      {/* ================================================================ */}
      <section className="bg-alt py-28 lg:py-36 relative overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2
                className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-5"
                style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}
              >
                Compliance <span className="gt-warm">Frameworks</span>
              </h2>
              <p className="text-lg max-w-lg mx-auto" style={{ color: 'var(--text-secondary)' }}>
                Ten industry-standard frameworks. One scan.
              </p>
            </div>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {frameworks.map((f) => (
              <StaggerItem key={f.name}>
                <motion.div
                  whileHover={{ y: -4, scale: 1.02 }}
                  transition={{ duration: 0.25 }}
                  className="card-dark p-5 text-center group"
                >
                  <div className="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-xl bg-pink-500/10">
                    <svg className="w-5 h-5 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-sm font-bold mb-2" style={{ color: 'var(--text-primary)' }}>{f.name}</h3>
                  <span className="pill pill-pink text-[10px]">{f.checks}</span>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ================================================================ */}
      {/* CTA */}
      {/* ================================================================ */}
      <section className="bg-cta py-24 lg:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2
              className="text-3xl md:text-4xl font-bold mb-6"
              style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}
            >
              Secure your cloud <span className="gt-warm">today</span>
            </h2>
            <p className="text-lg mb-10 max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              Start scanning in minutes. No credit card required. Full access for 14 days.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact" className="btn-primary">
                Get Started Free
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
