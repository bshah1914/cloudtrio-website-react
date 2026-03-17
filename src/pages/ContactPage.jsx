import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import AnimatedSection, { StaggerContainer, StaggerItem } from '../components/AnimatedSection'
import HowItWorks from '../components/HowItWorks'

const contactInfo = [
  {
    title: 'Email Us',
    value: 'hello@cloudtrio.in',
    href: 'mailto:hello@cloudtrio.in',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Call Us',
    value: '+1 (555) 123-4567',
    href: 'tel:+15551234567',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    title: 'Follow Us',
    value: '@cloudtrio',
    href: '#',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
      </svg>
    ),
  },
]

const serviceLinks = [
  { title: 'Cloud Services', desc: 'Migration, architecture, and managed cloud solutions across AWS, Azure, and GCP.', to: '/cloud-services' },
  { title: 'Cloud Security', desc: 'Compliance, monitoring, and automated remediation with zero-trust architecture.', to: '/cloud-security' },
  { title: 'DevOps Solutions', desc: 'CI/CD, IaC, container orchestration, and platform engineering services.', to: '/devops' },
  { title: 'Products', desc: 'CloudLunar cost optimization engine and the full CloudTrio product suite.', to: '/products' },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '', email: '', company: '', service: '', message: '',
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

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
              <span className="text-zinc-300">Contact Us</span>
            </nav>
            <div className="pill-cyan mb-6">GET IN TOUCH</div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold" style={{ color: 'var(--text-primary)' }} className=" mb-6 leading-tight">
              Contact <span className="gt">Us</span>
            </h1>
            <p className="text-xl text-zinc-400 max-w-2xl">
              Have a question or ready to get started? We&apos;d love to hear from you. Reach out and we&apos;ll respond within 24 hours.
            </p>
          </AnimatedSection>
        </div>
        <div className="glow-line mt-20" />
      </section>

      {/* Form + Info */}
      <section className="bg-base py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form */}
            <AnimatedSection className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-zinc-300 mb-2">Full Name</label>
                    <input
                      type="text" id="name" name="name" value={formData.name} onChange={handleChange} required
                      className="w-full px-4 py-3.5 rounded-lg border border-zinc-800 bg-zinc-900/80 text-white text-sm placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-violet-500/30 focus:border-violet-500 transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-zinc-300 mb-2">Work Email</label>
                    <input
                      type="email" id="email" name="email" value={formData.email} onChange={handleChange} required
                      className="w-full px-4 py-3.5 rounded-lg border border-zinc-800 bg-zinc-900/80 text-white text-sm placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-violet-500/30 focus:border-violet-500 transition-colors"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-zinc-300 mb-2">Company</label>
                    <input
                      type="text" id="company" name="company" value={formData.company} onChange={handleChange}
                      className="w-full px-4 py-3.5 rounded-lg border border-zinc-800 bg-zinc-900/80 text-white text-sm placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-violet-500/30 focus:border-violet-500 transition-colors"
                      placeholder="Acme Inc"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-zinc-300 mb-2">Service Interest</label>
                    <select
                      id="service" name="service" value={formData.service} onChange={handleChange}
                      className="w-full px-4 py-3.5 rounded-lg border border-zinc-800 bg-zinc-900/80 text-white text-sm focus:outline-none focus:ring-2 focus:ring-violet-500/30 focus:border-violet-500 transition-colors"
                    >
                      <option value="">Select a service</option>
                      <option value="cloud-services">Cloud Services</option>
                      <option value="cloud-security">Cloud Security</option>
                      <option value="devops">DevOps Solutions</option>
                      <option value="app-development">App Development</option>
                      <option value="ai-ml">AI & Machine Learning</option>
                      <option value="products">CloudLunar / Products</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-zinc-300 mb-2">Message</label>
                  <textarea
                    id="message" name="message" value={formData.message} onChange={handleChange} rows={6} required
                    className="w-full px-4 py-3.5 rounded-lg border border-zinc-800 bg-zinc-900/80 text-white text-sm placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-violet-500/30 focus:border-violet-500 transition-colors resize-none"
                    placeholder="Tell us about your project, timeline, and any specific requirements..."
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="btn-primary w-full sm:w-auto"
                >
                  Send Message
                </motion.button>
              </form>
            </AnimatedSection>

            {/* Contact Info + Office */}
            <AnimatedSection delay={0.15} className="lg:col-span-2">
              <div className="space-y-4">
                {contactInfo.map((info) => (
                  <a
                    key={info.title}
                    href={info.href}
                    className="card-dark p-5 flex items-center gap-4 group block hover:border-violet-500/30 transition-colors"
                  >
                    <div className="ibox flex-shrink-0">{info.icon}</div>
                    <div>
                      <div className="text-sm font-medium text-white">{info.title}</div>
                      <div className="text-sm text-zinc-500 group-hover:text-zinc-300 transition-colors">{info.value}</div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Office */}
              <div className="card-dark p-6 mt-6">
                <div className="pill-cyan text-xs mb-3">OFFICE</div>
                <p className="text-sm text-white font-semibold mb-2">CloudTrio HQ</p>
                <p className="text-sm text-zinc-500 leading-relaxed">
                  123 Cloud Avenue, Suite 400<br />
                  San Francisco, CA 94105<br />
                  United States
                </p>
                <div className="sep my-4" />
                <p className="text-sm text-zinc-500 leading-relaxed">
                  <span className="text-zinc-400 font-medium">Hours:</span> Mon - Fri, 9:00 AM - 6:00 PM PST<br />
                  <span className="text-zinc-400 font-medium">Support:</span> 24/7 for enterprise clients
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Service Links */}
      <section className="bg-section-alt py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold" style={{ color: 'var(--text-primary)' }} className=" mb-4">
              Not Sure Where to <span className="gt">Start</span>?
            </h2>
            <p className="text-zinc-400 text-lg max-w-2xl mb-16">
              Explore our services to find the right solution for your needs, or reach out and we&apos;ll guide you.
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceLinks.map((link) => (
              <StaggerItem key={link.title}>
                <Link to={link.to}>
                  <motion.div whileHover={{ y: -6 }} transition={{ duration: 0.25 }} className="card-dark p-6 h-full group">
                    <h3 className="text-sm font-semibold text-white mb-2 group-hover:text-violet-400 transition-colors">{link.title}</h3>
                    <p className="text-xs text-zinc-500 leading-relaxed mb-4">{link.desc}</p>
                    <svg className="w-4 h-4 text-zinc-600 group-hover:text-violet-400 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </motion.div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* How It Works */}
      <HowItWorks />

      {/* CTA */}
      <section className="bg-cta py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold" style={{ color: 'var(--text-primary)' }} className=" mb-6">Ready to optimize your cloud?</h2>
            <p className="text-zinc-300 text-lg mb-10 max-w-2xl mx-auto">
              Start with a free assessment. We&apos;ll analyze your infrastructure and show you exactly where to save and how to improve.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/pricing" className="btn-primary">View Pricing</Link>
              <Link to="/products" className="btn-secondary">Explore Products</Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
