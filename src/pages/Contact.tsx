import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { Mail, MapPin, Send, Calendar } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import Card from '../components/common/Card'
import Button from '../components/common/Button'

interface FormData {
  firstName: string
  lastName: string
  email: string
  preferredContact: string
  age: string
  diagnosed: string
  currentCPAP: string
  symptoms: string[]
  hearAbout: string
  additionalInfo: string
}

export default function Contact() {
  const { t, i18n } = useTranslation()
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>()
  const [submitted, setSubmitted] = useState(false)

  // Calendly 위젯 로드
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    document.body.appendChild(script)

    return () => {
      // Cleanup
      const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]')
      if (existingScript) {
        document.body.removeChild(existingScript)
      }
    }
  }, [])

  const onSubmit = (data: FormData) => {
    console.log('Form submitted:', data)
    // Here you would typically send the data to your backend
    setSubmitted(true)
  }

  const symptoms = [
    t('contact.form.symptoms.loudSnoring'),
    t('contact.form.symptoms.gasping'),
    t('contact.form.symptoms.daytimeSleepiness'),
    t('contact.form.symptoms.morningHeadaches'),
    t('contact.form.symptoms.difficultyConcentrating'),
    t('contact.form.symptoms.highBloodPressure'),
    t('contact.form.symptoms.other'),
  ]

  if (submitted) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center bg-neutral-50">
        <Card className="max-w-2xl mx-auto text-center p-8 sm:p-12">
          <div className="w-16 h-16 bg-success rounded-full flex items-center justify-center mx-auto mb-6">
            <Send className="text-white" size={32} />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-secondary mb-4">{t('contact.success.title')}</h2>
          <p className="text-base sm:text-lg text-neutral-700 mb-6">
            {t('contact.success.message')}
          </p>
          <p className="text-sm sm:text-base text-neutral-600">
            {t('contact.success.email')}
          </p>
        </Card>
      </div>
    )
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-white to-primary-light/10 py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-secondary mb-4 sm:mb-6"
          >
            {t('contact.hero.title')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-base sm:text-lg md:text-xl text-neutral-700"
          >
            {t('contact.hero.subtitle')}
          </motion.p>
        </div>
      </section>

      {/* Calendly Section */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-secondary mb-3 sm:mb-4 text-center">
              {t('contact.form.calendly.title')}
            </h2>
            <p className="text-base sm:text-lg text-neutral-700 text-center mb-6">
              {t('contact.form.calendly.description')}
            </p>
          </motion.div>
          
          <Card className="p-0 overflow-hidden">
            <div 
              className="calendly-inline-widget" 
              data-url="https://calendly.com/ksleep-care/k-sleep-care-consultation-1"
              style={{ minWidth: '320px', height: '700px' }}
            />
          </Card>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-12 sm:py-20 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 sm:space-y-8">
              {/* Personal Information */}
              <div>
                <h2 className="text-xl sm:text-2xl font-semibold text-secondary mb-4 sm:mb-6">{t('contact.form.personalInfo.title')}</h2>
                <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-neutral-800 mb-2">
                      {t('contact.form.personalInfo.firstName')}
                    </label>
                    <input
                      {...register('firstName', { required: t('contact.validation.firstNameRequired') })}
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-sm sm:text-base"
                    />
                    {errors.firstName && (
                      <p className="text-error text-xs sm:text-sm mt-1">{errors.firstName.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-neutral-800 mb-2">
                      {t('contact.form.personalInfo.lastName')}
                    </label>
                    <input
                      {...register('lastName', { required: t('contact.validation.lastNameRequired') })}
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-sm sm:text-base"
                    />
                    {errors.lastName && (
                      <p className="text-error text-xs sm:text-sm mt-1">{errors.lastName.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-neutral-800 mb-2">
                      {t('contact.form.personalInfo.email')}
                    </label>
                    <input
                      type="email"
                      {...register('email', { 
                        required: t('contact.validation.emailRequired'),
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: t('contact.validation.emailInvalid')
                        }
                      })}
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-sm sm:text-base"
                    />
                    {errors.email && (
                      <p className="text-error text-xs sm:text-sm mt-1">{errors.email.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-neutral-800 mb-2">
                      {t('contact.form.personalInfo.preferredContact')}
                    </label>
                    <select
                      {...register('preferredContact', { required: t('contact.validation.contactMethodRequired') })}
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-sm sm:text-base"
                    >
                      <option value="">{i18n.language === 'ko' ? '선택...' : 'Select...'}</option>
                      <option value="email">{t('contact.form.personalInfo.emailOption')}</option>
                      <option value="whatsapp">{t('contact.form.personalInfo.whatsappOption')}</option>
                    </select>
                    {errors.preferredContact && (
                      <p className="text-error text-xs sm:text-sm mt-1">{errors.preferredContact.message}</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Health Screening */}
              <div className="border-t border-neutral-200 pt-6 sm:pt-8">
                <h2 className="text-xl sm:text-2xl font-semibold text-secondary mb-4 sm:mb-6">{t('contact.form.healthScreening.title')}</h2>
                <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-neutral-800 mb-2">
                      {t('contact.form.healthScreening.age')}
                    </label>
                    <select
                      {...register('age', { required: t('contact.validation.ageRequired') })}
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-sm sm:text-base"
                    >
                      <option value="">{i18n.language === 'ko' ? '선택...' : 'Select...'}</option>
                      <option value="18-29">18-29</option>
                      <option value="30-39">30-39</option>
                      <option value="40-49">40-49</option>
                      <option value="50-59">50-59</option>
                      <option value="60-69">60-69</option>
                      <option value="70+">70+</option>
                    </select>
                    {errors.age && (
                      <p className="text-error text-xs sm:text-sm mt-1">{errors.age.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-neutral-800 mb-2">
                      {t('contact.form.healthScreening.diagnosed')}
                    </label>
                    <select
                      {...register('diagnosed', { required: t('contact.validation.diagnosedRequired') })}
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-sm sm:text-base"
                    >
                      <option value="">{i18n.language === 'ko' ? '선택...' : 'Select...'}</option>
                      <option value="yes">{t('contact.form.healthScreening.diagnosedYes')}</option>
                      <option value="no">{t('contact.form.healthScreening.diagnosedNo')}</option>
                      <option value="unsure">{t('contact.form.healthScreening.diagnosedUnsure')}</option>
                    </select>
                    {errors.diagnosed && (
                      <p className="text-error text-xs sm:text-sm mt-1">{errors.diagnosed.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-neutral-800 mb-2">
                      {t('contact.form.healthScreening.currentCPAP')}
                    </label>
                    <select
                      {...register('currentCPAP', { required: t('contact.validation.cpapRequired') })}
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-sm sm:text-base"
                    >
                      <option value="">{i18n.language === 'ko' ? '선택...' : 'Select...'}</option>
                      <option value="yes-successful">{t('contact.form.healthScreening.cpapYesSuccessful')}</option>
                      <option value="yes-struggling">{t('contact.form.healthScreening.cpapYesStruggling')}</option>
                      <option value="no">{t('contact.form.healthScreening.cpapNo')}</option>
                      <option value="tried-quit">{t('contact.form.healthScreening.cpapTriedQuit')}</option>
                    </select>
                    {errors.currentCPAP && (
                      <p className="text-error text-xs sm:text-sm mt-1">{errors.currentCPAP.message}</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Symptoms */}
              <div className="border-t border-neutral-200 pt-6 sm:pt-8">
                <label className="block text-sm font-semibold text-neutral-800 mb-3 sm:mb-4">
                  {t('contact.form.symptoms.title')}
                </label>
                <div className="grid md:grid-cols-2 gap-3">
                  {symptoms.map((symptom) => (
                    <label key={symptom} className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        value={symptom}
                        {...register('symptoms')}
                        className="w-4 h-4 text-primary border-neutral-300 rounded focus:ring-primary"
                      />
                      <span className="text-sm sm:text-base text-neutral-700">{symptom}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Additional Info */}
              <div className="border-t border-neutral-200 pt-6 sm:pt-8">
                <div>
                  <label className="block text-sm font-semibold text-neutral-800 mb-2">
                    {t('contact.form.additionalInfo.hearAbout')}
                  </label>
                  <select
                    {...register('hearAbout')}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-sm sm:text-base"
                  >
                    <option value="">{i18n.language === 'ko' ? '선택...' : 'Select...'}</option>
                    <option value="google">{t('contact.form.additionalInfo.hearAboutGoogle')}</option>
                    <option value="social">{t('contact.form.additionalInfo.hearAboutSocial')}</option>
                    <option value="referral">{t('contact.form.additionalInfo.hearAboutReferral')}</option>
                    <option value="friend">{t('contact.form.additionalInfo.hearAboutFriend')}</option>
                    <option value="article">{t('contact.form.additionalInfo.hearAboutArticle')}</option>
                    <option value="other">{t('contact.form.additionalInfo.hearAboutOther')}</option>
                  </select>
                </div>
                <div className="mt-4 sm:mt-6">
                  <label className="block text-sm font-semibold text-neutral-800 mb-2">
                    {t('contact.form.additionalInfo.additionalInfo')}
                  </label>
                  <textarea
                    {...register('additionalInfo')}
                    rows={4}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-sm sm:text-base"
                    placeholder={t('contact.form.additionalInfo.additionalInfoPlaceholder')}
                  />
                </div>
              </div>

              {/* Privacy & Submit */}
              <div className="border-t border-neutral-200 pt-6 sm:pt-8">
                <label className="flex items-start space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    required
                    className="mt-1 w-4 h-4 text-primary border-neutral-300 rounded focus:ring-primary flex-shrink-0"
                  />
                  <span className="text-xs sm:text-sm text-neutral-700">
                    {t('contact.form.privacy.text')}
                  </span>
                </label>
                <div className="mt-6">
                  <Button type="submit" size="lg" className="w-full sm:w-auto">
                    {t('contact.form.submit')}
                    <Send className="inline-block ml-2" size={20} />
                  </Button>
                </div>
              </div>
            </form>
          </Card>
        </div>
      </section>

      {/* Payment Info Section */}
      <section className="py-12 sm:py-20 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-gradient-to-br from-primary/5 to-primary-light/5 border-2 border-primary/20">
            <h3 className="text-xl sm:text-2xl font-bold text-secondary mb-4 text-center">
              {t('pages.ourProgram.pricing.paymentOptions.title')}
            </h3>
            <p className="text-base sm:text-lg text-neutral-700 mb-3 text-center">
              {t('pages.ourProgram.pricing.paymentOptions.description')}
            </p>
            <p className="text-sm sm:text-base text-neutral-600 mb-4 text-center">
              {t('pages.ourProgram.pricing.paymentOptions.note')}
            </p>
            <div className="grid sm:grid-cols-3 gap-4 mt-6">
              <div className="text-center">
                <div className="text-sm sm:text-base font-semibold text-neutral-800 mb-1">
                  {t('pages.ourProgram.pricing.paymentOptions.payInFull')}
                </div>
                <div className="text-xs sm:text-sm text-neutral-600">
                  {t('pages.ourProgram.pricing.paymentOptions.payInFullDesc')}
                </div>
              </div>
              <div className="text-center">
                <div className="text-sm sm:text-base font-semibold text-neutral-800 mb-1">
                  {t('pages.ourProgram.pricing.paymentOptions.installments')}
                </div>
                <div className="text-xs sm:text-sm text-neutral-600">
                  {t('pages.ourProgram.pricing.paymentOptions.installmentsDesc')}
                </div>
              </div>
              <div className="text-center">
                <div className="text-sm sm:text-base font-semibold text-neutral-800 mb-1">
                  {t('pages.ourProgram.pricing.paymentOptions.fsaHsa')}
                </div>
                <div className="text-xs sm:text-sm text-neutral-600">
                  {t('pages.ourProgram.pricing.paymentOptions.fsaHsaDesc')}
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            <Card className="text-center">
              <Mail className="text-primary mx-auto mb-4" size={32} />
              <h3 className="text-lg font-semibold text-secondary mb-2">{t('contact.contactInfo.email')}</h3>
              <a href="mailto:contact@ksleep.care" className="text-primary hover:underline text-sm sm:text-base">
                contact@ksleep.care
              </a>
            </Card>
            <Card className="text-center">
              <MapPin className="text-primary mx-auto mb-4" size={32} />
              <h3 className="text-lg font-semibold text-secondary mb-2">{t('contact.contactInfo.location')}</h3>
              <p className="text-neutral-700 text-sm sm:text-base">{t('contact.contactInfo.locationText')}</p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
