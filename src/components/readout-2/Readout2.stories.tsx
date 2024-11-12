/** @jsxImportSource react */
import { Meta, StoryFn } from '@storybook/react'
import Readout2 from './Readout2'

export default {
  title: 'Components/Readout2',
  component: Readout2
} as Meta

const Template: StoryFn = (args) => (
  <div style={{ width: '100vw', height: '100vh' }}>
    <Readout2 {...args} />
  </div>
)

export const Default = Template.bind({})
Default.args = {}
