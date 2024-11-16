/** @jsxImportSource @emotion/react */
import React from 'react'
import { css } from '@emotion/react'

const backgroundColor = 'rgb(249, 158, 14)'
const plotLineStyle = css`
  position: relative;
  width: 100%;
  height: 1px;
  background-color: ${backgroundColor};
`

const baseTickStyle = css`
  position: absolute;
  width: 1px;
  background-color: ${backgroundColor};
`

const bigTickStyle = css`
  ${baseTickStyle}
  height: 12px;
  top: -12.5px;
`
const midTickStyle = css`
  ${baseTickStyle}
  height: 7px;
  top: -7.5px;
`

const smallTickStyle = css`
  ${baseTickStyle}
  height: 5px;
  top: -5.5px;
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
