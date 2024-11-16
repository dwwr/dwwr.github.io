import type { Preview } from '@storybook/react'
import '../src/components/global_styles.css'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: 'fullscreen',
    backgrounds: {
      disable: true,
      default: 'transparent',
    },
  },
  decorators: [
    (Story) => (
      <div>
        <Story />
    </div>
  ),
],
}

export default preview
