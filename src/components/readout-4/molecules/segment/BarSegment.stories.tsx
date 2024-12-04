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
      width: '100%',
      height: '600px',
      backgroundColor: 'black',
      display: 'flex',
      alignItems: 'start',
      justifyContent: 'start',
      boxSizing: 'border-box',
      overflow: 'hidden',
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
