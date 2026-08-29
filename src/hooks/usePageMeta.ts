import { useEffect } from 'react'
import type { PageMeta } from '../content/types'

export function usePageMeta({ title, description }: PageMeta) {
  useEffect(() => {
    document.title = title

    if (description) {
      const meta = document.querySelector('meta[name="description"]')
      meta?.setAttribute('content', description)
    }
  }, [title, description])
}
