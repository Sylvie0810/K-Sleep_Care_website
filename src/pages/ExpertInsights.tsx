import { motion } from 'framer-motion'
import { BookOpen, User, GraduationCap, Award } from 'lucide-react'
import Card from '../components/common/Card'

export default function ExpertInsights() {
  const articles = [
    {
      author: 'Dr. Lee Ji-hyun (이지현 원장)',
      title: 'Clinical Perspectives on Modern Sleep Apnea Treatment: Why Early Intervention Matters',
      excerpt: 'A comprehensive look at sleep apnea from a clinical perspective, discussing why early intervention is crucial and how modern treatment approaches are transforming patient outcomes.',
      credentials: [
        'Sleep Medicine Specialist',
        'International Sleep Expert (WASMI Certified)',
        'Director, Dream Sleep Clinic',
        '20+ years of clinical experience',
      ],
      status: 'Coming Soon',
    },
    {
      author: 'Prof. Lee In-ah (이인아 교수)',
      title: 'The Neuroscience of Sleep: How Sleep Apnea Affects Memory, Learning, and Brain Health',
      excerpt: 'Explore the brain science behind sleep apnea, understanding how sleep disruption impacts cognitive function, memory consolidation, and long-term brain health.',
      credentials: [
        'Professor, Seoul National University',
        'Department of Brain & Cognitive Sciences',
        'PhD in Neuroscience, University of Utah',
        'World expert in hippocampal learning & memory',
      ],
      status: 'Coming Soon',
    },
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-white to-primary-light/10 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-secondary mb-6"
          >
            Expert Insights
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-neutral-700"
          >
            Evidence-based articles from our medical advisory board
          </motion.p>
        </div>
      </section>

      {/* Articles */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {articles.map((article, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card>
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-light rounded-full flex items-center justify-center flex-shrink-0">
                      <User className="text-white" size={32} />
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center space-x-2 mb-2">
                        <h2 className="text-2xl font-semibold text-secondary">{article.author}</h2>
                        {article.status && (
                          <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                            {article.status}
                          </span>
                        )}
                      </div>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {article.credentials.map((cred, credIndex) => (
                          <div
                            key={credIndex}
                            className="flex items-center space-x-1 text-xs text-neutral-600"
                          >
                            <Award className="text-primary" size={14} />
                            <span>{cred}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-secondary mb-4">{article.title}</h3>
                  <p className="text-neutral-700 leading-relaxed mb-6">{article.excerpt}</p>

                  {article.status === 'Coming Soon' ? (
                    <div className="pt-4 border-t border-neutral-200">
                      <p className="text-neutral-600 italic">
                        This article will be available soon. Check back for updates or contact us to be 
                        notified when it's published.
                      </p>
                    </div>
                  ) : (
                    <button className="text-primary font-semibold hover:underline flex items-center space-x-2">
                      <BookOpen size={18} />
                      <span>Read Full Article</span>
                    </button>
                  )}
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory Board */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-secondary mb-4">Our Medical Advisory Board</h2>
            <p className="text-lg text-neutral-700">
              Leading experts in sleep medicine, neuroscience, and endocrinology
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <GraduationCap className="text-primary mb-4" size={32} />
              <h3 className="text-xl font-semibold text-secondary mb-2">Dr. Lee Ji-hyun</h3>
              <p className="text-primary font-semibold mb-3">Sleep Medicine Specialist</p>
              <ul className="space-y-2 text-sm text-neutral-700">
                <li>• WASMI Certified Sleep Specialist</li>
                <li>• Director, Dream Sleep Clinic</li>
                <li>• 20+ years clinical experience</li>
                <li>• International sleep expert</li>
              </ul>
            </Card>

            <Card>
              <GraduationCap className="text-primary mb-4" size={32} />
              <h3 className="text-xl font-semibold text-secondary mb-2">Prof. Lee In-ah</h3>
              <p className="text-primary font-semibold mb-3">Neuroscience Expert</p>
              <ul className="space-y-2 text-sm text-neutral-700">
                <li>• Seoul National University</li>
                <li>• Brain & Cognitive Sciences</li>
                <li>• PhD, University of Utah</li>
                <li>• Hippocampal learning & memory expert</li>
              </ul>
            </Card>

            <Card>
              <GraduationCap className="text-primary mb-4" size={32} />
              <h3 className="text-xl font-semibold text-secondary mb-2">Dr. Kim Shin-gon</h3>
              <p className="text-primary font-semibold mb-3">Endocrinology Professor</p>
              <ul className="space-y-2 text-sm text-neutral-700">
                <li>• Korea University College of Medicine</li>
                <li>• Harvard Medical School (former)</li>
                <li>• Metabolic diseases expert</li>
                <li>• Sleep-metabolic connections</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

