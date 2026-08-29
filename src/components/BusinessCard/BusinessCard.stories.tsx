import type { Meta, StoryObj } from '@storybook/react-vite'
import { BusinessCard } from './BusinessCard'

const meta = {
  title: 'Portfolio/BusinessCard',
  component: BusinessCard,
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
} satisfies Meta<typeof BusinessCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
