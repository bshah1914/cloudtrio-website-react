import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import AnimatedSection, { StaggerContainer, StaggerItem } from './AnimatedSection'

const CheckIcon = () => (
  <svg className="w-4 h-4 text-emerald-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
)

const CrossIcon = () => (
  <svg className="w-4 h-4 text-zinc-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
)

const plans = [
  {
    name: 'Free',
    desc: 'Basic cloud visibility at no cost.',
    price: '$0',
    period: '/mo',
    features: [
      { text: '1 AWS account', included: true },
      { text: '50 resources monitored', included: true },
      { text: 'Basic dashboard', included: true },
      { text: 'Community support', included: true },
      { text: 'Optimization recommendations', included: false },
      { text: 'Compliance frameworks', included: false },
    ],
    cta: 'Start Free',
    featured: false,
  },
  {
    name: 'Starter',
    desc: 'For small teams ready to optimize.',
    price: '$99',
    period: '/mo',
    features: [
      { text: '5 AWS accounts', included: true },
      { text: '500 resources monitored', included: true },
      { text: 'Optimization recommendations', included: true },
      { text: 'Email support', included: true },
      { text: 'Compliance frameworks', included: false },
      { text: 'K8s monitoring', included: false },
    ],
    cta: 'Get Started',
    featured: false,
  },
  {
    name: 'Professional',
    desc: 'Full platform for growing teams.',
    price: '$299',
    period: '/mo',
    features: [
      { text: '20 AWS accounts', included: true },
      { text: 'Unlimited resources', included: true },
      { text: 'All 25+ optimization rules', included: true },
      { text: 'CIS & SOC 2 compliance', included: true },
      { text: 'Kubernetes monitoring', included: true },
      { text: 'Priority support', included: true },
    ],
    cta: 'Start Free Trial',
    featured: true,
  },
  {
    name: 'Enterprise',
    desc: 'For large, complex environments.',
    price: '$999',
    period: '/mo',
    features: [
      { text: 'Unlimited AWS accounts', included: true },
      { text: 'Unlimited resources', included: true },
      { text: 'AI-powered assistant', included: true },
      { text: 'Automated remediation', included: true },
      { text: 'Custom compliance frameworks', included: true },
      { text: 'SSO & dedicated engineer', included: true },
      { text: 'SLA guarantee', included: true },
    ],
    cta: 'Contact Sales',
    featured: false,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="bg-section-alt py-24 lg:py-32 relative overflow-hidden">
      <div className="orb w-[500px] h-[500px] bg-purple-600 -top-60 left-1/2" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <AnimatedSection className="text-center mb-16">
          <span className="pill mb-5 inline-flex">Pricing</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5" style={{ color: 'var(--text-primary)' }}>
            Simple, <span className="gt">transparent</span> pricing
          </h2>
          <p className="text-lg max-w-xl mx-auto leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            Start free, scale as you grow. No hidden fees, no surprises.
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 mb-16">
          {plans.map((p) => (
            <StaggerItem key={p.name}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className={`card-dark p-7 h-full flex flex-col relative ${
                  p.featured ? 'price-featured' : ''
                }`}
              >
                {p.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="pill text-[11px]">Most Popular</span>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>{p.name}</h3>
                  <p className="text-sm" style={{ color: 'var(--text-muted)' }}>{p.desc}</p>
                </div>

                <div className="mb-7">
                  <span className="text-4xl font-bold gt">{p.price}</span>
                  <span style={{ color: 'var(--text-muted)' }}>{p.period}</span>
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {p.features.map((f) => (
                    <li key={f.text} className="flex items-center gap-3 text-sm">
                      {f.included ? <CheckIcon /> : <CrossIcon />}
                      <span style={{ color: f.included ? 'var(--text-secondary)' : 'var(--text-muted)' }}>
                        {f.text}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`block w-full text-center py-2.5 rounded-lg font-medium text-sm transition-all ${
                    p.featured ? 'btn-primary justify-center' : 'btn-secondary justify-center'
                  }`}
                >
                  {p.cta}
                </Link>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <AnimatedSection>
          <div className="card-dark p-7 max-w-2xl mx-auto text-center">
            <h4 className="text-sm font-semibold mb-5" style={{ color: 'var(--text-primary)' }}>All plans include</h4>
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
              {['Real AWS data', 'Secure STS AssumeRole', 'Read-only access', 'SOC 2 compliant'].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckIcon />
                  <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
