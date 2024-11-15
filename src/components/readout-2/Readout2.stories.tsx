/** @jsxImportSource react */
import { Meta, StoryFn } from '@storybook/react'
import Readout2 from './Readout2'

export default {
  title: 'Components/Readout2',
  component: Readout2
} as Meta

const Template: StoryFn = ({ text, stayOn, stayOff, outlineOffHexagons }) => (
  <div
    style={{
      width: '500px',
      height: '500px',
      backgroundColor: 'black',
      boxSizing: 'border-box'
    }}
  >
    <Readout2
      text={text}
      stayOn={stayOn}
      stayOff={stayOff}
      outlineOffHexagons={outlineOffHexagons}
    />
  </div>
)

export const Default = Template.bind({})
Default.args = {
  text: 'Emergency'
}

export const OutlinedOffHexagons = Template.bind({})
OutlinedOffHexagons.args = {
  text: 'Emergency',
  outlineOffHexagons: true
}

export const StayOn = Template.bind({})
StayOn.args = {
  text: 'Emergency',
  stayOn: true,
  stayOff: false
}

export const StayOff = Template.bind({})
StayOff.args = {
  text: 'Emergency',
  stayOff: true,
  stayOn: false,
  outlineOffHexagons: true
}
