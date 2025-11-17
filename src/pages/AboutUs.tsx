import { motion } from 'framer-motion'
import { Target, Eye, Heart, Award, Users, MapPin } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import Card from '../components/common/Card'

export default function AboutUs() {
  const { t } = useTranslation()
  
  const values = [
    {
      icon: Heart,
      titleKey: 'pages.aboutUs.values.patientCentered.title',
      descriptionKey: 'pages.aboutUs.values.patientCentered.description',
    },
    {
      icon: Award,
      titleKey: 'pages.aboutUs.values.innovationDriven.title',
      descriptionKey: 'pages.aboutUs.values.innovationDriven.description',
    },
    {
      icon: Target,
      titleKey: 'pages.aboutUs.values.evidenceBased.title',
      descriptionKey: 'pages.aboutUs.values.evidenceBased.description',
    },
    {
      icon: Users,
      titleKey: 'pages.aboutUs.values.accessible.title',
      descriptionKey: 'pages.aboutUs.values.accessible.description',
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
            {t('pages.aboutUs.hero.title')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-neutral-700"
          >
            {t('pages.aboutUs.hero.subtitle')}
          </motion.p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-gradient-to-br from-primary/5 to-primary-light/5">
                <Target className="text-primary mb-4" size={40} />
                <h2 className="text-3xl font-bold text-secondary mb-4">{t('pages.aboutUs.mission.title')}</h2>
                <p className="text-lg text-neutral-700 leading-relaxed">
                  {t('pages.aboutUs.mission.description')}
                </p>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-gradient-to-br from-primary-light/5 to-primary/5">
                <Eye className="text-primary mb-4" size={40} />
                <h2 className="text-3xl font-bold text-secondary mb-4">{t('pages.aboutUs.vision.title')}</h2>
                <p className="text-lg text-neutral-700 leading-relaxed">
                  {t('pages.aboutUs.vision.description')}
                </p>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-secondary mb-4">{t('pages.aboutUs.values.title')}</h2>
            <p className="text-lg text-neutral-700">
              {t('pages.aboutUs.values.subtitle')}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="text-center h-full">
                  <value.icon className="text-primary mx-auto mb-4" size={32} />
                  <h3 className="text-xl font-semibold text-secondary mb-2">{t(value.titleKey)}</h3>
                  <p className="text-neutral-700">{t(value.descriptionKey)}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-secondary mb-6 text-center">{t('pages.aboutUs.story.title')}</h2>
            <div className="prose prose-lg max-w-none text-neutral-700 space-y-6">
              <p dangerouslySetInnerHTML={{ __html: t('pages.aboutUs.story.p1') }} />
              <p>
                {t('pages.aboutUs.story.p2')}
              </p>
              <p>
                {t('pages.aboutUs.story.p3')}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Seoul */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gradient-to-br from-primary/5 to-primary-light/5">
              <div className="flex items-start space-x-4 mb-6">
                <MapPin className="text-primary flex-shrink-0 mt-1" size={32} />
                <div>
                  <h2 className="text-3xl font-bold text-secondary mb-4">{t('pages.aboutUs.whySeoul.title')}</h2>
                  <div className="space-y-4 text-neutral-700">
                    {(t('pages.aboutUs.whySeoul.reasons', { returnObjects: true }) as Array<{title: string, description: string}>).map((reason, index) => (
                      <p key={index}>
                        <strong>{reason.title}:</strong> {reason.description}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-secondary mb-4">{t('pages.aboutUs.team.title')}</h2>
            <p className="text-lg text-neutral-700 max-w-4xl mx-auto">
              {t('pages.aboutUs.team.subtitle')}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-secondary mb-3">{t('pages.aboutUs.team.leadership.title')}</h3>
                <p className="text-neutral-700 text-sm leading-relaxed">
                  {t('pages.aboutUs.team.leadership.description')}
                </p>
              </div>
            </Card>

            <Card>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-secondary mb-3">{t('pages.aboutUs.team.clinicalAdvisory.title')}</h3>
                <p className="text-neutral-700 text-sm leading-relaxed">
                  {t('pages.aboutUs.team.clinicalAdvisory.description')}
                </p>
              </div>
            </Card>

            <Card>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-secondary mb-3">{t('pages.aboutUs.team.behavioralAdvisory.title')}</h3>
                <p className="text-neutral-700 text-sm leading-relaxed">
                  {t('pages.aboutUs.team.behavioralAdvisory.description')}
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

