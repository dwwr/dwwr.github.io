/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

const listWarningRow = css`
  display: grid;
  grid-template-columns: 7fr 1fr 3fr 1.5fr;
  grid-column: 2 / -1;
  font-size: 0.6rem;
  color: #ff3e3e;
  font-family: 'Helvetica', monospace;
  font-weight: bold;
`

export const ListWarningRow: React.FC = () => {
  return (
    <div css={listWarningRow}>
      <div>|</div>
      <div></div>
      <span>|CAUTION|</span>
      <span>|DANGER|</span>
    </div>
  )
}
