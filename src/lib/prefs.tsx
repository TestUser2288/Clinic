import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import { fr, type Dict } from '../i18n/fr'
import { en } from '../i18n/en'
import { load, save } from './storage'

export type Lang = 'fr' | 'en'

const dicts: Record<Lang, Dict> = { fr, en }

type Prefs = {
  lang: Lang
  t: Dict
  toggleLang: () => void
}

const PrefsContext = createContext<Prefs | null>(null)

// Light/dark follows the phone's system setting (see index.css); only the language is a visitor choice.
export function PrefsProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => load<Lang>('sc.lang', 'fr'))

  useEffect(() => {
    document.documentElement.lang = lang
    document.title = dicts[lang].meta.title
  }, [lang])

  const toggleLang = useCallback(() => {
    setLang((l) => {
      const next = l === 'fr' ? 'en' : 'fr'
      save('sc.lang', next)
      return next
    })
  }, [])

  const value = useMemo(() => ({ lang, t: dicts[lang], toggleLang }), [lang, toggleLang])
  return <PrefsContext.Provider value={value}>{children}</PrefsContext.Provider>
}

export function usePrefs() {
  const ctx = useContext(PrefsContext)
  if (!ctx) throw new Error('usePrefs outside PrefsProvider')
  return ctx
}
