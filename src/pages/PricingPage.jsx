import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import AnimatedSection, { StaggerContainer, StaggerItem } from '../components/AnimatedSection'
import Pricing from '../components/Pricing'
import FAQ from '../components/FAQ'

const comparisonFeatures = [
  { feature: 'AWS Accounts', free: '1', starter: '5', professional: '20', enterprise: 'Unlimited' },
  { feature: 'Resources', free: '50', starter: '500', professional: '5,000', enterprise: 'Unlimited' },
  { feature: 'Optimization Rules', free: '5', starter: '25', professional: '100', enterprise: 'Custom' },
  { feature: 'Compliance', free: false, starter: true, professional: true, enterprise: true },
  { feature: 'K8s Monitoring', free: false, starter: false, professional: true, enterprise: true },
  { feature: 'Support', free: 'Community', starter: 'Email', professional: 'Priority', enterprise: '24/7 Dedicated' },
  { feature: 'Data Retention', free: '7 days', starter: '30 days', professional: '90 days', enterprise: '1 year+' },
  { feature: 'API Calls', free: '1,000/mo', starter: '10,000/mo', professional: '100,000/mo', enterprise: 'Unlimited' },
]

const enterpriseBenefits = [
  {
    title: 'Dedicated Account Manager',
    description: 'A single point of contact who understands your infrastructure, business goals, and growth trajectory. Available via Slack, email, or phone.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    title: 'Custom SLA Guarantees',
    description: 'Tailored service level agreements with guaranteed uptime, response times, and escalation paths designed for your compliance requirements.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: 'On-Premise Deployment',
    description: 'Deploy CloudTrio within your own infrastructure for maximum control, data sovereignty, and compliance with industry-specific regulations.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2" />
      </svg>
    ),
  },
  {
    title: 'Training & Onboarding',
    description: 'Comprehensive training and guided onboarding for your entire engineering team. Hands-on workshops, documentation, and ongoing enablement.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
]

export default function PricingPage() {
  return (
    <div>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-hero relative overflow-hidden">
        <div className="orb w-72 h-72 bg-violet-600 -top-36 -right-36" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection>
            <nav className="flex items-center gap-2 text-sm mb-8">
              <Link to="/" className="text-zinc-500 hover:text-violet-400">Home</Link>
              <span className="text-zinc-600">&rarr;</span>
              <span className="text-zinc-300">Pricing</span>
            </nav>
            <div className="pill mb-6">PLANS</div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Simple, Transparent <span className="gt">Pricing</span>
            </h1>
            <p className="text-xl text-zinc-400 max-w-2xl">
              Plans that scale with your cloud. No hidden fees, no surprises. Start free and upgrade as you grow.
            </p>
          </AnimatedSection>
        </div>
        <div className="glow-line mt-20" />
      </section>

      {/* Pricing Cards */}
      <Pricing />

      {/* Comparison Table */}
      <section className="bg-section-alt py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Compare <span className="gt">Plans</span>
              </h2>
              <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
                Find the perfect plan for your cloud management needs. Every plan includes core optimization features.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <div className="card-dark overflow-hidden !p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-zinc-800">
                      <th className="text-left py-4 px-5 text-sm font-semibold text-zinc-300 bg-zinc-900/50 min-w-[160px]">Feature</th>
                      <th className="text-center py-4 px-4 text-sm font-semibold text-zinc-400 bg-zinc-900/50 min-w-[100px]">Free</th>
                      <th className="text-center py-4 px-4 text-sm font-semibold text-zinc-400 bg-zinc-900/50 min-w-[100px]">Starter</th>
                      <th className="text-center py-4 px-4 text-sm font-semibold text-violet-400 bg-violet-500/10 min-w-[100px]">Pro</th>
                      <th className="text-center py-4 px-4 text-sm font-semibold text-zinc-400 bg-zinc-900/50 min-w-[100px]">Enterprise</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonFeatures.map((row, i) => (
                      <tr key={row.feature} className={i !== comparisonFeatures.length - 1 ? 'border-b border-zinc-800/50' : ''}>
                        <td className="py-3.5 px-5 text-sm font-medium text-zinc-300">{row.feature}</td>
                        {['free', 'starter', 'professional', 'enterprise'].map((plan) => (
                          <td key={plan} className={`py-3.5 px-4 text-center text-sm ${plan === 'professional' ? 'bg-violet-500/5' : ''}`}>
                            {row[plan] === true ? (
                              <svg className="w-4 h-4 text-emerald-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                            ) : row[plan] === false ? (
                              <svg className="w-4 h-4 text-zinc-700 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                              </svg>
                            ) : (
                              <span className="text-zinc-400">{row[plan]}</span>
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Enterprise Benefits */}
      <section className="bg-base py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Enterprise <span className="gt">Benefits</span>
              </h2>
              <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
                For organizations that need the highest level of support, customization, and control over their cloud operations.
              </p>
            </div>
          </AnimatedSection>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {enterpriseBenefits.map((b) => (
              <StaggerItem key={b.title}>
                <motion.div whileHover={{ y: -6 }} transition={{ duration: 0.25 }} className="card-dark p-7 h-full">
                  <div className="ibox mb-5">{b.icon}</div>
                  <h3 className="text-base font-semibold text-white mb-3">{b.title}</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">{b.description}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* FAQ */}
      <FAQ />

      {/* CTA */}
      <section className="bg-cta py-24 lg:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Start your free trial today</h2>
            <p className="text-zinc-300 text-lg mb-10 max-w-2xl mx-auto">
              No credit card required. Full access to Professional features for 14 days. Cancel anytime.
            </p>
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
