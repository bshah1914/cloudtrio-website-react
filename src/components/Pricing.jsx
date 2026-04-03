import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import AnimatedSection, { StaggerContainer, StaggerItem } from './AnimatedSection'

const Check = () => (
  <svg className="w-4 h-4 text-emerald-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
  </svg>
)
const Cross = () => (
  <svg className="w-4 h-4 text-zinc-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 12H6" />
  </svg>
)

const products = {
  cloudlunar: {
    name: 'CloudLunar',
    tagline: 'AWS Cost Optimization',
    pill: 'pill-green',
    accent: 'text-emerald-400',
    accentBg: 'bg-emerald-500/10',
    gradient: 'gt-green',
    plans: [
      {
        name: 'Free', price: { monthly: 0, annual: 0 }, desc: 'Get started with basic cost visibility.',
        features: [
          { t: '1 AWS account', ok: true }, { t: '50 resources', ok: true }, { t: 'Basic dashboard', ok: true },
          { t: 'Community support', ok: true }, { t: '7-day data retention', ok: true },
          { t: 'Optimization rules', ok: false }, { t: 'Cost alerts', ok: false }, { t: 'API access', ok: false },
        ],
        cta: 'Start Free',
      },
      {
        name: 'Starter', price: { monthly: 99, annual: 89 }, desc: 'For small teams optimizing spend.',
        features: [
          { t: '5 AWS accounts', ok: true }, { t: '500 resources', ok: true }, { t: '25+ optimization rules', ok: true },
          { t: 'Email support', ok: true }, { t: '30-day retention', ok: true }, { t: 'Cost alerts & reports', ok: true },
          { t: 'Compliance (basic)', ok: false }, { t: 'K8s monitoring', ok: false },
        ],
        cta: 'Get Started',
      },
      {
        name: 'Professional', price: { monthly: 299, annual: 269 }, desc: 'Full engine for growing teams.', featured: true,
        features: [
          { t: '20 AWS accounts', ok: true }, { t: 'Unlimited resources', ok: true }, { t: 'All 25+ rules + P95', ok: true },
          { t: 'CIS & SOC 2 compliance', ok: true }, { t: '90-day retention', ok: true }, { t: 'Budget alerts & forecasting', ok: true },
          { t: 'K8s monitoring', ok: true }, { t: 'Priority support', ok: true },
        ],
        cta: 'Start Free Trial',
      },
      {
        name: 'Enterprise', price: { monthly: 999, annual: 899 }, desc: 'Unlimited scale, white-glove service.',
        features: [
          { t: 'Unlimited accounts', ok: true }, { t: 'Unlimited resources', ok: true }, { t: 'AI assistant & chat', ok: true },
          { t: 'Automated remediation', ok: true }, { t: '365-day retention', ok: true }, { t: 'Custom compliance', ok: true },
          { t: 'Advanced RBAC & SSO', ok: true }, { t: 'Dedicated engineer + SLA', ok: true },
        ],
        cta: 'Contact Sales',
      },
    ],
  },
  cloudsentrix: {
    name: 'CloudSentrix',
    tagline: 'Multi-Cloud Security',
    pill: 'pill-pink',
    accent: 'text-pink-400',
    accentBg: 'bg-pink-500/10',
    gradient: 'gt-warm',
    plans: [
      {
        name: 'Free', price: { monthly: 0, annual: 0 }, desc: 'Basic security scanning.',
        features: [
          { t: '1 cloud account', ok: true }, { t: '50 resources', ok: true }, { t: 'Security score', ok: true },
          { t: 'Community support', ok: true }, { t: '5 compliance checks', ok: true },
          { t: 'Threat detection', ok: false }, { t: 'MITRE ATT&CK', ok: false }, { t: 'AI assistant', ok: false },
        ],
        cta: 'Start Free',
      },
      {
        name: 'Pro', price: { monthly: 149, annual: 129 }, desc: 'Full security for single cloud.',
        features: [
          { t: '3 cloud accounts (AWS/Azure/GCP)', ok: true }, { t: '500 resources', ok: true }, { t: '183 compliance checks', ok: true },
          { t: 'Email + chat support', ok: true }, { t: '5 compliance frameworks', ok: true }, { t: 'Threat detection (basic)', ok: true },
          { t: 'MITRE ATT&CK mapping', ok: false }, { t: 'AI security assistant', ok: false },
        ],
        cta: 'Get Started',
      },
      {
        name: 'Business', price: { monthly: 399, annual: 359 }, desc: 'Enterprise security, all clouds.', featured: true,
        features: [
          { t: '10 cloud accounts', ok: true }, { t: 'Unlimited resources', ok: true }, { t: '10 compliance frameworks', ok: true },
          { t: 'Priority support', ok: true }, { t: '9 threat categories', ok: true }, { t: 'MITRE ATT&CK mapping', ok: true },
          { t: 'AI security assistant', ok: true }, { t: 'Attack path analysis', ok: true },
        ],
        cta: 'Start Free Trial',
      },
      {
        name: 'Enterprise', price: { monthly: 1499, annual: 1299 }, desc: 'Custom security at scale.',
        features: [
          { t: 'Unlimited cloud accounts', ok: true }, { t: 'Unlimited resources', ok: true }, { t: 'Custom frameworks', ok: true },
          { t: '24/7 dedicated engineer', ok: true }, { t: 'Automated remediation', ok: true }, { t: 'Well-Architected review', ok: true },
          { t: 'On-premise deployment', ok: true }, { t: 'SLA guarantee + SSO', ok: true },
        ],
        cta: 'Contact Sales',
      },
    ],
  },
}

