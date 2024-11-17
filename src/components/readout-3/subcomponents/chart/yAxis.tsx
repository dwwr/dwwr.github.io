/** @jsxImportSource @emotion/react */
import React from 'react'
import { css } from '@emotion/react'

const backgroundColor = 'rgb(249, 158, 14)'
const plotLineStyle = (width: string) => css`
  position: relative;
  width: ${width};
  & > *:first-child {
    display: none;
  }
`

const tickStyle = css`
  transform: rotate(-90deg);
  position: absolute;
  width: 1px;
  height: 5px;
  right: 8px;
  background-color: ${backgroundColor};
`

interface YAxisProps {
  width: string
  numberOfTicks?: number
}

const YAxis: React.FC<YAxisProps> = ({ width, numberOfTicks = 18 }) => {
  const ticks = Array.from({ length: numberOfTicks }, (_, i) => {
    return <div key={i} css={tickStyle} style={{ top: `${(i / numberOfTicks) * 100}%` }} />
  })

  return <div css={plotLineStyle(width)}>{ticks}</div>
}

export default YAxis
