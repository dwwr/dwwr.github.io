import type { Meta, StoryObj } from '@storybook/react-vite'
import { copy } from '../../content/copy'
import { BusinessCard } from './BusinessCard'

const meta = {
  title: 'Portfolio/BusinessCard',
  component: BusinessCard,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof BusinessCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    content: copy.businessCard,
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '48rem', margin: '0 auto', padding: '2rem 1rem' }}>
        <Story />
      </div>
    ),
  ],
}
