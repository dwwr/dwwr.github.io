/** @jsxImportSource react */
import { Meta, StoryFn } from '@storybook/react'
import { Timer, TimerProps } from './Timer'

export default {
  title: 'Components/Timer',
  component: Timer,
  argTypes: {
    milliseconds: { control: 'number' }
  }
} as Meta

const Template: StoryFn<TimerProps> = (args) => <Timer {...args} />

export const Default = Template.bind({})
Default.args = {
  milliseconds: 300000 // 5 minutes
}
