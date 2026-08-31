import { copy } from '../../content'
import type { BusinessCardItem } from '../../content/types'
import './BusinessCard.css'

function BusinessCardItemView({ item }: { item: BusinessCardItem }) {
  switch (item.kind) {
    case 'text':
      return <p className="business-card__text">{item.text}</p>
    case 'email':
      return (
        <p className="business-card__email">
          <a href={`mailto:${item.email}`}>{item.email}</a>
        </p>
      )
    case 'link':
      return (
        <p className="business-card__link">
          <a href={item.href} target="_blank" rel="noopener noreferrer">
            {item.label}
          </a>
        </p>
      )
  }
}

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
        <div className="business-card__columns">
          {content.columns.map((column, index) => (
            <div key={index} className="business-card__column">
              {column.items.map((item, itemIndex) => (
                <BusinessCardItemView key={itemIndex} item={item} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
