/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

const toxicityDisplay = css`
  padding-top: 20px;
  padding-left: 20px;
  font-family: 'Digital-7', monospace;
  display: flex;
  gap: 10px;
  flex-direction: row;
  align-items: center;
  width: 100%;
  font-size: clamp(0.8rem, 2vw, 2rem);
  text-wrap: wrap;
`

const column = css`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  height: 100%;
`

const stretch = css`
  font-size: clamp(1rem, 2.5vw, 2.5rem);
  transform: scaleY(2);
`

export const Header: React.FC = () => {
  return (
    <div css={toxicityDisplay}>
      <div css={[column, stretch]}>MENTAL TOXICITY LEVEL</div>
      <div css={column}>
        <div>ELAPSED TIME: 120 min.</div>
        <div>L.C.L PURITY: 99.99999998%</div>
      </div>
    </div>
  )
}
