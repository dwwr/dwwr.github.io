import type { Meta, StoryObj } from '@storybook/react-vite'
import { copy } from '../../content'
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

const decorator = [
  (Story: React.ComponentType) => (
    <div style={{ maxWidth: '48rem', margin: '0 auto', padding: '2rem 1rem' }}>
      <Story />
    </div>
  ),
]

export const Default: Story = {
  args: {
    project: copy.projects[0],
    isOpen: false,
    onToggleDetails: () => {},
  },
  decorators: decorator,
}

export const WithStorybook: Story = {
  args: {
    project: {
      ...copy.projects[0],
      storybookHref: 'https://example.com/storybook',
    },
    isOpen: false,
    onToggleDetails: () => {},
  },
  decorators: decorator,
}

export const DetailsOpen: Story = {
  args: {
    project: copy.projects[0],
    isOpen: true,
    onToggleDetails: () => {},
  },
  decorators: decorator,
}
