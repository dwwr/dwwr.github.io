import type { Project } from '../../content/types'
import './ProjectDrawer.css'

export interface ProjectDrawerProps {
  readonly project: Project
  readonly isOpen: boolean
  readonly closeLabel: string
  readonly onClose: () => void
}

export function ProjectDrawer({ project, isOpen, closeLabel, onClose }: ProjectDrawerProps) {
  return (
    <section
      id={`project-drawer-${project.id}`}
      className={`project-drawer${isOpen ? ' project-drawer--open' : ''}`}
      aria-label={`${project.title} details`}
      aria-hidden={!isOpen}
    >
      <div className="project-drawer__inner">
        <div className="project-drawer__content">
          <div className="project-drawer__header">
            <button type="button" className="project-drawer__close" onClick={onClose}>
              {closeLabel}
            </button>
          </div>
          <img
            className="project-drawer__screenshot"
            src={project.screenshotSrc}
            alt={project.screenshotAlt}
          />
          <p className="project-drawer__summary">{project.summary}</p>
        </div>
      </div>
    </section>
  )
}
