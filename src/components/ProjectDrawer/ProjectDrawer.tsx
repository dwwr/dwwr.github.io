import { copy, formatCopy } from '../../content'
import type { Project } from '../../content/types'
import { ProjectImageCarousel } from '../ProjectImageCarousel/ProjectImageCarousel'
import './ProjectDrawer.css'

export interface ProjectDrawerProps {
  readonly project: Project
  readonly isOpen: boolean
  readonly onClose: () => void
}

export function ProjectDrawer({ project, isOpen, onClose }: ProjectDrawerProps) {
  return (
    <section
      id={`project-drawer-${project.id}`}
      className={`project-drawer${isOpen ? ' project-drawer--open' : ''}`}
      aria-label={formatCopy(copy.a11y.projectDetails, { title: project.title })}
      aria-hidden={!isOpen}
    >
      <div className="project-drawer__inner">
        <div className="project-drawer__content">
          <div className="project-drawer__header">
            <button type="button" className="project-drawer__close" onClick={onClose}>
              {copy.projectDrawer.closeButton}
            </button>
          </div>
          <ProjectImageCarousel title={project.title} images={project.images} />
          <p className="project-drawer__summary">{project.summary}</p>
        </div>
      </div>
    </section>
  )
}
