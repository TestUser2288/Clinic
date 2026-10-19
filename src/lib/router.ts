import { useEffect, useState } from 'react'

export type Route = 'home' | 'confiance' | 'devis' | 'outils/test' | 'outils/echantillon'

const routes: Route[] = ['home', 'confiance', 'devis', 'outils/test', 'outils/echantillon']

function parse(): Route {
  const h = location.hash.replace(/^#\/?/, '')
  return (routes as string[]).includes(h) ? (h as Route) : 'home'
}

export function href(route: Route) {
  return route === 'home' ? '#/' : `#/${route}`
}

export function useRoute() {
  const [route, setRoute] = useState<Route>(parse)
  useEffect(() => {
    const onHash = () => {
      setRoute(parse())
      window.scrollTo({ top: 0 })
    }
    addEventListener('hashchange', onHash)
    return () => removeEventListener('hashchange', onHash)
  }, [])
  return route
}

// Which bottom tab a route belongs to
export function tabOf(route: Route): Route {
  return route.startsWith('outils') ? 'home' : route
}
