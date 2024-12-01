/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

interface BorderLineProps {
  text: string
}

const borderLineStyles = css`
  position: relative;
  width: 100%;
  height: 4px;
  background-color: #00ffff; // Adjust color to match your needs
  margin: 1rem 0;
  filter: blur(1px);
`

const labelStyles = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scaleX(1.3);
  letter-spacing: 0.05rem;
  background-color: #000;
  padding: 0 1rem;
  color: #00ffff;
  font-family: 'Helvetica Neue', sans-serif;
  font-weight: bold;
  text-transform: uppercase;
  border: 2px solid #00ffff;
  border-radius: 4px;
`

export const BorderLine: React.FC<BorderLineProps> = ({ text }) => {
  return (
    <div css={borderLineStyles}>
      <span css={labelStyles}>{text}</span>
    </div>
  )
}