export default function Pricing() {
  const [activeProduct, setActiveProduct] = useState('cloudlunar')
  const [annual, setAnnual] = useState(false)
  const product = products[activeProduct]

  return (
    <section id="pricing" className="py-16 lg:py-20 relative overflow-hidden" style={{ background: 'var(--bg-surface)' }}>
      <div className="orb w-[500px] h-[500px] bg-purple-600 -top-60 left-1/2" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <AnimatedSection className="text-center mb-12">
          <span className="pill mb-5 inline-flex">Pricing</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5" style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-display)' }}>
            Plans for every <span className="gt">stage</span>
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            Choose your product, pick a plan, start saving.
          </p>
        </AnimatedSection>

        {/* Product Switcher */}
        <AnimatedSection delay={0.1} className="flex justify-center mb-8">
          <div className="inline-flex rounded-2xl p-1.5 card-dark">
            {Object.entries(products).map(([key, p]) => (
              <button
                key={key}
                onClick={() => setActiveProduct(key)}
                className={`relative px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
                  activeProduct === key ? 'text-white' : ''
                }`}
                style={{ color: activeProduct === key ? '#fff' : 'var(--text-muted)' }}
              >
                {activeProduct === key && (
                  <motion.div
                    layoutId="product-tab"
                    className="absolute inset-0 rounded-xl"
                    style={{ background: 'var(--accent)' }}
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  {key === 'cloudlunar' ? (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
                  ) : (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                  )}
                  {p.name}
                </span>
              </button>
            ))}
          </div>
        </AnimatedSection>

        {/* Monthly / Annual Toggle */}
        <AnimatedSection delay={0.15} className="flex justify-center items-center gap-4 mb-14">
          <span className="text-sm font-medium" style={{ color: !annual ? 'var(--text-primary)' : 'var(--text-muted)' }}>Monthly</span>
          <button
            onClick={() => setAnnual(!annual)}
            className="relative w-14 h-7 rounded-full transition-colors duration-300"
            style={{ background: annual ? 'var(--accent)' : 'rgba(255,255,255,0.1)' }}
          >
            <motion.div
              className="absolute top-1 w-5 h-5 rounded-full bg-white shadow-md"
              animate={{ left: annual ? 32 : 4 }}
              transition={{ type: 'spring', stiffness: 500, damping: 30 }}
            />
          </button>
          <span className="text-sm font-medium" style={{ color: annual ? 'var(--text-primary)' : 'var(--text-muted)' }}>
            Annual <span className={`${product.pill} text-[10px] ml-1`}>Save 10%</span>
          </span>
        </AnimatedSection>

        {/* Pricing Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeProduct}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 mb-16">
              {product.plans.map((p) => {
                const price = annual ? p.price.annual : p.price.monthly
                return (
                  <StaggerItem key={p.name}>
                    <motion.div
                      whileHover={{ y: -6 }}
                      transition={{ duration: 0.3 }}
                      className={`card-dark p-7 h-full flex flex-col relative ${p.featured ? 'price-featured' : ''}`}
                    >
                      {p.featured && (
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                          <span className={product.pill + ' text-[11px]'}>Most Popular</span>
                        </div>
                      )}

                      <div className="mb-5">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="text-lg font-bold" style={{ color: 'var(--text-primary)' }}>{p.name}</h3>
                        </div>
                        <p className="text-xs" style={{ color: 'var(--text-muted)' }}>{p.desc}</p>
                      </div>

                      <div className="mb-6">
                        <div className="flex items-end gap-1">
                          <span className={`text-4xl font-extrabold ${product.gradient}`} style={{ fontFamily: 'var(--font-display)' }}>
                            ${price}
                          </span>
                          <span className="text-sm mb-1" style={{ color: 'var(--text-muted)' }}>/mo</span>
                        </div>
                        {annual && p.price.monthly > 0 && (
                          <p className="text-xs mt-1" style={{ color: 'var(--text-muted)' }}>
                            <span className="line-through">${p.price.monthly}</span>
                            <span className={`${product.accent} ml-1`}>Save ${(p.price.monthly - p.price.annual) * 12}/yr</span>
                          </p>
                        )}
                      </div>

                      <ul className="space-y-2.5 mb-7 flex-1">
                        {p.features.map((f) => (
                          <li key={f.t} className="flex items-center gap-2.5 text-[13px]">
                            {f.ok ? <Check /> : <Cross />}
                            <span style={{ color: f.ok ? 'var(--text-body)' : 'var(--text-muted)' }}>{f.t}</span>
                          </li>
                        ))}
                      </ul>

                      <Link
                        to="/contact"
                        className={`relative z-10 flex items-center justify-center w-full py-3 rounded-xl font-semibold text-sm transition-all ${
                          p.featured
                            ? 'text-white bg-[var(--accent)] hover:brightness-110 shadow-lg shadow-purple-500/20'
                            : 'border border-[rgba(255,255,255,0.1)] hover:border-[var(--accent)] hover:bg-[var(--accent-light)]'
                        }`}
                        style={{ color: p.featured ? '#fff' : 'var(--text-secondary)' }}
                      >
                        {p.cta}
                      </Link>
                    </motion.div>
                  </StaggerItem>
                )
              })}
            </StaggerContainer>
          </motion.div>
        </AnimatePresence>

        {/* All plans include */}
        <AnimatedSection>
          <div className="card-dark p-6 max-w-2xl mx-auto text-center">
            <h4 className="text-sm font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>All {product.name} plans include</h4>
            <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
              {(activeProduct === 'cloudlunar'
                ? ['Real AWS data', 'STS AssumeRole', 'Read-only access', 'SOC 2 compliant']
                : ['Multi-cloud support', 'Encrypted at rest', 'Audit logging', 'RBAC built-in']
              ).map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <Check />
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
