import { motion } from 'framer-motion'
import AnimatedSection, { StaggerContainer, StaggerItem } from './AnimatedSection'

const offerings = [
  {
    title: 'Cloud Migration',
    desc: 'Migrate to the cloud and simplify your workflow. CloudTrio offers robust cloud migration services that enables you to grow your business efficiently and productively. Get access to your data and applications whenever and wherever you need it.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
      </svg>
    ),
    color: '#4f46e5',
    bgClass: 'bg-indigo-50',
    borderColor: 'border-indigo-100',
    hoverBorder: 'hover:border-indigo-300',
    textColor: 'text-indigo-600',
  },
  {
    title: 'Cloud Management & Optimization',
    desc: 'CloudTrio cloud managed services is a resilient and powerful cloud environment with built-in security and disaster recovery to handle crucial workloads and safeguard your data and applications.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    ),
    color: '#0ea5e9',
    bgClass: 'bg-sky-50',
    borderColor: 'border-sky-100',
    hoverBorder: 'hover:border-sky-300',
    textColor: 'text-sky-600',
  },
  {
    title: 'Cloud Security',
    desc: 'Stay ahead of the threats in your cloud environment by transforming your manual and reactive security practices into a more standardized, automated, and integrated approach. CloudTrio handcrafts managed cloud security services to meet your unique security needs.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    color: '#10b981',
    bgClass: 'bg-emerald-50',
    borderColor: 'border-emerald-100',
    hoverBorder: 'hover:border-emerald-300',
    textColor: 'text-emerald-600',
  },
  {
    title: 'Cloud Infrastructure (IaaS)',
    desc: 'CloudTrio helps organizations plan, architect, build and integrate cloud infrastructure solutions across private, public, and multi-cloud environments. We have dedicated infrastructure teams for Azure, AWS, and Google Cloud Platform.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
      </svg>
    ),
    color: '#a855f7',
    bgClass: 'bg-purple-50',
    borderColor: 'border-purple-100',
    hoverBorder: 'hover:border-purple-300',
    textColor: 'text-purple-600',
  },
  {
    title: 'Cloud Application (PaaS)',
    desc: 'CloudTrio builds cloud applications that offer easy scale-out and hardware decoupling while rendering enterprises with greater agility, resilience, and portability across varied cloud environments.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    color: '#f59e0b',
    bgClass: 'bg-amber-50',
    borderColor: 'border-amber-100',
    hoverBorder: 'hover:border-amber-300',
    textColor: 'text-amber-600',
  },
  {
    title: 'Software as a Service (SaaS)',
    desc: 'Enabling an agile SaaS infrastructure to compress your software and applications development lifecycle. We provide end-to-end automated solutions and leverage highly scalable and extreme storage performance at massive scale.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
    color: '#ec4899',
    bgClass: 'bg-pink-50',
    borderColor: 'border-pink-100',
    hoverBorder: 'hover:border-pink-300',
    textColor: 'text-pink-600',
  },
]

const platforms = [
  {
    name: 'Microsoft Azure',
    desc: 'Our cloud services based on the Microsoft Azure cloud platform help you deploy and scale powerful applications and APIs that lets you move faster, achieve more in your business and save money.',
    gradient: 'from-blue-500 to-cyan-400',
    letter: 'A',
  },
  {
    name: 'Amazon Web Services',
    desc: 'Explore the benefits of Amazon Web Services with CloudTrio that offers a wide spectrum of remote computing and cloud services solutions to fuel your business growth.',
    gradient: 'from-amber-500 to-orange-400',
    letter: 'AWS',
  },
  {
    name: 'Google Cloud Platform',
    desc: 'CloudTrio is a Google Cloud Platform Partner helping clients worldwide accelerate their business with Google Cloud. Whether its consultation, deployment, migration, or support, we help in all phases.',
    gradient: 'from-emerald-400 to-blue-500',
    letter: 'G',
  },
]

export default function CloudServices() {
  return (
    <section id="cloud-services" className="py-16 lg:py-20 relative bg-white">
      <div className="sep" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-8">
          <p className="text-sm font-semibold text-indigo-500 tracking-wider uppercase mb-4">Cloud Services</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Efficient storage for <span className="gradient-text">mission-critical data</span>
          </h2>
          <p className="text-slate-400 text-lg">
            Efficient storage for mission-critical data with secure cloud solutions
          </p>
        </AnimatedSection>

        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16" delay={0.15}>
          <p className="text-slate-600 leading-relaxed">
            Partnering with leading cloud service providers like Azure, AWS and Google Cloud enables us in managing efficient storage for mission-critical data. Be it cloud applications development, cloud architecture design, cloud migration, DevOps — our cloud experts handle it effortlessly.
          </p>
        </AnimatedSection>

        {/* Offerings Grid */}
        <div className="mb-24">
          <AnimatedSection className="text-center mb-12">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Offerings</h3>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Scale up. Scale right. We offer a wide range of cloud solutions to transform your IT ecosystem into a highly responsive and efficient business landscape.
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {offerings.map((o) => (
              <StaggerItem key={o.title}>
                <motion.div
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className={`bg-white rounded-2xl p-8 h-full border border-slate-100 ${o.hoverBorder} hover:shadow-lg transition-all duration-300`}
                  style={{ borderTopWidth: '3px', borderTopColor: 'transparent' }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderTopColor = o.color }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderTopColor = 'transparent' }}
                >
                  <div
                    className={`w-12 h-12 rounded-xl ${o.bgClass} flex items-center justify-center mb-6 ${o.textColor}`}
                  >
                    {o.icon}
                  </div>
                  <h4 className="text-lg font-semibold text-slate-800 mb-3">{o.title}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">{o.desc}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        {/* Cloud Platforms */}
        <div>
          <AnimatedSection className="text-center mb-12">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Cloud <span className="gradient-text-warm">Platforms</span>
            </h3>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Consulting, designing, developing, integrating and implementing cloud solutions tailored to your needs!
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {platforms.map((p) => (
              <StaggerItem key={p.name}>
                <motion.div
                  whileHover={{ y: -4, scale: 1.01 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className="bg-white rounded-2xl p-8 text-center h-full border border-slate-100 hover:border-indigo-200 hover:shadow-lg transition-all duration-300"
                >
                  <div
                    className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${p.gradient} flex items-center justify-center text-white font-bold text-lg shadow-lg`}
                  >
                    {p.letter}
                  </div>
                  <h4 className="text-lg font-semibold text-slate-800 mb-3">{p.name}</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">{p.desc}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  )
}
