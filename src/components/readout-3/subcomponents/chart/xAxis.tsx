/** @jsxImportSource @emotion/react */
import React from 'react'
import { css } from '@emotion/react'

const backgroundColor = 'rgb(249, 158, 14)'
const plotLineStyle = css`
  position: relative;
  width: 100%;
`

const baseTickStyle = css`
  position: absolute;
  width: 1px;
  background-color: ${backgroundColor};
`

const bigTickStyle = css`
  ${baseTickStyle}
  width: 1.5px;
  height: 10px;
  top: -10px;
`
const midTickStyle = css`
  ${baseTickStyle}
  height: 8px;
  top: -8px;
`

const smallTickStyle = css`
  ${baseTickStyle}
  height: 5px;
  top: -6px;
`

interface XAxisProps {
  numberOfTicks: number
}

const XAxis: React.FC<XAxisProps> = ({ numberOfTicks }) => {
  const pattern = [
    bigTickStyle,
    smallTickStyle,
    smallTickStyle,
    midTickStyle,
    smallTickStyle,
    smallTickStyle
  ]

  const ticks = Array.from({ length: numberOfTicks * 10 }, (_, i) => {
    const tickStyle = pattern[i % pattern.length]
    return <div key={i} css={tickStyle} style={{ left: `${(i / numberOfTicks) * 100}%` }} />
  })

  return <div css={plotLineStyle}>{ticks}</div>
}

export default XAxis
