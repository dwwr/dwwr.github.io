/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

export const borderStyle = css`
  position: relative;
  display: inline-flex;
  align-items: start;
  height: clamp(1.5rem, 5.75vw, 9rem);
  border: 1px solid rgb(249, 158, 14);
  border-radius: 7px;
  background: linear-gradient(
    to bottom,
    rgba(249, 158, 14, 0.15),
    rgba(69, 63, 53, 0.05) 50%,
    transparent
  );
  padding: 0 0.25rem 0 0.25rem;
`

export const glowTextStyle = css`
  font-family: 'Helvetica', monospace;
  color: rgb(249, 158, 14);
  text-transform: uppercase;
  text-shadow: 0 0 2px #ff0000, 0 0 4px #ff0000, 0 0 6px #ff0000;
`

export const textStretchStyle = css`
  font-size: clamp(0.5rem, 2vw, 4rem);
  transform: scaleY(3) scaleX(0.95) translateY(clamp(0.18rem, 0.5vw, 2rem));
`

export const labelStretchStyle = css`
  align-self: center;
  font-size: clamp(0.25rem, 1vw, 2rem);
  transform: scaleY(3) scaleX(0.95) translateY(clamp(0.1rem, 0.4vw, 2rem));
`

const condensedStyle = css`
  transform: scaleX(0.7);
  transform-origin: top left;
  margin-right: calc(-13% * var(--content-width, 1));
`

export const flickerAnimation = css`
  @keyframes flicker {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.1;
    }
    100% {
      opacity: 1;
    }
  }
  animation: flicker 0.25s steps(2, end) infinite;
`

export interface DataLabelProps {
  text: string
  label?: string
  flicker?: boolean
  condensed?: boolean
}

const DataLabel: React.FC<DataLabelProps> = ({
  label,
  text,
  flicker: shouldFlicker,
  condensed
}) => {
  return (
    <div css={[borderStyle, condensed && condensedStyle, shouldFlicker && flickerAnimation]}>
      <span css={[glowTextStyle, labelStretchStyle]}>{label}</span>
      <span css={[glowTextStyle, textStretchStyle]}>{text}</span>
    </div>
  )
}

export default DataLabel
