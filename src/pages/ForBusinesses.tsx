import { motion } from 'framer-motion'
import { Building2, TrendingDown, Users, Award, CheckCircle2, DollarSign, Calendar } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import Card from '../components/common/Card'
import Button from '../components/common/Button'
import { Link } from 'react-router-dom'

export default function ForBusinesses() {
  const { t } = useTranslation()
  const businessCase = [
    {
      icon: DollarSign,
      stat: t('pages.forBusinesses.businessCase.stats.annualCost.stat'),
      label: t('pages.forBusinesses.businessCase.stats.annualCost.label'),
    },
    {
      icon: TrendingDown,
      stat: t('pages.forBusinesses.businessCase.stats.workplaceAccidents.stat'),
      label: t('pages.forBusinesses.businessCase.stats.workplaceAccidents.label'),
    },
    {
      icon: Calendar,
      stat: t('pages.forBusinesses.businessCase.stats.sickDays.stat'),
      label: t('pages.forBusinesses.businessCase.stats.sickDays.label'),
    },
    {
      icon: Users,
      stat: t('pages.forBusinesses.businessCase.stats.reducedProductivity.stat'),
      label: t('pages.forBusinesses.businessCase.stats.reducedProductivity.label'),
    },
  ]

  const benefits = t('pages.forBusinesses.corporateProgram.benefits.items', { returnObjects: true }) as string[]

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
            {t('pages.forBusinesses.hero.title')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-neutral-700"
          >
            {t('pages.forBusinesses.hero.subtitle')}
          </motion.p>
        </div>
      </section>

      {/* Business Case */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-secondary mb-4">{t('pages.forBusinesses.businessCase.title')}</h2>
            <p className="text-lg text-neutral-700 max-w-2xl mx-auto">
              {t('pages.forBusinesses.businessCase.subtitle')}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {businessCase.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="text-center">
                  <item.icon className="text-primary mx-auto mb-4" size={32} />
                  <div className="text-3xl font-bold text-secondary mb-2">{item.stat}</div>
                  <div className="text-neutral-700 text-sm">{item.label}</div>
                </Card>
              </motion.div>
            ))}
          </div>

          <Card className="bg-gradient-to-br from-error/10 to-warning/10 border-2 border-error/20">
            <h3 className="text-2xl font-semibold text-secondary mb-4">{t('pages.forBusinesses.businessCase.impact.title')}</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="space-y-2">
                {(t('pages.forBusinesses.businessCase.impact.items', { returnObjects: true }) as string[]).slice(0, 3).map((item, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <CheckCircle2 className="text-error mt-0.5 flex-shrink-0" size={18} />
                    <span className="text-neutral-700">{item}</span>
                  </li>
                ))}
              </ul>
              <ul className="space-y-2">
                {(t('pages.forBusinesses.businessCase.impact.items', { returnObjects: true }) as string[]).slice(3).map((item, index) => (
                  <li key={index + 3} className="flex items-start space-x-2">
                    <CheckCircle2 className="text-error mt-0.5 flex-shrink-0" size={18} />
                    <span className="text-neutral-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Card>
        </div>
      </section>

      {/* K-Sleep Care Corporate Program */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-secondary mb-4">{t('pages.forBusinesses.corporateProgram.title')}</h2>
            <p className="text-lg text-neutral-700">
              {t('pages.forBusinesses.corporateProgram.subtitle')}
            </p>
          </motion.div>

          <Card className="mb-8">
            <h3 className="text-2xl font-semibold text-secondary mb-6">{t('pages.forBusinesses.corporateProgram.benefits.title')}</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle2 className="text-success mt-0.5 flex-shrink-0" size={20} />
                  <span className="text-neutral-700">{benefit}</span>
                </div>
              ))}
            </div>
          </Card>

          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <Building2 className="text-primary mb-4" size={32} />
              <h3 className="text-xl font-semibold text-secondary mb-2">{t('pages.forBusinesses.corporateProgram.features.scalableSolutions.title')}</h3>
              <p className="text-neutral-700">
                {t('pages.forBusinesses.corporateProgram.features.scalableSolutions.description')}
              </p>
            </Card>
            <Card>
              <Award className="text-primary mb-4" size={32} />
              <h3 className="text-xl font-semibold text-secondary mb-2">{t('pages.forBusinesses.corporateProgram.features.provenResults.title')}</h3>
              <p className="text-neutral-700">
                {t('pages.forBusinesses.corporateProgram.features.provenResults.description')}
              </p>
            </Card>
            <Card>
              <TrendingDown className="text-primary mb-4" size={32} />
              <h3 className="text-xl font-semibold text-secondary mb-2">{t('pages.forBusinesses.corporateProgram.features.roiTracking.title')}</h3>
              <p className="text-neutral-700">
                {t('pages.forBusinesses.corporateProgram.features.roiTracking.description')}
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">{t('pages.forBusinesses.cta.title')}</h2>
            <p className="text-xl text-white/90 mb-8">
              {t('pages.forBusinesses.cta.subtitle')}
            </p>
            <Link to="/contact">
              <button className="bg-white text-primary hover:bg-neutral-100 font-semibold rounded-lg px-8 py-3 text-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white shadow-medium hover:shadow-large">
                {t('pages.forBusinesses.cta.button')}
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

