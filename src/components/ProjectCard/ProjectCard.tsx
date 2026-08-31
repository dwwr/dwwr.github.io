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

export function ProjectCard({ project }: ProjectCardProps) {
  const labels = copy.projectCard
  const links = project.links
  const showLinks = hasTextLinks(project)

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
      {project.images.length > 0 ? (
        <ProjectImageCarousel title={project.title} images={project.images} />
      ) : null}
    </article>
  )
}
