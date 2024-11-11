/** @jsxImportSource react */
import { StoryFn, Meta } from '@storybook/react'
import { Readout1 } from './Readout1'

export default {
  title: 'Components/Readout1',
  component: Readout1
} as Meta<typeof Readout1>

const Template: StoryFn<typeof Readout1> = (args) => (
  <div style={{ width: '100%', height: '100%', backgroundColor: 'black' }}>
    <Readout1 {...args} />
  </div>
)

export const Default = Template.bind({})
const DefaultArgs = {}
Default.args = DefaultArgs
