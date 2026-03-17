import { motion } from 'framer-motion'
import AnimatedSection, { StaggerContainer, StaggerItem } from './AnimatedSection'

const securityOps = [
  {
    title: 'Business Security Needs Assessment',
    desc: 'CloudTrio experts consult with your team to understand your business objectives and goals. Our team then conducts a needs assessment to align your security requirements with your business vision.',
  },
  {
    title: 'Security & Compliance Driven Architecture',
    desc: 'We design security controls and best practices to address the identified business needs. The architecture aims to deliver a protected and scalable platform for innovation.',
  },
  {
    title: 'Security and Compliance Implementation',
    desc: 'CloudTrio implements the approved controls and processes to ensure protection of your IT environments. We also do business consulting to help you bring about any change to processes that may be required.',
  },
  {
    title: 'Continuous Monitoring and Protection',
    desc: 'Threats are continuously evolving hence security measures need to change too. CloudTrio Security Operations as a Service offers continuous protection by actively monitoring and remediating threats and vulnerabilities.',
  },
]

const complianceProcess = [
  {
    title: 'Gap Assessment',
    desc: 'In-depth analysis of compliance gaps against applicable industry and regulatory frameworks.',
    bgClass: 'bg-sky-50',
    textColor: 'text-sky-600',
    borderColor: 'border-sky-200',
  },
  {
    title: 'Gap Remediation',
    desc: 'Design controls to address compliance gaps — standard operating procedures, best practices.',
    bgClass: 'bg-purple-50',
    textColor: 'text-purple-600',
    borderColor: 'border-purple-200',
  },
  {
    title: 'Compliance Readiness',
    desc: 'Map a clear path to compliance certification with internal audits and reviews to highlight areas of improvement.',
    bgClass: 'bg-emerald-50',
    textColor: 'text-emerald-600',
    borderColor: 'border-emerald-200',
  },
]

const devSecOpsPoints = [
  'Faster time to market for new apps and updates',
  'Build, release and operate with more confidence',
  'Reduced mean time to recovery (MTTR) from failure',
  'Fewer failures and reduced lead time for fixing',
  'Replaces one-off, point-in-time security assessments',
  'Reduce cost of buying, integrating, and maintaining several point solutions',
  'Enable drill-down from security dashboard right up to the line of code',
  'Single pane of glass, integrated security dashboards to capture unresolved vulnerabilities and metrics',
]

export default function CloudSecurity() {
  return (
    <section id="security" className="py-16 lg:py-20 relative bg-soft">
      <div className="sep" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-semibold text-emerald-500 tracking-wider uppercase mb-4">Cloud Security</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Keep your hybrid environments <span className="gradient-text">secure and compliant</span>
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            The cloud has gained quick ground, not just as an enabler of enterprise digital transformation, but as the backbone of the always on, anywhere, anytime economy. With growing number of users, apps and devices operating from outside corporate perimeters, cybersecurity is now acknowledged as a business risk, not just an IT problem.
          </p>
        </AnimatedSection>

        {/* Security Operations */}
        <AnimatedSection className="mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Security Operations for Complete <span className="gradient-text-warm">Peace of Mind</span>
              </h3>
              <p className="text-slate-600 mb-4 leading-relaxed">
                Security threats change and evolve over time hence your cloud infrastructure needs security that responds appropriately. CloudTrio offers a full spectrum of Security and Compliance services that start with your current state and grows with your needs.
              </p>
              <p className="text-slate-600 leading-relaxed">
                We have developed a proven advisory and implementation framework to deliver unmatched protection through efficient security posture management and threat detection. The end-to-end program entails security needs analysis, security-led design, implementation of controls and measures, and continuous monitoring.
              </p>
            </div>

            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {securityOps.map((s, i) => (
                <StaggerItem key={s.title}>
                  <motion.div
                    whileHover={{ y: -4, scale: 1.02 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    className="bg-white rounded-2xl p-5 h-full border border-slate-100 hover:border-emerald-200 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center mb-3">
                      <span className="text-emerald-600 font-bold text-sm">{i + 1}</span>
                    </div>
                    <h4 className="text-sm font-semibold text-slate-800 mb-2">{s.title}</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">{s.desc}</p>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </AnimatedSection>

        {/* Continuous Compliance */}
        <AnimatedSection className="mb-24" delay={0.1}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <StaggerContainer className="space-y-4">
              {complianceProcess.map((c, i) => (
                <StaggerItem key={c.title}>
                  <motion.div
                    whileHover={{ x: 8 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    className={`bg-white rounded-2xl p-6 border border-slate-100 hover:border-indigo-200 hover:shadow-lg transition-all duration-300 ${i === 1 ? 'ml-0 lg:ml-8' : ''}`}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`w-8 h-8 rounded-lg ${c.bgClass} border ${c.borderColor} flex items-center justify-center`}>
                        <span className={`${c.textColor} font-bold text-sm`}>{i + 1}</span>
                      </div>
                      <h4 className={`text-base font-semibold ${c.textColor}`}>{c.title}</h4>
                    </div>
                    <p className="text-sm text-slate-500 ml-11">{c.desc}</p>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Continuous <span className="gradient-text">Compliance</span>
              </h3>
              <p className="text-slate-600 mb-4 leading-relaxed">
                Cloud services complicate the regulatory and internal compliance environment of organizations. Industry regulatory requirements like HIPAA, CCPA, and GDPR for data privacy are mandatory for gaining trust of consumers. The hybrid IT environments with on-premise and multi-cloud configurations must comply with cybersecurity frameworks.
              </p>
              <p className="text-slate-600 leading-relaxed">
                CloudTrio has built a compliance process based on years of experience. Our security and compliance solutions are designed with compliance standards at their core to help you stay fully compliant with your industry standards.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {['HIPAA', 'CCPA', 'GDPR', 'SOC2', 'ISO 27001'].map((tag) => (
                  <span
                    key={tag}
                    className="bg-indigo-50 px-3 py-1 rounded-full text-xs font-medium text-indigo-600 border border-indigo-100"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* DevSecOps */}
        <AnimatedSection delay={0.15}>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
              DevSecOps — <span className="gradient-text-warm">Secure by Default</span>
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              DevOps moves at a rapid pace and is great for churning out apps at the speed of business. But more software means more security flaws. CloudTrio helps you with tight integration and automation of security tools in DevOps pipeline. Our DevSecOps approach is based on SHIFT LEFT and FAIL FAST for iterations of small units of work promoting fast feedback, ensuring compliance and reducing the cost of security.
            </p>
          </div>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {devSecOpsPoints.map((point, i) => (
              <StaggerItem key={i}>
                <motion.div
                  whileHover={{ y: -4, scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className="bg-white rounded-2xl p-5 h-full border border-slate-100 hover:border-indigo-200 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center mb-3">
                    <span className="text-white font-bold text-sm">{i + 1}</span>
                  </div>
                  <p className="text-sm text-slate-700 leading-relaxed">{point}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </AnimatedSection>
      </div>
    </section>
  )
}
