import type { BusinessCardContent } from '../../content/types'
import './BusinessCard.css'

export interface BusinessCardProps {
  readonly content: BusinessCardContent
}

export function BusinessCard({ content }: BusinessCardProps) {
  return (
    <section className="business-card" aria-label="Business card">
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
