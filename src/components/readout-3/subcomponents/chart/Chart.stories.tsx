/** @jsxImportSource react */
import { Meta, StoryFn } from '@storybook/react'
import Chart, { ChartProps } from './Chart'

export default {
  title: 'Components/Readout3/Chart',
  component: Chart
} as Meta

const Template: StoryFn<ChartProps> = ({
  columnGroupCount,
  columnGroupSize,
  benchmark,
  flicker
}) => (
  <div
    style={{
      width: '100%',
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
        width: '200%',
        overflow: 'hidden'
      }}
    >
      <Chart
        columnGroupCount={columnGroupCount}
        columnGroupSize={columnGroupSize}
        benchmark={benchmark}
        flicker={flicker}
      />
    </div>
  </div>
)
const baseArgs = {
  columnGroupCount: 3,
  columnGroupSize: 8,
  flicker: true
}

export const Baseline = Template.bind({})
Baseline.args = {
  ...baseArgs,
  benchmark: 0
}

export const Low = Template.bind({})
Low.args = {
  ...baseArgs,
  benchmark: 25
}

export const Medium = Template.bind({})
Medium.args = {
  ...baseArgs,
  benchmark: 50
}

export const High = Template.bind({})
High.args = {
  ...baseArgs,
  benchmark: 90
}

export const NoFlicker = Template.bind({})
NoFlicker.args = {
  ...baseArgs,
  benchmark: 50,
  flicker: false
}
