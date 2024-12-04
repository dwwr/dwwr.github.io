/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

const labelContainer = css`
  display: flex;
  align-items: stretch;
  > * {
    flex-shrink: 0;
  }
`

const glowBox = css`
  margin-left: 0.5rem;
  min-width: 25px;
  height: 100%;
  background-color: rgba(214, 63, 43, 0.95);
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(214, 63, 43, 0.4), 0 0 20px rgba(214, 63, 43, 0.3),
    0 0 20px rgba(201, 43, 22, 0.2), 0 0 20px rgba(201, 43, 22, 0.1);
`

export const label = css`
  border: 3px solid orange;
  border-radius: 5px;
  width: 400px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  filter: blur(0.75px);
`

export const glowText = css`
  font-family: 'Helvetica', monospace;
  font-size: 2rem;
  line-height: 1.2;
  color: rgb(251, 181, 19);
  text-transform: uppercase;
  text-shadow: 0 0 1px #ff0000, 0 0 4px #ff0000, 0 0 6px #ff0000;
  text-wrap: nowrap;
  overflow: hidden;
  text-align: center;
  word-spacing: 0.1rem;
`

export const squeezeText = css`
  word-spacing: -0.1rem;
  width: 125%;
  transform: scaleX(0.8);
  transform-origin: left;
`

const boldText = css`
  font-weight: bold;
`
const spacedText = css`
  transform: scaleX(1.1);
`

const divider = css`
  border-top: 2px solid rgb(251, 181, 19);
  align-self: center;
  width: 96%;
  height: 0px;
`

export interface DataLabelProps {
  text: string
  bottomText?: string
  squeeze?: boolean
  showIndicator?: boolean
}

export const DataLabel: React.FC<DataLabelProps> = ({
  text,
  bottomText,
  squeeze,
  showIndicator
}) => {
  return (
    <div css={labelContainer}>
      <div css={label}>
        {bottomText ? (
          <>
            <span css={[glowText, squeezeText, boldText]}>{text}</span>
            <div css={divider} />
            <span css={[glowText, squeeze && squeezeText, boldText, spacedText]}>{bottomText}</span>
          </>
        ) : (
          <span css={[glowText, squeeze && squeezeText, boldText]}>{text}</span>
        )}
      </div>
      {showIndicator && <div css={glowBox} />}
    </div>
  )
}
