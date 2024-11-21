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
      width: '150%',
      height: '500px',
      backgroundColor: 'black',
      display: 'flex',
      // alignItems: 'start',
      // justifyContent: 'start',
      boxSizing: 'border-box',
      overflow: 'hidden',
      padding: '1rem'
    }}
  >
    <Chart numberOfColumns={numberOfColumns} benchmark={benchmark} />
  </div>
)

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
