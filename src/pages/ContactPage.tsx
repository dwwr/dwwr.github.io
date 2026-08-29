import { copy } from '../content/copy'
import { LegalPage } from '../components/LegalPage/LegalPage'

export function ContactPage() {
  return <LegalPage content={copy.contact} />
}
