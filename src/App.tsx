import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import AboutSleepHealth from './pages/AboutSleepHealth'
import OurProgram from './pages/OurProgram'
import HowItWorks from './pages/HowItWorks'
import ForBusinesses from './pages/ForBusinesses'
import AboutUs from './pages/AboutUs'
import ExpertInsights from './pages/ExpertInsights'
import FAQ from './pages/FAQ'
import Contact from './pages/Contact'
import SleepApneaAssessment from './pages/SleepApneaAssessment'

function App() {
  const { i18n } = useTranslation()
  
  // 앱 시작 시 언어를 한국어로 강제 설정
  useEffect(() => {
    if (i18n.language !== 'ko') {
      i18n.changeLanguage('ko')
      localStorage.setItem('i18nextLng', 'ko')
    }
  }, [i18n])
  
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-sleep-health" element={<AboutSleepHealth />} />
          <Route path="/our-program" element={<OurProgram />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/for-businesses" element={<ForBusinesses />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/expert-insights" element={<ExpertInsights />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/self-assessment" element={<SleepApneaAssessment />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App

