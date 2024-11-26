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
      padding: '2rem',
      display: 'grid',
      gridTemplateColumns: '10% 90%'
    }}
  >
    <Readout1ListItem {...props} />
  </div>
)

export const Empty = Template.bind({})
Empty.args = {
  subject: 'subject',
  subjectNumber: '00',
  subjectLabel: 'EMPTY.C',
  value: 0
}

export const Quarter = Template.bind({})
Quarter.args = {
  subject: 'subject',
  subjectNumber: '01',
  subjectLabel: 'QUARTER.C',
  value: 25
}

export const Half = Template.bind({})
Half.args = {
  subject: 'subject',
  subjectNumber: '02',
  subjectLabel: 'HALF.C',
  value: 50
}

export const ThreeQuarters = Template.bind({})
ThreeQuarters.args = {
  subject: 'subject',
  subjectNumber: '03',
  subjectLabel: 'THREE.C',
  value: 75
}

export const Full = Template.bind({})
Full.args = {
  subject: 'subject',
  subjectNumber: '04',
  subjectLabel: 'FULL.C',
  value: 100
}
