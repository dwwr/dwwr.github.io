/** @jsxImportSource @emotion/react */
import React from 'react'
import { css } from '@emotion/react'

const plotLineStyle = css`
  position: relative;
  width: 100%;
  height: 1px;
  background-color: rgb(249, 158, 14);
  margin-bottom: 10px;
  transform: skewX(20deg);
`

const baseTickStyle = css`
  position: absolute;
  width: 1px;
  background-color: #00ff00;
`

const bigTickStyle = css`
  ${baseTickStyle}
  height: 10px;
`

const semiTickStyle = css`
  ${baseTickStyle}
  height: 5px;
  top: 3.5px;
`

const midTickStyle = css`
  ${baseTickStyle}
  height: 3px;
  top: 4.5px;
`

const smallTickStyle = css`
  ${baseTickStyle}
  height: 1px;
  top: 5.5px;
`

interface PlotLineProps {
  numberOfTicks: number
}

const PlotLine: React.FC<PlotLineProps> = ({ numberOfTicks }) => {
  // Pattern length is 11 (big small small mid small small semi small small mid small small)
  const pattern = [
    bigTickStyle,
    smallTickStyle,
    smallTickStyle,
    midTickStyle,
    smallTickStyle,
    smallTickStyle,
    semiTickStyle,
    smallTickStyle,
    smallTickStyle,
    midTickStyle,
    smallTickStyle,
    smallTickStyle
  ]

  const ticks = Array.from({ length: numberOfTicks }, (_, i) => {
    const tickStyle = pattern[i % pattern.length]
    return <div key={i} css={tickStyle} style={{ left: `${(i / numberOfTicks) * 100}%` }} />
  })

  return <div css={plotLineStyle}>{ticks}</div>
}

export default PlotLine
