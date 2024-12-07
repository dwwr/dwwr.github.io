/** @jsxImportSource react */
import { Meta, StoryFn } from '@storybook/react'
import { Readout4, Readout4Props } from './Readout4'

export default {
  title: 'Components/Readout4',
  component: Readout4,
  argTypes: {}
} as Meta

const Template: StoryFn<Readout4Props> = (props) => (
  <div
    style={{
      width: '100%',
      height: '100%',
      // backgroundColor: 'black',
      display: 'flex',
      alignItems: 'start',
      justifyContent: 'start',
      boxSizing: 'border-box',
      overflow: 'hidden',
      padding: '1rem'
    }}
  >
    <Readout4 {...props} />
  </div>
)

export const Default = Template.bind({})
Default.args = {}
