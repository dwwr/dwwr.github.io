import type { Meta, StoryObj } from '@storybook/react-vite'
import { copy } from '../../content'
import { ProjectList } from './ProjectList'

const meta = {
  title: 'Portfolio/ProjectList',
  component: ProjectList,
  parameters: {
    layout: 'fullscreen',
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

export const Default: Story = {}

export const SingleProject: Story = {
  args: {
    projects: [copy.projects[0]],
  },
}
