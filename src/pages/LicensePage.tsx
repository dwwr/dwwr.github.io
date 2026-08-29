import { copy } from '../content/copy'
import { LegalPage } from '../components/LegalPage/LegalPage'

export function LicensePage() {
  return <LegalPage content={copy.license} />
}
