/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

const digit = css`
  position: relative;
`

const segment = css`
  position: absolute;
  transition: background-color 0.2s;
`

const horizontalSegment = css`
  width: 65%;
  height: 8%;
  left: 16.5%;
  clip-path: polygon(0% 50%, 9% 0%, 92% 0%, 100% 50%, 92% 100%, 8% 100%);
`

const verticalSegment = css`
  width: 12%;
  height: 44%;
  clip-path: polygon(0% 8%, 50% 0%, 100% 8%, 100% 92%, 50% 100%, 0% 92%);
`

const segmentA = css`
  ${horizontalSegment}
  top: 0;
`

const segmentG = css`
  ${horizontalSegment}
  top: 46%;
`

const segmentD = css`
  ${horizontalSegment}
  bottom: 0;
`

const rightSegments = css`
  ${verticalSegment}
  right: 9.5%;
`

const leftSegments = css`
  ${verticalSegment}
  left: 8%;
`

const topSegments = css`
  top: 5%;
`

const bottomSegments = css`
  bottom: 5.5%;
`

const numbers: Record<number, string> = {
  0: 'abcdef',
  1: 'bc',
  2: 'abged',
  3: 'abgcd',
  4: 'fbgc',
  5: 'afgcd',
  6: 'afgedc',
  7: 'abc',
  8: 'abcdefg',
  9: 'abfgcd'
}

export interface SevenSegmentDisplayProps {
  number: number
  size?: number
  activeColor?: string
  inactiveColor?: string
}

export const SevenSegmentDisplay: React.FC<SevenSegmentDisplayProps> = ({
  number,
  size = 1,
  activeColor = '#ff0000',
  inactiveColor = 'rgba(255, 0, 0, 0.2)'
}) => {
  const segments = numbers[number] || ''

  const getSegmentStyle = (segment: string) => ({
    backgroundColor: segments.includes(segment) ? activeColor : inactiveColor
  })

  return (
    <div
      css={digit}
      style={{
        width: `${100 * size}px`,
        height: `${180 * size}px`
      }}
    >
      <div css={[segment, segmentA]} style={getSegmentStyle('a')} />
      <div
        css={[segment, verticalSegment, rightSegments, topSegments]}
        style={getSegmentStyle('b')}
      />
      <div
        css={[segment, verticalSegment, rightSegments, bottomSegments]}
        style={getSegmentStyle('c')}
      />
      <div css={[segment, segmentD]} style={getSegmentStyle('d')} />
      <div
        css={[segment, verticalSegment, leftSegments, bottomSegments]}
        style={getSegmentStyle('e')}
      />
      <div
        css={[segment, verticalSegment, leftSegments, topSegments]}
        style={getSegmentStyle('f')}
      />
      <div css={[segment, segmentG]} style={getSegmentStyle('g')} />
    </div>
  )
}
