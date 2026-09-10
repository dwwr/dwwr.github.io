import { copy } from '../../content'
import './BioCard.css'

export function BioCard() {
  const paragraphs = copy.bioCard.content
    .split(/\n\s*\n/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean)

  return (
    <section className="bio-card" aria-labelledby={copy.a11y.bioCard}>
      <h2 id="bio-card-heading" className="bio__heading">
        {copy.home.bioCardHeading}
      </h2>
      <div className="bio-card__body">
        {paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </section>
  )
}
