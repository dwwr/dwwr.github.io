/** @jsxImportSource react */
import { Meta, StoryFn } from '@storybook/react'
import { BarSegment, BarSegmentProps } from './BarSegment'

export default {
  title: 'Components/Readout4/BarSegment',
  component: BarSegment,
  argTypes: {}
} as Meta

const Template: StoryFn<BarSegmentProps> = ({ number }) => (
  <div
    style={{
      width: '100vw',
      height: '100vh',
      backgroundColor: 'black',
      padding: '1rem'
    }}
  >
    <BarSegment number={number} />
  </div>
)

export const Default = Template.bind({})
Default.args = {
  number: 1
}
