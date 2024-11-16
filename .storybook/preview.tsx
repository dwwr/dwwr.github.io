/** @jsxImportSource react */
import type { Preview } from '@storybook/react'
import '../src/components/global_styles.css'
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
    (Story: React.FC) => (
      <div>
        <Story />
    </div>
  ),
],
}

export default preview
