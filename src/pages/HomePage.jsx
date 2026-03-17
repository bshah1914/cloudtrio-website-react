import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import AnimatedSection, { StaggerContainer, StaggerItem, FloatingElement } from '../components/AnimatedSection'
import Hero from '../components/Hero'
import Stats from '../components/Stats'
import PlatformOverview from '../components/PlatformOverview'
import DashboardPreview from '../components/DashboardPreview'
import Testimonials from '../components/Testimonials'
import CTA from '../components/CTA'

/* ====== BENTO SERVICES DATA ====== */
const bentoServices = [
  {
    title: 'Cloud Infrastructure',
    desc: 'Multi-cloud architecture across AWS, Azure, and GCP.',
    to: '/cloud-services',
    pill: 'Multi-Cloud',
    pillClass: 'pill',
    color: 'violet',
    icon: (
      <svg className="w-7 h-7 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
    span: 'col-span-2 row-span-1',
    large: true,
  },
  {
    title: 'Cloud Security',
    desc: 'Zero-trust monitoring and compliance enforcement.',
    to: '/cloud-security',
    pill: 'Zero Trust',
    pillClass: 'pill pill-pink',
    color: 'pink',
    icon: (
      <svg className="w-6 h-6 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    span: 'col-span-1 row-span-1',
  },
  {
    title: 'DevOps Automation',
    desc: 'CI/CD pipelines, IaC, and GitOps workflows.',
    to: '/devops',
    pill: 'Automation',
    pillClass: 'pill pill-cyan',
    color: 'cyan',
    icon: (
      <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    span: 'col-span-1 row-span-1',
  },
  {
    title: 'App Development',
    desc: 'Full-stack web and mobile with cloud-native deploy.',
    to: '/app-development',
    pill: 'Full-Stack',
    pillClass: 'pill pill-green',
    color: 'emerald',
    icon: (
      <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    span: 'col-span-1 row-span-1',
  },
  {
    title: 'AI / ML Solutions',
    desc: 'Enterprise ML, NLP, and intelligent automation.',
    to: '/ai-ml',
    pill: 'Intelligence',
    pillClass: 'pill pill-orange',
    color: 'orange',
    icon: (
      <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    span: 'col-span-1 row-span-1',
  },
  {
    title: 'Products & SaaS',
    desc: 'CloudLunar optimizer, security scanner, and compliance dashboard.',
    to: '/products',
    pill: 'SaaS',
    pillClass: 'pill',
    color: 'violet',
    icon: (
      <svg className="w-6 h-6 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
    span: 'col-span-2 row-span-1',
    large: true,
  },
]

/* ====== CloudLunar Terminal Lines ====== */
const cliLines = [
  { text: '$ cloudlunar scan --profile production', style: { color: 'var(--text-muted)' } },
  { text: '\u2713 Connecting to AWS...', style: { color: '#10b981' } },
  { text: '\u2713 Scanning 18 services...', style: { color: '#10b981' } },
  { text: 'INFO  Discovered 247 resources', style: { color: '#06b6d4' } },
  { text: 'INFO  Running 25 optimization rules', style: { color: '#06b6d4' } },
  { text: '', style: {} },
  { text: '\u2713 Found $47,200/mo in savings', style: { color: '#a78bfa', fontWeight: 600 } },
  { text: '  \u2022 EC2 Right-sizing: $18,400', style: { color: '#10b981' } },
  { text: '  \u2022 Reserved Instances: $15,800', style: { color: '#10b981' } },
  { text: '  \u2022 Unused Resources: $8,200', style: { color: '#10b981' } },
]

/* ====== Partners ====== */
const partners = [
  { name: 'Amazon Web Services', short: 'AWS' },
  { name: 'Microsoft Azure', short: 'Azure' },
  { name: 'Google Cloud', short: 'GCP' },
  { name: 'Kubernetes', short: 'K8s' },
  { name: 'Terraform', short: 'Terraform' },
  { name: 'Docker', short: 'Docker' },
  { name: 'Datadog', short: 'Datadog' },
  { name: 'HashiCorp', short: 'HashiCorp' },
]

/* ====== Gradient map for bento cards ====== */
const gradientMap = {
  violet: 'from-violet-500/[0.08] to-transparent',
  pink: 'from-pink-500/[0.08] to-transparent',
  cyan: 'from-cyan-500/[0.08] to-transparent',
  emerald: 'from-emerald-500/[0.08] to-transparent',
  orange: 'from-orange-500/[0.08] to-transparent',
}

export default function HomePage() {
  return (
    <div>
      <Hero />
      <Stats />

      {/* ================================================================ */}
      {/* ====== BENTO SERVICES GRID ====== */}
      {/* ================================================================ */}
      <section className="bg-alt py-16 lg:py-20 relative overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-20">
              <span className="pill-cyan mb-5 inline-flex">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                What We Do
              </span>
              <h2
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-5"
                style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}
              >
                Our <span className="gt">Services</span>
              </h2>
              <p className="text-lg max-w-lg mx-auto" style={{ color: 'var(--text-secondary)' }}>
                End-to-end cloud solutions. Less overhead, more velocity.
              </p>
            </div>
          </AnimatedSection>

          {/* Asymmetric Bento Grid */}
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[200px]">
            {bentoServices.map((s) => (
              <StaggerItem key={s.title} className={`${s.span}`}>
                <motion.div
                  whileHover={{ y: -4, scale: 1.01 }}
                  transition={{ duration: 0.25 }}
                  className="card-dark p-6 h-full flex flex-col justify-between relative group overflow-hidden"
                >
                  {/* Background gradient accent */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${gradientMap[s.color]} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

                  {/* Large card visual accent */}
                  {s.large && (
                    <div className="absolute right-0 top-0 w-1/2 h-full pointer-events-none overflow-hidden rounded-2xl">
                      <div className={`absolute inset-0 bg-gradient-to-l ${gradientMap[s.color]} opacity-40`} />
                      <svg className="absolute right-4 top-1/2 -translate-y-1/2 opacity-[0.04] w-40 h-40" viewBox="0 0 100 100" fill="currentColor">
                        <circle cx="50" cy="50" r="45" />
                      </svg>
                    </div>
                  )}

                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`ibox bg-gradient-to-br ${gradientMap[s.color]} border border-white/[0.06]`}>
                        {s.icon}
                      </div>
                      <span className={s.pillClass}>{s.pill}</span>
                    </div>
                    <h3 className="text-lg font-bold mb-1" style={{ color: 'var(--text-primary)' }}>{s.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>{s.desc}</p>
                  </div>

                  <div className="relative z-10">
                    <Link
                      to={s.to}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-violet-400 hover:text-violet-300 transition-colors group/link"
                    >
                      Learn more
                      <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <PlatformOverview />

      {/* ================================================================ */}
      {/* ====== DASHBOARD PREVIEW ====== */}
      {/* ================================================================ */}
      <DashboardPreview />

      {/* ================================================================ */}
      {/* ====== CLOUDLUNAR TEASER ====== */}
      {/* ================================================================ */}
      <section className="bg-alt py-16 lg:py-20 relative overflow-hidden">
        <div className="orb w-[400px] h-[400px] bg-emerald-600 bottom-0 -left-40" style={{ animationDelay: '3s' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Left: Text — SHORT */}
            <AnimatedSection>
              <div>
                <span className="pill pill-green mb-6 inline-flex">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                  </span>
                  Flagship Product
                </span>

                <h2
                  className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-5"
                  style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}
                >
                  Meet <span className="gt-green">CloudLunar</span>
                </h2>

                <p className="text-lg leading-relaxed mb-8 max-w-md" style={{ color: 'var(--text-secondary)' }}>
                  AI-powered AWS cost optimization. Auto-discovers, analyzes, and saves you 40% on average.
                </p>

                {/* Stat pills */}
                <div className="flex flex-wrap gap-3 mb-8">
                  {[
                    { value: '18+', label: 'Services' },
                    { value: '40%', label: 'Avg Savings' },
                    { value: '25+', label: 'Smart Rules' },
                  ].map((s) => (
                    <div key={s.label} className="card-glass px-5 py-3 rounded-xl text-center">
                      <div className="stat-num text-xl gt-green">{s.value}</div>
                      <div className="text-[10px] uppercase tracking-wider font-medium" style={{ color: 'var(--text-muted)' }}>{s.label}</div>
                    </div>
                  ))}
                </div>

                <Link to="/products" className="btn-primary">
                  Explore CloudLunar
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </AnimatedSection>

            {/* Right: Animated Terminal */}
            <AnimatedSection delay={0.15}>
              <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.3 }}>
                <div className="code-block overflow-hidden relative">
                  {/* Animated scan line */}
                  <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-[14px]">
                    <motion.div
                      className="w-full h-[2px] bg-gradient-to-r from-transparent via-emerald-400/30 to-transparent"
                      animate={{ y: [0, 400, 0] }}
                      transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
                    />
                  </div>

                  {/* Chrome */}
                  <div className="flex items-center gap-3 px-5 py-3.5 border-b border-white/[0.06]">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500/60" />
                      <div className="w-3 h-3 rounded-full bg-amber-500/60" />
                      <div className="w-3 h-3 rounded-full bg-emerald-500/60" />
                    </div>
                    <span className="text-xs font-mono" style={{ color: 'var(--text-muted)' }}>cloudlunar-cli v3.2.1</span>
                  </div>

                  {/* Terminal lines with typing effect */}
                  <div className="p-5 font-mono text-[13px] leading-[1.9] relative z-10 min-h-[280px]">
                    {cliLines.map((line, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: 8 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + i * 0.18, duration: 0.35 }}
                        style={line.style}
                      >
                        {line.text || '\u00A0'}
                      </motion.div>
                    ))}
                    <motion.span
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: [0, 1, 0] }}
                      viewport={{ once: true }}
                      transition={{ delay: 2.5, duration: 1, repeat: Infinity }}
                      className="inline-block w-1.5 h-3.5 bg-emerald-400/80 mt-2"
                    />
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <Testimonials />

      {/* ================================================================ */}
      {/* ====== PARTNER LOGOS ====== */}
      {/* ================================================================ */}
      <section className="bg-hero py-20 lg:py-28 relative overflow-hidden">
        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-14">
              <h2
                className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-3"
                style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}
              >
                Technology <span className="gt">Partners</span>
              </h2>
              <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                Integrates with the tools your team already uses.
              </p>
            </div>
          </AnimatedSection>

          <div className="flex flex-wrap items-center justify-center gap-4">
            {partners.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.4 }}
                whileHover={{ scale: 1.06, borderColor: 'rgba(124, 58, 237, 0.3)' }}
                className="card-glass px-7 py-4 rounded-2xl flex flex-col items-center gap-1.5 cursor-default min-w-[120px] group"
              >
                <div className="text-base font-bold group-hover:text-indigo-500 transition-colors duration-300" style={{ color: 'var(--text-muted)' }}>
                  {p.short}
                </div>
                <div className="text-[10px] group-hover:text-indigo-400 transition-colors duration-300" style={{ color: 'var(--text-muted)' }}>
                  {p.name}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="glow-line mt-16 max-w-sm mx-auto" />
        </div>
      </section>

      <CTA />
    </div>
  )
}
