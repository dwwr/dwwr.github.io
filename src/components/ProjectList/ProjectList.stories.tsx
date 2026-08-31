import type { Meta, StoryObj } from '@storybook/react-vite'
import { copy } from '../../content'
import { ProjectList } from './ProjectList'

const meta = {
  title: 'Portfolio/ProjectList',
  component: ProjectList,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Projects heading and a list of project cards from copy.',
      },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '48rem', margin: '0 auto', padding: '2rem 1rem' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof ProjectList>

export default meta
type Story = StoryObj<typeof meta>

const qudian = copy.projects.find((p) => p.id === 'qudian')!

/** Full project list as rendered on the home page. */
export const Default: Story = {}

/** Single project — useful for isolated layout review. */
export const SingleProject: Story = {
  args: {
    projects: [qudian],
  },
}
