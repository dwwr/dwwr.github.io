/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

const display = css`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  padding: 0 1rem 0.25rem;
  gap: 0.5rem;
  font-size: clamp(0.5rem, 2.5vw, 2rem);
  letter-spacing: -0.25px;
  text-wrap: balance;
`

const column = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const stretch = css`
  font-size: clamp(0.5rem, 3.5vw, 2.5rem);
  transform: scaleY(2);
`

export const Header: React.FC = () => {
  return (
    <div css={display}>
      <div css={[column, stretch]}>MENTAL TOXICITY LEVEL</div>
      <div css={column}>
        <div>ELAPSED TIME: 120 min.</div>
        <div>L.C.L. PURITY: 99.9999989%</div>
      </div>
    </div>
  )
}
