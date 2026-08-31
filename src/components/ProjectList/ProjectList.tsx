import { copy } from '../../content'
import type { Project } from '../../content/types'
import { ProjectCard } from '../ProjectCard/ProjectCard'
import './ProjectList.css'

export interface ProjectListProps {
  readonly projects?: readonly Project[]
}

export function ProjectList({ projects = copy.projects }: ProjectListProps) {
  return (
    <section className="project-list" aria-labelledby="projects-heading">
      <h2 id="projects-heading" className="project-list__heading">
        {copy.home.projectsHeading}
      </h2>
      <ul className="project-list__items">
        {projects.map((project) => (
          <li key={project.id} className="project-list__item">
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>
    </section>
  )
}
