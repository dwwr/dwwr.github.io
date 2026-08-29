import { useState } from 'react'
import { copy } from '../../content/copy'
import type { Project } from '../../content/types'
import { ProjectCard } from '../ProjectCard/ProjectCard'
import { ProjectDrawer } from '../ProjectDrawer/ProjectDrawer'
import './ProjectList.css'

export interface ProjectListProps {
  readonly heading: string
  readonly projects: readonly Project[]
  readonly labels: typeof copy.projectCard
  readonly drawerCloseLabel: string
}

export function ProjectList({
  heading,
  projects,
  labels,
  drawerCloseLabel,
}: ProjectListProps) {
  const [openProjectId, setOpenProjectId] = useState<string | null>(null)

  const toggleDetails = (project: Project) => {
    setOpenProjectId((current) => (current === project.id ? null : project.id))
  }

  return (
    <section className="project-list" aria-labelledby="projects-heading">
      <h2 id="projects-heading" className="project-list__heading">
        {heading}
      </h2>
      <ul className="project-list__items">
        {projects.map((project) => {
          const isOpen = openProjectId === project.id

          return (
            <li key={project.id} className="project-list__item">
              <ProjectCard
                project={project}
                labels={labels}
                isOpen={isOpen}
                onToggleDetails={toggleDetails}
              />
              <ProjectDrawer
                project={project}
                isOpen={isOpen}
                closeLabel={drawerCloseLabel}
                onClose={() => setOpenProjectId(null)}
              />
            </li>
          )
        })}
      </ul>
    </section>
  )
}
