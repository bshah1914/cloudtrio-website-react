import { motion } from 'framer-motion'
import AnimatedSection, { StaggerContainer, StaggerItem } from './AnimatedSection'

const integrations = [
  { name: 'AWS', abbr: 'AWS', gradient: 'from-amber-400 to-orange-500' },
  { name: 'Kubernetes', abbr: 'K8s', gradient: 'from-blue-400 to-blue-600' },
  { name: 'Terraform', abbr: 'TF', gradient: 'from-violet-500 to-purple-600' },
  { name: 'Docker', abbr: 'DKR', gradient: 'from-cyan-400 to-blue-500' },
  { name: 'GitHub', abbr: 'GH', gradient: 'from-zinc-400 to-zinc-600' },
  { name: 'CI/CD', abbr: 'CI', gradient: 'from-orange-400 to-red-500' },
  { name: 'Azure', abbr: 'AZ', gradient: 'from-blue-500 to-indigo-600' },
  { name: 'GCP', abbr: 'GCP', gradient: 'from-red-400 to-red-600' },
  { name: 'Jenkins', abbr: 'JK', gradient: 'from-red-500 to-rose-600' },
  { name: 'Ansible', abbr: 'ANS', gradient: 'from-zinc-300 to-zinc-500' },
]

export default function Integrations() {
  return (
    <section id="integrations" className="bg-base py-16 lg:py-20 relative overflow-hidden">
      <div className="orb w-[400px] h-[400px] bg-cyan-500 top-0 right-0" />

      <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10">
        <AnimatedSection className="text-center mb-16">
          <span className="pill pill-cyan mb-5 inline-flex">Integrations</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5" style={{ color: 'var(--text-primary)' }}>
            Works with your <span className="gt-green">entire stack</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            Native integrations with all major cloud providers and DevOps platforms.
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {integrations.map((item) => (
            <StaggerItem key={item.name}>
              <motion.div
                whileHover={{ y: -4, scale: 1.05 }}
                transition={{ duration: 0.25 }}
                className="card-dark p-6 flex flex-col items-center justify-center gap-3 text-center"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center`}>
                  <span className="text-sm font-bold" style={{ color: 'var(--text-primary)' }}>{item.abbr}</span>
                </div>
                <span className="text-xs font-medium" style={{ color: 'var(--text-secondary)' }}>{item.name}</span>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
