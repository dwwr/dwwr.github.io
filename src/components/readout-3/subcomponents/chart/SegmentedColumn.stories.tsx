/** @jsxImportSource react */
import { Meta, StoryFn } from '@storybook/react'
import SegmentedColumn, { SegmentedColumnProps } from './SegmentedColumn'

export default {
  title: 'Components/Readout3/SegmentedColumn',
  component: SegmentedColumn
} as Meta

const Template: StoryFn<SegmentedColumnProps> = ({ value, numberOfBars }) => (
  <div
    style={{
      width: '100px',
      height: '600px',
      overflow: 'hidden',
      padding: '1rem',
      backgroundColor: 'black'
    }}
  >
    <div
      style={{
        display: 'flex',
        height: '100%',
        width: '100%',
        overflow: 'hidden'
      }}
    >
      <SegmentedColumn value={value} numberOfBars={numberOfBars} />
    </div>
  </div>
)

const baseArgs = {
  numberOfBars: 17
}

export const Empty = Template.bind({})
Empty.args = {
  ...baseArgs,
  value: 0
}

export const Quarter = Template.bind({})
Quarter.args = {
  ...baseArgs,
  value: 25
}

export const Half = Template.bind({})
Half.args = {
  ...baseArgs,
  value: 50
}

export const ThreeQuarters = Template.bind({})
ThreeQuarters.args = {
  ...baseArgs,
  value: 75
}

export const Full = Template.bind({})
Full.args = {
  ...baseArgs,
  value: 100
}
