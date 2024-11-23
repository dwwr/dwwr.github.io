/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import DataLabel from './subcomponents/data-label/DataLabel'
import Chart from './subcomponents/chart/Chart'
import Overlay from './subcomponents/chart/Overlay'

const containerStyle = css`
  width: 100%;
  height: 100%;
  background-color: black;
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  /* filter: blur(0.3px); */
`

export const textBarStyle = css`
  display: flex;
  justify-content: space-between;
  height: 10%;
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
  right: 1rem;
  top: 13%;
  transform: scale(0.66);
  transform-origin: top right;
`

export interface Readout3Props {
  benchmark?: number
}

export const Readout3: React.FC<Readout3Props> = ({ benchmark }) => {
  return (
    <>
      <div css={containerStyle}>
        <div css={textBarStyle}>
          <DataLabel text="Energy Observational Data" />
          <DataLabel label="Blood Type:" text="Analyzing" flicker />
        </div>
        <div css={chartContainerStyle}>
          <Chart numberOfColumns={40} benchmark={benchmark} />
        </div>
        <div css={textBarStyle}>
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
    </>
  )
}

export default Readout3
