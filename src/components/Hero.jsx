import { useState, useEffect, useRef } from 'react'
import { motion, useMotionValue, useTransform, useScroll } from 'framer-motion'
import { Link } from 'react-router-dom'
import AnimatedSection, { StaggerContainer, StaggerItem, FloatingElement } from './AnimatedSection'

/* ---- Animated Counter Hook ---- */
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

/* ---- Circular Progress Ring ---- */
function ProgressRing({ value, size = 80, stroke = 6, color = '#06b6d4', delay = 0 }) {
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

/* ---- Mini Sparkline ---- */
function Sparkline() {
  return (
    <svg viewBox="0 0 120 32" className="w-full h-8 mt-2">
      <defs>
        <linearGradient id="spark-fill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#10b981" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
        </linearGradient>
      </defs>
      <motion.path
        d="M0,28 L15,24 L30,26 L45,18 L60,20 L75,12 L90,14 L105,6 L120,4"
        fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
        transition={{ duration: 2, delay: 1, ease: 'easeOut' }}
      />
      <motion.path
        d="M0,28 L15,24 L30,26 L45,18 L60,20 L75,12 L90,14 L105,6 L120,4 V32 H0 Z"
        fill="url(#spark-fill)"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
      />
    </svg>
  )
}

/* ---- Typing Terminal Lines ---- */
const termLines = [
  { text: '$ cloudlunar scan --prod', color: 'var(--text-muted)' },
  { text: '\u2713 Scanning 18 services...', color: '#10b981' },
  { text: '  Found $47,200/mo savings', color: '#a78bfa' },
]

export default function Hero() {
  const savings = useCounter(47200, 2200, 800)
  const compliance = useCounter(97, 2000, 1200)

  const { scrollY } = useScroll()
  const heroOpacity = useTransform(scrollY, [0, 500], [1, 0])
  const heroY = useTransform(scrollY, [0, 500], [0, 80])

  return (
    <section className="bg-hero relative min-h-screen overflow-hidden">
      <div className="grid-overlay absolute inset-0 pointer-events-none" />
      <div className="orb w-[600px] h-[600px] bg-violet-600 -top-60 -left-40" />
      <div className="orb w-[400px] h-[400px] bg-cyan-500 top-1/4 -right-40" style={{ animationDelay: '5s' }} />
      <div className="orb w-[300px] h-[300px] bg-pink-500 bottom-0 left-1/3" style={{ animationDelay: '8s' }} />

      <motion.div
        style={{ opacity: heroOpacity, y: heroY }}
        className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-28 lg:pt-36 pb-16"
      >
        {/* ======== SPLIT: 40% text / 60% visual ======== */}
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-8 items-center min-h-[70vh]">

          {/* LEFT — 2/5 = 40% */}
          <div className="lg:col-span-2">
            {/* Pill badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="pill mb-8"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              Next-Gen Cloud Platform
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold leading-[0.95] tracking-tight mb-6"
              style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}
            >
              Intelligent{' '}
              <br className="hidden sm:block" />
              Cloud
              <br />
              <span className="gt">for the AI Era</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="text-lg leading-relaxed mb-10 max-w-md"
              style={{ color: 'var(--text-secondary)' }}
            >
              Cut cloud costs by 40%, automate ops, and ship faster — powered by CloudLunar AI.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="flex flex-wrap gap-4 mb-14"
            >
              <Link to="/contact" className="btn-primary">
                Start Free Trial
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
              </Link>
              <Link to="/contact" className="btn-secondary">Book a Demo</Link>
            </motion.div>

            {/* Trust row */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}>
              <p className="text-xs uppercase tracking-widest mb-3 font-medium" style={{ color: 'var(--text-muted)' }}>
                Trusted by 500+ teams
              </p>
              <div className="flex items-center gap-5">
                {['AWS', 'Azure', 'GCP', 'K8s', 'Terraform'].map((t, i) => (
                  <motion.span
                    key={t}
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 + i * 0.08 }}
                    className="text-sm font-bold tracking-wide"
                    style={{ color: 'var(--text-muted)' }}
                  >
                    {t}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* RIGHT — 3/5 = 60% — Animated Bento Visual */}
          <div className="lg:col-span-3 hidden lg:block">
            <div className="relative w-full" style={{ minHeight: 520 }}>

              {/* Card 1: Cost Savings — large, top-left */}
              <FloatingElement y={8} duration={6} className="absolute top-0 left-0 w-[58%] z-10">
                <motion.div
                  initial={{ opacity: 0, x: 60, y: 20 }} animate={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="card-dark p-5 relative group"
                >
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-500/[0.06] to-transparent pointer-events-none" />
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[11px] font-semibold uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>Monthly Savings</span>
                      <span className="text-[10px] text-emerald-400/70 font-medium">+38%</span>
                    </div>
                    <div className="text-3xl font-extrabold text-emerald-400 tracking-tight">
                      ${savings.toLocaleString()}
                    </div>
                    <Sparkline />
                  </div>
                </motion.div>
              </FloatingElement>

              {/* Card 2: Compliance Score — medium, top-right */}
              <FloatingElement y={12} duration={7} className="absolute top-4 right-0 w-[38%] z-10">
                <motion.div
                  initial={{ opacity: 0, x: 80 }} animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="card-dark p-5 relative"
                >
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/[0.06] to-transparent pointer-events-none" />
                  <div className="relative z-10 flex flex-col items-center">
                    <span className="text-[11px] font-semibold uppercase tracking-wider mb-3 self-start" style={{ color: 'var(--text-muted)' }}>Compliance</span>
                    <div className="relative">
                      <ProgressRing value={97} size={90} stroke={7} color="#06b6d4" delay={1000} />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-xl font-extrabold text-cyan-400">{compliance}%</span>
                      </div>
                    </div>
                    <span className="text-[10px] mt-2 font-medium" style={{ color: 'var(--text-muted)' }}>SOC2 + CIS + HIPAA</span>
                  </div>
                </motion.div>
              </FloatingElement>

              {/* Card 3: Active Clusters — small, bottom-left */}
              <FloatingElement y={6} duration={5} className="absolute bottom-[120px] left-0 w-[34%] z-10">
                <motion.div
                  initial={{ opacity: 0, x: 40, y: 40 }} animate={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.8 }}
                  className="card-dark p-4 relative"
                >
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-violet-500/[0.06] to-transparent pointer-events-none" />
                  <div className="relative z-10">
                    <span className="text-[11px] font-semibold uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>Active Clusters</span>
                    <div className="flex items-center gap-3 mt-2">
                      <span className="text-3xl font-extrabold text-violet-400">12</span>
                      <span className="flex items-center gap-1.5">
                        <span className="relative flex h-2.5 w-2.5">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
                        </span>
                        <span className="text-[11px] text-emerald-400 font-medium">All healthy</span>
                      </span>
                    </div>
                  </div>
                </motion.div>
              </FloatingElement>

              {/* Card 4: Terminal Snippet — medium, bottom-right */}
              <FloatingElement y={10} duration={8} className="absolute bottom-[60px] right-0 w-[62%] z-10">
                <motion.div
                  initial={{ opacity: 0, x: 60, y: 30 }} animate={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.0 }}
                  className="card-dark overflow-hidden relative"
                >
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-zinc-800/50 to-transparent pointer-events-none" />
                  <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-white/[0.04]">
                    <div className="w-2 h-2 rounded-full bg-red-500/50" />
                    <div className="w-2 h-2 rounded-full bg-amber-500/50" />
                    <div className="w-2 h-2 rounded-full bg-emerald-500/50" />
                    <span className="text-[10px] ml-2 font-mono" style={{ color: 'var(--text-muted)' }}>terminal</span>
                  </div>
                  <div className="p-4 font-mono text-[12px] leading-[1.9] relative z-10">
                    {termLines.map((line, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.4 + i * 0.5, duration: 0.4 }}
                        style={{ color: line.color }}
                      >
                        {line.text}
                      </motion.div>
                    ))}
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: [0, 1, 0] }}
                      transition={{ delay: 3, duration: 1, repeat: Infinity }}
                      className="inline-block w-1.5 h-3.5 bg-emerald-400/80 mt-1 ml-1"
                    />
                  </div>
                </motion.div>
              </FloatingElement>

              {/* Card 5: Notification accent — small floating */}
              <FloatingElement y={14} duration={4} className="absolute bottom-0 left-[28%] z-20">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.4 }}
                  className="card-dark p-3 px-4 relative"
                >
                  <div className="absolute inset-0 rounded-2xl bg-violet-500/[0.08] pointer-events-none" />
                  <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-violet-500/20 to-pink-500/20 blur-sm pointer-events-none" />
                  <div className="relative z-10 flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-violet-500/20 flex items-center justify-center">
                      <svg className="w-3.5 h-3.5 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                    </div>
                    <div>
                      <div className="text-[11px] font-semibold" style={{ color: 'var(--text-primary)' }}>3 new recommendations</div>
                      <div className="text-[10px]" style={{ color: 'var(--text-muted)' }}>Save $4,280/mo</div>
                    </div>
                  </div>
                </motion.div>
              </FloatingElement>

            </div>
          </div>

          {/* Mobile fallback — simple version */}
          <div className="lg:hidden">
            <motion.div
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="grid grid-cols-2 gap-3"
            >
              <div className="card-dark p-4">
                <div className="text-[10px] uppercase tracking-wider mb-1" style={{ color: 'var(--text-muted)' }}>Savings</div>
                <div className="text-2xl font-extrabold text-emerald-400">${savings.toLocaleString()}</div>
              </div>
              <div className="card-dark p-4">
                <div className="text-[10px] uppercase tracking-wider mb-1" style={{ color: 'var(--text-muted)' }}>Compliance</div>
                <div className="text-2xl font-extrabold text-cyan-400">{compliance}%</div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* ======== Bottom Stats Bar ======== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          <div className="glow-line mt-20 mb-12" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '500+', label: 'Clients Worldwide', color: 'gt' },
              { value: '$12M+', label: 'Customer Savings', color: 'gt-green' },
              { value: '99.9%', label: 'Platform Uptime', color: 'gt-warm' },
              { value: '18+', label: 'AWS Services', color: 'gt-orange' },
            ].map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0 + i * 0.1 }}
                className="text-center"
              >
                <div className={`stat-num ${s.color}`}>{s.value}</div>
                <div className="text-xs mt-2 font-medium uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>{s.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
