import { motion } from 'framer-motion'
import AnimatedSection, { StaggerContainer, StaggerItem } from './AnimatedSection'

export default function About() {
  return (
    <section id="about" className="py-16 lg:py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-indigo-50 text-indigo-600 border border-indigo-100 mb-6">
            About Us
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Who we <span className="gradient-text">are</span>
          </h2>
          <p className="text-slate-600 text-lg">
            CloudTrio is driven by a passion for simplifying cloud infrastructure and helping businesses unlock their full potential.
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission */}
          <StaggerItem>
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="bg-white rounded-2xl p-10 border border-slate-100 shadow-sm hover:shadow-lg transition-all h-full border-t-4 border-t-indigo-500"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-indigo-600 flex items-center justify-center mb-6 shadow-lg shadow-indigo-500/20">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Our <span className="gradient-text">Mission</span>
              </h3>
              <p className="text-slate-600 leading-relaxed">
                To consistently evolve better ICT products &amp; practices, partner with the world&apos;s leading enterprises, and help connect businesses to digital consumers through innovative cloud solutions.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="text-xs bg-indigo-50 text-indigo-600 px-3 py-1 rounded-full border border-indigo-100 font-medium">Innovation</span>
                <span className="text-xs bg-indigo-50 text-indigo-600 px-3 py-1 rounded-full border border-indigo-100 font-medium">Partnership</span>
                <span className="text-xs bg-indigo-50 text-indigo-600 px-3 py-1 rounded-full border border-indigo-100 font-medium">Excellence</span>
              </div>
            </motion.div>
          </StaggerItem>

          {/* Vision */}
          <StaggerItem>
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="bg-white rounded-2xl p-10 border border-slate-100 shadow-sm hover:shadow-lg transition-all h-full border-t-4 border-t-purple-500"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center mb-6 shadow-lg shadow-purple-500/20">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Our <span className="gradient-text-warm">Vision</span>
              </h3>
              <p className="text-slate-600 leading-relaxed">
                To enable technological convergence. The existence of such a market will enable the automation of discovery processes and their integration into existing software systems, transforming how businesses leverage the cloud.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="text-xs bg-purple-50 text-purple-600 px-3 py-1 rounded-full border border-purple-100 font-medium">Convergence</span>
                <span className="text-xs bg-purple-50 text-purple-600 px-3 py-1 rounded-full border border-purple-100 font-medium">Automation</span>
                <span className="text-xs bg-purple-50 text-purple-600 px-3 py-1 rounded-full border border-purple-100 font-medium">Transformation</span>
              </div>
            </motion.div>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  )
}
