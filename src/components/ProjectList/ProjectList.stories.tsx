import type { Meta, StoryObj } from '@storybook/react-vite'
import { copy } from '../../content/copy'
import { ProjectList } from './ProjectList'

const meta = {
  title: 'Portfolio/ProjectList',
  component: ProjectList,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof ProjectList>

export default meta
type Story = StoryObj<typeof meta>

const defaultArgs = {
  heading: copy.projectsHeading,
  projects: copy.projects,
  labels: copy.projectCard,
  drawerCloseLabel: copy.projectDrawer.closeButton,
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

export const SingleProject: Story = {
  args: {
    ...defaultArgs,
    projects: [copy.projects[0]],
  },
  decorators: Default.decorators,
}
