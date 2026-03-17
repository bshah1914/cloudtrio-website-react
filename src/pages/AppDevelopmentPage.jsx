import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import AnimatedSection, { StaggerContainer, StaggerItem } from '../components/AnimatedSection'

const offerings = [
  {
    title: 'Web Applications',
    description: 'Modern, responsive web applications built with React, Next.js, and Vue.js. Server-side rendering, static generation, and progressive enhancement for blazing-fast user experiences.',
    tech: ['React', 'Next.js', 'Vue'],
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
  },
  {
    title: 'Mobile Applications',
    description: 'Cross-platform mobile apps with native performance using React Native and Flutter. Single codebase deployed to iOS and Android with platform-specific optimizations.',
    tech: ['React Native', 'Flutter'],
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Progressive Web Apps',
    description: 'PWAs that bridge web and native. Offline-first architecture, push notifications, home screen installation, and sub-second load times with service workers.',
    tech: ['Service Workers', 'Web APIs'],
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: 'API Development',
    description: 'Robust, well-documented APIs built with REST and GraphQL. Rate limiting, authentication, versioning, and comprehensive OpenAPI/Swagger documentation.',
    tech: ['REST', 'GraphQL', 'gRPC'],
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'E-commerce Platforms',
    description: 'Custom e-commerce solutions with payment processing, inventory management, multi-vendor marketplaces, and conversion-optimized checkout flows.',
    tech: ['Stripe', 'Shopify API', 'Custom'],
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
      </svg>
    ),
  },
  {
    title: 'Enterprise Software',
    description: 'Large-scale enterprise applications with role-based access, audit trails, multi-tenancy, workflow automation, and integration with existing business systems.',
    tech: ['Microservices', 'Event-Driven'],
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
]

const processSteps = [
  { step: '01', title: 'Discovery', description: 'Deep-dive into your business requirements, user personas, technical constraints, and success metrics. We define the scope, timeline, and architecture before writing a single line of code.' },
  { step: '02', title: 'Design', description: 'UI/UX design with interactive prototypes, design system creation, and user testing. We iterate on wireframes and high-fidelity mockups until the experience is pixel-perfect.' },
  { step: '03', title: 'Development', description: 'Agile sprints with continuous integration, code reviews, and automated testing. You get bi-weekly demos and full visibility into progress through our project dashboard.' },
  { step: '04', title: 'Testing', description: 'Comprehensive QA including unit tests, integration tests, E2E tests, performance benchmarks, accessibility audits, and security penetration testing.' },
  { step: '05', title: 'Deployment', description: 'Zero-downtime deployments with CI/CD pipelines, blue-green rollouts, automated rollback capabilities, and infrastructure provisioning via Terraform.' },
  { step: '06', title: 'Support', description: 'Post-launch monitoring, performance optimization, bug fixes, and feature iteration. We provide SLA-backed support with dedicated engineers for your application.' },
]

const technologies = [
  { name: 'React', color: 'pill-cyan' },
  { name: 'Next.js', color: 'pill' },
  { name: 'Vue', color: 'pill-green' },
  { name: 'Node.js', color: 'pill-green' },
  { name: 'Python', color: 'pill-orange' },
  { name: 'FastAPI', color: 'pill-green' },
  { name: 'PostgreSQL', color: 'pill-cyan' },
  { name: 'MongoDB', color: 'pill-green' },
  { name: 'Redis', color: 'pill-pink' },
  { name: 'Docker', color: 'pill-cyan' },
  { name: 'Kubernetes', color: 'pill' },
  { name: 'AWS', color: 'pill-orange' },
  { name: 'TypeScript', color: 'pill-cyan' },
  { name: 'GraphQL', color: 'pill-pink' },
  { name: 'Tailwind CSS', color: 'pill-cyan' },
  { name: 'Flutter', color: 'pill-cyan' },
]

const stats = [
  { value: '200+', label: 'Apps Delivered' },
  { value: '50+', label: 'Developers' },
  { value: '99%', label: 'Client Satisfaction' },
  { value: 'Agile', label: 'Methodology' },
]

const caseStudyMetrics = [
  { value: '3x', label: 'Revenue Growth' },
  { value: '40%', label: 'Faster Load Times' },
  { value: '99.99%', label: 'Uptime Achieved' },
]

