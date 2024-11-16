/** @jsxImportSource react */
import { Meta, StoryFn } from '@storybook/react'
import Chart from './Chart'

export default {
  title: 'Components/Readout3/Chart',
  component: Chart
} as Meta

const Template: StoryFn = () => (
  <div
    style={{
      width: '100%',
      height: '500px',
      backgroundColor: 'black',
      display: 'flex',
      alignItems: 'start',
      justifyContent: 'start',
      boxSizing: 'border-box',
      overflow: 'hidden',
      padding: '1rem'
    }}
  >
    <Chart numberOfColumns={20} />
  </div>
)

export const Default = Template.bind({})
Default.args = {}
