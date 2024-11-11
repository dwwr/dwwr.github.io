/** @jsxImportSource react */
/** @jsxImportSource @emotion/react */
import { StoryFn, Meta } from '@storybook/react'
import { Readout1ListItem, Readout1ListItemProps } from './Readout1ListItem'

export default {
  title: 'Components/Readout1/Readout1ListItem',
  component: Readout1ListItem,
  argTypes: {
    value: {
      control: { type: 'range', min: 0, max: 100 }
    }
  }
} as Meta<typeof Readout1ListItem>

const Template: StoryFn<typeof Readout1ListItem> = (props: Readout1ListItemProps) => (
  <div
    style={{
      width: '100%',
      height: '100%',
      backgroundColor: 'black',
      padding: '1rem',
      display: 'grid',
      gridTemplateColumns: '10% 90%'
    }}
  >
    <Readout1ListItem {...props} />
  </div>
)

export const Default = Template.bind({})
Default.args = {
  subject: 'subject',
  subjectNumber: '00',
  subjectLabel: 'TEST.C',
  value: 20
}

export const LowValue = Template.bind({})
LowValue.args = {
  subject: 'subject',
  subjectNumber: '02',
  subjectLabel: 'LOW.C',
  value: 15
}

export const HighValue = Template.bind({})
HighValue.args = {
  subject: 'subject',
  subjectNumber: '01',
  subjectLabel: 'HIGH.C',
  value: 80
}