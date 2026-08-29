import type { Meta, StoryObj } from '@storybook/react-vite'
import { PageShell } from './PageShell'

const meta = {
  title: 'Layout/PageShell',
  component: PageShell,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof PageShell>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: (
      <p style={{ margin: 0 }}>Sample page content inside the single-column shell.</p>
    ),
  },
}
