import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import AnimatedSection, { StaggerContainer, StaggerItem } from '../components/AnimatedSection'
import Pricing from '../components/Pricing'
import FAQ from '../components/FAQ'

const lunarFeatures = [
  { feature: 'AWS Accounts', free: '1', starter: '5', pro: '20', enterprise: 'Unlimited' },
  { feature: 'Resources', free: '50', starter: '500', pro: 'Unlimited', enterprise: 'Unlimited' },
  { feature: 'Optimization Rules', free: '—', starter: '25+', pro: 'All 25+ (P95)', enterprise: 'Custom' },
  { feature: 'Cost Alerts', free: false, starter: true, pro: true, enterprise: true },
  { feature: 'Compliance', free: false, starter: false, pro: 'CIS + SOC 2', enterprise: 'Custom' },
  { feature: 'K8s Monitoring', free: false, starter: false, pro: true, enterprise: true },
  { feature: 'AI Assistant', free: false, starter: false, pro: false, enterprise: true },
  { feature: 'Data Retention', free: '7 days', starter: '30 days', pro: '90 days', enterprise: '1 year+' },
  { feature: 'Support', free: 'Community', starter: 'Email', pro: 'Priority', enterprise: '24/7 Dedicated' },
]

const sentinelFeatures = [
  { feature: 'Cloud Accounts', free: '1', pro: '3', business: '10', enterprise: 'Unlimited' },
  { feature: 'Resources', free: '50', pro: '500', business: 'Unlimited', enterprise: 'Unlimited' },
  { feature: 'Compliance Checks', free: '5', pro: '183', business: '183', enterprise: '183 + Custom' },
  { feature: 'Frameworks', free: '—', pro: '5', business: '10', enterprise: '10 + Custom' },
  { feature: 'Threat Detection', free: false, pro: 'Basic', business: '9 categories', enterprise: '9 + Custom' },
  { feature: 'MITRE ATT&CK', free: false, pro: false, business: true, enterprise: true },
  { feature: 'AI Security', free: false, pro: false, business: true, enterprise: true },
  { feature: 'Attack Path Analysis', free: false, pro: false, business: true, enterprise: true },
  { feature: 'Support', free: 'Community', pro: 'Email + Chat', business: 'Priority', enterprise: '24/7 Dedicated' },
]

