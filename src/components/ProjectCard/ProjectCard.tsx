import { copy, formatCopy } from '../../content'
import type { Project } from '../../content/types'
import './ProjectCard.css'

export interface ProjectCardProps {
  readonly project: Project
  readonly isOpen: boolean
  readonly onToggleDetails: (project: Project) => void
}

export function ProjectCard({ project, isOpen, onToggleDetails }: ProjectCardProps) {
  const labels = copy.projectCard

  return (
    <article className="project-card">
      <header className="project-card__header">
        <h2 className="project-card__title">{project.title}</h2>
        <nav
          className="project-card__links"
          aria-label={formatCopy(copy.a11y.projectLinks, { title: project.title })}
        >
          <a href={project.liveHref} target="_blank" rel="noopener noreferrer">
            {project.liveLabel}
          </a>
          {project.storybookHref ? (
            <a href={project.storybookHref} target="_blank" rel="noopener noreferrer">
              {labels.storybookLink}
            </a>
          ) : null}
        </nav>
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
