import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import AnimatedSection, { StaggerContainer, StaggerItem } from '../components/AnimatedSection'

const offerings = [
  {
    title: 'Cloud Migration',
    description: 'Seamlessly migrate workloads to the cloud with zero downtime using our proven lift-and-shift and re-platform strategies. We handle the complexity so you can focus on growth.',
    tag: 'MIGRATION',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
      </svg>
    ),
  },
  {
    title: 'Cloud Management',
    description: '24/7 monitoring, patching, scaling, and incident response so your team can focus on building products instead of managing infrastructure overhead.',
    tag: 'MANAGED',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0" />
      </svg>
    ),
  },
  {
    title: 'Cloud Security',
    description: 'Continuous monitoring, compliance enforcement, and automated remediation for hybrid environments. Zero-trust architecture built from the ground up.',
    tag: 'SECURITY',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: 'IaaS Solutions',
    description: 'Infrastructure as a Service deployments with auto-scaling, load balancing, and multi-region availability. Enterprise-grade compute, storage, and networking.',
    tag: 'IAAS',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2" />
      </svg>
    ),
  },
  {
    title: 'PaaS Deployments',
    description: 'Platform as a Service solutions that abstract infrastructure complexity. Deploy applications faster with managed databases, serverless compute, and container services.',
    tag: 'PAAS',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
      </svg>
    ),
  },
  {
    title: 'SaaS Enablement',
    description: 'Build and scale SaaS products with multi-tenant architectures, usage-based billing integration, and automated provisioning pipelines for rapid customer onboarding.',
    tag: 'SAAS',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
  },
]

const platforms = [
  {
    name: 'Microsoft Azure',
    short: 'Azure',
    description: 'Enterprise-grade hybrid cloud solutions with deep Active Directory integration, .NET ecosystem support, and 60+ compliance certifications.',
    features: ['Azure Kubernetes Service', 'Azure DevOps', 'Cosmos DB', 'Azure Functions', 'Virtual WAN', 'Sentinel SIEM'],
  },
  {
    name: 'Amazon Web Services',
    short: 'AWS',
    description: 'Our primary platform with deep expertise across 50+ services. Certified architects delivering mission-critical workloads at scale.',
    features: ['EC2 & Lambda', 'EKS & ECS', 'RDS & DynamoDB', 'CloudFormation', 'S3 & CloudFront', 'GuardDuty'],
  },
  {
    name: 'Google Cloud Platform',
    short: 'GCP',
    description: 'Data analytics, ML workloads, and Kubernetes-native deployments. Leverage Google-scale infrastructure for BigQuery, Vertex AI, and GKE.',
    features: ['Google Kubernetes Engine', 'BigQuery', 'Vertex AI', 'Cloud Run', 'Spanner', 'Anthos'],
  },
]

const whyUsFeatures = [
  'Certified architects across all 3 major clouds',
  'Zero-downtime migration methodology',
  '24/7 NOC with <5 min response times',
  'FinOps-first approach to cost management',
  'Compliance-ready from day one (SOC2, HIPAA)',
  'Dedicated engineering pods per client',
]

const whyUsStats = [
  { value: '500+', label: 'Cloud Accounts Managed' },
  { value: '99.9%', label: 'Uptime SLA Guaranteed' },
  { value: '$12M+', label: 'Client Savings Delivered' },
  { value: '<5 min', label: 'Avg Incident Response' },
]

const approach = [
  { step: '01', title: 'Assess', description: 'Deep-dive audit of your current infrastructure, costs, security posture, and operational maturity across all environments.' },
  { step: '02', title: 'Design', description: 'Architect a tailored cloud strategy aligned with your business objectives, compliance needs, and growth trajectory.' },
  { step: '03', title: 'Implement', description: 'Execute the migration or optimization plan with zero-downtime deployment practices, automated testing, and rollback safety nets.' },
  { step: '04', title: 'Optimize', description: 'Continuous monitoring, cost optimization, performance tuning, and iterative improvements post-launch to maximize ROI.' },
]

const industries = [
  { name: 'Healthcare', desc: 'HIPAA-compliant cloud infrastructure with encrypted data pipelines, audit logging, and PHI protection at every layer.' },
  { name: 'Financial Services', desc: 'SOC 2, PCI-DSS compliant architectures with real-time fraud detection, secure transaction processing, and regulatory reporting.' },
  { name: 'E-commerce', desc: 'Auto-scaling infrastructure for Black Friday-level traffic. CDN optimization, edge caching, and sub-100ms response times.' },
  { name: 'SaaS & Startups', desc: 'Cost-efficient, rapidly scalable architectures. Multi-tenant design patterns, usage-based billing, and CI/CD from day one.' },
  { name: 'Gaming & Media', desc: 'Low-latency global distribution with edge computing, real-time multiplayer backends, and adaptive bitrate streaming.' },
  { name: 'Media & Broadcasting', desc: 'Live streaming infrastructure, content delivery networks, transcoding pipelines, and global distribution at scale.' },
]

