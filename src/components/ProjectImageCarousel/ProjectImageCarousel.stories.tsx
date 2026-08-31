import type { Meta, StoryObj } from '@storybook/react-vite'
import { copy } from '../../content'
import { ProjectImageCarousel } from './ProjectImageCarousel'

const meta = {
  title: 'Portfolio/ProjectImageCarousel',
  component: ProjectImageCarousel,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Project screenshots with optional prev/next controls. Auto-advance starts after the first manual navigation.',
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
} satisfies Meta<typeof ProjectImageCarousel>

export default meta
type Story = StoryObj<typeof meta>

const qudian = copy.projects.find((p) => p.id === 'qudian')!
const instrumental = copy.projects.find((p) => p.id === 'instrumental')!

/** One image — navigation controls hidden. */
export const SingleImage: Story = {
  args: {
    title: qudian.title,
    images: qudian.images,
  },
}

/** Multiple images — side nav, counter, and auto-advance after first arrow click. */
export const MultipleImages: Story = {
  args: {
    title: instrumental.title,
    images: instrumental.images,
  },
}

/** Three-up carousel from Compare Magnitude. */
export const ThreeImages: Story = {
  args: {
    title: copy.projects.find((p) => p.id === 'quake-compare')!.title,
    images: copy.projects.find((p) => p.id === 'quake-compare')!.images,
  },
}
