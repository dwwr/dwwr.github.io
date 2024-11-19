/** @jsxImportSource @emotion/react */
import React from 'react'
import { css } from '@emotion/react'

const backgroundColor = 'rgb(251, 181, 19)'
const plotLineStyle = css`
  position: relative;
  & > *:first-child {
    display: none;
  }
`

const tickStyle = css`
  transform: rotate(-90deg);
  position: absolute;
  width: 0.5px;
  height: 2px;
  /* right: 8px; */
  background-color: ${backgroundColor};
`
interface YAxisProps {
  numberOfTicks?: number
}

const YAxis: React.FC<YAxisProps> = ({ numberOfTicks = 18 }) => {
  const ticks = Array.from({ length: numberOfTicks }, (_, i) => {
    return <div key={i} css={tickStyle} style={{ top: `${(i / numberOfTicks) * 100}%` }} />
  })

  return <div css={plotLineStyle}>{ticks}</div>
}

export default YAxis
