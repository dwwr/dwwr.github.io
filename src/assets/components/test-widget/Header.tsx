/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

const toxicityDisplay = css`
  padding: 20px;
  font-family: 'Digital-7', monospace;
  display: flex;
  gap: 10px;
  flex-direction: row;
  align-items: center;
  width: 100%;
  position: relative;
  font-size: clamp(0.8rem, 2vw, 2rem);
  text-wrap: wrap;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(transparent 0%, rgba(255, 0, 0, 0.1) 50%, transparent 100%);
    animation: scanline 4s linear infinite;
  }

  @keyframes scanline {
    0% {
      transform: translateY(-100%);
    }
    100% {
      transform: translateY(100%);
    }
  }
`

const column = css`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  height: 100%;
`

const glowText = css`
  color: #ff0000;
  text-shadow: 0 0 5px #ff0000, 0 0 10px #ff0000, 0 0 15px #ff0000, 0 0 20px #ff0000;
  letter-spacing: 0.1em;
  height: 100%;
`

const stretch = css`
  font-size: clamp(1rem, 2.5vw, 2.5rem);
  transform: scaleY(2);
`

export const Header: React.FC = () => {
  return (
    <div css={toxicityDisplay}>
      <div css={[column, glowText, stretch]}>MENTAL TOXICITY LEVEL</div>
      <div css={column}>
        <div css={glowText}>ELAPSED TIME: 120 min.</div>
        <div css={glowText}>L.C.L PURITY: 99.99999998%</div>
      </div>
    </div>
  )
}
