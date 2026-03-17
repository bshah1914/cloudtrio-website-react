import { motion } from 'framer-motion'
import AnimatedSection, { StaggerContainer, StaggerItem } from './AnimatedSection'

const services = [
  { num: '01', title: 'DevOps Consulting', desc: 'Strategic assessment of your current workflows and a tailored roadmap to accelerate delivery pipelines.' },
  { num: '02', title: 'Monitoring & Logging', desc: 'End-to-end observability with real-time dashboards, alerting, and centralized log aggregation.' },
  { num: '03', title: 'DevOps Automation', desc: 'CI/CD pipelines, infrastructure as code, and automated testing to eliminate manual bottlenecks.' },
  { num: '04', title: 'Infrastructure Management', desc: 'Scalable, resilient cloud infrastructure designed for high availability and cost efficiency.' },
  { num: '05', title: 'Configuration Management', desc: 'Consistent, version-controlled environments across dev, staging, and production.' },
  { num: '06', title: 'Testing & Security', desc: 'Shift-left security practices, vulnerability scanning, and automated compliance checks.' },
]

const benefits = [
  {
    title: 'Faster Development Cycle',
    metric: '60% Faster',
    desc: 'Accelerate release velocity with streamlined CI/CD pipelines and automated workflows.',
    iconColor: 'text-indigo-500',
    iconBg: 'bg-indigo-50',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: 'Enhance Performance',
    metric: '99.9% Uptime',
    desc: 'Proactive monitoring and auto-scaling ensure your applications perform at their peak.',
    iconColor: 'text-sky-500',
    iconBg: 'bg-sky-50',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6m6 0h6m-6 0V9a2 2 0 012-2h2a2 2 0 012 2v10m6 0v-4a2 2 0 00-2-2h-2a2 2 0 00-2 2v4" />
      </svg>
    ),
  },
  {
    title: 'Save Money',
    metric: 'Up to 40%',
    desc: 'Optimize cloud spend with right-sizing, reserved instances, and waste elimination.',
    iconColor: 'text-emerald-500',
    iconBg: 'bg-emerald-50',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Better Collaboration',
    metric: '3x Efficiency',
    desc: 'Bridge the gap between development and operations with shared tools and processes.',
    iconColor: 'text-purple-500',
    iconBg: 'bg-purple-50',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
]

const whyUs = [
  {
    title: 'Dedicated Teams',
    desc: 'A fully committed team of certified DevOps engineers focused exclusively on your success.',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
  {
    title: 'Integrity & Transparency',
    desc: 'Clear communication, honest timelines, and full visibility into every stage of your project.',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: 'Flexible Engagement Models',
    desc: 'Choose from dedicated teams, time & material, or fixed-price models to suit your budget and timeline.',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zm0 8a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zm12 0a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
  },
  {
    title: 'Competitive Pricing',
    desc: 'Enterprise-grade DevOps expertise at pricing that makes sense for startups and scale-ups alike.',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
      </svg>
    ),
  },
]

