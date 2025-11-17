import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Clock, TrendingUp, Star, CheckCircle2 } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import Button from '../components/common/Button'
import Card from '../components/common/Card'

export default function Home() {
  const { t, i18n } = useTranslation()
  const stats = [
    { value: '90%+', labelKey: 'home.stats.success', icon: TrendingUp },
    { value: i18n.language === 'ko' ? '5일' : '5 Days', labelKey: 'home.stats.days', icon: Clock },
    { value: '4.9/5', labelKey: 'home.stats.satisfaction', icon: Star },
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-white to-primary-light/10 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary mb-6 text-balance"
                dangerouslySetInnerHTML={{ __html: t('home.hero.title') }}
              />
              <p 
                className="text-xl text-neutral-700 mb-8 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: t('home.hero.subtitle') }}
              />
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link to="/contact">
                  <Button size="lg" className="w-full sm:w-auto">
                    {t('home.hero.cta')}
                    <ArrowRight className="inline-block ml-2" size={20} />
                  </Button>
                </Link>
                <Link to="/our-program">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto">
                    {t('home.hero.ctaSecondary')}
                  </Button>
                </Link>
              </div>
              <div className="flex flex-wrap gap-6 text-sm text-neutral-600">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="text-success" size={20} />
                  <span>{t('home.hero.trust1')}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="text-success" size={20} />
                  <span>{t('home.hero.trust2')}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="text-success" size={20} />
                  <span>{t('home.hero.trust3')}</span>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-primary to-primary-light rounded-2xl p-6 shadow-large border border-primary/20">
                <div className="bg-white rounded-xl p-6 space-y-4">
                  <h3 className="text-2xl font-bold text-secondary">{t('home.hero.whyTitle')}</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <CheckCircle2 className="text-success mt-0.5" size={20} />
                      <span>{t('home.hero.why1')}</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle2 className="text-success mt-0.5" size={20} />
                      <span>{t('home.hero.why2')}</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle2 className="text-success mt-0.5" size={20} />
                      <span>{t('home.hero.why3')}</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle2 className="text-success mt-0.5" size={20} />
                      <span>{t('home.hero.why4')}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-white to-primary-light/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-12"
          >
            <div className="relative bg-white rounded-2xl shadow-large p-6 md:p-8 border-l-8 border-primary">
              <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-primary to-primary-light rounded-l-2xl"></div>
              <div className="pl-6">
                <div className="mb-4">
                  <svg className="w-8 h-8 text-primary/20 mb-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.984zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                  </svg>
                </div>
                <h2 
                  className="text-xl md:text-2xl font-bold text-secondary mb-4 leading-tight"
                  dangerouslySetInnerHTML={{ __html: t('aboutSleepHealth.whyMatters.quote') }}
                />
                <p className="text-base text-neutral-600 font-medium">
                  {t('aboutSleepHealth.whyMatters.quoteAuthor')}
                </p>
              </div>
            </div>
            
            <div className="prose prose-lg max-w-none text-neutral-700 space-y-4">
              <p>
                {t('home.quoteSection.intro.p1')}
              </p>
              <p className="text-lg font-semibold text-secondary">
                {t('home.quoteSection.intro.p2Title')}
              </p>
              <p dangerouslySetInnerHTML={{ __html: t('home.quoteSection.intro.p2') }} />
              <p>
                {t('home.quoteSection.intro.p3')}
              </p>
              <p className="text-lg font-semibold text-secondary">
                {t('home.quoteSection.intro.p4')}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What is K-Sleep Care Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-8">
              {t('home.whatIs.title')}
            </h2>
            <div className="prose prose-lg max-w-none text-neutral-700 space-y-4 text-left">
              <p>
                {t('home.whatIs.p1')}
              </p>
              <p>
                {t('home.whatIs.p2')}
              </p>
              <p>
                {t('home.whatIs.p3')}
              </p>
              <p>
                {t('home.whatIs.p4')}
              </p>
              <p>
                {t('home.whatIs.p5')}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 5-Day Program Overview */}
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
                className="text-base text-primary font-semibold"
                dangerouslySetInnerHTML={{ __html: t('pages.ourProgram.fiveDayProgram.subtitle') }}
              />
            </div>
          </motion.div>

          <div className="space-y-6">
            {[
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
            ].map((day, index) => (
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
                      <p className="text-base text-neutral-700">{day.description}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/our-program">
              <Button variant="outline" size="lg">
                {t('home.howItWorks.learnMore')}
                <ArrowRight className="inline-block ml-2" size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <stat.icon className="text-primary mx-auto mb-4" size={40} />
                <div className="text-4xl font-bold text-secondary mb-2">{stat.value}</div>
                <div className="text-neutral-600">{t(stat.labelKey)}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              {t('home.finalCta.title')}
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-white text-primary hover:bg-neutral-100 font-semibold shadow-medium hover:shadow-large">
                  {t('home.finalCta.cta')}
                  <ArrowRight className="inline-block ml-2" size={20} />
                </Button>
              </Link>
              <Link to="/our-program">
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 font-semibold">
                  {t('home.finalCta.ctaSecondary')}
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

