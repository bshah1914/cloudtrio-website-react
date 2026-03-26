import { motion } from 'framer-motion'
import AnimatedSection, { StaggerContainer, StaggerItem } from './AnimatedSection'

const terminalLines = [
  { text: '$ cloudlunar scan --account prod-aws', color: 'text-white', prefix: '', delay: 0 },
  { text: 'Auto-discovering 18+ AWS services...', color: 'text-violet-400', prefix: '\u2713 ', delay: 0.4 },
  { text: 'Collecting P95 CloudWatch metrics...', color: 'text-violet-400', prefix: '\u2713 ', delay: 0.8 },
  { text: 'Analyzing 90-day cost history...', color: 'text-cyan-400', prefix: '\u2713 ', delay: 1.2 },
  { text: 'Running 25+ optimization rules...', color: 'text-cyan-400', prefix: '\u2713 ', delay: 1.6 },
  { text: '', color: '', prefix: '', delay: 2.0 },
  { text: 'Found 47 recommendations, $3,847/mo savings', color: 'text-emerald-400', prefix: '', delay: 2.2 },
]

const capabilities = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    title: 'Auto-Discovery',
    description: 'Scans 18+ AWS services automatically -- EC2, RDS, S3, Lambda, DynamoDB, ElastiCache, Redshift, and more.',
    gradient: 'from-violet-500 to-purple-600',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: 'P95 Metrics',
    description: '14 days of CloudWatch data at P95 percentile accuracy. Decisions backed by real utilization data.',
    gradient: 'from-cyan-400 to-blue-500',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: '25+ Rules',
    description: 'Idle detection, rightsizing, Reserved Instance gaps, S3 lifecycle policies, EBS gp2 to gp3 migration.',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Compliance',
    description: 'CIS benchmarks and SOC2 monitoring built-in. STS AssumeRole with read-only access -- zero standing privileges.',
    gradient: 'from-emerald-400 to-teal-500',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'One-Click Actions',
    description: 'Accept, reject, defer, or implement each recommendation with a single click. Full audit trail.',
    gradient: 'from-amber-400 to-orange-500',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
      </svg>
    ),
    title: 'Cost Trends',
    description: '90-day cost history with anomaly detection, budget threshold alerts, and spend forecasting per service.',
    gradient: 'from-blue-500 to-indigo-600',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5.636 18.364a9 9 0 010-12.728m12.728 0a9 9 0 010 12.728m-9.9-2.829a5 5 0 010-7.07m7.072 0a5 5 0 010 7.07M13 12a1 1 0 11-2 0 1 1 0 012 0z" />
      </svg>
    ),
    title: 'Agent Monitoring',
    description: '$0 cost lightweight agent. Live CPU, memory, disk, and network metrics every 60 seconds.',
    gradient: 'from-rose-500 to-pink-600',
  },
]

export default function CloudLunar() {
  return (
    <section id="cloudlunar" className="bg-base py-16 lg:py-20 relative overflow-hidden">
      {/* Background effects */}
      <div className="orb w-[600px] h-[600px] bg-purple-600 -top-40 -right-40" />
      <div className="orb w-[400px] h-[400px] bg-cyan-500 bottom-20 -left-32" />
      <div className="grid-overlay absolute inset-0 pointer-events-none opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-20">
          <span className="pill mb-5 inline-flex">
            <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
            CloudLunar Engine v4.0
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>
            Intelligent AWS <span className="gt">Cost Optimization</span>
          </h2>
          <p className="text-zinc-400 text-lg leading-relaxed">
            Enterprise AWS cost optimization platform. Automatically discover waste, rightsizing opportunities,
            and compliance gaps across your entire AWS infrastructure.
          </p>
        </AnimatedSection>

        {/* Two-column: text + terminal */}
        <AnimatedSection delay={0.15} className="mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left text */}
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold mb-5" style={{ color: 'var(--text-primary)' }}>
                Find savings in <span className="gt-warm">minutes</span>, not weeks
              </h3>
              <p className="text-zinc-400 mb-8 leading-relaxed">
                CloudLunar connects to your AWS account via secure STS AssumeRole, scans every resource across
                18+ services, and delivers prioritized cost-saving recommendations backed by real P95 utilization data.
              </p>
              <div className="space-y-4">
                {[
                  { stat: '30%+', label: 'Average cost reduction for new accounts', color: 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' },
                  { stat: '< 5 min', label: 'Time to first scan results', color: 'bg-violet-500/10 text-violet-400 border border-violet-500/20' },
                  { stat: '$0', label: 'Agent monitoring -- completely free tier', color: 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20' },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-4">
                    <span className={`text-lg font-bold min-w-[90px] px-3 py-1.5 rounded-lg text-center ${item.color}`}>{item.stat}</span>
                    <span className="text-zinc-400 text-sm">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right terminal - DARK */}
            <div className="code-block overflow-hidden shadow-2xl shadow-purple-500/10">
              <div className="p-5 font-mono text-sm">
                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-white/10">
                  <span className="w-3 h-3 rounded-full bg-red-500/70" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
                  <span className="w-3 h-3 rounded-full bg-green-500/70" />
                  <span className="ml-3 text-zinc-600 text-xs">cloudlunar-cli</span>
                </div>
                <div className="space-y-1.5 text-xs leading-relaxed">
                  {terminalLines.map((line, i) => (
                    <motion.p
                      key={i}
                      initial={{ opacity: 0, x: -8 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: line.delay, duration: 0.3 }}
                      className={line.color}
                    >
                      {line.prefix && <span className="text-emerald-400">{line.prefix}</span>}
                      {line.text}
                    </motion.p>
                  ))}
                </div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 2.6 }}
                  className="mt-4 pt-3 border-t border-white/10"
                >
                  <div className="flex items-center gap-2 text-xs">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-zinc-500">Scan complete -- report saved to ./cloudlunar-report.json</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Separator */}
        <div className="glow-line mb-20" />

        {/* Capabilities grid */}
        <AnimatedSection className="text-center mb-14">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            <span className="gt">7</span> Core Capabilities
          </h3>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Everything you need to take control of your AWS spend, from discovery to action.
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((cap, i) => (
            <StaggerItem key={cap.title} className={i === 6 ? 'md:col-span-2 lg:col-span-1' : ''}>
              <motion.div
                whileHover={{ y: -4, scale: 1.01 }}
                transition={{ duration: 0.25 }}
                className="card-dark p-6 h-full cursor-default"
              >
                <div className={`ibox-lg bg-gradient-to-br ${cap.gradient} text-white mb-4`}>
                  {cap.icon}
                </div>
                <h4 className="text-white font-semibold text-lg mb-2">{cap.title}</h4>
                <p className="text-zinc-400 text-sm leading-relaxed">{cap.description}</p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
