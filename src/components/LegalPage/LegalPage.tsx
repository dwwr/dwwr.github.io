import type { LegalPageContent } from '../../content/types'
import './LegalPage.css'

export interface LegalPageProps {
  readonly content: LegalPageContent
}

export function LegalPage({ content }: LegalPageProps) {
  return (
    <article className="legal-page">
      <h1 className="legal-page__title">{content.title}</h1>
      {content.sections.map((section) => (
        <section key={section.id} id={section.id} className="legal-page__section">
          <h2 className="legal-page__heading">{section.heading}</h2>
          {section.paragraphs.map((paragraph) => (
            <p key={paragraph} className="legal-page__paragraph">
              {paragraph}
            </p>
          ))}
        </section>
      ))}
    </article>
  )
}
