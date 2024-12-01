/** @jsxImportSource react */
import type { Meta, StoryFn } from '@storybook/react'
import { DataLabel } from './DataLabel'

export default {
  title: 'Components/Readout4/DataLabel',
  component: DataLabel,
  // parameters: {
  //   layout: 'centered'
  // },
  argTypes: {}
} as Meta

const Template: StoryFn = () => (
  <div
    style={{
      backgroundColor: 'black',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'start',
      justifyContent: 'start',
      boxSizing: 'border-box',
      overflow: 'hidden',
      padding: '5rem',
      gap: '1rem'
    }}
  >
    <DataLabel text="Life Support System" />
    <DataLabel text="Link Control System" />
    <DataLabel text="External Communications" squeeze />
    <DataLabel text="Reserve Energy Remaining" bottomText="EVA-01 : Entry Plug" />
  </div>
)

export const Default = Template.bind({})