export default function DevOps() {
  return (
    <section id="devops" className="py-24 lg:py-32 relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <AnimatedSection>
          <div className="text-center max-w-3xl mx-auto mb-20">
            <motion.span
              className="inline-block px-4 py-1.5 rounded-full bg-sky-50 text-sky-600 text-sm font-medium mb-6 border border-sky-100"
              whileHover={{ scale: 1.05 }}
            >
              DevOps Excellence
            </motion.span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              <span className="gradient-text">DevOps Solutions</span>
            </h2>
            <p className="text-slate-600 text-lg">
              Cutting-edge consulting and engineering to transform your software delivery pipeline from concept to production.
            </p>
            <div className="sep mx-auto mt-8" />
          </div>
        </AnimatedSection>

        {/* Top DevOps Services -- 2-col */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-24">
          <AnimatedSection>
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
                Top DevOps Services &amp; Solutions Company
              </h3>
              <p className="text-slate-600 mb-4 leading-relaxed">
                At CloudTrio, we specialize in optimizing IT processes by bridging the gap between development and operations teams. Our holistic approach ensures faster releases, fewer failures, and a culture of continuous improvement.
              </p>
              <p className="text-slate-600 leading-relaxed mb-8">
                By collaborating dev and ops under a unified framework, we eliminate silos, automate repetitive tasks, and empower your teams to focus on what matters most — building great software that scales.
              </p>
              <div className="flex flex-wrap gap-3">
                {['AWS', 'Kubernetes', 'Terraform', 'Jenkins', 'Docker', 'Ansible'].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full bg-indigo-50 text-sm text-indigo-600 font-medium border border-indigo-100"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
              <h4 className="text-lg font-semibold text-slate-900 mb-2">Hi-end DevOps Services to Streamline Your Business</h4>
              <p className="text-sm text-slate-500 mb-6">
                We specialize in offering customized DevOps Services with expertise in end-to-end automated deployment, continuous integration, testing and managing complex infrastructure.
              </p>
              <StaggerContainer className="space-y-3">
                {services.map((s) => (
                  <StaggerItem key={s.num}>
                    <motion.div
                      className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 group cursor-pointer border border-transparent hover:border-sky-200 transition-all duration-300"
                      whileHover={{ x: 8, backgroundColor: '#f0f9ff' }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <span className="w-8 h-8 rounded-md bg-sky-50 border border-sky-200 flex items-center justify-center text-sky-600 text-xs font-bold flex-shrink-0">
                        {s.num}
                      </span>
                      <div>
                        <h5 className="text-slate-800 font-semibold group-hover:text-indigo-600 transition-colors">
                          {s.title}
                        </h5>
                        <p className="text-slate-500 text-sm mt-1">{s.desc}</p>
                      </div>
                    </motion.div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </AnimatedSection>
        </div>

        {/* Benefits */}
        <AnimatedSection>
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              Benefits That <span className="gradient-text">Drive Results</span>
            </h3>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Measurable outcomes that impact your bottom line from day one.
            </p>
          </div>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {benefits.map((b) => (
            <StaggerItem key={b.title}>
              <motion.div
                className="bg-white rounded-2xl p-6 text-center h-full border border-slate-100 hover:border-indigo-200 hover:shadow-lg transition-all duration-300"
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className={`w-14 h-14 rounded-xl ${b.iconBg} flex items-center justify-center ${b.iconColor} mx-auto mb-4`}>
                  {b.icon}
                </div>
                <div className="inline-block px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 text-sm font-bold mb-3 border border-emerald-100">
                  {b.metric}
                </div>
                <h4 className={`font-semibold text-lg mb-2 text-slate-800`}>{b.title}</h4>
                <p className="text-slate-500 text-sm">{b.desc}</p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Why Choose CloudTrio */}
        <AnimatedSection>
          <div className="mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <motion.span
                  className="inline-block px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-600 text-sm font-medium mb-4 border border-indigo-100"
                  whileHover={{ scale: 1.05 }}
                >
                  Why Choose Us
                </motion.span>
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                  Why Choose <span className="gradient-text">CloudTrio</span> for DevOps?
                </h3>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  With in-depth analysis of your complete IT operation and infrastructure, we ensure to define a successful IT strategy and deliver hi-end DevOps solutions for your swift business growth.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  We work on the latest frameworks and technologies to deliver user-friendly, scalable, secure, and innovative business solutions using Agile methodology with frequent scrum events for optimizing practices.
                </p>
              </div>

              <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {whyUs.map((w) => (
                  <StaggerItem key={w.title}>
                    <motion.div
                      className="bg-white rounded-2xl p-5 h-full border border-slate-100 hover:border-indigo-200 hover:shadow-lg transition-all duration-300"
                      whileHover={{ y: -6 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500 to-indigo-600 flex items-center justify-center text-white mb-3">
                        {w.icon}
                      </div>
                      <h4 className="text-sm font-semibold text-slate-800 mb-2">{w.title}</h4>
                      <p className="text-xs text-slate-500 leading-relaxed">{w.desc}</p>
                    </motion.div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