const enterpriseBenefits = [
  { title: 'Dedicated Account Manager', desc: 'Single point of contact for your team via Slack, email, or phone.', icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' },
  { title: 'Custom SLA Guarantees', desc: 'Tailored uptime, response times, and escalation paths.', icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' },
  { title: 'On-Premise Deployment', desc: 'Deploy within your infrastructure for data sovereignty.', icon: 'M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2' },
  { title: 'Training & Onboarding', desc: 'Hands-on workshops and guided setup for your team.', icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253' },
  { title: 'Bundle Discount', desc: 'Save 20% when you subscribe to both CloudLunar + CloudSentinel.', icon: 'M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z' },
  { title: 'Custom Integrations', desc: 'Connect with your existing SIEM, ticketing, and ITSM tools.', icon: 'M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1' },
]

function RenderCell({ value }) {
  if (value === true) return <svg className="w-4 h-4 text-emerald-400 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
  if (value === false) return <svg className="w-4 h-4 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: 'var(--text-muted)' }}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 12H6" /></svg>
  return <span style={{ color: 'var(--text-secondary)' }}>{value}</span>
}

function ComparisonTable({ features, columns, highlightCol }) {
  return (
    <div className="card-dark overflow-hidden !p-0 !rounded-2xl">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr style={{ borderBottom: '1px solid var(--border)' }}>
              <th className="text-left py-4 px-5 text-sm font-semibold min-w-[160px]" style={{ color: 'var(--text-secondary)', background: 'rgba(255,255,255,0.02)' }}>Feature</th>
              {columns.map((col) => (
                <th key={col} className="text-center py-4 px-4 text-sm font-semibold min-w-[100px]" style={{ color: col === highlightCol ? '#a78bfa' : 'var(--text-muted)', background: col === highlightCol ? 'rgba(139,92,246,0.06)' : 'rgba(255,255,255,0.02)' }}>
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {features.map((row, i) => (
              <tr key={row.feature} style={{ borderBottom: i < features.length - 1 ? '1px solid rgba(255,255,255,0.04)' : 'none' }}>
                <td className="py-3 px-5 text-sm font-medium" style={{ color: 'var(--text-body)' }}>{row.feature}</td>
                {columns.map((col) => {
                  const key = col.toLowerCase().replace(/\s/g, '')
                  return (
                    <td key={col} className="py-3 px-4 text-center text-sm" style={{ background: col === highlightCol ? 'rgba(139,92,246,0.03)' : 'transparent' }}>
                      <RenderCell value={row[key]} />
                    </td>
                  )
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default function PricingPage() {
  return (
    <div>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-hero relative overflow-hidden">
        <div className="orb w-80 h-80 bg-violet-600 -top-40 -right-40" />
        <div className="orb w-64 h-64 bg-cyan-500 bottom-0 -left-32" style={{ animationDelay: '5s' }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection>
            <nav className="flex items-center gap-2 text-sm mb-8">
              <Link to="/" className="hover:text-violet-400 transition-colors" style={{ color: 'var(--text-muted)' }}>Home</Link>
              <span style={{ color: 'var(--text-muted)' }}>→</span>
              <span style={{ color: 'var(--text-secondary)' }}>Pricing</span>
            </nav>
            <div className="pill mb-6">PRICING</div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight" style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-display)' }}>
              Two products. <span className="gt">One price page.</span>
            </h1>
            <p className="text-xl max-w-2xl" style={{ color: 'var(--text-secondary)' }}>
              Choose CloudLunar for cost optimization or CloudSentinel for security — or bundle both and save 20%.
            </p>
          </AnimatedSection>
        </div>
        <div className="glow-line mt-20" />
      </section>

      {/* Pricing Cards with Product Switcher */}
      <Pricing />

      {/* CloudLunar Comparison */}
      <section className="py-16 lg:py-20" style={{ background: 'var(--bg)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <span className="pill-green mb-4 inline-flex">CloudLunar Plans</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-display)' }}>
              Compare <span className="gt-green">CloudLunar</span> features
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <ComparisonTable features={lunarFeatures} columns={['Free', 'Starter', 'Professional', 'Enterprise']} highlightCol="Professional" />
          </AnimatedSection>
        </div>
      </section>

      {/* CloudSentinel Comparison */}
      <section className="py-16 lg:py-20" style={{ background: 'var(--bg-surface)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <span className="pill-pink mb-4 inline-flex">CloudSentinel Plans</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-display)' }}>
              Compare <span className="gt-warm">CloudSentinel</span> features
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <ComparisonTable features={sentinelFeatures} columns={['Free', 'Pro', 'Business', 'Enterprise']} highlightCol="Business" />
          </AnimatedSection>
        </div>
      </section>

      {/* Enterprise Benefits */}
      <section className="py-16 lg:py-20" style={{ background: 'var(--bg)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-display)' }}>
              Enterprise <span className="gt">benefits</span>
            </h2>
            <p style={{ color: 'var(--text-secondary)' }} className="text-lg max-w-2xl mx-auto">For organizations that need the highest level of support and customization.</p>
          </AnimatedSection>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {enterpriseBenefits.map((b) => (
              <StaggerItem key={b.title}>
                <motion.div whileHover={{ y: -4 }} className="card-dark p-6 h-full">
                  <div className="ibox bg-violet-500/10 mb-4">
                    <svg className="w-5 h-5 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={b.icon} /></svg>
                  </div>
                  <h3 className="text-sm font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>{b.title}</h3>
                  <p className="text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{b.desc}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* FAQ */}
      <FAQ />

      {/* CTA */}
      <section className="bg-cta py-16 lg:py-20 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6" style={{ fontFamily: 'var(--font-display)' }}>Start your free trial today</h2>
            <p className="text-zinc-300 text-lg mb-10 max-w-2xl mx-auto">No credit card required. Full access for 14 days. Cancel anytime.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact" className="btn-primary">Get Started Free</Link>
              <Link to="/contact" className="btn-secondary">Contact Sales</Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
