import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import ko from './locales/ko.json'
import en from './locales/en.json'

// localStorage에 저장된 언어 확인 (없으면 한국어)
const getInitialLanguage = () => {
  if (typeof window === 'undefined') return 'ko'
  
  try {
    const stored = localStorage.getItem('i18nextLng')
    if (stored === 'ko' || stored === 'en') {
      return stored
    }
  } catch (e) {
    // localStorage 접근 불가 시 기본값 반환
  }
  
  // 기본값은 한국어
  return 'ko'
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      ko: { translation: ko },
      en: { translation: en },
    },
    fallbackLng: 'ko',
    lng: getInitialLanguage(), // 초기 언어 설정
    debug: true, // 디버그 모드 활성화로 문제 확인
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage'],
      caches: ['localStorage'],
      lookupLocalStorage: 'i18nextLng',
    },
  })

// 초기화 후 언어가 'ko'가 아니면 강제로 'ko'로 변경
if (typeof window !== 'undefined') {
  const currentLang = i18n.language || i18n.resolvedLanguage
  if (currentLang !== 'ko') {
    console.log('Language changed to ko from:', currentLang)
    i18n.changeLanguage('ko').then(() => {
      localStorage.setItem('i18nextLng', 'ko')
    })
  } else {
    // 이미 'ko'이면 localStorage에 저장
    localStorage.setItem('i18nextLng', 'ko')
  }
}

export default i18n

