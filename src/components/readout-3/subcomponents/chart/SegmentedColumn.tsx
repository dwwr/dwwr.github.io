/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import YAxis from './yAxis'

export const segmentedColumnStyle = css`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 2px;
  background-color: black;
`

const gradientBar = css`
  height: 100%;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  width: 100%;
  gap: 2px;
`

const styleIncrementor = (i: number, currentNumber: number) => {
  return css`
    background: ${i > currentNumber ? 'none' : 'rgb(251, 181, 19)'};
    width: 100%;
    flex: 1;
    min-height: 0;
    border-radius: 5px;
    /* border: ${i > currentNumber ? '1px solid rgba(251, 181, 19, 0.2)' : 'none'};
    box-shadow: ${i <= currentNumber ? '0 0 5px rgba(251, 181, 19, 0.5)' : 'none'}; */
  `
}

export interface SegmentedColumnProps {
  value: number
  numberOfBars: number
}

const SegmentedColumn: React.FC<SegmentedColumnProps> = ({ value, numberOfBars }) => {
  const scaledValue = Math.floor((value / 100) * 17)
  return (
    <>
      <YAxis numberOfTicks={numberOfBars} />
      <div css={segmentedColumnStyle}>
        <div css={gradientBar}>
          {[...Array(17)].map((_, i) => (
            <div key={i} css={styleIncrementor(i, scaledValue)} />
          ))}
        </div>
      </div>
      <YAxis numberOfTicks={numberOfBars} />
    </>
  )
}

export default SegmentedColumn
