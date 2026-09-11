import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { getGaId, initGa, trackPageView } from '../../lib/analytics'

/** Loads GA4 when `VITE_GA_ID` is set; records SPA navigations. */
export function Analytics() {
  const location = useLocation()
  const gaId = getGaId()
  const initialized = useRef(false)

  useEffect(() => {
    if (!gaId || initialized.current) return
    initialized.current = true

    initGa(gaId)

    const existing = document.querySelector(
      `script[src*="googletagmanager.com/gtag/js?id=${gaId}"]`
    )
    if (!existing) {
      const script = document.createElement('script')
      script.async = true
      script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`
      document.head.appendChild(script)
    }
  }, [gaId])

  useEffect(() => {
    if (!gaId) return
    trackPageView(gaId, `${location.pathname}${location.search}`)
  }, [gaId, location.pathname, location.search])

  return null
}
