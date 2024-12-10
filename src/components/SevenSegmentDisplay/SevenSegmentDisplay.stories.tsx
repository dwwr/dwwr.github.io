/** @jsxImportSource react */
import { Meta, StoryFn } from '@storybook/react'
import { SevenSegmentDisplay, SevenSegmentDisplayProps } from './SevenSegmentDisplay'

export default {
  title: 'Components/SevenSegmentDisplay',
  component: SevenSegmentDisplay,
  argTypes: {}
} as Meta

const Template: StoryFn<SevenSegmentDisplayProps> = (args) => (
  <div
    style={{
      width: '100%',
      height: '100vh',
      backgroundColor: 'black',
      display: 'flex',
      alignItems: 'start',
      justifyContent: 'start',
      boxSizing: 'border-box',
      overflow: 'hidden',
      padding: '1rem'
    }}
  >
    <SevenSegmentDisplay {...args} />
  </div>
)

export const Default = Template.bind({})
Default.args = {
  number: 8,
  color: '#ff0000'
}
