/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { BarSegment } from './molecules/segment/BarSegment'
import { DataLabel } from './molecules/data-label/DataLabel'
import { BorderLine } from './molecules/border-line/BorderLine'
import { PlotlineSegment } from './molecules/PlotlineSegment'

const layout = css`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(10, 1fr);
  background-color: #000;
  column-gap: 2rem;
`
export interface Readout4Props {}

export const Readout4: React.FC<Readout4Props> = () => {
  return (
    <div css={layout}>
      {Array.from({ length: 7 }).map((_, i) => (
        <div key={i} style={{ gridColumn: 1, gridRow: 7 - i, alignSelf: 'start', height: '100%' }}>
          <PlotlineSegment value={i} hide={i === 0} />
        </div>
      ))}
      <div
        style={{
          gridColumnStart: 2,
          gridColumnEnd: 5,
          gridRowStart: 3,
          gridRowEnd: 5,
          display: 'flex',
          flexDirection: 'column',
          gap: '0.3rem'
        }}
      >
        <DataLabel text="Life Support System" showIndicator flicker />
        <DataLabel text="Link Control System" showIndicator />
        <DataLabel text="External Communications" squeeze showIndicator />
      </div>
      {Array.from({ length: 7 }).map((_, i) => {
        return (
          <div
            key={i}
            style={{ gridColumn: 1 + i, gridRow: 8 - i, height: '100%', marginBottom: '2rem' }}
          >
            <BarSegment number={i} flicker={i === 1} green={i <= 1} />
          </div>
        )
      })}
      <div
        style={{
          gridColumnStart: 1,
          gridColumnEnd: 11,
          gridRowStart: 7,
          gridRowEnd: 8,
          alignSelf: 'end'
        }}
      >
        <BorderLine text="Border Line" />
      </div>
      <div
        style={{
          gridColumnStart: 5,
          gridColumnEnd: 8,
          gridRowStart: 8,
          alignSelf: 'end'
        }}
      >
        <DataLabel text="Reserve Energy Remaining" bottomText="EVA-01 : Entry Plug" />
      </div>
    </div>
  )
}
