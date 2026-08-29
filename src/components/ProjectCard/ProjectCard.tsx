import type { Project } from '../../content/types'
import './ProjectCard.css'

export interface ProjectCardLabels {
  readonly detailsButton: string
  readonly storybookLink: string
}

export interface ProjectCardProps {
  readonly project: Project
  readonly labels: ProjectCardLabels
  readonly isOpen: boolean
  readonly onToggleDetails: (project: Project) => void
}

export function ProjectCard({ project, labels, isOpen, onToggleDetails }: ProjectCardProps) {
  return (
    <article className="project-card">
      <header className="project-card__header">
        <h2 className="project-card__title">{project.title}</h2>
        <nav className="project-card__links" aria-label={`${project.title} links`}>
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
