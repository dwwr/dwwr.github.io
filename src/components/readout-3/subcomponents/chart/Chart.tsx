/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { useEffect, useState } from 'react'
import XAxis from './xAxis'
import Column from './Column'
import PlotLine from '../PlotLine'

export const containerStyle = css`
  width: 100%;
  height: 100%;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  transform: skewX(-29deg);
  margin-left: -20%;
`

export const chartStyle = css`
  width: 100%;
  height: 100%;
  flex: 1;
  display: flex;
  align-items: stretch;
  overflow: hidden;
  position: relative;
`

export const xAxisStyle = css`
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
`

export const topXAxisStyle = css`
  width: 100%;
  height: 0px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  transform: scaleY(-1);
`

export const plotLineStyle = css`
  margin-top: 2px;
`

const growColumnValues = (numberOfColumns: number, benchmark?: number) => {
  const [columnValues, setColumnValues] = useState<number[]>(
    Array(numberOfColumns).fill(benchmark ?? 0)
  )

  useEffect(() => {
    const interval = setInterval(() => {
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
  }, [numberOfColumns, benchmark])

  return columnValues
}

const deviateValue = (value: number, range: number, direction: 'increment' | 'decrement') => {
  const deviation = Math.floor(Math.random() * range)
  return direction === 'increment' ? value + deviation : value - deviation
}

export interface ChartProps {
  numberOfColumns: number
  benchmark?: number
}

const Chart: React.FC<ChartProps> = ({ numberOfColumns, benchmark }) => {
  const columnValues = growColumnValues(numberOfColumns, benchmark)

  return (
    <div css={containerStyle}>
      <div css={chartStyle}>
        {[...Array(numberOfColumns)].map((_, i) => (
          // todo: interpolate segmented columns
          <Column
            key={i}
            value={columnValues[i]}
            numberOfBars={17}
            showYAxis={i === 0 || i % 2 === 0}
            numberOfColumns={numberOfColumns}
          />
        ))}
        <div css={xAxisStyle}>
          <XAxis numberOfTicks={numberOfColumns * 3} />
        </div>
        <div css={topXAxisStyle}>
          <XAxis numberOfTicks={numberOfColumns * 3} />
        </div>
      </div>
      <div css={plotLineStyle}>
        <PlotLine numberOfTicks={numberOfColumns * 12} />
      </div>
    </div>
  )
}

export default Chart
