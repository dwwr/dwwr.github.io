import { copy } from '../content/copy'
import { BusinessCard } from '../components/BusinessCard/BusinessCard'
import { ProjectList } from '../components/ProjectList/ProjectList'

export function HomePage() {
  return (
    <>
      <BusinessCard content={copy.businessCard} />
      <ProjectList
        heading={copy.projectsHeading}
        projects={copy.projects}
        labels={copy.projectCard}
        drawerCloseLabel={copy.projectDrawer.closeButton}
      />
    </>
  )
}
