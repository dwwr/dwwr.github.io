import type { Meta, StoryObj } from '@storybook/react-vite'
import { copy } from '../../content'
import { ProjectImageCarousel } from './ProjectImageCarousel'

const meta = {
  title: 'Portfolio/ProjectImageCarousel',
  component: ProjectImageCarousel,
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
} satisfies Meta<typeof ProjectImageCarousel>

export default meta
type Story = StoryObj<typeof meta>

const qudian = copy.projects.find((p) => p.id === 'qudian')!
const instrumental = copy.projects.find((p) => p.id === 'instrumental')!

export const SingleImage: Story = {
  args: {
    title: qudian.title,
    images: qudian.images,
  },
}

export const MultipleImages: Story = {
  args: {
    title: instrumental.title,
    images: instrumental.images,
  },
}
