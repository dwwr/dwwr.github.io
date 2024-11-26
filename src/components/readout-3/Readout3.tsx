/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import DataLabel from './molecules/data-label/DataLabel'
import Chart from './molecules/chart/Chart'
import Overlay from './molecules/chart/Overlay'

const containerStyle = css`
  width: 100%;
  height: 100%;
  background-color: black;
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  filter: blur(0.4px);
`

const topTextBarStyle = css`
  display: flex;
  justify-content: space-between;
  min-height: 10%;
  align-items: end;
  overflow-x: scroll;
  overflow-y: hidden;
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
  gap: 1rem;
`

const bottomTextBarStyle = css`
  ${topTextBarStyle}
  align-items: start;
`

const chartContainerStyle = css`
  display: flex;
  height: 80%;
  width: 200%;
  margin: 0.25rem 0;
  overflow: hidden;
`

const overlayContainerStyle = css`
  position: absolute;
  right: 0;
  top: 15%;
  transform: scale(0.66);
  height: 110px;
  transform-origin: top right;
`

export interface Readout3Props {
  benchmark?: number
}

export const Readout3: React.FC<Readout3Props> = ({ benchmark }) => {
  return (
    <div css={containerStyle}>
      <div css={topTextBarStyle}>
        <DataLabel text="Energy Observational Data" />
        <DataLabel label="Blood Type:" text="Analyzing" flicker />
      </div>
      <div css={chartContainerStyle}>
        <Chart columnGroupSize={8} columnGroupCount={4} benchmark={benchmark} deviate loop />
      </div>
      <div css={bottomTextBarStyle}>
        <DataLabel text="High level energy field approaching" condensed />
        <DataLabel label="Generating point:" text="Terminal Dogma: Point 00" />
        <DataLabel label="Observed by:" text="Magi" />
      </div>
      <div css={overlayContainerStyle}>
        <Overlay
          labels={[
            { label: 'Radioactivity', text: 'Negative' },
            { label: 'Radiant Heat', text: 'Negative', flicker: true }
          ]}
        />
      </div>
    </div>
  )
}

export default Readout3
