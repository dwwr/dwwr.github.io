import type { Preview } from '@storybook/react'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: 'fullscreen', // Removes padding around the stories
    backgrounds: {
      disable: true, // Disables the background color picker
      default: 'transparent',
    },
  },
}

export default preview
