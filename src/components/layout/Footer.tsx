import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default function Footer() {
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
          {/* Company Info Column */}
          <div className="space-y-2 text-sm text-neutral-400">
            <p>{t('footer.companyInfo.businessNumber')}</p>
            <p>{t('footer.companyInfo.companyName')}</p>
            <p>{t('footer.companyInfo.serviceName')}</p>
            <p>{t('footer.companyInfo.representative')}</p>
            <p>{t('footer.companyInfo.address')}</p>
            <p>{t('footer.companyInfo.email')}</p>
            <p className="mt-4">{t('footer.companyInfo.copyright')}</p>
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
      </div>
    </footer>
  )
}

