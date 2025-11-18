import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { AlertCircle, CheckCircle2, ArrowRight, ArrowLeft, Info } from 'lucide-react'
import Card from '../components/common/Card'
import Button from '../components/common/Button'

type AssessmentStep = 'epworth' | 'epworth-result' | 'stopbang' | 'final-result'

interface EpworthAnswer {
  [key: number]: number
}

interface StopBangAnswer {
  [key: string]: boolean | null
}

export default function SleepApneaAssessment() {
  const { t } = useTranslation()
  const [step, setStep] = useState<AssessmentStep>('epworth')
  const [epworthAnswers, setEpworthAnswers] = useState<EpworthAnswer>({})
  const [epworthScore, setEpworthScore] = useState<number | null>(null)
  const [stopbangAnswers, setStopbangAnswers] = useState<StopBangAnswer>({})
  const [stopbangScore, setStopbangScore] = useState<number | null>(null)

  const epworthQuestions = t('selfAssessment.epworth.questions', { returnObjects: true }) as string[]
  const stopbangQuestions = t('selfAssessment.stopbang.questions', { returnObjects: true }) as Array<{ key: string; question: string }>

  // Epworth 점수 계산
  const calculateEpworthScore = () => {
    const total = Object.values(epworthAnswers).reduce((sum, score) => sum + (score || 0), 0)
    setEpworthScore(total)
    setStep('epworth-result')
  }

  // STOP-BANG 점수 계산
  const calculateStopbangScore = () => {
    const yesCount = Object.values(stopbangAnswers).filter(answer => answer === true).length
    setStopbangScore(yesCount)
    setStep('final-result')
  }

  // 최종 위험도 판정 (Epworth와 STOP-BANG 점수를 종합 평가)
  const getFinalRiskLevel = (): 'low' | 'moderate' | 'high' => {
    if (epworthScore === null || stopbangScore === null) return 'low'

    // STOP-BANG 5점 이상 → 고위험
    if (stopbangScore >= 5) return 'high'
    
    // STOP-BANG 3-4점 → 중등도 위험 (단, Epworth 21점 이상이면 고위험으로 상향)
    if (stopbangScore >= 3) {
      if (epworthScore >= 21) return 'high'
      return 'moderate'
    }
    
    // STOP-BANG 0-2점이지만 Epworth 점수가 높으면 위험도 상향
    if (epworthScore >= 21) return 'high'
    if (epworthScore >= 16 && stopbangScore >= 2) return 'moderate'
    
    return 'low'
  }

  const handleEpworthAnswer = (index: number, score: number) => {
    setEpworthAnswers(prev => ({ ...prev, [index]: score }))
  }

  const handleStopbangAnswer = (key: string, answer: boolean) => {
    setStopbangAnswers(prev => ({ ...prev, [key]: answer }))
  }

  const getEpworthInterpretation = (score: number) => {
    if (score <= 10) return 'normal'
    if (score <= 15) return 'mild'
    if (score <= 20) return 'moderate'
    return 'severe'
  }

  const allEpworthAnswered = epworthQuestions.every((_, index) => epworthAnswers[index] !== undefined)
  const allStopbangAnswered = stopbangQuestions.every(q => stopbangAnswers[q.key] !== null)

  const resetAssessment = () => {
    setStep('epworth')
    setEpworthAnswers({})
    setEpworthScore(null)
    setStopbangAnswers({})
    setStopbangScore(null)
  }

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-br from-primary/5 via-white to-primary-light/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-secondary mb-4">
            {t('selfAssessment.title')}
          </h1>
          <p className="text-lg text-neutral-700">
            {t('selfAssessment.subtitle')}
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          {/* Epworth Assessment */}
          {step === 'epworth' && (
            <motion.div
              key="epworth"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
            >
              <Card>
                <h2 className="text-2xl font-bold text-secondary mb-4">
                  {t('selfAssessment.epworth.title')}
                </h2>
                <p className="text-neutral-700 mb-2">
                  {t('selfAssessment.epworth.description')}
                </p>
                <div className="bg-primary/10 border-l-4 border-primary p-4 rounded-r-lg mb-6">
                  <p className="text-sm font-semibold text-secondary mb-2">
                    {t('selfAssessment.epworth.instruction')}
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs sm:text-sm">
                    <div><strong>0점:</strong> {t('selfAssessment.epworth.scoreLabels.0')}</div>
                    <div><strong>1점:</strong> {t('selfAssessment.epworth.scoreLabels.1')}</div>
                    <div><strong>2점:</strong> {t('selfAssessment.epworth.scoreLabels.2')}</div>
                    <div><strong>3점:</strong> {t('selfAssessment.epworth.scoreLabels.3')}</div>
                  </div>
                </div>

                <div className="space-y-6">
                  {epworthQuestions.map((question, index) => (
                    <div key={index} className="border-b border-neutral-200 pb-4 last:border-0">
                      <p className="font-semibold text-neutral-800 mb-3">
                        {index + 1}. {question}
                      </p>
                      <div className="flex flex-wrap gap-3">
                        {[0, 1, 2, 3].map(score => (
                          <button
                            key={score}
                            onClick={() => handleEpworthAnswer(index, score)}
                            className={`px-4 py-2 rounded-lg font-medium transition-all ${
                              epworthAnswers[index] === score
                                ? 'bg-primary text-white shadow-medium'
                                : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                            }`}
                          >
                            {score}점
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex justify-end">
                  <Button
                    onClick={calculateEpworthScore}
                    disabled={!allEpworthAnswered}
                    size="lg"
                  >
                    {t('selfAssessment.epworth.calculate')}
                    <ArrowRight className="inline-block ml-2" size={20} />
                  </Button>
                </div>
              </Card>
            </motion.div>
          )}

          {/* Epworth Result */}
          {step === 'epworth-result' && epworthScore !== null && (
            <motion.div
              key="epworth-result"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
            >
              <Card>
                <h2 className="text-2xl font-bold text-secondary mb-6">
                  {t('selfAssessment.epworth.result.title')}
                </h2>
                
                <div className="text-center mb-8">
                  <div className="inline-block bg-primary/10 rounded-full px-8 py-4 mb-4">
                    <div className="text-sm text-neutral-600 mb-1">
                      {t('selfAssessment.epworth.result.score')}
                    </div>
                    <div className="text-5xl font-bold text-primary">
                      {epworthScore}
                    </div>
                  </div>
                </div>

                {(() => {
                  const interpretation = getEpworthInterpretation(epworthScore)
                  const interpretationData = t(`selfAssessment.epworth.result.interpretations.${interpretation}`, { returnObjects: true }) as {
                    range: string
                    title: string
                    description: string
                  }

                  return (
                    <div className="bg-neutral-50 rounded-lg p-6 mb-6">
                      <div className="flex items-start space-x-3 mb-3">
                        <Info className="text-primary mt-0.5 flex-shrink-0" size={24} />
                        <div>
                          <h3 className="text-xl font-semibold text-secondary mb-2">
                            {interpretationData.title} ({interpretationData.range})
                          </h3>
                          <p className="text-neutral-700">
                            {interpretationData.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  )
                })()}

                <div className="flex justify-between">
                  <Button
                    variant="outline"
                    onClick={() => setStep('epworth')}
                  >
                    <ArrowLeft className="inline-block mr-2" size={20} />
                    다시 답변하기
                  </Button>
                  <Button
                    onClick={() => setStep('stopbang')}
                    size="lg"
                  >
                    {t('selfAssessment.epworth.result.next')}
                    <ArrowRight className="inline-block ml-2" size={20} />
                  </Button>
                </div>
              </Card>
            </motion.div>
          )}

          {/* STOP-BANG Assessment */}
          {step === 'stopbang' && (
            <motion.div
              key="stopbang"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
            >
              <Card>
                <h2 className="text-2xl font-bold text-secondary mb-4">
                  {t('selfAssessment.stopbang.title')}
                </h2>
                <p className="text-neutral-700 mb-6">
                  {t('selfAssessment.stopbang.description')}
                </p>

                <div className="space-y-6">
                  {stopbangQuestions.map((item, index) => (
                    <div key={item.key} className="border-b border-neutral-200 pb-4 last:border-0">
                      <p className="font-semibold text-neutral-800 mb-3">
                        {index + 1}. {item.question}
                      </p>
                      <div className="flex gap-3">
                        <button
                          onClick={() => handleStopbangAnswer(item.key, true)}
                          className={`px-6 py-2 rounded-lg font-medium transition-all ${
                            stopbangAnswers[item.key] === true
                              ? 'bg-primary text-white shadow-medium'
                              : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                          }`}
                        >
                          {t('selfAssessment.stopbang.yes')}
                        </button>
                        <button
                          onClick={() => handleStopbangAnswer(item.key, false)}
                          className={`px-6 py-2 rounded-lg font-medium transition-all ${
                            stopbangAnswers[item.key] === false
                              ? 'bg-primary text-white shadow-medium'
                              : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                          }`}
                        >
                          {t('selfAssessment.stopbang.no')}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex justify-between">
                  <Button
                    variant="outline"
                    onClick={() => setStep('epworth-result')}
                  >
                    <ArrowLeft className="inline-block mr-2" size={20} />
                    이전으로
                  </Button>
                  <Button
                    onClick={calculateStopbangScore}
                    disabled={!allStopbangAnswered}
                    size="lg"
                  >
                    {t('selfAssessment.stopbang.calculate')}
                    <ArrowRight className="inline-block ml-2" size={20} />
                  </Button>
                </div>
              </Card>
            </motion.div>
          )}

          {/* Final Result */}
          {step === 'final-result' && epworthScore !== null && stopbangScore !== null && (
            <motion.div
              key="final-result"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <Card>
                <h2 className="text-2xl font-bold text-secondary mb-6">
                  {t('selfAssessment.finalResult.title')}
                </h2>

                {/* Scores Summary */}
                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  <div className="bg-primary/10 rounded-lg p-4 text-center">
                    <div className="text-sm text-neutral-600 mb-2">
                      {t('selfAssessment.finalResult.epworthScore')}
                    </div>
                    <div className="text-3xl font-bold text-primary">
                      {epworthScore}
                    </div>
                  </div>
                  <div className="bg-primary/10 rounded-lg p-4 text-center">
                    <div className="text-sm text-neutral-600 mb-2">
                      {t('selfAssessment.finalResult.stopbangScore')}
                    </div>
                    <div className="text-3xl font-bold text-primary">
                      {stopbangScore} / 8
                    </div>
                  </div>
                </div>

                {/* Risk Level */}
                {(() => {
                  const riskLevel = getFinalRiskLevel()
                  const riskData = t(`selfAssessment.finalResult.riskLevels.${riskLevel}`, { returnObjects: true }) as {
                    title: string
                    description: string
                    recommendation: string
                  }

                  const isModerateOrHigh = riskLevel === 'moderate' || riskLevel === 'high'

                  return (
                    <>
                      <div className={`rounded-lg p-6 mb-6 ${
                        riskLevel === 'high' 
                          ? 'bg-red-50 border-2 border-red-200' 
                          : riskLevel === 'moderate'
                          ? 'bg-yellow-50 border-2 border-yellow-200'
                          : 'bg-green-50 border-2 border-green-200'
                      }`}>
                        <div className="flex items-start space-x-3 mb-4">
                          {riskLevel === 'high' ? (
                            <AlertCircle className="text-red-600 mt-0.5 flex-shrink-0" size={28} />
                          ) : riskLevel === 'moderate' ? (
                            <AlertCircle className="text-yellow-600 mt-0.5 flex-shrink-0" size={28} />
                          ) : (
                            <CheckCircle2 className="text-green-600 mt-0.5 flex-shrink-0" size={28} />
                          )}
                          <div className="flex-1">
                            <h3 className={`text-2xl font-bold mb-3 ${
                              riskLevel === 'high' 
                                ? 'text-red-800' 
                                : riskLevel === 'moderate'
                                ? 'text-yellow-800'
                                : 'text-green-800'
                            }`}>
                              {riskData.title}
                            </h3>
                            <p className="text-neutral-700 mb-3">
                              {riskData.description}
                            </p>
                            {isModerateOrHigh && (
                              <div className="bg-white/80 rounded-lg p-4 mt-4">
                                <p className="font-semibold text-neutral-800 mb-2">
                                  권고사항:
                                </p>
                                <p className="text-neutral-700">
                                  {riskData.recommendation}
                                </p>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* CTA for Moderate/High Risk */}
                      {isModerateOrHigh && (
                        <div className="bg-gradient-to-br from-primary to-primary-light rounded-lg p-6 text-white mb-6">
                          <h3 className="text-xl font-bold mb-2">
                            {t('selfAssessment.finalResult.cta.title')}
                          </h3>
                          <p className="text-white/90 mb-4">
                            {t('selfAssessment.finalResult.cta.description')}
                          </p>
                          <Link to="/our-program">
                            <Button
                              variant="secondary"
                              className="bg-white text-primary hover:bg-neutral-100"
                            >
                              {t('selfAssessment.finalResult.cta.button')}
                              <ArrowRight className="inline-block ml-2" size={20} />
                            </Button>
                          </Link>
                        </div>
                      )}
                    </>
                  )
                })()}

                <div className="flex justify-center">
                  <Button
                    variant="outline"
                    onClick={resetAssessment}
                  >
                    {t('selfAssessment.restart')}
                  </Button>
                </div>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

