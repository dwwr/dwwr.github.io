/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

import YAxis from './yAxis'

export const barStyle = css`
  width: 100%;
  position: relative;
  background: rgb(163, 26, 10);
  background: linear-gradient(
    180deg,
    rgb(163, 25, 10) 0%,
    rgb(105, 217, 28) 30%,
    rgb(28, 217, 59) 50%,
    rgb(52, 155, 135) 100%,
    rgb(75, 170, 143) 100%
  );

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
  }
`

export interface ColumnProps {
  value: number
  numberOfBars: number
  numberOfColumns: number
  showYAxis?: boolean
  key: number
}

const Column: React.FC<ColumnProps> = ({ value, numberOfBars, showYAxis = true, key }) => {
  console.log(value)
  return (
    <div
      css={css`
        display: flex;
        height: 100%;
        width: 100%;
        position: relative;
        /* background-color: green; */
      `}
    >
      {showYAxis && <YAxis numberOfTicks={numberOfBars} />}
      <div key={key} css={barStyle} />
      {/* {showYAxis && <YAxis numberOfTicks={numberOfBars} />} */}
    </div>
  )
}

export default Column
