import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import AnimatedSection, { StaggerContainer, StaggerItem } from '../components/AnimatedSection'

const aiServices = [
  {
    title: 'Machine Learning Models',
    description: 'Custom ML models trained on your data for classification, regression, clustering, and anomaly detection. From tabular data to time series, we build models that deliver actionable predictions.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: 'Natural Language Processing',
    description: 'Text analytics, sentiment analysis, named entity recognition, document classification, and conversational AI powered by transformer models and large language models.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
      </svg>
    ),
  },
  {
    title: 'Computer Vision',
    description: 'Image classification, object detection, segmentation, OCR, and video analytics. Deploy vision models for quality inspection, security monitoring, and automated content moderation.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
  },
  {
    title: 'Predictive Analytics',
    description: 'Forecast demand, predict churn, optimize pricing, and anticipate maintenance needs. Data-driven decision making powered by statistical models and ensemble methods.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    title: 'AI Chatbots & Assistants',
    description: 'Intelligent conversational agents powered by LLMs with RAG pipelines, tool calling, and multi-turn context. Customer support, internal knowledge bases, and domain-specific assistants.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
      </svg>
    ),
  },
  {
    title: 'MLOps & Model Deployment',
    description: 'End-to-end ML pipelines with automated training, evaluation, versioning, and deployment. Model monitoring, drift detection, and A/B testing in production environments.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
]

const cloudAIFeatures = [
  { title: 'Anomaly Detection', description: 'ML models that learn normal spending patterns and alert on deviations before they become costly surprises.' },
  { title: 'Predictive Scaling', description: 'Forecast traffic patterns and pre-scale infrastructure to meet demand without over-provisioning resources.' },
  { title: 'Cost Forecasting', description: 'Accurate 30/60/90-day spend predictions using historical data, seasonality, and growth trajectory analysis.' },
  { title: 'Intelligent Rightsizing', description: 'Analyze actual CPU, memory, and network utilization to recommend optimal instance types and sizes.' },
]

const techStack = [
  { name: 'TensorFlow', color: 'pill-orange' },
  { name: 'PyTorch', color: 'pill-pink' },
  { name: 'scikit-learn', color: 'pill-cyan' },
  { name: 'Hugging Face', color: 'pill-orange' },
  { name: 'LangChain', color: 'pill-green' },
  { name: 'OpenAI API', color: 'pill' },
  { name: 'AWS SageMaker', color: 'pill-orange' },
  { name: 'Google Vertex AI', color: 'pill-cyan' },
  { name: 'MLflow', color: 'pill-cyan' },
  { name: 'Kubeflow', color: 'pill-green' },
  { name: 'ONNX', color: 'pill' },
  { name: 'FastAPI', color: 'pill-green' },
]

const useCases = [
  {
    industry: 'Healthcare',
    title: 'AI-Assisted Diagnosis',
    description: 'Computer vision models that analyze medical imaging (X-rays, MRIs, CT scans) to assist radiologists in identifying anomalies. Achieved 94% accuracy in early detection of pulmonary conditions, reducing diagnostic time by 60%.',
    pill: 'pill-green',
  },
  {
    industry: 'Finance',
    title: 'Real-Time Fraud Detection',
    description: 'Ensemble ML models processing millions of transactions per second to identify fraudulent patterns. Reduced false positives by 70% while catching 99.2% of fraudulent transactions in real-time.',
    pill: 'pill-cyan',
  },
  {
    industry: 'E-commerce',
    title: 'Recommendation Engine',
    description: 'Personalized product recommendations using collaborative filtering and deep learning. Increased average order value by 35% and customer engagement by 50% through contextual, real-time suggestions.',
    pill: 'pill-pink',
  },
  {
    industry: 'Manufacturing',
    title: 'Predictive Maintenance',
    description: 'IoT sensor data analysis with time-series ML models to predict equipment failures before they occur. Reduced unplanned downtime by 80% and maintenance costs by 45% across 12 factory locations.',
    pill: 'pill-orange',
  },
]

const aiProcess = [
  { step: '01', title: 'Data Collection', description: 'Aggregate, clean, and validate data from multiple sources. Establish data pipelines, quality checks, and governance frameworks.' },
  { step: '02', title: 'Feature Engineering', description: 'Transform raw data into meaningful features. Domain expertise meets statistical analysis to create the signals that drive model performance.' },
  { step: '03', title: 'Model Training', description: 'Iterative experimentation with multiple architectures, hyperparameter tuning, and cross-validation to find the optimal model for your use case.' },
  { step: '04', title: 'Evaluation', description: 'Rigorous testing with held-out datasets, bias detection, fairness audits, and performance benchmarks against business KPIs.' },
  { step: '05', title: 'Deployment', description: 'Production-grade deployment with model serving, A/B testing, monitoring dashboards, and automated retraining pipelines.' },
]

