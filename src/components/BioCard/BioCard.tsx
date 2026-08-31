import { copy } from '../../content'
import './BioCard.css'

export function BioCard() {
  return (
    <section className="bio-card" aria-labelledby={copy.a11y.bioCard}>
      <h2 id="bio-card-heading" className="bio__heading">
        {copy.home.bioCardHeading}
      </h2>
      <div>{copy.bioCard.content}</div>
    </section>
  )
}
