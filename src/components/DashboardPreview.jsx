import { motion } from 'framer-motion'
import AnimatedSection, { StaggerContainer, StaggerItem } from './AnimatedSection'

const stats = [
  { label: 'Total Cloud Spend', value: '$142,384', badge: '-12.4%', badgeColor: 'text-emerald-400 bg-emerald-400/10', sub: 'vs last month' },
  { label: 'Cost Savings', value: '$38,290', valueColor: 'text-emerald-400', badge: '+24.8%', badgeColor: 'text-emerald-400 bg-emerald-400/10', sub: 'optimized this quarter' },
  { label: 'Compliance Score', value: '97.2%', valueColor: 'text-cyan-400', badges: [{ text: 'SOC2' }, { text: 'CIS' }, { text: 'NIST' }] },
  { label: 'K8s Clusters', value: '12', valueSuffix: 'active', dot: true, sub: 'All clusters healthy' },
]

const resources = [
  { name: 'EC2 Instances', pct: 68, color: 'bg-violet-500' },
  { name: 'S3 Storage', pct: 45, color: 'bg-cyan-400' },
  { name: 'RDS Databases', pct: 82, color: 'bg-purple-500' },
  { name: 'Lambda', pct: 31, color: 'bg-emerald-500' },
  { name: 'CloudFront', pct: 57, color: 'bg-amber-500' },
]

const recommendations = [
  { title: 'Rightsize 14 EC2 instances', description: 'Switch m5.xlarge to m5.large in us-east-1 based on P95 CPU < 22%', savings: '$4,280/mo', confidence: 96, risk: 'Low', riskColor: 'text-emerald-400 bg-emerald-400/10' },
  { title: 'Delete 23 unattached EBS volumes', description: 'Orphaned gp3 volumes with no activity for 90+ days', savings: '$1,840/mo', confidence: 99, risk: 'None', riskColor: 'text-cyan-400 bg-cyan-400/10' },
  { title: 'Convert to Reserved Instances', description: '8 on-demand instances running 24/7 for 6+ months qualify for RI savings', savings: '$6,120/mo', confidence: 91, risk: 'Medium', riskColor: 'text-amber-400 bg-amber-400/10' },
]

