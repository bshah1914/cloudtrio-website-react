import { motion } from 'framer-motion'
import AnimatedSection, { StaggerContainer, StaggerItem } from './AnimatedSection'

const categories = {
  Compute: { pill: 'pill-cyan', color: 'text-cyan-400' },
  Database: { pill: 'pill', color: 'text-violet-400' },
  Storage: { pill: 'pill-green', color: 'text-emerald-400' },
  Network: { pill: 'pill-orange', color: 'text-orange-400' },
  Containers: { pill: 'pill-pink', color: 'text-pink-400' },
  Analytics: { pill: 'pill-cyan', color: 'text-cyan-400' },
  Messaging: { pill: 'pill', color: 'text-violet-400' },
  Monitoring: { pill: 'pill-green', color: 'text-emerald-400' },
  Billing: { pill: 'pill-orange', color: 'text-orange-400' },
}

const services = [
  { name: 'EC2', category: 'Compute', checks: ['Idle instance detection', 'Rightsizing recommendations', 'Reserved Instance coverage gaps'] },
  { name: 'RDS', category: 'Database', checks: ['Idle database instances', 'Multi-AZ vs Single-AZ cost', 'Instance class rightsizing'] },
  { name: 'S3', category: 'Storage', checks: ['Lifecycle policy gaps', 'Intelligent-Tiering candidates', 'Incomplete multipart uploads'] },
  { name: 'EBS Volumes', category: 'Storage', checks: ['Unattached volume detection', 'gp2 to gp3 migration', 'Over-provisioned IOPS'] },
  { name: 'Elastic IPs', category: 'Network', checks: ['Unassociated EIP charges', 'Unnecessary static IPs'] },
  { name: 'Load Balancers', category: 'Network', checks: ['Idle ALB/NLB detection', 'Cross-AZ data transfer', 'Target group health'] },
  { name: 'Lambda', category: 'Compute', checks: ['Over-provisioned memory', 'Unused functions', 'ARM64 migration savings'] },
  { name: 'NAT Gateways', category: 'Network', checks: ['High data processing costs', 'Redundant NAT Gateways'] },
  { name: 'EBS Snapshots', category: 'Storage', checks: ['Orphaned snapshots', 'Aged snapshot cleanup', 'Cross-region copy costs'] },
  { name: 'DynamoDB', category: 'Database', checks: ['On-demand vs provisioned mode', 'Over-provisioned RCU/WCU', 'Auto-scaling gaps'] },
  { name: 'ElastiCache', category: 'Database', checks: ['Idle cache clusters', 'Node type rightsizing', 'Reserved node coverage'] },
  { name: 'Redshift', category: 'Analytics', checks: ['Cluster utilization analysis', 'Serverless migration candidate', 'Reserved node gaps'] },
  { name: 'CloudFront', category: 'Network', checks: ['Price class optimization', 'Cache hit ratio analysis', 'Unused distributions'] },
  { name: 'ECS / Fargate', category: 'Containers', checks: ['Task CPU/memory rightsizing', 'Fargate Spot candidates', 'Idle service detection'] },
  { name: 'OpenSearch', category: 'Analytics', checks: ['Domain utilization check', 'Instance type rightsizing', 'Storage tier optimization'] },
  { name: 'SQS', category: 'Messaging', checks: ['Dead letter queue costs', 'Inactive queue cleanup'] },
  { name: 'CloudWatch Logs', category: 'Monitoring', checks: ['Log retention policy audit', 'High-ingest log groups', 'Unused log streams'] },
  { name: 'Cost Explorer', category: 'Billing', checks: ['90-day spend trends', 'Budget threshold alerts', 'Service-level cost breakdown'] },
]

export default function AWSServices() {
  return (
    <section id="aws-services" className="bg-section-alt py-16 lg:py-20 relative overflow-hidden">
      <div className="grid-overlay absolute inset-0 pointer-events-none opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <span className="pill pill-cyan mb-5 inline-flex">Full AWS Coverage</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>
            <span className="gt">18+ AWS Services</span> Covered
          </h2>
          <p className="text-zinc-400 text-lg leading-relaxed">
            From compute to storage to networking -- CloudLunar scans every corner of your AWS infrastructure
            to find optimization opportunities you are missing.
          </p>
        </AnimatedSection>

        {/* Category legend */}
        <AnimatedSection delay={0.1} className="flex flex-wrap justify-center gap-3 mb-12">
          {Object.entries(categories).map(([name, cat]) => (
            <span
              key={name}
              className={`${cat.pill} text-[11px]`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-current" />
              {name}
            </span>
          ))}
        </AnimatedSection>

        {/* Services grid */}
        <StaggerContainer className="feature-grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const cat = categories[service.category]
            return (
              <StaggerItem key={service.name}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                  className="p-5 h-full"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <h4 className="text-white font-semibold text-sm">{service.name}</h4>
                    <span className={`${cat.pill} text-[10px] !py-0 !px-2`}>
                      {service.category}
                    </span>
                  </div>
                  <ul className="space-y-1.5">
                    {service.checks.map((check) => (
                      <li key={check} className="flex items-start gap-2 text-xs text-zinc-400">
                        <svg className={`w-3.5 h-3.5 flex-shrink-0 mt-0.5 ${cat.color}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {check}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </StaggerItem>
            )
          })}
        </StaggerContainer>

        {/* Bottom CTA */}
        <AnimatedSection delay={0.2} className="text-center mt-16">
          <div className="card-dark p-8 max-w-2xl mx-auto">
            <p className="text-white font-semibold text-lg mb-2">
              New services added every release
            </p>
            <p className="text-zinc-400 text-sm mb-6">
              CloudLunar v4.0 continuously expands coverage. Request a service and we will prioritize it.
            </p>
            <a
              href="#contact"
              className="btn-primary inline-flex"
            >
              Request a Service
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
