import { copy } from '../content'
import { usePageMeta } from '../hooks/usePageMeta'
import { LegalPage } from '../components/LegalPage/LegalPage'

export function ContactPage() {
  usePageMeta({
    title: copy.contact.metaTitle,
    description: copy.contact.metaDescription,
  })

  return <LegalPage content={copy.contact} />
}
