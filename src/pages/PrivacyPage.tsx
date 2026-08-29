import { copy } from '../content/copy'
import { LegalPage } from '../components/LegalPage/LegalPage'

export function PrivacyPage() {
  return <LegalPage content={copy.privacy} />
}
