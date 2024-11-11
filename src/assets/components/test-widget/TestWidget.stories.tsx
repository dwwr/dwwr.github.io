/** @jsxImportSource react */
import { StoryFn, Meta } from '@storybook/react'
import { TestWidget } from './TestWidget'

export default {
  title: 'Components/TestWidget',
  component: TestWidget
} as Meta<typeof TestWidget>

const Template: StoryFn<typeof TestWidget> = (args) => (
  <div style={{ width: '100%', height: '100%', backgroundColor: 'black' }}>
    <TestWidget {...args} />
  </div>
)

export const Default = Template.bind({})
const DefaultArgs = {
  title: 'Test Widget'
}
Default.args = DefaultArgs
