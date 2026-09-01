export interface NavLink {
  readonly href: string
  readonly label: string
}

export interface BusinessCardColumn {
  readonly items: readonly BusinessCardItem[]
}

export type BusinessCardItem =
  | { readonly kind: 'text'; readonly text: string }
  | { readonly kind: 'email'; readonly email: string }
  | { readonly kind: 'link'; readonly label: string; readonly href: string }

export interface BusinessCardContent {
  readonly name: string
  readonly columns: readonly [BusinessCardColumn, BusinessCardColumn]
  readonly photoSrc: string
  readonly photoAlt: string
}

export interface BioCardContent {
  readonly content: string
}

export interface ProjectImage {
  readonly src: string
  readonly alt: string
}

export interface ProjectLinks {
  readonly github?: string
  readonly live?: string
  readonly storybook?: string
}

export interface Project {
  readonly id: string
  readonly title: string
  readonly links?: ProjectLinks
  readonly images: readonly ProjectImage[]
  readonly summary: string
  /** Up to six technologies or concepts, shown in two columns when expanded. */
  readonly details: readonly string[]
}

export interface LegalSection {
  readonly id: string
  readonly heading: string
  readonly paragraphs: readonly string[]
}

export interface LegalPageContent {
  readonly metaTitle: string
  readonly metaDescription: string
  readonly title: string
  readonly sections: readonly LegalSection[]
}

export interface PortfolioCopy {
  readonly meta: {
    readonly title: string
    readonly description: string
  }
  readonly a11y: {
    readonly bioCard: string
    readonly businessCard: string
    readonly projectLinks: string
    readonly projectCarousel: string
    readonly projectLightbox: string
    readonly projectDetails: string
  }
  readonly bioCard: BioCardContent
  readonly businessCard: BusinessCardContent
  readonly home: {
    readonly bioCardHeading: string
    readonly projectsHeading: string
  }
  readonly projects: readonly Project[]
  readonly projectCard: {
    readonly githubLink: string
    readonly liveLink: string
    readonly storybookCta: string
    readonly detailsButton: string
  }
  readonly projectCarousel: {
    readonly previous: string
    readonly next: string
    readonly counter: string
    readonly openLightbox: string
    readonly closeLightbox: string
  }
  readonly footer: {
    readonly note: string
    readonly legalAria: string
    readonly legalNav: readonly NavLink[]
  }
  readonly privacy: LegalPageContent
  readonly contact: LegalPageContent
  readonly license: LegalPageContent
}

export interface PageMeta {
  readonly title: string
  readonly description?: string
}
