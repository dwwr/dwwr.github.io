import type { Meta, StoryObj } from '@storybook/react-vite'
import { copy } from '../../content/copy'
import { ProjectDrawer } from './ProjectDrawer'

const meta = {
  title: 'Portfolio/ProjectDrawer',
  component: ProjectDrawer,
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
} satisfies Meta<typeof ProjectDrawer>

export default meta
type Story = StoryObj<typeof meta>

export const Open: Story = {
  args: {
    project: copy.projects[0],
    isOpen: true,
    closeLabel: copy.projectDrawer.closeButton,
    onClose: () => {},
  },
}

export const Closed: Story = {
  args: {
    project: copy.projects[0],
    isOpen: false,
    closeLabel: copy.projectDrawer.closeButton,
    onClose: () => {},
  },
}
