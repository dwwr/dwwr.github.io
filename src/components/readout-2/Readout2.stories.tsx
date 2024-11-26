/** @jsxImportSource react */
import { Meta, StoryFn } from '@storybook/react'
import { Readout2 } from './Readout2'

export default {
  title: 'Components/Readout2',
  component: Readout2
} as Meta

const Template: StoryFn = ({ text, stayOn, stayOff, outlineOffHexagons, numberOfHexagons }) => (
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
      numberOfHexagons={numberOfHexagons}
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

// export const Small = Template.bind({})
// Small.args = {
//   text: 'Emergency',
//   numberOfHexagons: 10,
//   stayOn: true,
//   stayOff: false
// }
// Small.decorators = [
//   (Story) => (
//     <div style={{ width: '400px', height: '400px' }}>
//       <Story />
//     </div>
//   )
// ]
