import { motion, useReducedMotion } from 'motion/react'
import { Calculator, ChevronRight, Clock3, GraduationCap, Info, LockKeyhole, Sigma } from 'lucide-react'
import { usePrefs } from '../lib/prefs'
import { href } from '../lib/router'
import { whatsappUrl } from '../lib/contact'
import { CONTACT } from '../config'
import { Logomark, WhatsAppIcon } from '../components/Brand'
import { LangToggle } from '../components/Chrome'

const STORY_IMAGES = ['/img/story-probleme.jpg', '/img/story-methode.jpg', '/img/story-resultats.jpg']
const ease = [0.16, 1, 0.3, 1] as const

export function Home() {
  const { t } = usePrefs()
  const reduce = useReducedMotion()
  const rise = (delay: number) =>
    reduce ? {} : { initial: { opacity: 0, y: 12 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.7, delay, ease } }
  const trustIcons = [<GraduationCap size={16} />, <LockKeyhole size={16} />, <Clock3 size={16} />]

  return (
    <div className="home">
      <section className="hero">
        <picture>
          <source media="(min-width: 960px)" srcSet="/img/hero.jpg" />
          <img className="hero-photo" src="/img/hero-mobile.jpg" alt="" fetchPriority="high" />
        </picture>
        <div className="hero-shade" aria-hidden="true" />

        <div className="hero-top">
          <a href={href('home')} className="brand">
            <Logomark size={30} />
            <span>{CONTACT.brand}</span>
          </a>
          <LangToggle onPhoto />
        </div>

        <div className="hero-copy">
          <motion.h1 className="hero-title" {...rise(0)}>
            {t.home.headline}
          </motion.h1>
          <motion.p className="hero-sub" {...rise(0.08)}>
            {t.home.sub}
          </motion.p>
        </div>

        <motion.div className="hero-actions" {...rise(0.16)}>
          <a href={whatsappUrl(t.contact.waMessage)} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            <WhatsAppIcon size={20} />
            {t.home.ctaWa}
          </a>
          <a href={href('confiance')} className="btn btn-outline">
            <Info size={19} />
            {t.home.ctaHow}
          </a>
        </motion.div>
      </section>

      <div className="home-body">
        <ul className="stories">
          {t.home.stories.map((s, i) => (
            <motion.li
              key={s.title}
              className="story"
              initial={reduce ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 + i * 0.07, ease }}
            >
              <img src={STORY_IMAGES[i]} alt="" loading="lazy" />
              <div className="story-text">
                <h2>{s.title}</h2>
                <p>{s.body}</p>
              </div>
            </motion.li>
          ))}
        </ul>

        <ul className="trust-strip">
          {t.home.trust.map((item, i) => (
            <li key={item}>
              {trustIcons[i]}
              {item}
            </li>
          ))}
        </ul>

        <section className="section" aria-labelledby="tools-title">
          <h2 id="tools-title" className="section-title">
            {t.home.toolsTitle}
          </h2>
          <ul className="list-group">
            <li>
              <a href={href('outils/test')} className="list-row">
                <span className="icon-tile">
                  <Sigma size={20} />
                </span>
                <span className="list-text">
                  <strong>{t.home.tools.test.title}</strong>
                  <span>{t.home.tools.test.body}</span>
                </span>
                <ChevronRight size={20} className="list-chevron" />
              </a>
            </li>
            <li>
              <a href={href('outils/echantillon')} className="list-row">
                <span className="icon-tile">
                  <Calculator size={20} />
                </span>
                <span className="list-text">
                  <strong>{t.home.tools.sample.title}</strong>
                  <span>{t.home.tools.sample.body}</span>
                </span>
                <ChevronRight size={20} className="list-chevron" />
              </a>
            </li>
          </ul>
        </section>
      </div>
    </div>
  )
}
