import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { ensureGtag, getGaId, trackPageView } from '../../lib/analytics'

/** Loads GA4 when `VITE_GA_ID` is set; records SPA navigations. */
export function Analytics() {
  const location = useLocation()
  const gaId = getGaId()
  const scriptReady = useRef(false)

  useEffect(() => {
    if (!gaId) return
    if (document.querySelector(`script[src*="googletagmanager.com/gtag/js?id=${gaId}"]`)) {
      return
    }
    if (scriptReady.current) return
    scriptReady.current = true

    ensureGtag()
    window.gtag?.('js', new Date())

    const script = document.createElement('script')
    script.async = true
    script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`
    document.head.appendChild(script)
  }, [gaId])

  useEffect(() => {
    if (!gaId) return
    trackPageView(gaId, `${location.pathname}${location.search}`)
  }, [gaId, location.pathname, location.search])

  return null
}
