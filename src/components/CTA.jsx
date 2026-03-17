import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import AnimatedSection from './AnimatedSection'

export default function CTA() {
  return (
    <section className="bg-cta py-16 lg:py-20">
      <div className="max-w-3xl mx-auto px-6 lg:px-8 relative z-10">
        <AnimatedSection>
          <div className="text-center">
            {/* Glow line accent */}
            <div className="glow-line w-24 mx-auto mb-8" />

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5">
              Ready to optimize your cloud?
            </h2>
            <p className="text-lg text-zinc-400 mb-10 max-w-xl mx-auto leading-relaxed">
              Start with our free plan -- connect your AWS account in under 5 minutes
              and get your first recommendations today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                to="/contact"
                className="btn-primary"
              >
                Start Free Trial
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link
                to="/contact"
                className="btn-secondary"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
