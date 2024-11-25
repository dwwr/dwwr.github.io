/** @jsxImportSource react */
import { Meta, StoryFn } from '@storybook/react'
import ColumnGroup, { ColumnGroupProps } from './ColumnGroup'

export default {
  title: 'Components/Readout3/ColumnGroup',
  component: ColumnGroup
} as Meta

const Template: StoryFn<ColumnGroupProps> = ({ numberOfColumns, values }) => (
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
        width: '100%',
        overflow: 'hidden'
      }}
    >
      <ColumnGroup numberOfColumns={numberOfColumns} values={values} />
    </div>
  </div>
)

export const Default = Template.bind({})
Default.args = {
  numberOfColumns: 8,
  values: [10, 20, 30, 40, 50, 60, 70, 80]
}
