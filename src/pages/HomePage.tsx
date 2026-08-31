import { copy } from '../content'
import { usePageMeta } from '../hooks/usePageMeta'
import { BusinessCard } from '../components/BusinessCard/BusinessCard'
import { ProjectList } from '../components/ProjectList/ProjectList'
import { BioCard } from '../components/BioCard/BioCard'

export function HomePage() {
  usePageMeta(copy.meta)

  return (
    <>
      <BusinessCard />
      <BioCard />
      <ProjectList />
    </>
  )
}
