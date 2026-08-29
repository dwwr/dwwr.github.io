import { copy } from '../../content'
import './BusinessCard.css'

export function BusinessCard() {
  const content = copy.businessCard

  return (
    <section className="business-card" aria-label={copy.a11y.businessCard}>
      <img
        className="business-card__photo"
        src={content.photoSrc}
        alt={content.photoAlt}
        width={160}
        height={160}
      />
      <div className="business-card__body">
        <h1 className="business-card__name">{content.name}</h1>
        <p className="business-card__role">{content.role}</p>
        <p className="business-card__location">{content.location}</p>
        <p className="business-card__email">
          <a href={`mailto:${content.email}`}>{content.email}</a>
        </p>
        <ul className="business-card__links">
          {content.links.map((link) => (
            <li key={link.href}>
              <a href={link.href} target="_blank" rel="noopener noreferrer">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
