/** @jsxImportSource react */
import { Meta, StoryFn } from '@storybook/react'
import Readout3, { Readout3Props } from './Readout3'

export default {
  title: 'Components/Readout3',
  component: Readout3,
  argTypes: {
    benchmark: {
      control: { type: 'range', min: 0, max: 100 }
    }
  }
} as Meta

const Template: StoryFn<Readout3Props> = ({ benchmark }) => (
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
    <Readout3 benchmark={benchmark} />
  </div>
)

export const Default = Template.bind({})
Default.args = {
  benchmark: 50
}
