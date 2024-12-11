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

const Template: StoryFn<TimerProps> = ({
  milliseconds,
  isPaused,
  runningColor,
  pausedColor,
  completedColor
}) => {
  return (
    <div
      style={{
        width: '300px',
        height: '100px'
      }}
    >
      <Timer
        milliseconds={milliseconds}
        isPaused={isPaused}
        runningColor={runningColor}
        pausedColor={pausedColor}
        completedColor={completedColor}
      />
    </div>
  )
}

export const Default = Template.bind({})
Default.args = {
  milliseconds: 300000, // 5 minutes
  runningColor: 'red',
  pausedColor: 'blue',
  completedColor: 'green',
  isPaused: false
}
