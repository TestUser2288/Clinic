import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { RotateCcw } from 'lucide-react'
import { usePrefs } from '../lib/prefs'
import { whatsappUrl } from '../lib/contact'
import { pendingTestQuestions, pickTest, type TestAnswers } from '../lib/stats'
import { ScreenHeader } from '../components/Chrome'
import { WhatsAppIcon } from '../components/Brand'

const ease = [0.16, 1, 0.3, 1] as const

export function TestPicker() {
  const { t } = usePrefs()
  const tt = t.tools.test
  const [a, setA] = useState<TestAnswers>({})

  const questions: { key: keyof TestAnswers; legend: string; options: Record<string, string> }[] = [
    { key: 'kind', legend: tt.q1, options: tt.q1o },
    { key: 'groups', legend: tt.q2, options: tt.q2o },
    { key: 'design', legend: tt.q3, options: tt.q3o },
    { key: 'normal', legend: tt.q4, options: tt.q4o },
  ]
  const pending = pendingTestQuestions(a)
  const visible = questions.filter((q) => a[q.key] !== undefined || q.key === pending[0])
  const result = pickTest(a)

  const set = (key: keyof TestAnswers, value: string) => {
    setA((prev) => {
      const next = { ...prev, [key]: value } as TestAnswers
      if (key === 'kind' && value === 'qual') delete next.normal
      return next
    })
  }

  return (
    <div className="tool">
      <ScreenHeader title={tt.title} back="home" />
      <div className="page page-narrow">
        <p className="section-lede">{tt.intro}</p>

        <div className="tool-steps">
          <AnimatePresence initial={false}>
            {visible.map((q) => (
              <motion.fieldset
                key={q.key}
                className="seg-field"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4, ease }}
              >
                <legend>{q.legend}</legend>
                <div className="seg-options">
                  {Object.entries(q.options).map(([value, label]) => (
                    <label key={value} className="seg-option">
                      <input type="radio" name={q.key} value={value} checked={a[q.key] === value} onChange={() => set(q.key, value)} />
                      <span>{label}</span>
                    </label>
                  ))}
                </div>
              </motion.fieldset>
            ))}
          </AnimatePresence>
        </div>

        <AnimatePresence>
          {result && (
            <motion.section
              key={result}
              className="result-card"
              aria-live="polite"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease }}
            >
              <h2 className="result-name">
                <span className="sr-only">{tt.resultLabel} : </span>
                {tt.tests[result].name}
              </h2>
              <p className="result-note">{tt.tests[result].note}</p>
              <p className="result-alt">
                <span>{tt.altLabel}</span> {tt.tests[result].alt}
              </p>
              <a
                className="btn btn-primary btn-block"
                href={whatsappUrl(tt.waPrefix + tt.tests[result].name + tt.waSuffix)}
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsAppIcon size={20} />
                {tt.cta}
              </a>
              <button type="button" className="btn btn-quiet btn-block" onClick={() => setA({})}>
                <RotateCcw size={18} />
                {tt.reset}
              </button>
            </motion.section>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
