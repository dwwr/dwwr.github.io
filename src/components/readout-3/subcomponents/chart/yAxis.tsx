/** @jsxImportSource @emotion/react */
import React from 'react'
import { css } from '@emotion/react'

const backgroundColor = 'rgb(251, 181, 19)'
const plotLineStyle = (width: string) => css`
  position: relative;
  width: ${width};
  & > *:first-child {
    display: none;
  }
`

const tickStyle = (width: string) => css`
  transform: rotate(-90deg);
  position: absolute;
  width: 0.5px;
  height: 2px;
  right: calc(${width} + 150%);
  background-color: ${backgroundColor};
`

interface YAxisProps {
  width: string
  numberOfTicks?: number
}

const YAxis: React.FC<YAxisProps> = ({ width, numberOfTicks = 18 }) => {
  const ticks = Array.from({ length: numberOfTicks }, (_, i) => {
    return <div key={i} css={tickStyle(width)} style={{ top: `${(i / numberOfTicks) * 100}%` }} />
  })

  return <div css={plotLineStyle(width)}>{ticks}</div>
}

export default YAxis
