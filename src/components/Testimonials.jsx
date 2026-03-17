import { motion } from 'framer-motion'
import AnimatedSection, { StaggerContainer, StaggerItem } from './AnimatedSection'

const testimonials = [
  {
    name: 'Rajesh Patel',
    title: 'VP of Engineering',
    company: 'FinServe',
    metric: '$47K/mo saved',
    metricPill: 'pill-green',
    quote: 'CloudLunar flagged S3 buckets missing lifecycle policies across 14 accounts. We implemented the recommendations and saw savings within the first week.',
    gradient: 'from-violet-500 to-purple-600',
  },
  {
    name: 'Sarah Chen',
    title: 'Cloud Architect',
    company: 'DataStream',
    metric: '$23K/mo saved',
    metricPill: 'pill-green',
    quote: "We had over 200 unattached EBS volumes we didn't even know about. CloudLunar found them on the first scan and the ROI was immediate.",
    gradient: 'from-cyan-400 to-blue-500',
  },
  {
    name: 'Michael Torres',
    title: 'CTO',
    company: 'ScaleUp Health',
    metric: 'Replaced 3 tools',
    metricPill: 'pill-cyan',
    quote: "Replaced three separate tools with one platform. The CIS and SOC 2 compliance views alone are worth the subscription for our healthcare workloads.",
    gradient: 'from-emerald-400 to-teal-500',
  },
  {
    name: 'Priya Sharma',
    title: 'DevOps Lead',
    company: 'E-commerce Plus',
    metric: '$31K/mo saved',
    metricPill: 'pill-green',
    quote: 'Within the first month, CloudLunar surfaced over 180 actionable recommendations. Our team went from guessing to precision optimization overnight.',
    gradient: 'from-pink-500 to-rose-500',
  },
  {
    name: 'James Wilson',
    title: 'Platform Engineer',
    company: 'GameForge',
    metric: '40 idle Lambdas found',
    metricPill: 'pill-orange',
    quote: 'The Lambda analysis blew us away. We had 40 idle functions running for months and had no visibility until CloudLunar highlighted them.',
    gradient: 'from-amber-400 to-orange-500',
  },
  {
    name: 'Lisa Anderson',
    title: 'Director of Infrastructure',
    company: 'MediaFlow',
    metric: '$18K/mo saved',
    metricPill: 'pill-green',
    quote: 'CloudWatch Logs retention policies were costing us a fortune. CloudLunar identified every log group with infinite retention and we fixed it in a day.',
    gradient: 'from-blue-500 to-indigo-600',
  },
]

export default function Testimonials() {
  return (
    <section className="bg-base py-16 lg:py-20 relative overflow-hidden">
      <div className="orb w-[500px] h-[500px] bg-purple-600 -top-40 right-0" />
      <div className="orb w-[400px] h-[400px] bg-cyan-500 bottom-0 -left-40" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <AnimatedSection className="text-center mb-16">
          <span className="pill pill-pink mb-5 inline-flex">Customer Stories</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5" style={{ color: 'var(--text-primary)' }}>
            Trusted by <span className="gt-warm">cloud-first teams</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            Real results from real engineering teams using CloudTrio and CloudLunar.
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <StaggerItem key={t.name}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="card-dark p-6 h-full flex flex-col"
              >
                {/* Quote mark */}
                <svg className="w-7 h-7 text-violet-500/30 mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10H0z" />
                </svg>

                <p className="text-sm leading-relaxed flex-1 mb-5" style={{ color: 'var(--text-secondary)' }}>
                  &ldquo;{t.quote}&rdquo;
                </p>

                <div className="mb-4">
                  <span className={`pill ${t.metricPill} text-[11px]`}>{t.metric}</span>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                  {/* Gradient avatar */}
                  <div className={`w-9 h-9 rounded-full bg-gradient-to-br ${t.gradient} flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}>
                    {t.name.split(' ').map((n) => n[0]).join('')}
                  </div>
                  <div>
                    <div className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>{t.name}</div>
                    <div className="text-xs" style={{ color: 'var(--text-muted)' }}>{t.title}, {t.company}</div>
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
