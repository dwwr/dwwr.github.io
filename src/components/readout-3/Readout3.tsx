/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import DataLabel from './subcomponents/data-label/DataLabel'
import Chart from './subcomponents/chart/Chart'

const containerStyle = css`
  width: 100%;
  height: 100%;
  background-color: black;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`

export const textBarStyle = css`
  display: flex;
  justify-content: space-between;
`

const chartContainerStyle = css`
  display: flex;
  height: 100%;
  width: 200%;
  margin: 0.25rem 0;
  overflow: hidden;
`

export interface Readout3Props {
  benchmark?: number
}

export const Readout3: React.FC<Readout3Props> = ({ benchmark }) => {
  return (
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
    </div>
  )
}

export default Readout3