export default function CloudServicesPage() {
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
              <span className="text-zinc-300">Cloud Services</span>
            </nav>
            <div className="pill mb-6">ENTERPRISE CLOUD</div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight" style={{ color: 'var(--text-primary)' }}>
              Cloud <span className="gt">Services</span>
            </h1>
            <p className="text-xl text-zinc-400 max-w-2xl">
              End-to-end cloud consulting, migration, and managed services to accelerate your digital transformation across AWS, Azure, and GCP.
            </p>
          </AnimatedSection>
        </div>
        <div className="glow-line mt-20" />
      </section>

      {/* Offerings Grid */}
      <section className="bg-base py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
              What We <span className="gt">Deliver</span>
            </h2>
            <p className="text-zinc-400 text-lg max-w-2xl mb-16">
              Comprehensive cloud services from strategy to execution, designed for modern enterprises that demand reliability and performance.
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {offerings.map((item) => (
              <StaggerItem key={item.title}>
                <motion.div whileHover={{ y: -6 }} transition={{ duration: 0.25 }} className="card-dark p-8 h-full">
                  <div className="ibox mb-5">{item.icon}</div>
                  <h3 className="text-lg font-semibold text-white mb-3">{item.title}</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed mb-4">{item.description}</p>
                  <span className="pill text-xs">{item.tag}</span>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Cloud Platforms */}
      <section className="bg-section-alt py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
              Multi-Cloud <span className="gt">Expertise</span>
            </h2>
            <p className="text-zinc-400 text-lg max-w-2xl mb-16">
              Deep platform expertise across all three major cloud providers, so you get the best solution for every workload.
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid md:grid-cols-3 gap-8">
            {platforms.map((p) => (
              <StaggerItem key={p.short}>
                <motion.div whileHover={{ y: -6 }} transition={{ duration: 0.25 }} className="card-glow p-8 h-full">
                  <div className="ibox-lg mb-6">
                    <span className="text-sm font-bold" style={{ color: 'var(--text-primary)' }}>{p.short}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--text-primary)' }}>{p.name}</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed mb-6">{p.description}</p>
                  <div className="space-y-2">
                    {p.features.map((f) => (
                      <div key={f} className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-cyan-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm text-zinc-300">{f}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-base py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>
                Why Choose <span className="gt">CloudTrio</span>
              </h2>
              <p className="text-zinc-400 text-lg mb-10">
                We combine deep platform expertise with an engineering-first mindset. Every engagement is backed by certified architects and a track record of measurable outcomes.
              </p>
              <div className="space-y-4">
                {whyUsFeatures.map((feature) => (
                  <div key={feature} className="flex items-center gap-3 p-3 rounded-lg border" style={{ borderColor: 'var(--border)', background: 'var(--bg-card)' }}>
                    <svg className="w-5 h-5 text-violet-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-zinc-300">{feature}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <StaggerContainer className="grid grid-cols-2 gap-5">
                {whyUsStats.map((s) => (
                  <StaggerItem key={s.label}>
                    <div className="card-dark p-6 text-center">
                      <div className="stat-num">{s.value}</div>
                      <div className="text-sm text-zinc-500 mt-2">{s.label}</div>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="bg-section-alt py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
              Our <span className="gt">Approach</span>
            </h2>
            <p className="text-zinc-400 text-lg max-w-2xl mb-16">
              A proven four-step methodology that takes you from assessment to cloud excellence with minimal disruption.
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {approach.map((item, i) => (
              <StaggerItem key={item.step}>
                <div className="relative">
                  <div className="card-dark p-8 h-full">
                    <div className="w-12 h-12 rounded-full bg-violet-600/20 border border-violet-500/30 flex items-center justify-center mb-5">
                      <span className="text-lg font-bold text-violet-400">{item.step}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-3">{item.title}</h3>
                    <p className="text-sm text-zinc-400 leading-relaxed">{item.description}</p>
                  </div>
                  {i < approach.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                      <svg className="w-6 h-6 text-violet-500/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  )}
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Industries */}
      <section className="bg-base py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
              Industries We <span className="gt">Serve</span>
            </h2>
            <p className="text-zinc-400 text-lg max-w-2xl mb-16">
              Trusted by organizations across verticals, each with unique compliance, performance, and scaling requirements.
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((ind) => (
              <StaggerItem key={ind.name}>
                <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.2 }} className="card-dark p-7 h-full">
                  <h3 className="text-base font-semibold text-white mb-2">{ind.name}</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">{ind.desc}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-cta py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>Ready to modernize your cloud?</h2>
            <p className="text-zinc-300 text-lg mb-10 max-w-2xl mx-auto">
              Talk to our architects and get a free assessment of your current infrastructure. No strings attached.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact" className="btn-primary">Get Started</Link>
              <Link to="/pricing" className="btn-secondary">View Pricing</Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
