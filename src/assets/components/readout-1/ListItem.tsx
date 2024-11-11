/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

const listItem = css`
  display: contents;
`

const label = css`
  padding: 0.5rem 0;
  padding-right: 0.33rem;
  font-size: clamp(0.4rem, 2vw, 1rem);
  text-align: left;
  letter-spacing: -0.5px;
  justify-self: end;
  line-height: 1;
`

const number = css`
  font-size: clamp(1.5rem, 8vw, 4rem);
  letter-spacing: -2px;
`

const gradientBar = css`
  height: 100%;
  display: flex;
  align-items: center;
  width: 100%;
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
  const currentNumber = useRandomDeviation(40, 2) || 0
  return (
    <div css={listItem}>
      <div css={label}>
        <div>SUBJECT</div>
        <div css={number}>01</div>
        <div>FIRST.C</div>
      </div>
      <div>
        <div css={gradientBar}>
          {[...Array(40)].map((_, i) => (
            <div
              key={i}
              style={{
                background: i > currentNumber ? 'none' : getGradientColor(i, 40),
                flex: '1',
                height: '75%',
                borderRadius: '3px',
                margin: '0 0.1rem',
                boxShadow: i > currentNumber ? 'none' : `0 0 15px ${getGradientColor(i, 40)}`
              }}
            />
          ))}
          <div></div>
        </div>
      </div>
    </div>
  )
}
