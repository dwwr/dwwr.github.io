/** @jsxImportSource react */
import { Meta, StoryFn } from '@storybook/react'
import Readout3 from './Readout3'

export default {
  title: 'Components/Readout3',
  component: Readout3
} as Meta

const Template: StoryFn = () => (
  <div
    style={{
      width: '100%',
      height: '100vh',
      minHeight: '500px',
      backgroundColor: 'black',
      display: 'flex',
      alignItems: 'start',
      justifyContent: 'start',
      boxSizing: 'border-box',
      padding: '1rem'
    }}
  >
    <Readout3 />
  </div>
)

export const Default = Template.bind({})
Default.args = {}
