/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

const listItem = css`
  display: contents;
  grid-column: 2 / -1;
`

const label = css`
  color: #ff3e3e;
  font-family: 'Helvetica', monospace;
  font-weight: bold;
  font-size: 0.8rem;
  text-align: center;
  letter-spacing: -0.2px;
`

const number = css`
  font-size: 2.25rem;
`

const scaleBar = css`
  flex-grow: 1;
  position: relative;
`

const gradientBar = css`
  height: 100%;
  display: flex;
  gap: 1%;
  align-items: center;
`
const getGradientColor = (index: number, total: number): string => {
  // For a smoother transition, we'll break it into phases
  if (index < total * 0.4) {
    // Cyan to Blue phase
    const blueIntensity = (index / (total * 0.4)) * 255
    return `rgb(0, ${255 - blueIntensity}, 255)`
  } else if (index < total * 0.7) {
    // Blue phase
    return `rgb(0, 0, 255)`
  } else {
    // Blue to Purple phase
    const purpleIntensity = ((index - total * 0.7) / (total * 0.3)) * 128
    return `rgb(${purpleIntensity}, 0, 255)`
  }
}

import { useState, useEffect } from 'react'

const useRandomDeviation = (baseNumber: number, range: number = 3) => {
  const [currentNumber, setCurrentNumber] = useState(baseNumber)

  useEffect(() => {
    const interval = setInterval(() => {
      const deviation = Math.random() * range * 2 - range
      setCurrentNumber(baseNumber + deviation)
    }, 100)

    return () => clearInterval(interval)
  }, [baseNumber, range])

  return currentNumber
}

export const ListItem: React.FC = () => {
  const currentNumber = useRandomDeviation(25, 3) || 0
  return (
    <div css={listItem}>
      <div css={label}>
        <div>SUBJECT</div>
        <div css={number}>01</div>
        <div>FIRST.C</div>
      </div>
      <div css={scaleBar}>
        <div css={gradientBar}>
          {[...Array(40)].map((_, i) => (
            <div
              key={i}
              style={{
                background: i > currentNumber ? 'none' : getGradientColor(i, 40),
                flex: '1',
                height: '80%',
                borderRadius: '3px',
                margin: '0 1px',
                maxWidth: '10px'
              }}
            />
          ))}
          <div></div>
        </div>
      </div>
    </div>
  )
}
