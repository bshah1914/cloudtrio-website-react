import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import AnimatedSection, { StaggerContainer, StaggerItem } from '../components/AnimatedSection'
import Testimonials from '../components/Testimonials'

const values = [
  {
    title: 'Engineering Excellence',
    description: 'We build with precision. Every solution is architected for reliability, performance, and maintainability. No shortcuts, no tech debt by choice.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    title: 'Customer Obsession',
    description: 'Your success is our success. We measure ourselves by the outcomes we deliver for your business, not the hours we bill.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    title: 'Radical Transparency',
    description: 'No black boxes. We share our thinking, our pricing, and our progress openly with every client. Full audit trails on every engagement.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
  },
  {
    title: 'Continuous Learning',
    description: 'Cloud evolves fast. We invest in certifications, research, and experimentation to stay ahead of the curve and bring cutting-edge solutions to every client.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
]

const stats = [
  { value: '500+', label: 'Cloud Accounts Managed' },
  { value: '$200M+', label: 'Cloud Spend Optimized' },
  { value: '99.9%', label: 'Uptime SLA Delivered' },
  { value: '50+', label: 'Certified Engineers' },
]

const partners = [
  'AWS Advanced Partner',
  'Azure Solutions Partner',
  'Google Cloud Partner',
  'Kubernetes Certified',
  'SOC 2 Type II',
  'ISO 27001',
  'HIPAA Compliant',
  'PCI-DSS Certified',
]

export default function AboutPage() {
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
              <span className="text-zinc-300">About CloudTrio</span>
            </nav>
            <div className="pill mb-6">OUR STORY</div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              About <span className="gt">CloudTrio</span>
            </h1>
            <p className="text-xl text-zinc-400 max-w-2xl">
              We help engineering teams build, secure, and optimize cloud infrastructure with precision, transparency, and measurable outcomes.
            </p>
          </AnimatedSection>
        </div>
        <div className="glow-line mt-20" />
      </section>

      {/* Mission / Vision */}
      <section className="bg-base py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="grid md:grid-cols-2 gap-8">
            <StaggerItem>
              <motion.div whileHover={{ y: -4 }} className="card-glow p-10 h-full">
                <div className="pill-cyan text-xs mb-4">OUR MISSION</div>
                <h3 className="text-2xl font-bold text-white mb-4">Make cloud infrastructure accessible, efficient, and secure for every team.</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  We believe that world-class cloud operations shouldn&apos;t require a 50-person platform team.
                  CloudTrio levels the playing field with expert services and intelligent tooling that deliver
                  enterprise-grade outcomes at startup speed. Every organization deserves optimized, secure infrastructure.
                </p>
              </motion.div>
            </StaggerItem>
            <StaggerItem>
              <motion.div whileHover={{ y: -4 }} className="card-glow p-10 h-full">
                <div className="pill-green text-xs mb-4">OUR VISION</div>
                <h3 className="text-2xl font-bold text-white mb-4">A world where every dollar spent on cloud delivers maximum business value.</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  We&apos;re building a future where cloud waste is eliminated through intelligent automation,
                  where security is built-in by default, and where engineering teams spend their time
                  shipping features instead of fighting infrastructure. That&apos;s the world we&apos;re creating.
                </p>
              </motion.div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-section-alt py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                From Frustration to <span className="gt">Foundation</span>
              </h2>
              <div className="space-y-5 text-zinc-400 text-lg leading-relaxed">
                <p>
                  CloudTrio was founded by a team of cloud architects who spent years watching organizations
                  hemorrhage money on misconfigured infrastructure. We saw the same problems repeated across
                  hundreds of AWS accounts: idle resources, oversized instances, missing lifecycle policies,
                  and compliance gaps that went undetected for months.
                </p>
                <p>
                  We built CloudLunar as the tool we wished existed -- one that could scan an entire AWS
                  environment in minutes, surface actionable recommendations backed by real utilization data,
                  and give teams the confidence to act. Today, CloudTrio combines that product intelligence
                  with hands-on consulting to help organizations of every size master their cloud.
                </p>
                <p>
                  Our team has collectively managed over $200M in cloud spend across 500+ accounts,
                  and we bring that hard-won experience to every engagement. We&apos;ve seen what works,
                  what fails, and what scales -- and we use that knowledge to accelerate your cloud journey.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-base py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Drives <span className="gt">Us</span>
            </h2>
            <p className="text-zinc-400 text-lg max-w-2xl mb-16">
              Four core values that guide every decision, every engagement, and every line of code we write.
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid sm:grid-cols-2 gap-6">
            {values.map((v) => (
              <StaggerItem key={v.title}>
                <motion.div whileHover={{ y: -6 }} transition={{ duration: 0.25 }} className="card-dark p-8 h-full">
                  <div className="ibox mb-5">{v.icon}</div>
                  <h3 className="text-lg font-semibold text-white mb-3">{v.title}</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">{v.description}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* Stats */}
      <section className="bg-base py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                By The <span className="gt">Numbers</span>
              </h2>
              <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
                Metrics that reflect our commitment to delivering real, measurable value for every client.
              </p>
            </div>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((s) => (
              <StaggerItem key={s.label}>
                <div className="card-dark p-8 text-center">
                  <div className="stat-num">{s.value}</div>
                  <div className="text-sm text-zinc-500 mt-3">{s.label}</div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Partners */}
      <section className="bg-section-alt py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Certifications & <span className="gt">Partnerships</span>
              </h2>
              <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
                Industry-recognized certifications and partnerships that validate our expertise and commitment to excellence.
              </p>
            </div>
          </AnimatedSection>

          <StaggerContainer className="flex flex-wrap justify-center gap-4">
            {partners.map((p) => (
              <StaggerItem key={p}>
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  transition={{ duration: 0.2 }}
                  className="pill px-6 py-3 text-sm font-medium cursor-default"
                >
                  {p}
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-cta py-24 lg:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Let&apos;s build something great</h2>
            <p className="text-zinc-300 text-lg mb-10 max-w-2xl mx-auto">
              Whether you need consulting, managed services, or intelligent tooling -- we&apos;re here to help you master the cloud.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact" className="btn-primary">Get in Touch</Link>
              <Link to="/cloud-services" className="btn-secondary">Our Services</Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
