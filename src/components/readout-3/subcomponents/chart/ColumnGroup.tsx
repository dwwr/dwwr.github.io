/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import Column from './Column'
import SegmentedColumn from './SegmentedColumn'

const columnContainerStyle = css`
  flex: 1;
  display: flex;
  position: relative;
`

const segmentedColumnContainerStyle = css`
  width: 100%;
  height: 100%;
`

export const columnGroupStyle = css`
  display: flex;
  flex-direction: column;
  gap: 2px;
`

export interface ColumnGroupProps {
  numberOfColumns: number
  values: number[]
}

const ColumnGroup: React.FC<ColumnGroupProps> = ({ numberOfColumns, values }) => {
  return (
    <div css={columnContainerStyle}>
      {[...Array(numberOfColumns)].map((_, i) => {
        return (
          <Column
            key={i}
            value={values[i]}
            numberOfBars={17}
            showYAxis={i === 2 || i === 6}
            numberOfColumns={numberOfColumns}
          />
        )
      })}
      <div css={segmentedColumnContainerStyle}>
        <SegmentedColumn value={values[0]} numberOfBars={17} />
      </div>
    </div>
  )
}

export default ColumnGroup
