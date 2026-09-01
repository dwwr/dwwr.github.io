/** Co-located UI / metadata strings. Wording is human-owned — do not invent marketing copy. */

import type { PortfolioCopy } from './types'

export const copy = {
  meta: {
    title: 'Welcome to my portfolio!',
    description: 'Portfolio of Derek Warner-Reyes, Software Engineer.'
  },

  a11y: {
    bioCard: 'Bio card',
    businessCard: 'Business card',
    projectLinks: '{title} links',
    projectCarousel: '{title} screenshots',
    projectLightbox: '{title} fullscreen image',
    projectDetails: '{title} details'
  },

  bioCard: {
    content:
      'Fullstack software engineer based in Los Angeles with experience building, testing, and maintaining web and mobile applications from conception to production. Most recently served as lead fullstack software engineer at Olio Apps from 2021-2026.'
  },

  businessCard: {
    name: 'Derek Warner-Reyes',
    columns: [
      {
        items: [
          { kind: 'text', text: 'Fullstack Software Engineer' },
          { kind: 'text', text: 'Based in Los Angeles' },
          { kind: 'email', email: 'dwwarnerreyes@gmail.com' }
        ]
      },
      {
        items: [
          { kind: 'link', label: 'GitHub', href: 'https://github.com/dwwr' },
          { kind: 'link', label: 'LinkedIn', href: 'https://www.linkedin.com/in/dwwr/' },
          {
            kind: 'link',
            label: 'Stack Overflow',
            href: 'https://stackoverflow.com/users/15891793/sweetbabyd'
          }
        ]
      }
    ] as const,
    photoSrc: '/images/headshot.webp',
    photoAlt: 'Portrait of Derek Warner-Reyes'
  },

  home: {
    bioCardHeading: 'Bio',
    projectsHeading: 'Recent Personal Projects'
  },

  projects: [
    {
      id: 'sortega',
      title: 'Sortega',
      links: {
        live: 'https://sortega.vercel.app/',
        github: 'https://github.com/dwwr/sortega',
        storybook: 'https://sortega.vercel.app/storybook/'
      },
      images: [
        { src: '/images/projects/sortega/sort1.png', alt: 'Sortega bookmark triage UI' },
        { src: '/images/projects/sortega/sort2.png', alt: 'Sortega demo showcase' }
      ],
      summary:
        'Browser extension for cleaning & sorting bookmarks with a swipe-based UX- sort, keep, or delete bookmarks. "Next!"',
      details: [
        'WebExtension APIs',
        'React + Vite',
        'TypeScript + ESLint + Prettier',
        'Swipe-based UX a la Tinder',
        'Folder filing workflow',
        'Vercel deployment'
      ]
    },
    {
      id: 'quake-compare',
      title: 'Compare Magnitude',
      links: {
        live: 'https://www.compare-magnitude.com/',
        github: 'https://github.com/dwwr/earf-quake',
        storybook: 'https://www.compare-magnitude.com/storybook/?path=/docs/overview--docs'
      },
      images: [
        { src: '/images/projects/quake-compare/quake1.png', alt: 'Compare Magnitude calculator' },
        {
          src: '/images/projects/quake-compare/quake2.png',
          alt: 'Compare Magnitude energy comparison'
        },
        {
          src: '/images/projects/quake-compare/quake3.png',
          alt: 'Compare Magnitude seismograph view'
        }
      ],
      summary:
        'Educational calculator comparing earthquake magnitudes — amplitude, energy, and seismic moment.',
      details: [
        'React + Vite',
        'TypeScript + ESLint + Prettier',
        'custom native SVG animations',
        'Interactive charts',
        'Static deployment',
        'ed-tech concept'
      ]
    },
    {
      id: 'ca-llc-guide',
      title: 'California LLC Field Manual',
      links: {
        live: 'https://www.california-llc-guide.com/',
        github: 'https://github.com/dwwr/ca-llc-field-manual',
        storybook: 'https://www.california-llc-guide.com/storybook/'
      },
      images: [
        {
          src: '/images/projects/ca-llc-guide/llc-guide.png',
          alt: 'California LLC Field Manual guide page'
        }
      ],
      summary:
        'Knowledge guide to for those considering forming and running a California LLC — fees, tax calculator, and official sources.',
      details: [
        'React + Vite',
        'TypeScript + ESLint + Prettier',
        'California SOS & FTB sources',
        'Next.js SSG deployment',
        'Storybook component docs',
        'It is not legal, tax, or insurance advice'
      ]
    },
    {
      id: 'instrumental',
      title: 'Instrumental Design System',
      links: {
        github: 'https://github.com/dwwr/instrumental-design-system'
      },
      images: [
        {
          src: '/images/projects/instrumental/instrumental1.png',
          alt: 'Instrumental readout component'
        },
        {
          src: '/images/projects/instrumental/instrumental2.png',
          alt: 'Instrumental hexagon display'
        },
        {
          src: '/images/projects/instrumental/instrumental3.png',
          alt: 'Instrumental chart component'
        },
        { src: '/images/projects/instrumental/instrumental4.png', alt: 'Instrumental data label' },
        {
          src: '/images/projects/instrumental/instrumental5.png',
          alt: 'Instrumental seven-segment display'
        }
      ],
      summary:
        'React component library inspired by Evangelion UI — complex readouts, charts, and display primitives evoking the aesthetic of the anime.',
      details: [
        'React + Vite',
        'TypeScript + ESLint + Prettier',
        'TypeScript',
        'Storybook component docs',
        'Evangelion-inspired UI',
        'custom SVG animations'
      ]
    },
    {
      id: 'qudian',
      title: 'Qudian',
      links: {
        github: 'https://github.com/dwwr/qudian'
      },
      images: [
        {
          src: '/images/projects/qudian/qudian.png',
          alt: 'Qudian theme in VS Code and Terminal'
        }
      ],
      summary: 'Editor and terminal color themes for VS Code, Cursor, and macOS Terminal.',
      details: [
        'VS Code theme JSON',
        'Cursor editor themes',
        'macOS Terminal colors',
        'custom palette',
        'Semantic token mapping',
        'GitHub distribution'
      ]
    },
    {
      id: 'portfolio',
      title: 'dwwr.github.io',
      links: {
        live: 'https://dwwr.github.io/',
        github: 'https://github.com/dwwr/dwwr.github.io',
        storybook: 'https://dwwr.github.io/storybook/'
      },
      images: [],
      summary: 'This portfolio site — React, Vite, TypeScript, and GitHub Pages.',
      details: [
        'React 19',
        'Vite',
        'TypeScript',
        'React Router',
        'Storybook',
        'GitHub Pages',
        'Static deployment'
      ]
    }
  ] as const,

  projectCard: {
    githubLink: 'GitHub',
    liveLink: 'Live',
    storybookCta: 'Open Storybook',
    detailsButton: 'Details'
  },

  projectCarousel: {
    previous: 'Previous image',
    next: 'Next image',
    counter: '{current} of {total}',
    openLightbox: 'View fullscreen',
    closeLightbox: 'Close fullscreen'
  },

  footer: {
    note: '© Derek Warner-Reyes',
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
          'This site is a static portfolio. It does not use advertising trackers.',
          'If that changes, this page will be updated before new tracking is enabled.'
        ]
      }
    ]
  },

  contact: {
    metaTitle: 'Contact · dwwr.github.io',
    metaDescription: 'How to reach Derek Warner-Reyes.',
    title: 'Contact',
    sections: [
      {
        id: 'reach',
        heading: 'Reach out',
        paragraphs: ['Email: dwwarnerreyes@gmail.com', 'GitHub: https://github.com/dwwr']
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