export default function DashboardPreview() {
  return (
    <section id="product" className="bg-section-alt py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <span className="pill pill-green mb-5 inline-flex">Product Preview</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5" style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-display)' }}>
            Your cloud <span className="gt">control center</span>
          </h2>
          <p className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            Real-time dashboards that give your team complete visibility into cloud costs, performance, and compliance.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          {/* Dark dashboard container */}
          <div className="card-glow overflow-hidden">
            {/* Browser chrome */}
            <div className="flex items-center gap-2 px-6 py-4 border-b border-white/5">
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
              </div>
              <div className="flex-1 mx-8">
                <div className="bg-white/5 rounded-md px-4 py-1.5 max-w-sm mx-auto text-xs text-zinc-500 text-center border border-white/5">
                  app.cloudtrio.in/dashboard
                </div>
              </div>
            </div>

            <div className="p-6 lg:p-8">
              {/* Top nav */}
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/5">
                <div className="flex items-center gap-2.5">
                  <div className="w-6 h-6 rounded bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center">
                    <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-white">CloudTrio</span>
                  <span className="text-xs text-violet-400 bg-violet-400/10 px-2 py-0.5 rounded-full border border-violet-400/20">+ Lunar</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Live Sync
                </div>
              </div>

              {/* Stats row */}
              <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {stats.map((s) => (
                  <StaggerItem key={s.label}>
                    <div className="bg-white/[0.03] rounded-xl p-5 border border-white/[0.06]">
                      <div className="text-[11px] text-zinc-500 uppercase tracking-wider mb-3">{s.label}</div>
                      <div className={`text-2xl font-bold ${s.valueColor || 'text-white'}`}>
                        {s.value}
                        {s.valueSuffix && <span className="text-sm font-normal text-zinc-500 ml-1">{s.valueSuffix}</span>}
                      </div>
                      <div className="flex items-center gap-1.5 mt-2 flex-wrap">
                        {s.badges ? (
                          s.badges.map((b) => (
                            <span key={b.text} className="text-[10px] text-cyan-400 bg-cyan-400/10 px-1.5 py-0.5 rounded border border-cyan-400/20">{b.text}</span>
                          ))
                        ) : s.dot ? (
                          <>
                            <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
                            <span className="text-xs text-zinc-500">{s.sub}</span>
                          </>
                        ) : (
                          <>
                            <span className={`text-[10px] ${s.badgeColor} px-1.5 py-0.5 rounded`}>{s.badge}</span>
                            <span className="text-xs text-zinc-500">{s.sub}</span>
                          </>
                        )}
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>

              {/* Charts row */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
                {/* SVG chart */}
                <div className="lg:col-span-2 bg-white/[0.03] rounded-xl p-5 border border-white/[0.06]">
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-sm font-medium text-white">Cost Breakdown</span>
                    <div className="flex gap-4 text-xs text-zinc-500">
                      <span className="flex items-center gap-1.5"><span className="w-2 h-0.5 bg-violet-500 rounded" />Compute</span>
                      <span className="flex items-center gap-1.5"><span className="w-2 h-0.5 bg-cyan-400 rounded" />Storage</span>
                      <span className="flex items-center gap-1.5"><span className="w-2 h-0.5 bg-purple-400 rounded" />Network</span>
                    </div>
                  </div>
                  <svg viewBox="0 0 700 160" className="w-full">
                    <defs>
                      <linearGradient id="dg1" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="#7c3aed" stopOpacity="0" />
                      </linearGradient>
                      <linearGradient id="dg2" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.2" />
                        <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <line x1="0" y1="40" x2="700" y2="40" stroke="rgba(255,255,255,0.03)" />
                    <line x1="0" y1="80" x2="700" y2="80" stroke="rgba(255,255,255,0.03)" />
                    <line x1="0" y1="120" x2="700" y2="120" stroke="rgba(255,255,255,0.03)" />
                    <path d="M0,110 C100,95 200,80 300,60 S500,55 600,45 S680,35 700,30 V160 H0 Z" fill="url(#dg1)" />
                    <path d="M0,110 C100,95 200,80 300,60 S500,55 600,45 S680,35 700,30" fill="none" stroke="#7c3aed" strokeWidth="2" />
                    <path d="M0,130 C100,120 200,110 300,95 S500,88 600,78 S680,72 700,68 V160 H0 Z" fill="url(#dg2)" />
                    <path d="M0,130 C100,120 200,110 300,95 S500,88 600,78 S680,72 700,68" fill="none" stroke="#06b6d4" strokeWidth="1.5" />
                    <path d="M0,145 C100,140 200,135 300,128 S500,120 600,115 S680,110 700,108" fill="none" stroke="#a78bfa" strokeWidth="1.5" strokeDasharray="5,5" />
                    <circle cx="450" cy="50" r="3" fill="#7c3aed" stroke="#0a0a0f" strokeWidth="2" />
                    <circle cx="700" cy="30" r="3" fill="#7c3aed" stroke="#0a0a0f" strokeWidth="2" />
                  </svg>
                </div>

                {/* Resource bars */}
                <div className="bg-white/[0.03] rounded-xl p-5 border border-white/[0.06]">
                  <span className="text-sm font-medium text-white">Resource Allocation</span>
                  <div className="mt-5 space-y-4">
                    {resources.map((r, idx) => (
                      <div key={r.name}>
                        <div className="flex justify-between text-xs mb-1.5">
                          <span className="text-zinc-400">{r.name}</span>
                          <span className="text-white font-medium">{r.pct}%</span>
                        </div>
                        <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${r.pct}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: 'easeOut', delay: 0.3 + idx * 0.1 }}
                            className={`h-full ${r.color} rounded-full`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* CloudLunar Recommendations */}
              <div className="bg-white/[0.03] rounded-xl p-5 border border-violet-500/20">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-7 h-7 rounded-lg bg-violet-500/20 flex items-center justify-center">
                    <svg className="w-4 h-4 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-white">CloudLunar Recommendations</span>
                  <span className="text-[10px] text-violet-400 bg-violet-400/10 px-2 py-0.5 rounded-full border border-violet-400/20">3 new</span>
                  <span className="ml-auto text-xs text-zinc-600">Updated 2 min ago</span>
                </div>

                <div className="space-y-2">
                  {recommendations.map((rec, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + i * 0.1 }}
                      className="flex flex-col sm:flex-row sm:items-center gap-3 p-4 bg-white/[0.02] rounded-lg border border-white/[0.04] hover:border-violet-500/20 transition-colors"
                    >
                      <div className="w-8 h-8 rounded bg-violet-500/10 flex items-center justify-center flex-shrink-0">
                        <span className="text-xs font-bold text-violet-400">#{i + 1}</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-medium text-white truncate">{rec.title}</h4>
                        <p className="text-xs text-zinc-500 mt-0.5 truncate">{rec.description}</p>
                      </div>
                      <div className="flex items-center gap-3 flex-shrink-0">
                        <span className={`text-[10px] px-2 py-0.5 rounded ${rec.riskColor}`}>{rec.risk}</span>
                        <div className="text-right">
                          <div className="text-[10px] text-zinc-600">Confidence</div>
                          <div className="text-sm font-medium text-violet-400">{rec.confidence}%</div>
                        </div>
                        <div className="text-right">
                          <div className="text-[10px] text-zinc-600">Savings</div>
                          <div className="text-sm font-bold text-emerald-400">{rec.savings}</div>
                        </div>
                        <button className="btn-primary btn-sm">Apply</button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
