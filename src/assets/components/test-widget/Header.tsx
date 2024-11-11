/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

const toxicityDisplay = css`
  padding: 20px;
  padding-left: 30px;
  padding-bottom: 0px;
  font-family: 'Helvetica';
  display: flex;
  gap: 10px;
  // align-items: center;
  width: 100%;
  font-size: clamp(0.8rem, 2vw, 2rem);
  letter-spacing: -0.25px;
`

const column = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const stretch = css`
  font-size: clamp(1rem, 2.5vw, 2.5rem);
  font-weight: bold;
  transform: scaleY(2);
`

export const Header: React.FC = () => {
  return (
    <div css={toxicityDisplay}>
      <div css={[column, stretch]}>MENTAL TOXICITY LEVEL</div>
      <div css={column}>
        <div>ELAPSED TIME: 120 min.</div>
        <div>L.C.L. PURITY: 99.9999989%</div>
      </div>
    </div>
  )
}
