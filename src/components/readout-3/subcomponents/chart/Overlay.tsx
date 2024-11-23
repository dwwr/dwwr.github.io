/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import DataLabel from '../data-label/DataLabel'
import { DataLabelProps } from '../data-label/DataLabel'

const overlayStyle = css`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`
export interface OverlayProps {
  labels: DataLabelProps[]
}

const Overlay: React.FC<OverlayProps> = ({ labels }) => {
  return (
    <div css={overlayStyle}>
      {labels.map((label) => (
        <DataLabel {...label} />
      ))}
    </div>
  )
}

export default Overlay
