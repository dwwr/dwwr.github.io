/** @jsxImportSource react */
import { Meta, StoryFn } from '@storybook/react'
import { Segment, SegmentProps } from './Segment'

export default {
  title: 'Components/Readout4/Segment',
  component: Segment,
  argTypes: {}
} as Meta

const Template: StoryFn<SegmentProps> = (props) => (
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
    <Segment {...props} />
  </div>
)

export const Default = Template.bind({})
Default.args = {}
