import { useState } from 'react'
import { copy } from '../../content'
import type { Project } from '../../content/types'
import { ProjectCard } from '../ProjectCard/ProjectCard'
import { ProjectDrawer } from '../ProjectDrawer/ProjectDrawer'
import './ProjectList.css'

export interface ProjectListProps {
  readonly projects?: readonly Project[]
}

export function ProjectList({ projects = copy.projects }: ProjectListProps) {
  const [openProjectId, setOpenProjectId] = useState<string | null>(null)

  const toggleDetails = (project: Project) => {
    setOpenProjectId((current) => (current === project.id ? null : project.id))
  }

  return (
    <section className="project-list" aria-labelledby="projects-heading">
      <h2 id="projects-heading" className="project-list__heading">
        {copy.home.projectsHeading}
      </h2>
      <ul className="project-list__items">
        {projects.map((project) => {
          const isOpen = openProjectId === project.id

          return (
            <li key={project.id} className="project-list__item">
              <ProjectCard project={project} isOpen={isOpen} onToggleDetails={toggleDetails} />
              <ProjectDrawer
                project={project}
                isOpen={isOpen}
                onClose={() => setOpenProjectId(null)}
              />
            </li>
          )
        })}
      </ul>
    </section>
  )
}
