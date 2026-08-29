import { copy } from '../content'
import { usePageMeta } from '../hooks/usePageMeta'
import { LegalPage } from '../components/LegalPage/LegalPage'

export function PrivacyPage() {
  usePageMeta({
    title: copy.privacy.metaTitle,
    description: copy.privacy.metaDescription,
  })

  return <LegalPage content={copy.privacy} />
}
