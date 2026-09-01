import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, userEvent, within } from 'storybook/test'
import { useState } from 'react'
import { copy } from '../../content'
import { ProjectImageCarousel } from './ProjectImageCarousel'
import { ProjectImageCarouselView } from './ProjectImageCarouselView'

const meta = {
  title: 'Portfolio/ProjectImageCarousel',
  component: ProjectImageCarousel,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Project screenshots with optional prev/next controls, fullscreen lightbox, and auto-advance after the first manual navigation.',
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

/** Lightbox opens on image click with close, nav, and keyboard support. */
export const LightboxOpen: Story = {
  args: {
    title: instrumental.title,
    images: instrumental.images,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await userEvent.click(canvas.getByRole('button', { name: copy.projectCarousel.openLightbox }))
    await expect(document.querySelector('.project-image-lightbox[open]')).toBeTruthy()
  },
}

/** Large lightbox variant of the same carousel chrome (side nav, counter, viewport). */
export const LightboxVariant: StoryObj<typeof ProjectImageCarouselView> = {
  render: () => {
    const [index, setIndex] = useState(0)
    const images = instrumental.images

    return (
      <div style={{ background: 'rgba(0,0,0,0.88)', padding: '4rem 1rem' }}>
        <ProjectImageCarouselView
          title={instrumental.title}
          images={images}
          index={index}
          variant="lightbox"
          onPrevious={() =>
            setIndex((current) => (current === 0 ? images.length - 1 : current - 1))
          }
          onNext={() =>
            setIndex((current) => (current === images.length - 1 ? 0 : current + 1))
          }
        />
      </div>
    )
  },
}
