/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import XAxis from './xAxis'
import Column from './Column'
import PlotLine from '../PlotLine'

export const containerStyle = css`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  transform: skewX(-20deg);
`

export const chartStyle = css`
  width: 100%;
  height: 100%;
  flex: 1;
  display: flex;
  align-items: stretch;
  overflow: hidden;
  position: relative;
  transform: scaleX(1.125);
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
  transform: scaleX(1.125);
`

export interface ChartProps {
  numberOfColumns: number
}

const Chart: React.FC<ChartProps> = ({ numberOfColumns }) => {
  return (
    <div css={containerStyle}>
      <div css={chartStyle}>
        {[...Array(numberOfColumns)].map((_, i) => (
          <Column
            key={i}
            value={i}
            numberOfBars={17}
            // showYAxis={i === 0 || i % 6 === 0}
            numberOfColumns={numberOfColumns}
          />
        ))}
        <div css={xAxisStyle}>
          <XAxis numberOfTicks={numberOfColumns * 6} />
        </div>
        <div css={topXAxisStyle}>
          <XAxis numberOfTicks={numberOfColumns * 6} />
        </div>
      </div>
      <div css={plotLineStyle}>
        <PlotLine numberOfTicks={numberOfColumns * 12} />
      </div>
    </div>
  )
}

export default Chart
