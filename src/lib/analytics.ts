const GA_ID = /^(G|GT|GTM|AW)-[A-Z0-9]+$/i

/** GA4 measurement id from Vite env. Invalid / empty → analytics off. */
export function getGaId(): string | undefined {
  const value = import.meta.env.VITE_GA_ID?.trim()
  return value && GA_ID.test(value) ? value : undefined
}

declare global {
  interface Window {
    dataLayer?: unknown[]
    gtag?: (...args: unknown[]) => void
  }
}

export function ensureGtag(): void {
  window.dataLayer ??= []
  if (!window.gtag) {
    // Must push the Arguments object (Google’s stub). Pushing a rest array
    // loads gtag.js but never sends collect hits.
    window.gtag = function gtag() {
      window.dataLayer!.push(arguments)
    }
  }
}

export function trackPageView(gaId: string, path: string): void {
  ensureGtag()
  window.gtag?.('event', 'page_view', {
    page_path: path,
    send_to: gaId
  })
}

export function initGa(gaId: string): void {
  ensureGtag()
  window.gtag?.('js', new Date())
  window.gtag?.('config', gaId, { send_page_view: false })
}
