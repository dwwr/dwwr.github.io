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

export interface Project {
  readonly id: string
  readonly title: string
  readonly liveHref: string
  readonly liveLabel: string
  readonly storybookHref?: string
  readonly screenshotSrc: string
  readonly screenshotAlt: string
  readonly summary: string
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
    readonly detailsButton: string
    readonly storybookLink: string
  }
  readonly projectDrawer: {
    readonly closeButton: string
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
