/** @jsxImportSource @emotion/react */
import React from 'react'
import { css } from '@emotion/react'

const container = css`
  filter: blur(0.5px);
  display: flex;
  flex-direction: column;
  gap: 0;
`
const barContainer = css`
  width: 100%;
  height: 100%;
  background-color: white;
  border-radius: 5px;
`

const bar = css`
  min-width: 120px;
  min-height: 20px;
  background-color: rgba(214, 63, 43, 0.95);
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(214, 63, 43, 0.4), 0 0 10px rgba(214, 63, 43, 0.3),
    0 0 10px rgba(201, 43, 22, 0.2), 0 0 10px rgba(201, 43, 22, 0.1);
`

const glowText = css`
  font-size: clamp(1rem, 2vw, 1rem);
  font-family: 'Helvetica', monospace;
  font-weight: bold;
  color: rgba(196, 106, 65, 0.8);
  text-shadow: 0 0 10px #ff3300, 0 0 10px #ff3300, 0 0 10px #ff3300;
  text-transform: uppercase;
  line-height: 1;
`
const numberText = css`
  ${glowText}
  font-size: clamp(1.2rem, 3vw, 1.2rem);
`

export interface SegmentProps {}

export const Segment: React.FC<SegmentProps> = () => {
  return (
    <div css={container}>
      <div>
        <span css={glowText}>Seg. </span>
        <span css={numberText}>2</span>
      </div>
      <div css={barContainer}>
        <div css={bar} />
      </div>
    </div>
  )
}
