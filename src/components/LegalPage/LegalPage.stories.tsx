import type { Meta, StoryObj } from '@storybook/react-vite'
import { copy } from '../../content/copy'
import { LegalPage } from './LegalPage'

const meta = {
  title: 'Portfolio/LegalPage',
  component: LegalPage,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof LegalPage>

export default meta
type Story = StoryObj<typeof meta>

const decorator = [
  (Story: React.ComponentType) => (
    <div style={{ maxWidth: '48rem', margin: '0 auto', padding: '2rem 1rem' }}>
      <Story />
    </div>
  ),
]

export const Privacy: Story = {
  args: { content: copy.privacy },
  decorators: decorator,
}

export const Contact: Story = {
  args: { content: copy.contact },
  decorators: decorator,
}

export const License: Story = {
  args: { content: copy.license },
  decorators: decorator,
}
