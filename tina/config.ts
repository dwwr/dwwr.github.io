import { defineConfig } from 'tinacms'

/**
 * Local-first Tina config. Content lives as JSON under /content.
 * Production browser editing needs Tina Cloud (clientId + token).
 */
export default defineConfig({
  clientId: process.env.TINA_PUBLIC_CLIENT_ID,
  token: process.env.TINA_TOKEN,
  branch:
    process.env.TINA_PUBLIC_BRANCH ||
    process.env.GITHUB_HEAD_REF ||
    process.env.GITHUB_REF_NAME ||
    'main',
  build: {
    publicFolder: 'public',
    outputFolder: 'admin'
  },
  media: {
    tina: {
      publicFolder: 'public',
      mediaRoot: 'images'
    }
  },
  schema: {
    collections: [
      {
        name: 'site',
        label: 'Site',
        path: 'content',
        format: 'json',
        ui: {
          allowedActions: {
            create: false,
            delete: false
          }
        },
        match: {
          include: 'site'
        },
        fields: [
          {
            type: 'string',
            name: 'metaTitle',
            label: 'Meta title',
            required: true
          },
          {
            type: 'string',
            name: 'metaDescription',
            label: 'Meta description',
            required: true,
            ui: { component: 'textarea' }
          },
          {
            type: 'string',
            name: 'bioCardHeading',
            label: 'Bio heading',
            required: true
          },
          {
            type: 'string',
            name: 'projectsHeading',
            label: 'Projects heading',
            required: true
          },
          {
            type: 'string',
            name: 'bioContent',
            label: 'Bio',
            required: true,
            ui: { component: 'textarea' }
          },
          {
            type: 'string',
            name: 'name',
            label: 'Display name',
            required: true
          },
          {
            type: 'image',
            name: 'photoSrc',
            label: 'Headshot',
            required: true
          },
          {
            type: 'string',
            name: 'photoAlt',
            label: 'Headshot alt text',
            required: true
          },
          {
            type: 'object',
            name: 'columns',
            label: 'Business card columns',
            list: true,
            ui: {
              itemProps: (item: { label?: string }, index?: number) => ({
                label: item?.label || `Column ${(index ?? 0) + 1}`
              })
            },
            fields: [
              {
                type: 'string',
                name: 'label',
                label: 'Column label (admin only)'
              },
              {
                type: 'object',
                name: 'items',
                label: 'Items',
                list: true,
                ui: {
                  itemProps: (item: { kind?: string; text?: string; label?: string }) => ({
                    label:
                      item?.kind === 'link'
                        ? item.label || 'Link'
                        : item?.kind === 'email'
                          ? item.text || 'Email'
                          : item?.text || 'Text'
                  })
                },
                fields: [
                  {
                    type: 'string',
                    name: 'kind',
                    label: 'Kind',
                    required: true,
                    options: [
                      { label: 'Text', value: 'text' },
                      { label: 'Email', value: 'email' },
                      { label: 'Link', value: 'link' }
                    ]
                  },
                  {
                    type: 'string',
                    name: 'text',
                    label: 'Text (for text items)'
                  },
                  {
                    type: 'string',
                    name: 'email',
                    label: 'Email (for email items)'
                  },
                  {
                    type: 'string',
                    name: 'label',
                    label: 'Link label'
                  },
                  {
                    type: 'string',
                    name: 'href',
                    label: 'Link URL'
                  }
                ]
              }
            ]
          },
          {
            type: 'string',
            name: 'footerNote',
            label: 'Footer note',
            required: true
          },
          {
            type: 'string',
            name: 'legalAria',
            label: 'Legal nav aria label',
            required: true
          },
          {
            type: 'object',
            name: 'legalNav',
            label: 'Legal nav links',
            list: true,
            ui: {
              itemProps: (item: { label?: string }) => ({
                label: item?.label || 'Nav link'
              })
            },
            fields: [
              {
                type: 'string',
                name: 'href',
                label: 'Path',
                required: true
              },
              {
                type: 'string',
                name: 'label',
                label: 'Label',
                required: true
              }
            ]
          }
        ]
      },
      {
        name: 'project',
        label: 'Projects',
        path: 'content/projects',
        format: 'json',
        ui: {
          filename: {
            readonly: false,
            slugify: (values: { title?: string }) =>
              values.title
                ?.toLowerCase()
                .replace(/[^a-z0-9]+/g, '-')
                .replace(/(^-|-$)/g, '') || 'project'
          }
        },
        fields: [
          {
            type: 'number',
            name: 'order',
            label: 'Order',
            required: true,
            description: 'Lower numbers appear first on the home page.'
          },
          {
            type: 'string',
            name: 'title',
            label: 'Title',
            required: true,
            isTitle: true
          },
          {
            type: 'string',
            name: 'summary',
            label: 'Summary',
            required: true,
            ui: { component: 'textarea' }
          },
          {
            type: 'string',
            name: 'details',
            label: 'Details',
            list: true,
            description: 'Aim for up to six items (shown in two columns).'
          },
          {
            type: 'object',
            name: 'links',
            label: 'Links',
            fields: [
              { type: 'string', name: 'github', label: 'GitHub URL' },
              { type: 'string', name: 'live', label: 'Live URL' },
              { type: 'string', name: 'storybook', label: 'Storybook URL' }
            ]
          },
          {
            type: 'object',
            name: 'images',
            label: 'Images',
            list: true,
            ui: {
              itemProps: (item: { alt?: string }) => ({
                label: item?.alt || 'Image'
              })
            },
            fields: [
              {
                type: 'image',
                name: 'src',
                label: 'Image',
                required: true
              },
              {
                type: 'string',
                name: 'alt',
                label: 'Alt text',
                required: true
              }
            ]
          }
        ]
      },
      {
        name: 'legalPage',
        label: 'Legal pages',
        path: 'content/legal',
        format: 'json',
        ui: {
          filename: {
            readonly: true,
            slugify: (values: { title?: string }) =>
              values.title?.toLowerCase().replace(/[^a-z0-9]+/g, '-') || 'page'
          }
        },
        fields: [
          {
            type: 'string',
            name: 'metaTitle',
            label: 'Meta title',
            required: true
          },
          {
            type: 'string',
            name: 'metaDescription',
            label: 'Meta description',
            required: true,
            ui: { component: 'textarea' }
          },
          {
            type: 'string',
            name: 'title',
            label: 'Page title',
            required: true,
            isTitle: true
          },
          {
            type: 'object',
            name: 'sections',
            label: 'Sections',
            list: true,
            ui: {
              itemProps: (item: { heading?: string }) => ({
                label: item?.heading || 'Section'
              })
            },
            fields: [
              {
                type: 'string',
                name: 'id',
                label: 'Section id',
                required: true
              },
              {
                type: 'string',
                name: 'heading',
                label: 'Heading',
                required: true
              },
              {
                type: 'string',
                name: 'paragraphs',
                label: 'Paragraphs',
                list: true,
                ui: { component: 'textarea' }
              }
            ]
          }
        ]
      }
    ]
  }
})
