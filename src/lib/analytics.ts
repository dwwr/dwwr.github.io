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
    window.gtag = (...args: unknown[]) => {
      window.dataLayer?.push(args)
    }
  }
}

export function trackPageView(gaId: string, path: string): void {
  ensureGtag()
  window.gtag?.('config', gaId, { page_path: path })
}
