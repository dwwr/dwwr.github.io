import { useState } from 'react'
import { copy, formatCopy } from '../../content'
import type { Project } from '../../content/types'
import { ProjectImageCarousel } from '../ProjectImageCarousel/ProjectImageCarousel'
import './ProjectCard.css'

export interface ProjectCardProps {
  readonly project: Project
}

function hasTextLinks(project: Project): boolean {
  const links = project.links
  if (!links) return false
  return Boolean(links.live || links.github)
}

function splitDetails(items: readonly string[]): [readonly string[], readonly string[]] {
  const midpoint = Math.ceil(items.length / 2)
  return [items.slice(0, midpoint), items.slice(midpoint)]
}

function DetailsChevronIcon() {
  return (
    <svg className="project-card__details-chevron" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6 9l6 6 6-6" fill="none" stroke="currentColor" strokeWidth="2" />
    </svg>
  )
}

export function ProjectCard({ project }: ProjectCardProps) {
  const labels = copy.projectCard
  const links = project.links
  const showLinks = hasTextLinks(project)
  const [detailsOpen, setDetailsOpen] = useState(false)
  const hasDetails = project.details.length > 0
  const [leftDetails, rightDetails] = splitDetails(project.details)

  return (
    <article className="project-card">
      <header className="project-card__header">
        <div className="project-card__title-row">
          <h2 className="project-card__title">{project.title}</h2>

          {showLinks ? (
            <nav
              className="project-card__links"
              aria-label={formatCopy(copy.a11y.projectLinks, { title: project.title })}
            >
              {links?.live ? (
                <a href={links.live} target="_blank" rel="noopener noreferrer">
                  {labels.liveLink}
                </a>
              ) : null}
              {links?.github ? (
                <a href={links.github} target="_blank" rel="noopener noreferrer">
                  {labels.githubLink}
                </a>
              ) : null}
            </nav>
          ) : null}

          {links?.storybook ? (
            <a
              className="project-card__storybook"
              href={links.storybook}
              target="_blank"
              rel="noopener noreferrer"
            >
              {labels.storybookCta}
            </a>
          ) : null}
        </div>
      </header>

      <p className="project-card__summary">{project.summary}</p>

      {hasDetails ? (
        <>
          <button
            type="button"
            className="project-card__details-toggle"
            aria-expanded={detailsOpen}
            aria-controls={`project-details-${project.id}`}
            aria-label={formatCopy(copy.a11y.projectDetails, { title: project.title })}
            onClick={() => setDetailsOpen((open) => !open)}
          >
            {labels.detailsButton}
            <DetailsChevronIcon />
          </button>

          <div
            id={`project-details-${project.id}`}
            className={`project-card__details-panel${detailsOpen ? ' project-card__details-panel--open' : ''}`}
            aria-hidden={!detailsOpen}
          >
            <div className="project-card__details-inner">
              <div className="project-card__details-columns">
                <ul className="project-card__details-list">
                  {leftDetails.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <ul className="project-card__details-list">
                  {rightDetails.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </>
      ) : null}

      {project.images.length > 0 ? (
        <ProjectImageCarousel title={project.title} images={project.images} />
      ) : null}
    </article>
  )
}
