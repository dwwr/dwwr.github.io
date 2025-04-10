/** @jsxImportSource react */
import { Meta, StoryFn } from '@storybook/react'
import { Readout5, Readout5Props } from './Readout5'

export default {
  title: 'Components/Readout5',
  component: Readout5,
  parameters: {
    layout: 'fullscreen'
  },
  argTypes: {}
} as Meta

const Template: StoryFn<Readout5Props> = (props) => (
  <div
    style={{
      width: '100vw',
      height: '100vh',
      overflow: 'hidden'
    }}
  >
    <Readout5 {...props} />
  </div>
)

export const Default = Template.bind({})
Default.args = {}
