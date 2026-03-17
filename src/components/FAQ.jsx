import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import AnimatedSection, { StaggerContainer, StaggerItem } from './AnimatedSection'

const faqs = [
  {
    question: 'How does CloudLunar connect to my AWS account?',
    answer: 'CloudLunar uses AWS IAM roles with STS AssumeRole for secure, temporary access. You create a read-only IAM role in your account, and CloudLunar assumes that role using short-lived credentials. No long-term access keys are ever stored. The entire setup takes less than 5 minutes using our CloudFormation template.',
  },
  {
    question: 'What AWS services does CloudLunar scan?',
    answer: 'CloudLunar auto-discovers 18+ AWS services including EC2, RDS, S3, Lambda, EBS, ElastiCache, ECS, EKS, CloudFront, DynamoDB, Redshift, OpenSearch, NAT Gateways, Elastic IPs, Load Balancers (ALB/NLB), SageMaker, EMR, SQS, CloudWatch Logs, and Cost Explorer. We continuously add new services based on customer feedback.',
  },
  {
    question: 'Is the data shown in the dashboard real?',
    answer: '100% real. Every metric comes directly from CloudWatch, every cost figure from AWS Cost Explorer, and every resource from the respective AWS service APIs. CloudLunar never generates fake or synthetic data. Dashboards refresh automatically based on your configured scan frequency.',
  },
  {
    question: 'How accurate are the optimization recommendations?',
    answer: 'Each recommendation includes a confidence score (typically 85-99%) based on data quality and statistical stability. We use P95 percentile utilization analysis (not averages) over 14-90 day windows to avoid false positives. Risk levels (None, Low, Medium, High) help you prioritize safely.',
  },
  {
    question: 'Can I connect multiple AWS accounts?',
    answer: 'Absolutely. CloudLunar supports multi-account setups including AWS Organizations. Each account uses its own IAM role and gets scanned independently. The dashboard aggregates data with per-account filtering. Starter supports 5 accounts, Professional up to 20, and Enterprise supports unlimited accounts.',
  },
  {
    question: 'Does CloudLunar modify anything in my AWS account?',
    answer: 'No. By default, CloudLunar uses strictly read-only API calls and never creates, modifies, or deletes any AWS resources. When you choose to apply a recommendation via one-click actions, it generates the exact API calls for your review before execution.',
  },
  {
    question: 'What optimization checks does the engine run?',
    answer: 'CloudLunar runs 25+ optimization checks including: idle resource detection (P95 CPU < 5%), EC2 rightsizing, Reserved Instance and Savings Plans recommendations, S3 lifecycle policies, EBS gp2-to-gp3 migration, unattached EBS volumes, unused Elastic IPs, Lambda memory tuning, DynamoDB billing mode optimization, and more.',
  },
  {
    question: 'What is the technology stack behind CloudLunar?',
    answer: 'Frontend: React with Tailwind CSS. Backend: Python FastAPI with async SQLAlchemy, PostgreSQL/TimescaleDB for metrics, and Redis for caching. AWS integration: boto3, CloudWatch, Cost Explorer, STS. The infrastructure runs serverless on AWS Lambda with DynamoDB for state management.',
  },
  {
    question: 'How often does CloudLunar scan my infrastructure?',
    answer: 'Scan frequency depends on your plan: Free gets basic on-demand scans, Starter has regular scheduled scans, Professional gets daily automated scans, and Enterprise has continuous real-time scanning. Cost data refreshes every 24 hours. On-demand scans are available anytime on all plans.',
  },
  {
    question: 'Is CloudTrio SOC 2 compliant?',
    answer: 'Yes. CloudTrio maintains SOC 2 Type II compliance. All data is encrypted at rest (AES-256) and in transit (TLS 1.3). We enforce complete audit logging, RBAC with least-privilege access, and zero persistent credential storage. We undergo annual third-party audits.',
  },
]

function FAQItem({ faq, isOpen, onToggle, index }) {
  return (
    <div className={`card-dark overflow-hidden transition-all ${isOpen ? '!border-violet-500/30 shadow-lg shadow-violet-500/5' : ''}`}>
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-5 text-left"
      >
        <div className="flex items-center gap-4">
          <span className="text-sm font-medium w-6 text-right flex-shrink-0" style={{ color: 'var(--text-muted)' }}>
            {String(index + 1).padStart(2, '0')}
          </span>
          <span className="text-sm font-medium transition-colors" style={{ color: isOpen ? 'var(--text-primary)' : 'var(--text-secondary)' }}>
            {faq.question}
          </span>
        </div>
        <motion.svg
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="w-4 h-4 flex-shrink-0 ml-4 transition-colors"
          style={{ color: isOpen ? '#a78bfa' : 'var(--text-muted)' }}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4" />
        </motion.svg>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5">
              <div className="ml-10 text-sm leading-relaxed border-t border-white/5 pt-4" style={{ color: 'var(--text-secondary)' }}>
                {faq.answer}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faq" className="bg-base py-16 lg:py-20 relative overflow-hidden">
      <div className="orb w-[400px] h-[400px] bg-cyan-500 -top-40 -right-40" />

      <div className="max-w-3xl mx-auto px-6 lg:px-8 relative z-10">
        <AnimatedSection className="text-center mb-14">
          <span className="pill pill-cyan mb-5 inline-flex">FAQ</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5" style={{ color: 'var(--text-primary)' }}>
            Frequently Asked <span className="gt">Questions</span>
          </h2>
          <p className="text-lg max-w-xl mx-auto leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            Everything you need to know about CloudTrio and CloudLunar.
          </p>
        </AnimatedSection>

        <StaggerContainer className="space-y-2">
          {faqs.map((faq, i) => (
            <StaggerItem key={i}>
              <FAQItem
                faq={faq}
                index={i}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
              />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
