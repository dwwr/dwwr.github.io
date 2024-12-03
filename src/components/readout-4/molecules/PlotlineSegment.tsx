/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

const plotlineSegment = css`
  height: 100%;
  display: flex;
  flex-direction: column;
  color: #5ff7ff;
  font-family: 'Helvetica';
  font-size: 1.2rem;
  font-weight: 600;
`

const container = css`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 50%;
`

const sign = css`
  color: #5ff7ff;
  margin-bottom: 2px;
`

const number = css`
  margin-right: 0.25rem;
`

const bigLine = css`
  height: 2px;
  width: 20px;
  background-color: #5ff7ff;
`

const smallLineContainer = css`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  height: 50%;
`

const smallLine = css`
  height: 2px;
  width: 10px;
  background-color: #5ff7ff;
`

export interface PlotlineSegmentProps {
  value: number
  hide?: boolean
}

export const PlotlineSegment: React.FC<PlotlineSegmentProps> = ({ value, hide }) => {
  return (
    <div css={plotlineSegment}>
      <div css={smallLineContainer}>
        <div css={smallLine}></div>
      </div>
      <div css={container}>
        {!hide && (
          <>
            <span css={sign}>+</span>
            <span css={number}>{value.toString().padStart(2, '0')}</span>
            <div css={bigLine}></div>
          </>
        )}
      </div>
    </div>
  )
}
