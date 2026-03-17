import { motion } from 'framer-motion'
import AnimatedSection from './AnimatedSection'
import CloudLunar from './CloudLunar'
import AWSServices from './AWSServices'

export default function OurProducts() {
  return (
    <section id="products" className="relative">
      {/* Products Header */}
      <div className="bg-base py-24 lg:py-28 relative overflow-hidden">
        <div className="orb w-[600px] h-[600px] bg-purple-600 -top-60 left-1/2" />
        <div className="grid-overlay absolute inset-0 pointer-events-none opacity-30" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection className="text-center max-w-4xl mx-auto">
            <motion.span
              className="pill mb-6 inline-flex"
              whileHover={{ scale: 1.05 }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
              Our Products
            </motion.span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Products built for <span className="gt-warm">cloud excellence</span>
            </h2>
            <p className="text-zinc-400 text-lg max-w-3xl mx-auto mb-8 leading-relaxed">
              CloudTrio's product suite combines intelligent cost optimization, compliance monitoring, and infrastructure management into powerful tools that engineering teams love.
            </p>

            {/* Product navigation tabs */}
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href="#cloudlunar"
                className="group flex items-center gap-2 px-5 py-2.5 rounded-xl bg-violet-500/10 border border-violet-500/20 text-violet-400 font-medium text-sm hover:bg-violet-500/20 hover:border-violet-500/40 transition-all"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
                CloudLunar -- Cost Optimization
              </a>
              <a
                href="#aws-services"
                className="group flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-medium text-sm hover:bg-cyan-500/20 hover:border-cyan-500/40 transition-all"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
                AWS Service Coverage
              </a>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* CloudLunar Section */}
      <CloudLunar />

      {/* AWS Services Section */}
      <AWSServices />
    </section>
  )
}
