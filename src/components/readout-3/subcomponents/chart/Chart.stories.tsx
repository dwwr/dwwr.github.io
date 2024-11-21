/** @jsxImportSource react */
import { Meta, StoryFn } from '@storybook/react'
import Chart, { ChartProps } from './Chart'

export default {
  title: 'Components/Readout3/Chart',
  component: Chart
} as Meta

const Template: StoryFn<ChartProps> = ({ numberOfColumns, benchmark }) => (
  <div
    style={{
      width: '500px',
      height: '500px',
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
      <Chart numberOfColumns={numberOfColumns} benchmark={benchmark} />
    </div>
  </div>
)

export const Baseline = Template.bind({})
Baseline.args = {
  numberOfColumns: 40,
  benchmark: 0
}
export const Low = Template.bind({})
Low.args = {
  numberOfColumns: 40,
  benchmark: 25
}
export const Medium = Template.bind({})
Medium.args = {
  numberOfColumns: 40,
  benchmark: 50
}
export const High = Template.bind({})
High.args = {
  numberOfColumns: 40,
  benchmark: 80
}
