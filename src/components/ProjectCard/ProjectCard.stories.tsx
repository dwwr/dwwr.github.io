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

const sortega = copy.projects.find((p) => p.id === 'sortega')!
const qudian = copy.projects.find((p) => p.id === 'qudian')!

const decorator = [
  (Story: React.ComponentType) => (
    <div style={{ maxWidth: '48rem', margin: '0 auto', padding: '2rem 1rem' }}>
      <Story />
    </div>
  ),
]

export const Default: Story = {
  args: {
    project: qudian,
  },
  decorators: decorator,
}

export const AllLinks: Story = {
  args: {
    project: sortega,
  },
  decorators: decorator,
}
