/** Co-located UI / metadata strings. Wording is human-owned — do not invent marketing copy. */

import type { PortfolioCopy } from './types'

export const copy = {
  meta: {
    title: 'dwwr.github.io',
    description: 'Portfolio of Derek Warner Reyes.',
  },

  a11y: {
    bioCard: 'Bio card',
    businessCard: 'Business card',
    projectLinks: '{title} links',
    projectDetails: '{title} details',
    projectCarousel: '{title} screenshots',
  },

  bioCard: {
    content:
      'I am a software engineer with a passion for building user-friendly and efficient web applications.',
  },

  businessCard: {
    name: 'Derek Warner Reyes',
    columns: [
      {
        items: [
          { kind: 'text', text: 'Software Engineer' },
          { kind: 'email', email: 'derek@example.com' },
        ],
      },
      {
        items: [
          { kind: 'text', text: 'California' },
          { kind: 'link', label: 'GitHub', href: 'https://github.com/dwwr' },
        ],
      },
    ] as const,
    photoSrc: '/images/headshot.webp',
    photoAlt: 'Portrait of Derek Warner Reyes',
  },

  home: {
    bioCardHeading: 'Bio',
    projectsHeading: 'Projects',
  },

  projects: [
    {
      id: 'sortega',
      title: 'Sortega',
      links: {
        github: 'https://github.com/dwwr/sortega',
      },
      images: [
        { src: '/images/projects/sortega/sort1.png', alt: 'Sortega bookmark triage UI' },
        { src: '/images/projects/sortega/sort2.png', alt: 'Sortega demo showcase' },
      ],
      summary:
        'Browser extension for swiping through bookmarks — keep, delete, or file into a folder.',
    },
    {
      id: 'quake-compare',
      title: 'Quake Compare',
      links: {
        github: 'https://github.com/dwwr/earf-quake',
      },
      images: [
        { src: '/images/projects/quake-compare/quake1.png', alt: 'Quake Compare magnitude calculator' },
        { src: '/images/projects/quake-compare/quake2.png', alt: 'Quake Compare energy comparison' },
        { src: '/images/projects/quake-compare/quake3.png', alt: 'Quake Compare seismograph view' },
      ],
      summary:
        'Educational calculator comparing earthquake magnitudes — amplitude, energy, and seismic moment.',
    },
    {
      id: 'ca-llc-guide',
      title: 'California LLC Field Manual',
      links: {
        github: 'https://github.com/dwwr/ca-llc-field-manual',
      },
      images: [
        {
          src: '/images/projects/ca-llc-guide/llc-guide.png',
          alt: 'California LLC Field Manual guide page',
        },
      ],
      summary:
        'Plain-language guide to forming and running a California LLC — fees, taxes, and official sources.',
    },
    {
      id: 'instrumental',
      title: 'Instrumental Design System',
      links: {
        github: 'https://github.com/dwwr/instrumental-design-system',
      },
      images: [
        { src: '/images/projects/instrumental/instrumental1.png', alt: 'Instrumental readout component' },
        { src: '/images/projects/instrumental/instrumental2.png', alt: 'Instrumental hexagon display' },
        { src: '/images/projects/instrumental/instrumental3.png', alt: 'Instrumental chart component' },
        { src: '/images/projects/instrumental/instrumental4.png', alt: 'Instrumental data label' },
        { src: '/images/projects/instrumental/instrumental5.png', alt: 'Instrumental seven-segment display' },
      ],
      summary:
        'React component library inspired by Evangelion UI — complex readouts, charts, and display primitives.',
    },
    {
      id: 'qudian',
      title: 'Qudian',
      links: {
        github: 'https://github.com/dwwr/qudian',
      },
      images: [
        {
          src: '/images/projects/qudian/qudian.png',
          alt: 'Qudian theme in VS Code and Terminal',
        },
      ],
      summary:
        'Dark teal editor and terminal color themes for VS Code, Cursor, and macOS Terminal.',
    },
  ] as const,

  projectCard: {
    detailsButton: 'Details',
    githubLink: 'GitHub',
    liveLink: 'Live',
    storybookLink: 'Storybook',
  },

  projectCarousel: {
    previous: 'Previous image',
    next: 'Next image',
    counter: '{current} of {total}',
  },

  projectDrawer: {
    closeButton: 'Close',
  },

  footer: {
    note: '© Derek Warner Reyes',
    legalAria: 'About and legal',
    legalNav: [
      { href: '/privacy', label: 'Privacy' },
      { href: '/contact', label: 'Contact' },
      { href: '/license', label: 'License' },
    ] as const,
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
          'If that changes, this page will be updated before new tracking is enabled.',
        ],
      },
    ],
  },

  contact: {
    metaTitle: 'Contact · dwwr.github.io',
    metaDescription: 'How to reach Derek Warner Reyes.',
    title: 'Contact',
    sections: [
      {
        id: 'reach',
        heading: 'Reach out',
        paragraphs: ['Email: derek@example.com', 'GitHub: https://github.com/dwwr'],
      },
    ],
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
          'Individual projects may use their own licenses — see each project repository.',
        ],
      },
    ],
  },
} satisfies PortfolioCopy

export type Copy = typeof copy

/** Replace `{key}` placeholders in copy templates. */
export function formatCopy(template: string, values: Record<string, string>): string {
  return Object.entries(values).reduce(
    (result, [key, value]) => result.replaceAll(`{${key}}`, value),
    template,
  )
}
