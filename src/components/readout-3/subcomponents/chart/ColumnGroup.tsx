/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import Column from './Column'
// import SegmentedColumn from './SegmentedColumn'
import XAxis from './xAxis'
import { useEffect, useState } from 'react'

const columnContainerStyle = css`
  flex: 1;
  display: flex;
  position: relative;
`

const bottomXAxisStyle = css`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
`

const topXAxisStyle = css`
  ${bottomXAxisStyle};
  bottom: auto;
  transform: scaleY(-1);
`

const deviateValue = (value: number, range: number, direction: 'increment' | 'decrement') => {
  const deviation = Math.floor(Math.random() * range)
  return direction === 'increment' ? value + deviation : value - deviation
}

const useColumnValues = (numberOfColumns: number, benchmark?: number, flicker?: boolean) => {
  const [columnValues, setColumnValues] = useState<number[]>(
    Array(numberOfColumns).fill(benchmark ?? 0)
  )

  useEffect(() => {
    const interval = setInterval(() => {
      if (!flicker) return

      setColumnValues((prevValues) => {
        if (benchmark || benchmark === 0) {
          return prevValues.map(() => deviateValue(benchmark, 10, 'increment'))
        }
        return prevValues.map((value) =>
          value < 100 ? deviateValue(value, 10, 'increment') : deviateValue(value, 10, 'decrement')
        )
      })
    }, 100)

    return () => clearInterval(interval)
  }, [numberOfColumns, benchmark, flicker])

  return columnValues
}

export const columnGroupStyle = css`
  display: flex;
  flex-direction: column;
  gap: 2px;
`

export interface ColumnGroupProps {
  numberOfColumns: number
  benchmark?: number
  flicker?: boolean
}

const ColumnGroup: React.FC<ColumnGroupProps> = ({ numberOfColumns, benchmark, flicker }) => {
  const columnValues = useColumnValues(numberOfColumns, benchmark, flicker)
  return (
    <div css={columnContainerStyle}>
      <div css={topXAxisStyle}>
        <XAxis numberOfTicks={numberOfColumns * 3} />
      </div>
      {[...Array(numberOfColumns)].map((_, i) => {
        return (
          <Column
            key={i}
            value={columnValues[i]}
            numberOfBars={17}
            showYAxis={i === 2 || i === 6}
            numberOfColumns={numberOfColumns}
          />
        )
      })}
      <div css={bottomXAxisStyle}>
        <XAxis numberOfTicks={numberOfColumns * 3} />
      </div>
    </div>
  )
}

export default ColumnGroup
