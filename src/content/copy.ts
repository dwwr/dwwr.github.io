/** Co-located UI / metadata strings. Wording is human-owned — do not invent marketing copy. */

import type { PortfolioCopy } from './types'

export const copy = {
  meta: {
    title: 'dwwr.github.io',
    description: 'Portfolio of Derek Warner Reyes.'
  },

  a11y: {
    bioCard: 'Bio card',
    businessCard: 'Business card',
    projectLinks: '{title} links',
    projectDetails: '{title} details'
  },

  bioCard: {
    content:
      'I am a software engineer with a passion for building user-friendly and efficient web applications.'
  },

  businessCard: {
    name: 'Derek Warner Reyes',
    columns: [
      {
        items: [
          { kind: 'text', text: 'Software Engineer' },
          { kind: 'email', email: 'derek@example.com' }
        ]
      },
      {
        items: [
          { kind: 'text', text: 'California' },
          { kind: 'link', label: 'GitHub', href: 'https://github.com/dwwr' }
        ]
      }
    ] as const,
    photoSrc: '/images/headshot.webp',
    photoAlt: 'Portrait of Derek Warner Reyes'
  },

  home: {
    bioCardHeading: 'Bio',
    projectsHeading: 'Projects'
  },

  projects: [
    {
      id: 'qudian',
      title: 'Qudian',
      liveHref: 'https://github.com/dwwr/qudian',
      liveLabel: 'GitHub',
      screenshotSrc: '/images/projects/qudian.png',
      screenshotAlt: 'Qudian theme in VS Code and Terminal',
      summary: 'Dark teal editor and terminal color themes for VS Code, Cursor, and macOS Terminal.'
    }
  ] as const,

  projectCard: {
    detailsButton: 'Details',
    storybookLink: 'Storybook'
  },

  projectDrawer: {
    closeButton: 'Close'
  },

  footer: {
    note: '© Derek Warner Reyes',
    legalAria: 'About and legal',
    legalNav: [
      { href: '/privacy', label: 'Privacy' },
      { href: '/contact', label: 'Contact' },
      { href: '/license', label: 'License' }
    ] as const
  },

  privacy: {
    metaTitle: 'Privacy · dwwr.github.io',
    metaDescription: 'Privacy policy for dwwr.github.io.',
    title: 'Privacy',
    sections: [
      {
        id: 'overview',
        heading: 'Overview',
        paragraphs: [
          'This site is a static portfolio. It does not use analytics or advertising trackers in the MVP.',
          'If that changes, this page will be updated before new tracking is enabled.'
        ]
      }
    ]
  },

  contact: {
    metaTitle: 'Contact · dwwr.github.io',
    metaDescription: 'How to reach Derek Warner Reyes.',
    title: 'Contact',
    sections: [
      {
        id: 'reach',
        heading: 'Reach out',
        paragraphs: ['Email: derek@example.com', 'GitHub: https://github.com/dwwr']
      }
    ]
  },

  license: {
    metaTitle: 'License · dwwr.github.io',
    metaDescription: 'License information for dwwr.github.io.',
    title: 'License',
    sections: [
      {
        id: 'site',
        heading: 'Site content',
        paragraphs: [
          'Portfolio site content is © Derek Warner Reyes unless otherwise noted.',
          'Individual projects may use their own licenses — see each project repository.'
        ]
      }
    ]
  }
} satisfies PortfolioCopy

export type Copy = typeof copy

/** Replace `{key}` placeholders in copy templates. */
export function formatCopy(template: string, values: Record<string, string>): string {
  return Object.entries(values).reduce(
    (result, [key, value]) => result.replaceAll(`{${key}}`, value),
    template
  )
}
