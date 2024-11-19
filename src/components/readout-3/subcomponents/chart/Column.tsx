/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

import YAxis from './yAxis'

export const barStyle = (width: string) => css`
  width: ${width};
  position: relative;

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

const Column: React.FC<ColumnProps> = ({
  value,
  numberOfBars,
  numberOfColumns,
  showYAxis = true,
  key
}) => {
  console.log(value)
  const width = `${100 / numberOfColumns}%`
  return (
    <div
      css={css`
        display: flex;
        height: 100%;
        width: ${width};
        position: relative;
        /* background-color: green; */
      `}
    >
      <div key={key} css={barStyle(width)} />
      {showYAxis && <YAxis numberOfTicks={numberOfBars} width={width} />}
    </div>
  )
}

export default Column
