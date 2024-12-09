import type { Meta, StoryObj } from '@storybook/react'
import { SevenSegmentDisplay } from './SevenSegmentDisplay'

const meta: Meta<typeof SevenSegmentDisplay> = {
  title: 'Components/SevenSegmentDisplay',
  component: SevenSegmentDisplay,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    number: {
      control: { type: 'number', min: 0, max: 9 },
      description: 'Number to display (0-9)'
    },
    size: {
      control: { type: 'number', min: 0.5, max: 5, step: 0.5 },
      description: 'Size multiplier for the display'
    },
    activeColor: {
      control: 'color',
      description: 'Color of the active segments'
    },
    inactiveColor: {
      control: 'color',
      description: 'Color of the inactive segments'
    }
  }
}

export default meta
type Story = StoryObj<typeof SevenSegmentDisplay>

export const Default: Story = {
  args: {
    number: 8,
    size: 1,
    activeColor: '#ff0000',
    inactiveColor: 'rgba(255, 0, 0, 0.2)'
  }
}

export const Large: Story = {
  args: {
    number: 7,
    size: 2,
    activeColor: '#ff0000',
    inactiveColor: 'rgba(255, 0, 0, 0.2)'
  }
}

export const CustomColors: Story = {
  args: {
    number: 3,
    size: 1.5,
    activeColor: '#00ff00',
    inactiveColor: 'rgba(0, 255, 0, 0.2)'
  }
}

// Example showing all numbers
export const AllNumbers: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '20px' }}>
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
        <SevenSegmentDisplay key={num} number={num} size={1} activeColor="#ff0000" />
      ))}
    </div>
  )
}