export default function AIMLPage() {
  return (
    <div>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-hero relative overflow-hidden">
        <div className="orb w-72 h-72 bg-violet-600 -top-36 -right-36" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection>
            <nav className="flex items-center gap-2 text-sm mb-8">
              <Link to="/" className="text-zinc-500 hover:text-violet-400">Home</Link>
              <span className="text-zinc-600">&rarr;</span>
              <span className="text-zinc-300">AI & Machine Learning</span>
            </nav>
            <div className="pill pill-orange mb-6">AI/ML SOLUTIONS</div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight" style={{ color: 'var(--text-primary)' }}>
              AI-Powered <span className="gt-orange">Intelligence</span>
            </h1>
            <p className="text-xl text-zinc-400 max-w-2xl">
              From custom ML models to production-grade AI systems, we help organizations harness the power of artificial intelligence to drive real business outcomes.
            </p>
          </AnimatedSection>
        </div>
        <div className="glow-line mt-20" />
      </section>

      {/* AI/ML Services */}
      <section className="bg-base py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
              Our AI/ML <span className="gt-orange">Services</span>
            </h2>
            <p className="text-zinc-400 text-lg max-w-2xl mb-16">
              End-to-end AI solutions from data strategy to production deployment. We build intelligent systems that learn, adapt, and deliver value.
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {aiServices.map((svc) => (
              <StaggerItem key={svc.title}>
                <motion.div whileHover={{ y: -6 }} transition={{ duration: 0.25 }} className="card-dark p-8 h-full">
                  <div className="ibox mb-5">{svc.icon}</div>
                  <h3 className="text-lg font-semibold text-white mb-3">{svc.title}</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">{svc.description}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* AI for Cloud Optimization */}
      <section className="bg-section-alt py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>
                AI for Cloud <span className="gt-orange">Optimization</span>
              </h2>
              <p className="text-zinc-400 text-lg leading-relaxed mb-8">
                Our flagship product CloudLunar uses AI to transform how organizations manage cloud costs. Machine learning models analyze usage patterns, detect anomalies, and deliver intelligent recommendations that save teams an average of 40% on cloud spend.
              </p>
              <div className="space-y-4">
                {cloudAIFeatures.map((feat) => (
                  <div key={feat.title} className="card-dark p-5">
                    <h4 className="text-sm font-semibold text-white mb-1">{feat.title}</h4>
                    <p className="text-xs text-zinc-500 leading-relaxed">{feat.description}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <motion.div
                whileHover={{ y: -4 }}
                className="card-glow p-8"
              >
                <div className="text-center mb-8">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-orange-500/20 to-amber-500/20 border border-orange-400/30 flex items-center justify-center mx-auto mb-4">
                    <svg className="w-10 h-10 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>CloudLunar AI Engine</h3>
                  <p className="text-sm text-zinc-500">Powered by machine learning</p>
                </div>
                <div className="space-y-3">
                  {['Anomaly Detection', 'Pattern Recognition', 'Cost Prediction', 'Auto-Optimization'].map((item, i) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                      className="flex items-center gap-3 p-3 rounded-lg bg-zinc-800/50"
                    >
                      <div className="w-2 h-2 rounded-full bg-orange-400" />
                      <span className="text-sm text-zinc-300">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="bg-base py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
                AI/ML Technology <span className="gt-orange">Stack</span>
              </h2>
              <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
                We leverage the best frameworks and platforms in the AI/ML ecosystem to deliver production-ready solutions.
              </p>
            </div>
          </AnimatedSection>

          <StaggerContainer className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech) => (
              <StaggerItem key={tech.name}>
                <motion.span
                  whileHover={{ scale: 1.1, y: -2 }}
                  transition={{ duration: 0.2 }}
                  className={`${tech.color} px-5 py-2.5 text-sm font-medium cursor-default inline-block`}
                >
                  {tech.name}
                </motion.span>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Use Cases */}
      <section className="bg-section-alt py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
              Real-World <span className="gt-orange">Use Cases</span>
            </h2>
            <p className="text-zinc-400 text-lg max-w-2xl mb-16">
              AI solutions deployed across industries, delivering measurable business impact and transforming operations.
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid sm:grid-cols-2 gap-8">
            {useCases.map((uc) => (
              <StaggerItem key={uc.industry}>
                <motion.div whileHover={{ y: -6 }} transition={{ duration: 0.25 }} className="card-dark p-8 h-full">
                  <span className={`${uc.pill} text-xs mb-4 inline-block`}>{uc.industry}</span>
                  <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--text-primary)' }}>{uc.title}</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">{uc.description}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* AI Process */}
      <section className="bg-base py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
              Our AI <span className="gt-orange">Process</span>
            </h2>
            <p className="text-zinc-400 text-lg max-w-2xl mb-16">
              A rigorous, iterative methodology that takes you from raw data to production-grade AI systems.
            </p>
          </AnimatedSection>

          <div className="relative">
            <div className="tl-line" />
            <StaggerContainer className="space-y-8">
              {aiProcess.map((item) => (
                <StaggerItem key={item.step}>
                  <div className="relative pl-12">
                    <div className="tl-dot" />
                    <div className="card-dark p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-sm font-bold text-orange-400">{item.step}</span>
                        <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                      </div>
                      <p className="text-sm text-zinc-400 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-cta py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>Ready to leverage AI?</h2>
            <p className="text-zinc-300 text-lg mb-10 max-w-2xl mx-auto">
              Let&apos;s explore how AI and machine learning can transform your business. Start with a free consultation to identify high-impact opportunities.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact" className="btn-primary">Book AI Consultation</Link>
              <Link to="/products" className="btn-secondary">Explore CloudLunar</Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
