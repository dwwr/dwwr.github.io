/** @jsxImportSource react */
import { StoryFn, Meta } from '@storybook/react'
import { Readout1, Readout1Props } from './Readout1'

export default {
  title: 'Components/Readout1',
  component: Readout1
} as Meta<typeof Readout1>

const Template: StoryFn<typeof Readout1> = (props: Readout1Props) => (
  <div style={{ width: '100%', height: '100%', backgroundColor: 'black' }}>
    <Readout1 {...props} />
  </div>
)

export const Default = Template.bind({})
const DefaultArgs = {
  title: 'MENTAL TOXICITY LEVEL',
  kpi1Key: 'ELAPSED TIME',
  kpi1Value: '120 min.',
  kpi2Key: 'L.C.L. PURITY',
  kpi2Value: '99.9999989%',
  items: [
    { subject: 'subject', subjectNumber: '01', subjectLabel: 'FIRST.C', value: 20 },
    { subject: 'subject', subjectNumber: '02', subjectLabel: 'SECOND.C', value: 20 },
    { subject: 'subject', subjectNumber: '03', subjectLabel: 'THIRD.C', value: 30 }
  ]
}
Default.args = DefaultArgs