export default function AppDevelopmentPage() {
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
              <span className="text-zinc-300">App Development</span>
            </nav>
            <div className="pill-pink mb-6">CUSTOM APPS</div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold" style={{ color: 'var(--text-primary)' }} className=" mb-6 leading-tight">
              Build Apps That <span className="gt-warm">Scale</span>
            </h1>
            <p className="text-xl text-zinc-400 max-w-2xl">
              Full-stack application development from concept to launch. Web, mobile, and enterprise software built with modern frameworks and cloud-native architecture.
            </p>
          </AnimatedSection>
        </div>
        <div className="glow-line mt-20" />
      </section>

      {/* What We Build */}
      <section className="bg-base py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold" style={{ color: 'var(--text-primary)' }} className=" mb-4">
              What We <span className="gt-warm">Build</span>
            </h2>
            <p className="text-zinc-400 text-lg max-w-2xl mb-16">
              From single-page apps to enterprise platforms, we build software that performs at scale and delights users.
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {offerings.map((item) => (
              <StaggerItem key={item.title}>
                <motion.div whileHover={{ y: -6 }} transition={{ duration: 0.25 }} className="card-dark p-8 h-full">
                  <div className="ibox mb-5">{item.icon}</div>
                  <h3 className="text-lg font-semibold text-white mb-3">{item.title}</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed mb-4">{item.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.tech.map((t) => (
                      <span key={t} className="pill-pink text-xs">{t}</span>
                    ))}
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Development Process */}
      <section className="bg-section-alt py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold" style={{ color: 'var(--text-primary)' }} className=" mb-4">
              Our Development <span className="gt-warm">Process</span>
            </h2>
            <p className="text-zinc-400 text-lg max-w-2xl mb-16">
              A structured yet flexible process that delivers predictable outcomes without sacrificing agility or creativity.
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((item, i) => (
              <StaggerItem key={item.step}>
                <div className="card-dark p-8 h-full relative">
                  <div className="w-10 h-10 rounded-full bg-pink-500/20 border border-pink-400/30 flex items-center justify-center mb-5">
                    <span className="text-sm font-bold text-pink-400">{item.step}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">{item.title}</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">{item.description}</p>
                  {i < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute -bottom-3 left-1/2 transform -translate-x-1/2">
                      <svg className="w-5 h-5 text-pink-500/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                      </svg>
                    </div>
                  )}
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Technologies */}
      <section className="bg-base py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold" style={{ color: 'var(--text-primary)' }} className=" mb-4">
                Technologies We <span className="gt-warm">Use</span>
              </h2>
              <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
                We pick the right tool for the job. Our engineers are fluent across the modern development ecosystem.
              </p>
            </div>
          </AnimatedSection>

          <StaggerContainer className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech) => (
              <StaggerItem key={tech.name}>
                <motion.span
                  whileHover={{ scale: 1.1, y: -2 }}
                  transition={{ duration: 0.2 }}
                  className={`${tech.color} px-5 py-2.5 text-sm font-medium cursor-default inline-block`}
                >
                  {tech.name}
                </motion.span>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Why Choose Our Dev Team */}
      <section className="bg-section-alt py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold" style={{ color: 'var(--text-primary)' }} className=" mb-4">
                Why Choose Our <span className="gt-warm">Dev Team</span>
              </h2>
              <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
                Proven track record, skilled engineers, and a methodology that delivers results consistently.
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

      {/* Case Study */}
      <section className="bg-base py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <motion.div whileHover={{ y: -4 }} className="card-glow p-10 lg:p-14">
              <div className="pill-pink mb-6">CASE STUDY</div>
              <h2 className="text-3xl md:text-4xl font-bold" style={{ color: 'var(--text-primary)' }} className=" mb-4">
                E-commerce Platform <span className="gt-warm">Transformation</span>
              </h2>
              <p className="text-zinc-400 text-lg max-w-3xl mb-10 leading-relaxed">
                We rebuilt a legacy e-commerce platform from the ground up using Next.js, Node.js, and PostgreSQL. The result was a lightning-fast, scalable storefront that tripled revenue within six months of launch. Performance optimizations alone drove a 40% improvement in page load times, while our cloud-native architecture delivered 99.99% uptime during peak traffic events including Black Friday.
              </p>

              <div className="grid sm:grid-cols-3 gap-6">
                {caseStudyMetrics.map((m) => (
                  <div key={m.label} className="card-dark p-6 text-center">
                    <div className="stat-num">{m.value}</div>
                    <div className="text-sm text-zinc-500 mt-2">{m.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-cta py-24 lg:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold" style={{ color: 'var(--text-primary)' }} className=" mb-6">Ready to build your next app?</h2>
            <p className="text-zinc-300 text-lg mb-10 max-w-2xl mx-auto">
              From idea to launch, we bring your vision to life with modern technology and proven engineering practices.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact" className="btn-primary">Start Your Project</Link>
              <Link to="/pricing" className="btn-secondary">View Pricing</Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
