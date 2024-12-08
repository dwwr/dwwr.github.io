/** @jsxImportSource react */
import { Meta, StoryFn } from '@storybook/react'
import { Readout4, Readout4Props } from './Readout4'

export default {
  title: 'Components/Readout4',
  component: Readout4,
  parameters: {
    layout: 'fullscreen'
  },
  argTypes: {}
} as Meta

const Template: StoryFn<Readout4Props> = (props) => (
  <div
    style={{
      width: '100vw',
      height: '100vh',
      overflow: 'hidden'
    }}
  >
    <Readout4 {...props} />
  </div>
)

export const Default = Template.bind({})
Default.args = {}
