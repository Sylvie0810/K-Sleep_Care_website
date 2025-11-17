import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()
  const { t } = useTranslation()

  const navItems = [
    { path: '/', labelKey: 'nav.home' },
    { path: '/about-sleep-health', labelKey: 'nav.aboutSleepHealth' },
    { path: '/our-program', labelKey: 'nav.ourProgram' },
    { path: '/how-it-works', labelKey: 'nav.howItWorks' },
    { path: '/for-businesses', labelKey: 'nav.forBusinesses' },
    { path: '/about-us', labelKey: 'nav.aboutUs' },
    { path: '/faq', labelKey: 'nav.faq' },
  ]

  const isActive = (path: string) => location.pathname === path

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-soft z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src="/K-Sleep_Care_logo-removebg.png" 
              alt="K-Sleep Care" 
              className="h-8 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors ${
                  isActive(item.path)
                    ? 'text-primary border-b-2 border-primary pb-1'
                    : 'text-neutral-700 hover:text-primary'
                }`}
              >
                {t(item.labelKey)}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-accent text-neutral-800 px-6 py-2.5 rounded-lg font-semibold hover:bg-accent-light transition-colors shadow-medium"
            >
              {t('nav.bookConsultation')}
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-neutral-700 hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-neutral-200"
          >
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block py-2 text-base font-medium ${
                    isActive(item.path)
                      ? 'text-primary border-l-4 border-primary pl-4'
                      : 'text-neutral-700 hover:text-primary pl-4'
                  }`}
                >
                  {t(item.labelKey)}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full bg-accent text-neutral-800 px-6 py-3 rounded-lg font-semibold text-center hover:bg-accent-light transition-colors mt-4"
              >
                {t('nav.bookConsultation')}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

