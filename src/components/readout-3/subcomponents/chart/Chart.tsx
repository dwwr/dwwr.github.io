/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { useEffect, useState } from 'react'
import XAxis from './xAxis'
import Column from './Column'
import PlotLine from '../PlotLine'

const chartStyle = css`
  width: 100%;
  height: 100%;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  transform: skewX(-29deg);
  margin-left: -20%;
`

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

const plotLineStyle = css`
  margin-top: 2px;
`

export interface ChartProps {
  numberOfColumns: number
  benchmark?: number
  flicker?: boolean
}

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

const Chart: React.FC<ChartProps> = ({ numberOfColumns, benchmark, flicker }) => {
  const columnValues = useColumnValues(numberOfColumns, benchmark, flicker)

  return (
    <div css={chartStyle}>
      <div css={columnContainerStyle}>
        <div css={topXAxisStyle}>
          <XAxis numberOfTicks={numberOfColumns * 3} />
        </div>
        {[...Array(numberOfColumns)].map((_, i) => (
          <Column
            key={i}
            value={columnValues[i]}
            numberOfBars={17}
            showYAxis={i === 0 || i % 4 === 0}
            numberOfColumns={numberOfColumns}
          />
        ))}
        <div css={bottomXAxisStyle}>
          <XAxis numberOfTicks={numberOfColumns * 3} />
        </div>
      </div>
      <div css={plotLineStyle}>
        <PlotLine numberOfTicks={numberOfColumns * 6} />
      </div>
    </div>
  )
}

export default Chart
