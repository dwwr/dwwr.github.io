/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import YAxis from './yAxis'

export const columnStyle = css`
  width: 100%;
  height: 100%;
  background: linear-gradient(
    180deg,
    rgb(163, 25, 10) 0%,
    rgb(154, 217, 28) 30%,
    rgb(28, 217, 59) 45%,
    rgb(52, 155, 135) 100%,
    rgb(75, 170, 143) 100%
  );
  margin: -1px;
`

export const negativeFillStyle = (height: number) => css`
  height: ${Math.abs(height - 100)}%;
  background: black;
`

export interface ColumnProps {
  value: number
  numberOfBars: number
  numberOfColumns: number
  showYAxis?: boolean
  key: number
}

const Column: React.FC<ColumnProps> = ({ value, numberOfBars, showYAxis = true, key }) => {
  return (
    <>
      {showYAxis && <YAxis numberOfTicks={numberOfBars} />}
      <div key={key} css={columnStyle}>
        <div css={negativeFillStyle(value)} />
      </div>
    </>
  )
}

export default Column
