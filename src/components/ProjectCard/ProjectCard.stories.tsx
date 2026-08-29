import type { Meta, StoryObj } from '@storybook/react-vite'
import { copy } from '../../content/copy'
import { ProjectCard } from './ProjectCard'

const meta = {
  title: 'Portfolio/ProjectCard',
  component: ProjectCard,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof ProjectCard>

export default meta
type Story = StoryObj<typeof meta>

const defaultArgs = {
  project: copy.projects[0],
  labels: copy.projectCard,
  isOpen: false,
  onToggleDetails: () => {},
}

export const Default: Story = {
  args: defaultArgs,
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '48rem', margin: '0 auto', padding: '2rem 1rem' }}>
        <Story />
      </div>
    ),
  ],
}

export const WithStorybook: Story = {
  args: {
    ...defaultArgs,
    project: {
      ...copy.projects[0],
      storybookHref: 'https://example.com/storybook',
    },
  },
  decorators: Default.decorators,
}

export const DetailsOpen: Story = {
  args: {
    ...defaultArgs,
    isOpen: true,
  },
  decorators: Default.decorators,
}
