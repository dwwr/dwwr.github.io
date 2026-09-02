import site from '../../content/site.json'
import privacy from '../../content/legal/privacy.json'
import contact from '../../content/legal/contact.json'
import license from '../../content/legal/license.json'
import type {
  BusinessCardItem,
  LegalPageContent,
  PortfolioCopy,
  Project,
  ProjectLinks
} from './types'
import { uiChrome } from './uiChrome'

interface SiteColumnItem {
  kind: string
  text?: string
  email?: string
  label?: string
  href?: string
}

interface SiteContent {
  metaTitle: string
  metaDescription: string
  bioCardHeading: string
  projectsHeading: string
  bioContent: string
  name: string
  photoSrc: string
  photoAlt: string
  columns: readonly { label?: string; items: readonly SiteColumnItem[] }[]
  footerNote: string
  legalAria: string
  legalNav: readonly { href: string; label: string }[]
}

interface ProjectFile {
  order: number
  title: string
  summary: string
  details?: readonly string[]
  links?: {
    github?: string
    live?: string
    storybook?: string
  }
  images?: readonly { src: string; alt: string }[]
}

interface LegalFile {
  metaTitle: string
  metaDescription: string
  title: string
  sections: readonly {
    id: string
    heading: string
    paragraphs: readonly string[]
  }[]
}

const projectModules = import.meta.glob<{ default: ProjectFile }>(
  '../../content/projects/*.json',
  { eager: true }
)

function mapBusinessCardItem(item: SiteColumnItem): BusinessCardItem {
  if (item.kind === 'email') {
    return { kind: 'email', email: item.email ?? '' }
  }
  if (item.kind === 'link') {
    return { kind: 'link', label: item.label ?? '', href: item.href ?? '' }
  }
  return { kind: 'text', text: item.text ?? '' }
}

function mapLinks(links: ProjectFile['links']): ProjectLinks | undefined {
  if (!links) return undefined
  const mapped: ProjectLinks = {
    ...(links.github ? { github: links.github } : {}),
    ...(links.live ? { live: links.live } : {}),
    ...(links.storybook ? { storybook: links.storybook } : {})
  }
  return mapped.github || mapped.live || mapped.storybook ? mapped : undefined
}

function loadProjects(): Project[] {
  return Object.entries(projectModules)
    .map(([path, mod]) => {
      const id = path.split('/').pop()?.replace(/\.json$/, '') ?? path
      const data = mod.default
      const links = mapLinks(data.links)
      return {
        id,
        title: data.title,
        summary: data.summary,
        details: [...(data.details ?? [])],
        images: [...(data.images ?? [])],
        ...(links ? { links } : {}),
        order: data.order
      }
    })
    .sort((a, b) => a.order - b.order)
    .map(({ order: _, ...project }) => project)
}

function mapLegalPage(data: LegalFile): LegalPageContent {
  return {
    metaTitle: data.metaTitle,
    metaDescription: data.metaDescription,
    title: data.title,
    sections: data.sections.map((section) => ({
      id: section.id,
      heading: section.heading,
      paragraphs: [...section.paragraphs]
    }))
  }
}

function loadCopy(): PortfolioCopy {
  const siteData = site as SiteContent
  const columns = siteData.columns.slice(0, 2).map((column) => ({
    items: column.items.map(mapBusinessCardItem)
  }))

  if (columns.length < 2) {
    throw new Error('Site content must define two business card columns.')
  }

  return {
    meta: {
      title: siteData.metaTitle,
      description: siteData.metaDescription
    },
    a11y: uiChrome.a11y,
    bioCard: {
      content: siteData.bioContent
    },
    businessCard: {
      name: siteData.name,
      columns: [columns[0]!, columns[1]!] as const,
      photoSrc: siteData.photoSrc,
      photoAlt: siteData.photoAlt
    },
    home: {
      bioCardHeading: siteData.bioCardHeading,
      projectsHeading: siteData.projectsHeading
    },
    projects: loadProjects(),
    projectCard: uiChrome.projectCard,
    projectCarousel: uiChrome.projectCarousel,
    footer: {
      note: siteData.footerNote,
      legalAria: siteData.legalAria,
      legalNav: siteData.legalNav.map((link) => ({ ...link }))
    },
    privacy: mapLegalPage(privacy as LegalFile),
    contact: mapLegalPage(contact as LegalFile),
    license: mapLegalPage(license as LegalFile)
  }
}

export const copy = loadCopy()

export type Copy = typeof copy
