import { motion } from 'framer-motion'
import { CheckCircle2, Users, TrendingUp, Brain, Monitor, Clock } from 'lucide-react'
import Card from '../components/common/Card'
import Button from '../components/common/Button'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default function OurProgram() {
  const { t } = useTranslation()
  const programDays = [
    {
      day: 1,
      title: t('pages.ourProgram.fiveDayProgram.days.day1.title'),
      description: t('pages.ourProgram.fiveDayProgram.days.day1.description'),
    },
    {
      day: 2,
      title: t('pages.ourProgram.fiveDayProgram.days.day2.title'),
      description: t('pages.ourProgram.fiveDayProgram.days.day2.description'),
    },
    {
      day: 3,
      title: t('pages.ourProgram.fiveDayProgram.days.day3.title'),
      description: t('pages.ourProgram.fiveDayProgram.days.day3.description'),
    },
    {
      day: 4,
      title: t('pages.ourProgram.fiveDayProgram.days.day4.title'),
      description: t('pages.ourProgram.fiveDayProgram.days.day4.description'),
    },
    {
      day: 5,
      title: t('pages.ourProgram.fiveDayProgram.days.day5.title'),
      description: t('pages.ourProgram.fiveDayProgram.days.day5.description'),
    },
  ]

  const comparisonData = [
    { 
      aspect: t('pages.ourProgram.difference.comparison.initialDiagnosis.aspect'), 
      us: t('pages.ourProgram.difference.comparison.initialDiagnosis.us'), 
      kcare: t('pages.ourProgram.difference.comparison.initialDiagnosis.kcare') 
    },
    { 
      aspect: t('pages.ourProgram.difference.comparison.equipmentFitting.aspect'), 
      us: t('pages.ourProgram.difference.comparison.equipmentFitting.us'), 
      kcare: t('pages.ourProgram.difference.comparison.equipmentFitting.kcare') 
    },
    { 
      aspect: t('pages.ourProgram.difference.comparison.treatmentStart.aspect'), 
      us: t('pages.ourProgram.difference.comparison.treatmentStart.us'), 
      kcare: t('pages.ourProgram.difference.comparison.treatmentStart.kcare') 
    },
    { 
      aspect: t('pages.ourProgram.difference.comparison.followUpSupport.aspect'), 
      us: t('pages.ourProgram.difference.comparison.followUpSupport.us'), 
      kcare: t('pages.ourProgram.difference.comparison.followUpSupport.kcare') 
    },
    { 
      aspect: t('pages.ourProgram.difference.comparison.totalTimeline.aspect'), 
      us: t('pages.ourProgram.difference.comparison.totalTimeline.us'), 
      kcare: t('pages.ourProgram.difference.comparison.totalTimeline.kcare') 
    },
    { 
      aspect: t('pages.ourProgram.difference.comparison.successRate.aspect'), 
      us: t('pages.ourProgram.difference.comparison.successRate.us'), 
      kcare: t('pages.ourProgram.difference.comparison.successRate.kcare') 
    },
  ]

  const supportFeatures = [
    { 
      icon: Monitor, 
      title: t('pages.ourProgram.supportProgram.features.dailyDataUpload.title'), 
      description: t('pages.ourProgram.supportProgram.features.dailyDataUpload.description') 
    },
    { 
      icon: Brain, 
      title: t('pages.ourProgram.supportProgram.features.aiAnalysis.title'), 
      description: t('pages.ourProgram.supportProgram.features.aiAnalysis.description') 
    },
    { 
      icon: Users, 
      title: t('pages.ourProgram.supportProgram.features.careTeamCheckins.title'), 
      description: t('pages.ourProgram.supportProgram.features.careTeamCheckins.description') 
    },
    { 
      icon: TrendingUp, 
      title: t('pages.ourProgram.supportProgram.features.progressTracking.title'), 
      description: t('pages.ourProgram.supportProgram.features.progressTracking.description') 
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
            {t('pages.ourProgram.title')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-neutral-700 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: t('pages.ourProgram.subtitle') }}
          />
        </div>
      </section>

      {/* The K-Sleep Care Difference */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-secondary mb-4">{t('pages.ourProgram.difference.title')}</h2>
            <p className="text-lg text-neutral-700">
              {t('pages.ourProgram.difference.subtitle')}
            </p>
          </motion.div>

          <Card className="overflow-hidden p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-primary text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">{t('pages.ourProgram.difference.aspect')}</th>
                    <th className="px-6 py-4 text-left font-semibold">{t('pages.ourProgram.difference.traditionalUS')}</th>
                    <th className="px-6 py-4 text-left font-semibold">{t('pages.ourProgram.difference.kcare')}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200">
                  {comparisonData.map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-neutral-50'}>
                      <td className="px-6 py-4 font-semibold text-secondary">{row.aspect}</td>
                      <td className="px-6 py-4 text-neutral-700">{row.us}</td>
                      <td className="px-6 py-4 text-primary font-semibold">{row.kcare}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>
      </section>

      {/* 5-Day Program */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-secondary mb-4">{t('pages.ourProgram.fiveDayProgram.title')}</h2>
              <p 
                className="text-sm text-primary font-semibold"
                dangerouslySetInnerHTML={{ __html: t('pages.ourProgram.fiveDayProgram.subtitle') }}
              />
            </div>
          </motion.div>

          <div className="space-y-6">
            {programDays.map((day, index) => (
              <motion.div
                key={day.day}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card>
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-16 h-16 bg-primary text-white rounded-lg flex items-center justify-center font-bold text-2xl">
                      {day.day}
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-2xl font-semibold text-secondary mb-3">{day.title}</h3>
                      <p className="text-neutral-700">{day.description}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 90-Day Support */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-secondary mb-4">{t('pages.ourProgram.supportProgram.title')}</h2>
            <p className="text-lg text-neutral-700 max-w-2xl mx-auto">
              {t('pages.ourProgram.supportProgram.subtitle')}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {supportFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card>
                  <feature.icon className="text-primary mb-4" size={32} />
                  <h3 className="text-xl font-semibold text-secondary mb-2">{feature.title}</h3>
                  <p className="text-neutral-700">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>

          <Card className="bg-gradient-to-br from-primary/5 to-primary-light/5">
            <h3 className="text-2xl font-semibold text-secondary mb-6">{t('pages.ourProgram.supportProgram.schedule.title')}</h3>
            <div className="grid md:grid-cols-4 gap-4">
              <div>
                <div className="font-semibold text-primary mb-2">{t('pages.ourProgram.supportProgram.schedule.week1to2')}</div>
                <div className="text-sm text-neutral-700">{t('pages.ourProgram.supportProgram.schedule.week1to2Desc')}</div>
              </div>
              <div>
                <div className="font-semibold text-primary mb-2">{t('pages.ourProgram.supportProgram.schedule.week3to4')}</div>
                <div className="text-sm text-neutral-700">{t('pages.ourProgram.supportProgram.schedule.week3to4Desc')}</div>
              </div>
              <div>
                <div className="font-semibold text-primary mb-2">{t('pages.ourProgram.supportProgram.schedule.week5to8')}</div>
                <div className="text-sm text-neutral-700">{t('pages.ourProgram.supportProgram.schedule.week5to8Desc')}</div>
              </div>
              <div>
                <div className="font-semibold text-primary mb-2">{t('pages.ourProgram.supportProgram.schedule.week9to12')}</div>
                <div className="text-sm text-neutral-700">{t('pages.ourProgram.supportProgram.schedule.week9to12Desc')}</div>
              </div>
            </div>
          </Card>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <Card className="bg-success/10 border-2 border-success/20">
              <h3 className="text-2xl font-semibold text-secondary mb-4">{t('pages.ourProgram.supportProgram.successMetrics.title')}</h3>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-success mb-2">{t('pages.ourProgram.supportProgram.successMetrics.usage')}</div>
                  <div className="text-sm text-neutral-700">{t('pages.ourProgram.supportProgram.successMetrics.usageDesc')}</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-success mb-2">{t('pages.ourProgram.supportProgram.successMetrics.ahiReduction')}</div>
                  <div className="text-sm text-neutral-700">{t('pages.ourProgram.supportProgram.successMetrics.ahiReductionDesc')}</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-success mb-2">{t('pages.ourProgram.supportProgram.successMetrics.satisfaction')}</div>
                  <div className="text-sm text-neutral-700">{t('pages.ourProgram.supportProgram.successMetrics.satisfactionDesc')}</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-success mb-2">{t('pages.ourProgram.supportProgram.successMetrics.abandonment')}</div>
                  <div className="text-sm text-neutral-700">{t('pages.ourProgram.supportProgram.successMetrics.abandonmentDesc')}</div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Technology & Innovation */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-secondary mb-4">{t('pages.ourProgram.technology.title')}</h2>
            <p className="text-lg text-neutral-700">
              {t('pages.ourProgram.technology.subtitle')}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <Brain className="text-primary mb-4" size={32} />
              <h3 className="text-xl font-semibold text-secondary mb-2">{t('pages.ourProgram.technology.aiAssessment.title')}</h3>
              <p className="text-neutral-700 mb-4">
                {t('pages.ourProgram.technology.aiAssessment.description')}
              </p>
              <ul className="space-y-2">
                {(t('pages.ourProgram.technology.aiAssessment.features', { returnObjects: true }) as string[]).map((feature, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <CheckCircle2 className="text-success mt-0.5 flex-shrink-0" size={18} />
                    <span className="text-sm text-neutral-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card>
              <Users className="text-primary mb-4" size={32} />
              <h3 className="text-xl font-semibold text-secondary mb-2">{t('pages.ourProgram.technology.customMask.title')}</h3>
              <p className="text-neutral-700 mb-4">
                {t('pages.ourProgram.technology.customMask.description')}
              </p>
              <ul className="space-y-2">
                {(t('pages.ourProgram.technology.customMask.features', { returnObjects: true }) as string[]).map((feature, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <CheckCircle2 className="text-success mt-0.5 flex-shrink-0" size={18} />
                    <span className="text-sm text-neutral-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card>
              <Monitor className="text-primary mb-4" size={32} />
              <h3 className="text-xl font-semibold text-secondary mb-2">{t('pages.ourProgram.technology.dataCollection.title')}</h3>
              <p className="text-neutral-700 mb-4">
                {t('pages.ourProgram.technology.dataCollection.description')}
              </p>
              <ul className="space-y-2">
                {(t('pages.ourProgram.technology.dataCollection.features', { returnObjects: true }) as string[]).map((feature, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <CheckCircle2 className="text-success mt-0.5 flex-shrink-0" size={18} />
                    <span className="text-sm text-neutral-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card>
              <TrendingUp className="text-primary mb-4" size={32} />
              <h3 className="text-xl font-semibold text-secondary mb-2">{t('pages.ourProgram.technology.patientDashboard.title')}</h3>
              <p className="text-neutral-700 mb-4">
                {t('pages.ourProgram.technology.patientDashboard.description')}
              </p>
              <ul className="space-y-2">
                {(t('pages.ourProgram.technology.patientDashboard.features', { returnObjects: true }) as string[]).map((feature, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <CheckCircle2 className="text-success mt-0.5 flex-shrink-0" size={18} />
                    <span className="text-sm text-neutral-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">{t('pages.ourProgram.cta.title')}</h2>
            <p className="text-xl text-white/90 mb-8">
              {t('pages.ourProgram.cta.subtitle')}
            </p>
            <Link to="/contact">
              <button className="bg-white text-primary hover:bg-neutral-100 font-semibold rounded-lg px-8 py-3 text-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white shadow-medium hover:shadow-large">
                {t('pages.ourProgram.cta.button')}
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

