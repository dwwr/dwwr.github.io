/** @jsxImportSource react */
import { Meta, StoryFn } from '@storybook/react'
import DataLabel, { DataLabelProps } from './DataLabel'

export default {
  title: 'Components/Readout3/DataLabel',
  component: DataLabel
} as Meta

const Template: StoryFn<DataLabelProps> = ({ label, text, flicker, condensed }) => (
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
    <DataLabel label={label} text={text} flicker={flicker} condensed={condensed} />
  </div>
)

export const Default = Template.bind({})
Default.args = {
  label: 'Blood Type:',
  text: 'Analyzing'
}

export const NoLabel = Template.bind({})
NoLabel.args = {
  text: 'Energy Observational Data'
}

export const Flicker = Template.bind({})
Flicker.args = {
  label: 'Blood Type:',
  text: 'Analyzing',
  flicker: true
}

export const Condensed = Template.bind({})
Condensed.args = {
  text: 'High level energy field approaching',
  condensed: true
}
