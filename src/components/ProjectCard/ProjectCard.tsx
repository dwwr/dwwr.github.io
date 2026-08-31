import { copy, formatCopy } from '../../content'
import type { Project } from '../../content/types'
import './ProjectCard.css'

export interface ProjectCardProps {
  readonly project: Project
  readonly isOpen: boolean
  readonly onToggleDetails: (project: Project) => void
}

function hasLinks(project: Project): boolean {
  const links = project.links
  if (!links) return false
  return Boolean(links.github || links.live || links.storybook)
}

export function ProjectCard({ project, isOpen, onToggleDetails }: ProjectCardProps) {
  const labels = copy.projectCard
  const links = project.links
  const showLinks = hasLinks(project)

  return (
    <article className="project-card">
      <header className="project-card__header">
        <h2 className="project-card__title">{project.title}</h2>
        {showLinks ? (
          <nav
            className="project-card__links"
            aria-label={formatCopy(copy.a11y.projectLinks, { title: project.title })}
          >
            {links?.github ? (
              <a href={links.github} target="_blank" rel="noopener noreferrer">
                {labels.githubLink}
              </a>
            ) : null}
            {links?.live ? (
              <a href={links.live} target="_blank" rel="noopener noreferrer">
                {labels.liveLink}
              </a>
            ) : null}
            {links?.storybook ? (
              <a href={links.storybook} target="_blank" rel="noopener noreferrer">
                {labels.storybookLink}
              </a>
            ) : null}
          </nav>
        ) : null}
      </header>
      <button
        type="button"
        className="project-card__details"
        aria-expanded={isOpen}
        aria-controls={`project-drawer-${project.id}`}
        onClick={() => onToggleDetails(project)}
      >
        {labels.detailsButton}
      </button>
    </article>
  )
}
