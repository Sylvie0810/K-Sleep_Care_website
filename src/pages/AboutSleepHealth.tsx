import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle2, AlertCircle, Heart, Brain, Activity, TrendingUp, ChevronDown } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { useState } from 'react'
import Card from '../components/common/Card'
import Button from '../components/common/Button'
import { Link } from 'react-router-dom'

export default function AboutSleepHealth() {
  const { t } = useTranslation()
  const [typesExpanded, setTypesExpanded] = useState(false)
  
  const nightSymptoms = t('aboutSleepHealth.symptoms.nightSymptoms', { returnObjects: true }) as string[]
  const daySymptoms = t('aboutSleepHealth.symptoms.daySymptoms', { returnObjects: true }) as string[]
  
  const healthRisks = [
    {
      icon: Heart,
      titleKey: 'aboutSleepHealth.healthRisks.cardiovascular.title',
      itemsKey: 'aboutSleepHealth.healthRisks.cardiovascular.items',
    },
    {
      icon: Activity,
      titleKey: 'aboutSleepHealth.healthRisks.metabolic.title',
      itemsKey: 'aboutSleepHealth.healthRisks.metabolic.items',
    },
    {
      icon: Brain,
      titleKey: 'aboutSleepHealth.healthRisks.cognitive.title',
      itemsKey: 'aboutSleepHealth.healthRisks.cognitive.items',
    },
    {
      icon: TrendingUp,
      titleKey: 'aboutSleepHealth.healthRisks.qualityOfLife.title',
      itemsKey: 'aboutSleepHealth.healthRisks.qualityOfLife.items',
    },
  ]

  const treatmentOptions = [
    {
      titleKey: 'aboutSleepHealth.treatment.cpap.title',
      descriptionKey: 'aboutSleepHealth.treatment.cpap.description',
      benefitsKey: 'aboutSleepHealth.treatment.cpap.benefits',
    },
    {
      titleKey: 'aboutSleepHealth.treatment.alternatives.title',
      descriptionKey: 'aboutSleepHealth.treatment.alternatives.description',
      benefitsKey: 'aboutSleepHealth.treatment.alternatives.benefits',
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
            {t('aboutSleepHealth.title')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-neutral-700"
          >
            {t('aboutSleepHealth.subtitle')}
          </motion.p>
        </div>
      </section>

      {/* Why Sleep Matters */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-secondary mb-6">{t('aboutSleepHealth.whyMatters.title')}</h2>
            <div className="prose prose-lg max-w-none text-neutral-700 space-y-6">
              <div className="bg-primary/5 border-l-4 border-primary pl-6 py-4 rounded-r-lg">
                <p className="text-lg font-semibold text-secondary mb-2" dangerouslySetInnerHTML={{ __html: t('aboutSleepHealth.whyMatters.quote') }} />
                <p className="text-sm text-neutral-600">{t('aboutSleepHealth.whyMatters.quoteAuthor')}</p>
              </div>
              <p>
                {t('aboutSleepHealth.whyMatters.p1')}
              </p>
              <p dangerouslySetInnerHTML={{ __html: t('aboutSleepHealth.whyMatters.p2') }} />
              <p>
                {t('aboutSleepHealth.whyMatters.p3')}
              </p>
              <p className="text-lg font-semibold text-secondary" dangerouslySetInnerHTML={{ __html: t('aboutSleepHealth.whyMatters.p4') }} />
            </div>
          </motion.div>
        </div>
      </section>

      {/* What is Sleep Apnea */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-secondary mb-6">{t('aboutSleepHealth.whatIs.title')}</h2>
            
            {/* Video Section */}
            <div className="mb-8">
              <video 
                controls 
                className="w-full rounded-xl shadow-soft"
                style={{ maxHeight: '500px' }}
              >
                <source src="/sleep-apnea-video.mp4" type="video/mp4" />
                브라우저가 비디오 태그를 지원하지 않습니다.
              </video>
            </div>
            
            {/* Airway Images */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <img 
                  src="/Airway_normal.png" 
                  alt="정상 기도" 
                  className="w-full max-w-[200px] mx-auto mb-3"
                />
                <p className="text-sm font-semibold text-neutral-700">정상 기도</p>
              </div>
              <div className="text-center">
                <img 
                  src="/Airway_partially_blocked.png" 
                  alt="부분 폐쇄 기도" 
                  className="w-full max-w-[200px] mx-auto mb-3"
                />
                <p className="text-sm font-semibold text-neutral-700">부분 폐쇄 기도</p>
              </div>
              <div className="text-center">
                <img 
                  src="/Airway_blocked.png" 
                  alt="막힌 기도" 
                  className="w-full max-w-[200px] mx-auto mb-3"
                />
                <p className="text-sm font-semibold text-neutral-700">막힌 기도</p>
              </div>
            </div>

            <div className="prose prose-lg max-w-none text-neutral-700 space-y-6 mb-8">
              <p>
                {t('aboutSleepHealth.whatIs.p1')}
              </p>
              <p>
                {t('aboutSleepHealth.whatIs.p2')}
              </p>
            </div>

            <Card className="mb-8">
              <button
                onClick={() => setTypesExpanded(!typesExpanded)}
                className="w-full flex items-center justify-between text-left"
              >
                <h3 className="text-2xl font-semibold text-secondary">{t('aboutSleepHealth.types.title')}</h3>
                <ChevronDown
                  className={`text-secondary transition-transform duration-200 ${
                    typesExpanded ? 'transform rotate-180' : ''
                  }`}
                  size={24}
                />
              </button>
              <AnimatePresence>
                {typesExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="space-y-4 pt-4">
                      <div>
                        <h4 className="font-semibold text-lg mb-2">{t('aboutSleepHealth.types.osa.title')}</h4>
                        <p className="text-neutral-700">
                          {t('aboutSleepHealth.types.osa.desc')}
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg mb-2">{t('aboutSleepHealth.types.csa.title')}</h4>
                        <p className="text-neutral-700">
                          {t('aboutSleepHealth.types.csa.desc')}
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg mb-2">{t('aboutSleepHealth.types.complex.title')}</h4>
                        <p className="text-neutral-700">
                          {t('aboutSleepHealth.types.complex.desc')}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Symptoms Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-secondary mb-6">{t('aboutSleepHealth.symptoms.title')}</h2>
            <p className="text-lg text-neutral-700 mb-2">
              {t('aboutSleepHealth.symptoms.subtitle')}
            </p>
            <p className="text-lg text-neutral-700 mb-8">
              {t('aboutSleepHealth.symptoms.subtitle2')}
            </p>
            <Card>
              <div className="space-y-6">
                {/* Night Symptoms */}
                <div>
                  <h3 className="text-xl font-semibold text-secondary mb-4">{t('aboutSleepHealth.symptoms.nightTitle')}</h3>
                  <ul className="space-y-3">
                    {nightSymptoms.map((symptom, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <AlertCircle className="text-warning mt-0.5 flex-shrink-0" size={20} />
                        <span className="text-neutral-700">{symptom}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Day Symptoms */}
                <div className="pt-4 border-t border-neutral-200">
                  <h3 className="text-xl font-semibold text-secondary mb-4">{t('aboutSleepHealth.symptoms.dayTitle')}</h3>
                  <ul className="space-y-3">
                    {daySymptoms.map((symptom, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <AlertCircle className="text-warning mt-0.5 flex-shrink-0" size={20} />
                        <span className="text-neutral-700">{symptom}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-neutral-200">
                <Link to="/contact">
                  <Button className="w-full sm:w-auto">
                    {t('aboutSleepHealth.symptoms.cta')}
                  </Button>
                </Link>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Health Risks */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-secondary mb-4">{t('aboutSleepHealth.healthRisks.title')}</h2>
            <p className="text-lg text-neutral-700">
              {t('aboutSleepHealth.healthRisks.subtitle')}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {healthRisks.map((risk, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="h-full"
              >
                <Card className="h-full flex flex-col">
                  <div className="flex items-center space-x-3 mb-4">
                    <risk.icon className="text-primary flex-shrink-0" size={32} />
                    <h3 className="text-xl font-semibold text-secondary">{t(risk.titleKey)}</h3>
                  </div>
                  <ul className="space-y-2 flex-grow">
                    {(t(risk.itemsKey, { returnObjects: true }) as string[]).map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start space-x-2">
                        <CheckCircle2 className="text-success mt-0.5 flex-shrink-0" size={18} />
                        <span className="text-neutral-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Prevalence Statistics */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gradient-to-br from-primary/5 to-primary-light/5 border-2 border-primary/20">
              <h2 className="text-3xl font-bold text-secondary mb-6">{t('aboutSleepHealth.prevalence.title')}</h2>
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">{t('aboutSleepHealth.prevalence.stat1')}</div>
                  <div className="text-neutral-700">{t('aboutSleepHealth.prevalence.stat1Label')}</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">{t('aboutSleepHealth.prevalence.stat2')}</div>
                  <div className="text-neutral-700">{t('aboutSleepHealth.prevalence.stat2Label')}</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">{t('aboutSleepHealth.prevalence.stat3')}</div>
                  <div className="text-neutral-700">{t('aboutSleepHealth.prevalence.stat3Label')}</div>
                </div>
              </div>
              <div className="pt-4 border-t border-primary/20">
                <div className="text-sm text-neutral-600 space-y-1 text-center">
                  <div>{t('aboutSleepHealth.prevalence.usStats')}</div>
                  <div>{t('aboutSleepHealth.prevalence.krStats')}</div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Treatment Options */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-secondary mb-4">{t('aboutSleepHealth.treatment.title')}</h2>
            <p className="text-lg text-neutral-700">
              {t('aboutSleepHealth.treatment.subtitle')}
            </p>
          </motion.div>

          <div className="space-y-6">
            {treatmentOptions.map((option, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card>
                  <h3 className="text-2xl font-semibold text-secondary mb-3">{t(option.titleKey)}</h3>
                  <p className="text-neutral-700 mb-4">{t(option.descriptionKey)}</p>
                  <ul className="grid md:grid-cols-2 gap-2">
                    {(t(option.benefitsKey, { returnObjects: true }) as string[]).map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-start space-x-2">
                        <CheckCircle2 className="text-success mt-0.5 flex-shrink-0" size={18} />
                        <span className="text-neutral-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <div className="bg-primary text-white rounded-xl shadow-soft p-6">
              <h3 className="text-2xl font-semibold mb-4 text-white">{t('aboutSleepHealth.treatment.approach.title')}</h3>
              <p 
                className="mb-6 text-white/90"
                dangerouslySetInnerHTML={{ __html: t('aboutSleepHealth.treatment.approach.description') }}
              />
              <Link to="/our-program">
                <button className="bg-white text-primary hover:bg-neutral-100 font-semibold rounded-lg px-6 py-2.5 text-base transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white shadow-medium hover:shadow-large">
                  {t('aboutSleepHealth.treatment.approach.cta')}
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

