import { motion } from 'framer-motion'
import { Video, Plane, Calendar, Home, Monitor, DollarSign, FileText, CheckCircle2 } from 'lucide-react'
import Card from '../components/common/Card'
import Button from '../components/common/Button'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default function HowItWorks() {
  const { t } = useTranslation()
  const steps = [
    {
      number: 1,
      icon: Video,
      title: t('pages.howItWorks.steps.step1.title'),
      duration: t('pages.howItWorks.steps.step1.duration'),
      cost: t('pages.howItWorks.steps.step1.cost'),
      description: t('pages.howItWorks.steps.step1.description'),
      details: t('pages.howItWorks.steps.step1.details', { returnObjects: true }) as string[],
    },
    {
      number: 2,
      icon: Plane,
      title: t('pages.howItWorks.steps.step2.title'),
      duration: t('pages.howItWorks.steps.step2.duration'),
      cost: t('pages.howItWorks.steps.step2.cost'),
      description: t('pages.howItWorks.steps.step2.description'),
      details: t('pages.howItWorks.steps.step2.details', { returnObjects: true }) as string[],
    },
    {
      number: 3,
      icon: Calendar,
      title: t('pages.howItWorks.steps.step3.title'),
      duration: t('pages.howItWorks.steps.step3.duration'),
      cost: t('pages.howItWorks.steps.step3.cost'),
      description: t('pages.howItWorks.steps.step3.description'),
      details: t('pages.howItWorks.steps.step3.details', { returnObjects: true }) as string[],
    },
    {
      number: 4,
      icon: Home,
      title: t('pages.howItWorks.steps.step4.title'),
      duration: t('pages.howItWorks.steps.step4.duration'),
      cost: t('pages.howItWorks.steps.step4.cost'),
      description: t('pages.howItWorks.steps.step4.description'),
      details: t('pages.howItWorks.steps.step4.details', { returnObjects: true }) as string[],
    },
    {
      number: 5,
      icon: Monitor,
      title: t('pages.howItWorks.steps.step5.title'),
      duration: t('pages.howItWorks.steps.step5.duration'),
      cost: t('pages.howItWorks.steps.step5.cost'),
      description: t('pages.howItWorks.steps.step5.description'),
      details: t('pages.howItWorks.steps.step5.details', { returnObjects: true }) as string[],
    },
  ]

  const pricingInfo = [
    {
      icon: DollarSign,
      title: 'Package Pricing',
      items: [
        'All-inclusive program fee',
        '5-day intensive program',
        'All medical consultations',
        'Sleep testing & diagnosis',
        'Custom mask fitting (2 masks)',
        'CPAP machine (yours to keep)',
        '3-month supply of accessories',
        '90-day remote support',
        'Patient dashboard access (1 year)',
      ],
    },
    {
      icon: FileText,
      title: 'Not Included',
      items: [
        'Airfare to Seoul',
        'Accommodation (recommendations provided)',
        'Meals outside of program',
        'Personal travel expenses',
      ],
    },
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-white to-primary-light/10 py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-secondary mb-3 sm:mb-4"
          >
            {t('pages.howItWorks.title')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="text-xs sm:text-sm text-primary font-semibold mb-3 sm:mb-4"
          >
            {t('pages.howItWorks.targetAudience')}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-base sm:text-lg md:text-xl text-neutral-700"
          >
            {t('pages.howItWorks.subtitle')}
          </motion.p>
        </div>
      </section>

      {/* Step-by-Step Process */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card>
                  <div className="flex flex-col md:flex-row gap-4 sm:gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-primary to-primary-light rounded-xl flex items-center justify-center mb-3 sm:mb-4">
                        <step.icon className="text-white" size={32} />
                      </div>
                      <div className="text-center md:text-left">
                        <div className="text-xs sm:text-sm text-primary font-semibold mb-1">Step {step.number}</div>
                        <div className="text-xs text-neutral-600">{step.duration}</div>
                        <div className="text-xs text-success font-semibold mt-1">{step.cost}</div>
                      </div>
                    </div>
                    <div className="flex-grow min-w-0">
                      <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-secondary mb-2 sm:mb-3">{step.title}</h2>
                      <p className="text-sm sm:text-base text-neutral-700 mb-3 sm:mb-4">{step.description}</p>
                      <ul className="grid md:grid-cols-2 gap-2">
                        {step.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-start space-x-2">
                            <CheckCircle2 className="text-success mt-0.5 flex-shrink-0" size={16} />
                            <span className="text-xs sm:text-sm text-neutral-700">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing & Payment */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-secondary mb-4">{t('pages.howItWorks.pricing.title')}</h2>
            <p className="text-lg text-neutral-700">
              {t('pages.howItWorks.pricing.subtitle')}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {pricingInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card>
                  <info.icon className="text-primary mb-4" size={32} />
                  <h3 className="text-xl font-semibold text-secondary mb-4">{info.title}</h3>
                  <ul className="space-y-2">
                    {info.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start space-x-2">
                        <CheckCircle2
                          className={`mt-0.5 flex-shrink-0 ${
                            index === 0 ? 'text-success' : 'text-neutral-400'
                          }`}
                          size={18}
                        />
                        <span className="text-neutral-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>

          <Card className="bg-gradient-to-br from-primary/5 to-primary-light/5">
            <h3 className="text-2xl font-semibold text-secondary mb-4">{t('pages.howItWorks.pricing.paymentOptions.title')}</h3>
            <div className="grid md:grid-cols-4 gap-4">
              <div>
                <div className="font-semibold text-primary mb-2">{t('pages.howItWorks.pricing.paymentOptions.payInFull')}</div>
                <div className="text-sm text-neutral-700">{t('pages.howItWorks.pricing.paymentOptions.payInFullDesc')}</div>
              </div>
              <div>
                <div className="font-semibold text-primary mb-2">{t('pages.howItWorks.pricing.paymentOptions.installments')}</div>
                <div className="text-sm text-neutral-700">{t('pages.howItWorks.pricing.paymentOptions.installmentsDesc')}</div>
              </div>
              <div>
                <div className="font-semibold text-primary mb-2">{t('pages.howItWorks.pricing.paymentOptions.fsaHsa')}</div>
                <div className="text-sm text-neutral-700">{t('pages.howItWorks.pricing.paymentOptions.fsaHsaDesc')}</div>
              </div>
              <div>
                <div className="font-semibold text-primary mb-2">{t('pages.howItWorks.pricing.paymentOptions.financing')}</div>
                <div className="text-sm text-neutral-700">{t('pages.howItWorks.pricing.paymentOptions.financingDesc')}</div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Insurance Information */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card>
              <h2 className="text-3xl font-bold text-secondary mb-6">Insurance & Reimbursement</h2>
              <div className="space-y-6 text-neutral-700">
                <div>
                  <h3 className="text-xl font-semibold text-secondary mb-3">Insurance Coverage</h3>
                  <p>
                    K-Sleep Care is currently out-of-network for US insurance plans. However, many patients 
                    receive partial reimbursement (30-70%) by submitting detailed superbills to their insurance 
                    companies.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-secondary mb-3">What We Provide</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2">
                      <CheckCircle2 className="text-success mt-0.5 flex-shrink-0" size={18} />
                      <span>Detailed superbills for insurance submission</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle2 className="text-success mt-0.5 flex-shrink-0" size={18} />
                      <span>CPT codes for all services</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle2 className="text-success mt-0.5 flex-shrink-0" size={18} />
                      <span>Reimbursement support team</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle2 className="text-success mt-0.5 flex-shrink-0" size={18} />
                      <span>Template letters for insurance companies</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-secondary mb-3">FSA/HSA Eligible</h3>
                  <p>
                    All medical expenses qualify for FSA/HSA payment, providing significant tax savings. 
                    We can provide documentation for your FSA/HSA administrator.
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
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
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-white/90 mb-8">
              Book your free consultation to begin your journey to better sleep
            </p>
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-neutral-100">
                Book Free Consultation
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

