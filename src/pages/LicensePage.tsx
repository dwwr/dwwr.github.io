import { copy } from '../content'
import { usePageMeta } from '../hooks/usePageMeta'
import { LegalPage } from '../components/LegalPage/LegalPage'

export function LicensePage() {
  usePageMeta({
    title: copy.license.metaTitle,
    description: copy.license.metaDescription,
  })

  return <LegalPage content={copy.license} />
}
