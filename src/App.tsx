import { AnimatePresence, MotionConfig, motion } from 'motion/react'
import { PrefsProvider } from './lib/prefs'
import { useRoute, type Route } from './lib/router'
import { TabBar } from './components/Chrome'
import { Home } from './screens/Home'
import { Trust } from './screens/Trust'
import { Contact } from './screens/Contact'
import { TestPicker } from './screens/TestPicker'
import { SampleSize } from './screens/SampleSize'

const SCREENS: Record<Route, () => React.JSX.Element> = {
  home: Home,
  confiance: Trust,
  devis: Contact,
  'outils/test': TestPicker,
  'outils/echantillon': SampleSize,
}

function Shell() {
  const route = useRoute()
  const Screen = SCREENS[route]

  return (
    <div className="app">
      <TabBar route={route} />
      <main className="main">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={route}
            className="screen"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, transition: { duration: 0.12 } }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <Screen />
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  )
}

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <PrefsProvider>
        <Shell />
      </PrefsProvider>
    </MotionConfig>
  )
}
