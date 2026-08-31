import type { Meta, StoryObj } from '@storybook/react-vite'
import { copy } from '../../content'
import { ProjectCard } from './ProjectCard'

const portfolioShell = [
  (Story: React.ComponentType) => (
    <div style={{ maxWidth: '48rem', margin: '0 auto', padding: '2rem 1rem' }}>
      <Story />
    </div>
  ),
]

const sortega = copy.projects.find((p) => p.id === 'sortega')!
const instrumental = copy.projects.find((p) => p.id === 'instrumental')!
const portfolio = copy.projects.find((p) => p.id === 'portfolio')!
const qudian = copy.projects.find((p) => p.id === 'qudian')!

const meta = {
  title: 'Portfolio/ProjectCard',
  component: ProjectCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Project header, summary, expandable details, optional image carousel, and outbound links.',
      },
    },
  },
  decorators: portfolioShell,
} satisfies Meta<typeof ProjectCard>

export default meta
type Story = StoryObj<typeof meta>

/** GitHub link only, single carousel image. */
export const Default: Story = {
  args: {
    project: qudian,
  },
}

/** Live, GitHub, and Storybook links with multiple carousel images. */
export const AllLinks: Story = {
  args: {
    project: sortega,
  },
}

/** GitHub-only project with a five-image carousel. */
export const GitHubOnly: Story = {
  args: {
    project: instrumental,
  },
}

/** No carousel — summary, details, and links only. */
export const NoImages: Story = {
  args: {
    project: portfolio,
  },
}

/** Details panel expanded to show the two-column bullet lists. */
export const DetailsExpanded: Story = {
  args: {
    project: sortega,
    defaultDetailsOpen: true,
  },
}
