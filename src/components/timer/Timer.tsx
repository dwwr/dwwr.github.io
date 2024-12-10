import React from 'react'
import { SevenSegmentDisplay } from '../SevenSegmentDisplay/SevenSegmentDisplay'
import { useCountdown } from './useCountdown'
import { formatMilliseconds } from './utils'

export interface TimerProps {
  milliseconds: number
}

export const Timer: React.FC<TimerProps> = ({ milliseconds }) => {
  const time = formatMilliseconds(useCountdown(milliseconds))

  return (
    <div
      style={{
        display: 'flex',
        gap: '10px',
        width: '500px',
        height: '100px',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <SevenSegmentDisplay number={Number(time[0])} color="red" />
      {/* <span>:</span> */}
      <SevenSegmentDisplay number={Number(time[1])} color="red" />
      <SevenSegmentDisplay number={Number(time[2])} color="red" />
      {/* <span>:</span> */}
      <SevenSegmentDisplay number={Number(time[3])} color="red" />
      <SevenSegmentDisplay number={Number(time[4])} color="red" />
    </div>
  )
}
