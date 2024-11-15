/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import DataLabel from './subcomponents/DataLabel'

const containerStyle = css`
  width: 100%;
  background-color: black;
`

export const textBarStyle = css`
  display: flex;
  justify-content: start;
`

export const chartStyle = css`
  width: 100%;
  height: 100%;
  min-height: 550px;
  display: flex;
  align-items: flex-end;
  overflow: hidden;
  position: relative;
`
export const barStyle = css`
  width: 50px;
  height: 100px;
  background-color: #00ff00;
  margin: 0 5px;
  transform: skew(-20deg);
  position: relative;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100%;
    background-image: linear-gradient(to bottom, transparent 90%, #000 90%);
    background-size: 10px 10px;
  }
`

export interface Readout3Props {}

export const Readout3: React.FC<Readout3Props> = () => {
  return (
    <div css={containerStyle}>
      <div css={textBarStyle}>
        <DataLabel text="Energy Observational Data" />
        <DataLabel label="Blood Type:" text="Analyzing" flicker />
      </div>
      <div css={chartStyle}>
        <div css={barStyle} />
        <div css={barStyle}></div>
        <div css={barStyle}></div>
        <div css={barStyle}></div>
        <div css={barStyle}></div>
        <div css={barStyle}></div>
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
