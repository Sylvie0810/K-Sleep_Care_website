import { Link } from 'react-router-dom'
import { Mail, MapPin } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const { t } = useTranslation()

  const footerLinks = {
    company: [
      { path: '/about-us', labelKey: 'nav.aboutUs' },
      { path: '/our-program', labelKey: 'nav.ourProgram' },
      { path: '/how-it-works', labelKey: 'nav.howItWorks' },
      { path: '/for-businesses', labelKey: 'nav.forBusinesses' },
    ],
    resources: [
      { path: '/about-sleep-health', labelKey: 'nav.aboutSleepHealth' },
      { path: '/expert-insights', labelKey: 'nav.expertInsights' },
      { path: '/faq', labelKey: 'nav.faq' },
    ],
    legal: [
      { path: '/privacy', labelKey: 'footer.privacy' },
      { path: '/terms', labelKey: 'footer.terms' },
      { path: '/disclaimer', labelKey: 'footer.disclaimer' },
    ],
  }

  return (
    <footer className="bg-neutral-800 text-neutral-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center">
              <img 
                src="/K-Sleep_Care_logo-removebg.png" 
                alt="K-Sleep Care" 
                className="h-8 w-auto"
              />
            </div>
            <p 
              className="text-sm text-neutral-400 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: t('footer.tagline') }}
            />
            <p className="text-xs text-neutral-500 leading-relaxed">
              {t('footer.description')}
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <Mail size={16} className="text-primary" />
                <a href="mailto:contact@ksleep.care" className="hover:text-primary transition-colors">
                  contact@ksleep.care
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <a 
                  href="https://www.linkedin.com/company/109548905/admin/dashboard/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors text-neutral-400"
                >
                  LinkedIn
                </a>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin size={16} className="text-primary mt-0.5" />
                <span className="text-neutral-400">Seoul, South Korea</span>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">{t('footer.company')}</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm hover:text-primary transition-colors"
                  >
                    {t(link.labelKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">{t('footer.resources')}</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm hover:text-primary transition-colors"
                  >
                    {t(link.labelKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">{t('footer.legal')}</h3>
            <ul className="space-y-2 mb-6">
              {footerLinks.legal.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm hover:text-primary transition-colors"
                  >
                    {t(link.labelKey)}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              to="/contact"
              className="inline-block bg-accent text-neutral-800 px-6 py-2.5 rounded-lg font-semibold hover:bg-accent-light transition-colors text-sm"
            >
              {t('footer.bookConsultation')}
            </Link>
          </div>
        </div>

        <div className="border-t border-neutral-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
            <div className="text-xs sm:text-sm text-neutral-400 space-y-1">
              <p>
                © {currentYear} {t('footer.copyright')}
              </p>
              <p>
                {t('footer.companyInfo.companyName')}
              </p>
              <p>
                {t('footer.companyInfo.serviceName')}
              </p>
              <p>
                {t('footer.companyInfo.businessNumber')}
              </p>
              <p>
                {t('footer.companyInfo.representative')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

