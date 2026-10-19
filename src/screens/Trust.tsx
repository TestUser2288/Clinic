import { motion, useReducedMotion } from 'motion/react'
import { ArrowRight, ChartColumnIncreasing, GraduationCap, LockKeyhole, MessagesSquare, Microscope, ShieldCheck, UserRound, Users } from 'lucide-react'
import { usePrefs } from '../lib/prefs'
import { ScreenHeader } from '../components/Chrome'
import { PORTRAIT_URL } from '../config'

const ease = [0.16, 1, 0.3, 1] as const
const STEP_ICONS = [MessagesSquare, ChartColumnIncreasing, Microscope, Users]

// Messy export, the way theses usually arrive (fictional values)
const RAW_ROWS = [
  ['ID', 'Âge', 'Sexe', 'HTA', 'Diab', 'Évén.'],
  ['P-001', '67', 'M', 'oui', '1', 'Oui'],
  ['p002', '54ans', 'f', 'Non', '0', 'non'],
  ['P-003', '', 'Masc', '1', '?', 'OUI'],
  ['P_004', '71', 'F', 'oui', 'NA', '0'],
  ['P-005', '6O', 'M', 'oui', '1', 'Oui'],
  ['P-006', '48', 'H', 'non', '0', 'Non'],
  ['P-008', '59', 'F', 'N', 'O', 'non'],
]

// Fictional grouped results for the "after" figure
const BARS = [38, 52, 46, 64, 58, 76, 70, 88]

function RawThumb() {
  return (
    <div className="ba-thumb ba-raw" aria-hidden="true">
      <table>
        <tbody>
          {RAW_ROWS.map((r, i) => (
            <tr key={i}>
              {r.map((c, j) => (
                <td key={j}>{c || ' '}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function ChartThumb() {
  return (
    <div className="ba-thumb ba-chart" aria-hidden="true">
      <svg viewBox="0 0 160 100" preserveAspectRatio="none">
        {[20, 40, 60, 80].map((y) => (
          <line key={y} x1="8" x2="156" y1={y} y2={y} className="ba-grid" />
        ))}
        {BARS.map((h, i) => (
          <rect key={i} x={12 + i * 18} y={92 - h} width="11" height={h} rx="2" className={i % 2 ? 'ba-bar-b' : 'ba-bar-a'} />
        ))}
        <line x1="8" x2="156" y1="92" y2="92" className="ba-axis" />
      </svg>
    </div>
  )
}

export function Trust() {
  const { t } = usePrefs()
  const reduce = useReducedMotion()
  const reveal = reduce
    ? {}
    : { initial: { opacity: 0, y: 14 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: '-30px' }, transition: { duration: 0.55, ease } }

  return (
    <div className="trust">
      <ScreenHeader title={t.trust.title} icon={<ShieldCheck size={22} aria-hidden="true" />} />

      <div className="page">
        <section aria-labelledby="how-title">
          <h2 id="how-title" className="section-title">
            {t.trust.howTitle}
          </h2>
          <ol className="timeline">
            {t.trust.steps.map((s, i) => {
              const Icon = STEP_ICONS[i]
              return (
                <motion.li key={s.title} {...reveal}>
                  <span className="timeline-num" aria-hidden="true">
                    {i + 1}
                  </span>
                  <span className="icon-tile icon-tile-lg" aria-hidden="true">
                    <Icon size={22} />
                  </span>
                  <div className="timeline-body">
                    <h3>{s.title}</h3>
                    <p>{s.body}</p>
                  </div>
                </motion.li>
              )
            })}
          </ol>
        </section>

        <motion.section className="card about" aria-labelledby="about-title" {...reveal}>
          <div className="about-text">
            <h2 id="about-title" className="card-title">
              <GraduationCap size={20} aria-hidden="true" />
              {t.trust.aboutTitle}
            </h2>
            <p>{t.trust.aboutBody}</p>
            <p className="about-tools">{t.trust.aboutTools}</p>
          </div>
          <div className="about-portrait">{PORTRAIT_URL ? <img src={PORTRAIT_URL} alt="" /> : <UserRound size={40} aria-hidden="true" />}</div>
        </motion.section>

        <section className="section" aria-labelledby="ba-title">
          <h2 id="ba-title" className="section-title">
            {t.trust.beforeTitle}
          </h2>
          <div className="ba">
            <figure className="card ba-card">
              <RawThumb />
              <figcaption>
                <strong>{t.trust.rawTitle}</strong>
                <span>{t.trust.rawBody}</span>
              </figcaption>
            </figure>
            <span className="ba-arrow" aria-hidden="true">
              <ArrowRight size={18} />
            </span>
            <figure className="card ba-card">
              <ChartThumb />
              <figcaption>
                <strong>{t.trust.cleanTitle}</strong>
                <span>{t.trust.cleanBody}</span>
              </figcaption>
            </figure>
          </div>
          <p className="fine-print">{t.trust.synthetic}</p>
        </section>

        <motion.section className="note-card" aria-labelledby="ethics-title" {...reveal}>
          <ShieldCheck size={24} aria-hidden="true" />
          <div>
            <h2 id="ethics-title">{t.trust.ethicsTitle}</h2>
            <p>{t.trust.ethicsBody}</p>
          </div>
        </motion.section>

        <motion.section className="note-card" aria-labelledby="conf-title" {...reveal}>
          <LockKeyhole size={24} aria-hidden="true" />
          <div>
            <h2 id="conf-title">{t.trust.confTitle}</h2>
            <p>{t.trust.confBody}</p>
          </div>
        </motion.section>
      </div>
    </div>
  )
}
