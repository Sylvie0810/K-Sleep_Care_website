import { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { Mail, MapPin, Send } from 'lucide-react'
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
  preferredDate: string
  preferredTime: string
  hearAbout: string
  additionalInfo: string
}

export default function Contact() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>()
  const [submitted, setSubmitted] = useState(false)

  const onSubmit = (data: FormData) => {
    console.log('Form submitted:', data)
    // Here you would typically send the data to your backend
    setSubmitted(true)
  }

  const symptoms = [
    'Loud snoring',
    'Gasping for air during sleep',
    'Excessive daytime sleepiness',
    'Morning headaches',
    'Difficulty concentrating',
    'High blood pressure',
    'Other',
  ]

  if (submitted) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center bg-neutral-50">
        <Card className="max-w-2xl mx-auto text-center p-12">
          <div className="w-16 h-16 bg-success rounded-full flex items-center justify-center mx-auto mb-6">
            <Send className="text-white" size={32} />
          </div>
          <h2 className="text-3xl font-bold text-secondary mb-4">Thank You!</h2>
          <p className="text-lg text-neutral-700 mb-6">
            We've received your consultation request. Our team will contact you within 24 hours to confirm your consultation time.
          </p>
          <p className="text-neutral-600">
            Check your email for a confirmation message and calendar invite.
          </p>
        </Card>
      </div>
    )
  }

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
            Book Your Free Consultation
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-neutral-700"
          >
            Schedule a free 30-minute consultation with our sleep specialists
          </motion.p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
              {/* Personal Information */}
              <div>
                <h2 className="text-2xl font-semibold text-secondary mb-6">Personal Information</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-neutral-800 mb-2">
                      First Name *
                    </label>
                    <input
                      {...register('firstName', { required: 'First name is required' })}
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                    {errors.firstName && (
                      <p className="text-error text-sm mt-1">{errors.firstName.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-neutral-800 mb-2">
                      Last Name *
                    </label>
                    <input
                      {...register('lastName', { required: 'Last name is required' })}
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                    {errors.lastName && (
                      <p className="text-error text-sm mt-1">{errors.lastName.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-neutral-800 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      {...register('email', { 
                        required: 'Email is required',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Invalid email address'
                        }
                      })}
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                    {errors.email && (
                      <p className="text-error text-sm mt-1">{errors.email.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-neutral-800 mb-2">
                      Preferred Contact Method *
                    </label>
                    <select
                      {...register('preferredContact', { required: 'Please select a contact method' })}
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      <option value="">Select...</option>
                      <option value="email">Email</option>
                      <option value="whatsapp">WhatsApp</option>
                    </select>
                    {errors.preferredContact && (
                      <p className="text-error text-sm mt-1">{errors.preferredContact.message}</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Health Screening */}
              <div className="border-t border-neutral-200 pt-8">
                <h2 className="text-2xl font-semibold text-secondary mb-6">Basic Health Screening</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-neutral-800 mb-2">
                      Age *
                    </label>
                    <select
                      {...register('age', { required: 'Please select your age range' })}
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      <option value="">Select...</option>
                      <option value="18-29">18-29</option>
                      <option value="30-39">30-39</option>
                      <option value="40-49">40-49</option>
                      <option value="50-59">50-59</option>
                      <option value="60-69">60-69</option>
                      <option value="70+">70+</option>
                    </select>
                    {errors.age && (
                      <p className="text-error text-sm mt-1">{errors.age.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-neutral-800 mb-2">
                      Have you been diagnosed with sleep apnea? *
                    </label>
                    <select
                      {...register('diagnosed', { required: 'Please select an option' })}
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      <option value="">Select...</option>
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                      <option value="unsure">Unsure</option>
                    </select>
                    {errors.diagnosed && (
                      <p className="text-error text-sm mt-1">{errors.diagnosed.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-neutral-800 mb-2">
                      Are you currently using CPAP? *
                    </label>
                    <select
                      {...register('currentCPAP', { required: 'Please select an option' })}
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      <option value="">Select...</option>
                      <option value="yes-successful">Yes, successfully</option>
                      <option value="yes-struggling">Yes, but struggling</option>
                      <option value="no">No</option>
                      <option value="tried-quit">Tried before but quit</option>
                    </select>
                    {errors.currentCPAP && (
                      <p className="text-error text-sm mt-1">{errors.currentCPAP.message}</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Symptoms */}
              <div className="border-t border-neutral-200 pt-8">
                <label className="block text-sm font-semibold text-neutral-800 mb-4">
                  Symptoms (select all that apply)
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
                      <span className="text-neutral-700">{symptom}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Availability */}
              <div className="border-t border-neutral-200 pt-8">
                <h2 className="text-2xl font-semibold text-secondary mb-6">Availability</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-neutral-800 mb-2">
                      Preferred Consultation Date
                    </label>
                    <input
                      type="date"
                      {...register('preferredDate')}
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-neutral-800 mb-2">
                      Preferred Time
                    </label>
                    <select
                      {...register('preferredTime')}
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      <option value="">Select...</option>
                      <option value="morning">Morning (9 AM - 12 PM)</option>
                      <option value="afternoon">Afternoon (12 PM - 5 PM)</option>
                      <option value="evening">Evening (5 PM - 8 PM)</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Additional Info */}
              <div className="border-t border-neutral-200 pt-8">
                <div>
                  <label className="block text-sm font-semibold text-neutral-800 mb-2">
                    How did you hear about us?
                  </label>
                  <select
                    {...register('hearAbout')}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="">Select...</option>
                    <option value="google">Google search</option>
                    <option value="social">Social media</option>
                    <option value="referral">Healthcare provider referral</option>
                    <option value="friend">Friend/family</option>
                    <option value="article">Article/blog</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="mt-6">
                  <label className="block text-sm font-semibold text-neutral-800 mb-2">
                    Additional Information
                  </label>
                  <textarea
                    {...register('additionalInfo')}
                    rows={4}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Is there anything specific you'd like to discuss during the consultation?"
                  />
                </div>
              </div>

              {/* Privacy & Submit */}
              <div className="border-t border-neutral-200 pt-8">
                <label className="flex items-start space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    required
                    className="mt-1 w-4 h-4 text-primary border-neutral-300 rounded focus:ring-primary"
                  />
                  <span className="text-sm text-neutral-700">
                    I agree to receive communications from K-Sleep Care regarding my consultation and treatment options. 
                    Your information is confidential and HIPAA-compliant.
                  </span>
                </label>
                <div className="mt-6">
                  <Button type="submit" size="lg" className="w-full sm:w-auto">
                    Book My Free Consultation
                    <Send className="inline-block ml-2" size={20} />
                  </Button>
                </div>
              </div>
            </form>
          </Card>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="text-center">
              <Mail className="text-primary mx-auto mb-4" size={32} />
              <h3 className="text-lg font-semibold text-secondary mb-2">Email</h3>
              <a href="mailto:contact@ksleep.care" className="text-primary hover:underline">
                contact@ksleep.care
              </a>
            </Card>
            <Card className="text-center">
              <MapPin className="text-primary mx-auto mb-4" size={32} />
              <h3 className="text-lg font-semibold text-secondary mb-2">Location</h3>
              <p className="text-neutral-700">Seoul, South Korea</p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

