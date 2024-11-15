/** @jsxImportSource react */
import { StoryFn, Meta } from '@storybook/react'
import Readout1, { Readout1Props } from './Readout1'

export default {
  title: 'Components/Readout1',
  component: Readout1
} as Meta<typeof Readout1>

const Template: StoryFn<typeof Readout1> = (props: Readout1Props) => (
  <div
    style={{
      width: '100%',
      height: '100%',
      backgroundColor: 'black',
      boxSizing: 'border-box'
    }}
  >
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
    { subject: 'subject', subjectNumber: '00', subjectLabel: 'FIRST.C', value: 25 },
    { subject: 'subject', subjectNumber: '01', subjectLabel: 'THIRD.C', value: 50 },
    { subject: 'subject', subjectNumber: '02', subjectLabel: 'SECOND.C', value: 85 }
  ]
}
Default.args = DefaultArgs

export const Empty = Template.bind({})
const EmptyArgs = {
  title: 'MENTAL TOXICITY LEVEL',
  kpi1Key: 'ELAPSED TIME',
  kpi1Value: '120 min.',
  kpi2Key: 'L.C.L. PURITY',
  kpi2Value: '99.9999989%',
  items: []
}
Empty.args = EmptyArgs

export const Loading = Template.bind({})
const LoadingArgs = {
  title: 'Loading',
  kpi1Key: 'Loading',
  kpi1Value: 'Loading',
  kpi2Key: 'Loading',
  kpi2Value: 'Loading',
  isLoading: true
}
Loading.args = LoadingArgs
