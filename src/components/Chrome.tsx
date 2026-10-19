import { motion } from 'motion/react'
import { ChevronLeft, House, ShieldCheck } from 'lucide-react'
import type { ReactNode } from 'react'
import { usePrefs } from '../lib/prefs'
import { href, tabOf, type Route } from '../lib/router'
import { Logomark, WhatsAppIcon } from './Brand'

export function LangToggle({ onPhoto = false }: { onPhoto?: boolean }) {
  const { lang, t, toggleLang } = usePrefs()
  return (
    <button type="button" className={`lang-toggle ${onPhoto ? 'on-photo' : ''}`} onClick={toggleLang} aria-label={t.common.switchLang}>
      <span className={lang === 'fr' ? 'is-on' : ''}>FR</span>
      <span className="lang-sep" aria-hidden="true">|</span>
      <span className={lang === 'en' ? 'is-on' : ''}>EN</span>
    </button>
  )
}

/** Inner screen header: back chevron, centered icon + title. */
export function ScreenHeader({ title, icon, back = 'home' }: { title: string; icon?: ReactNode; back?: Route }) {
  const { t } = usePrefs()
  return (
    <header className="screen-header">
      <a className="icon-btn" href={href(back)} aria-label={t.common.back}>
        <ChevronLeft size={24} />
      </a>
      <h1 className="screen-title">
        {icon}
        {title}
      </h1>
      <span className="screen-header-spacer" aria-hidden="true" />
    </header>
  )
}

const TABS: { route: Route; key: 'home' | 'trust' | 'contact'; icon: ReactNode }[] = [
  { route: 'home', key: 'home', icon: <House size={22} /> },
  { route: 'confiance', key: 'trust', icon: <ShieldCheck size={22} /> },
  { route: 'devis', key: 'contact', icon: <WhatsAppIcon size={21} /> },
]

export function TabBar({ route }: { route: Route }) {
  const { t } = usePrefs()
  const active = tabOf(route)
  return (
    <nav className="tabbar" aria-label="Navigation">
      <a className="rail-brand" href={href('home')}>
        <Logomark size={30} />
        <span>Stat Clinic</span>
      </a>
      <ul>
        {TABS.map((tab) => {
          const on = tab.route === active
          return (
            <li key={tab.route}>
              <a href={href(tab.route)} className={on ? 'is-active' : ''} aria-current={on ? 'page' : undefined}>
                {on && <motion.span layoutId="tab-mark" className="tab-mark" transition={{ type: 'spring', stiffness: 500, damping: 40 }} />}
                <span className="tab-icon">{tab.icon}</span>
                <span className="tab-label">{t.nav[tab.key]}</span>
              </a>
            </li>
          )
        })}
      </ul>
      <div className="rail-lang">
        <LangToggle />
      </div>
    </nav>
  )
}
