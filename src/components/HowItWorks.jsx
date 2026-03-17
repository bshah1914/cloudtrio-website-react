import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import AnimatedSection, { StaggerContainer, StaggerItem } from './AnimatedSection'

const steps = [
  {
    num: '1',
    title: 'Connect Your Cloud',
    description: 'Create an IAM role with read-only access. CloudTrio uses STS AssumeRole for secure, temporary credentials. Setup completes in under 5 minutes.',
    details: ['IAM Role setup', 'STS AssumeRole', '< 5 min deploy'],
    gradient: 'from-violet-500 to-purple-600',
  },
  {
    num: '2',
    title: 'Auto-Discovery',
    description: 'CloudTrio automatically scans and catalogs your infrastructure across 18+ AWS services, collecting tags, metadata, and resource relationships.',
    details: ['18+ services', 'Tags & metadata', 'Resource mapping'],
    gradient: 'from-cyan-400 to-blue-500',
  },
  {
    num: '3',
    title: 'Analyze',
    description: 'CloudLunar AI analyzes P95 utilization metrics, 90-day cost trends, and CloudWatch data to build a comprehensive optimization profile.',
    details: ['P95 metrics', '90-day cost analysis', 'CloudWatch data'],
    gradient: 'from-emerald-400 to-teal-500',
  },
  {
    num: '4',
    title: 'Recommendations',
    description: 'Get actionable recommendations powered by 25+ optimization rules. Each comes with confidence scores, risk levels, and estimated savings.',
    details: ['25+ rules', 'Confidence scores', 'Risk levels'],
    gradient: 'from-pink-500 to-rose-500',
  },
  {
    num: '5',
    title: 'Optimize & Automate',
    description: 'Apply optimizations with one-click actions. Set up automated policies, track savings over time, and continuously improve your cloud efficiency.',
    details: ['One-click actions', 'Track savings', 'Auto-policies'],
    gradient: 'from-amber-400 to-orange-500',
  },
]

export default function HowItWorks() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center'],
  })
  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <section id="how-it-works" className="bg-section-alt py-16 lg:py-20 relative overflow-hidden">
      <div className="grid-overlay absolute inset-0 pointer-events-none opacity-30" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-20">
          <span className="pill mb-5 inline-flex">How It Works</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5" style={{ color: 'var(--text-primary)' }}>
            From <span className="gt">connect</span> to{' '}
            <span className="gt-warm">optimized</span> in minutes
          </h2>
          <p className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            Five simple steps to complete cloud visibility, AI-powered recommendations, and automated optimization.
          </p>
        </AnimatedSection>

        <div ref={containerRef} className="relative max-w-3xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-6 lg:left-8 top-0 bottom-0 w-0.5">
            <div className="tl-line w-full h-full opacity-20" />
            <motion.div
              className="tl-line w-full absolute top-0 origin-top"
              style={{ height: lineHeight }}
            />
          </div>

          <StaggerContainer className="space-y-12">
            {steps.map((step, i) => (
              <StaggerItem key={step.num}>
                <div className="relative pl-16 lg:pl-20">
                  {/* Timeline dot */}
                  <div className="absolute left-[13px] lg:left-[19px] top-1">
                    <div className="tl-dot" />
                  </div>

                  <motion.div
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                    className="card-dark p-6"
                  >
                    {/* Step number badge */}
                    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r ${step.gradient} text-white text-xs font-bold mb-4`}>
                      Step {step.num}
                    </div>

                    <h3 className="text-lg font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>{step.title}</h3>
                    <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>{step.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {step.details.map((detail) => (
                        <span key={detail} className="pill text-[11px]">
                          {detail}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  )
}
