/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

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
  font-size: 1.8rem;
  line-height: 1.2;
  letter-spacing: 0.1rem;
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
  width: 118%;
  letter-spacing: 0.05rem;
  transform: scaleX(0.85);
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
  width: 93%;
  height: 0px;
`

export interface DataLabelProps {
  text: string
  bottomText?: string
  squeeze?: boolean
}

export const DataLabel: React.FC<DataLabelProps> = ({ text, bottomText, squeeze }) => {
  return (
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
  )
}
