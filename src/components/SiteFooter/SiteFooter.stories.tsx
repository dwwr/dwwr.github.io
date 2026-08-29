import type { Meta, StoryObj } from '@storybook/react-vite'
import { MemoryRouter } from 'react-router-dom'
import { SiteFooter } from './SiteFooter'

const meta = {
  title: 'Portfolio/SiteFooter',
  component: SiteFooter,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <MemoryRouter>
        <div style={{ maxWidth: '48rem', margin: '0 auto', padding: '2rem 1rem' }}>
          <Story />
        </div>
      </MemoryRouter>
    ),
  ],
} satisfies Meta<typeof SiteFooter>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
