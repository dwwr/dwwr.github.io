/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from 'react'
import { css } from '@emotion/react'

const mainStyle = css`
  height: 100%;
  width: 100%;
  background-color: black;
  display: flex;
  transform: rotate(90deg) scale(2);
  filter: blur(0.8px);
  position: absolute;
  overflow-x: hidden;
  overflow-y: hidden;
  overflow: hidden;
  top: 0;
  left: 0;
`

const containerStyle = css`
  font-size: 0; /* disable white space between inline block elements */

  &::before {
    content: '';
    width: 54px; /* calc(100px / 2 + 4px) */
    float: left;
    height: 120%;
    shape-outside: repeating-linear-gradient(#0000 0 174.2px, #000 0 177.2px); /* f - 3px, f */
  }\
`

const hexagonStyle = css`
  z-index: 1;
  width: 100px;
  margin: 4px;
  height: 115.47px; /* 100px * 1.1547 */
  display: inline-block;
  font-size: initial;
  clip-path: polygon(0% 25%, 0% 75%, 50% 100%, 100% 75%, 100% 25%, 50% 0%);
  margin-bottom: -24.85px; /* 4px - 100px * 0.2885 */
  position: relative;
`

const hexagonOnStyle = css`
  ${hexagonStyle};
  background: red;

  &::before {
    z-index: 2;
    content: '';
    position: absolute;
    top: 4px;
    left: 4px;
    width: calc(100% - 8px);
    height: calc(100% - 8px);
    clip-path: polygon(0% 25%, 0% 75%, 50% 100%, 100% 75%, 100% 25%, 50% 0%);
    background-color: black;
  }

  &::after {
    z-index: 2;
    content: '';
    position: absolute;
    top: 5px;
    left: 5px;
    width: calc(100% - 10px);
    height: calc(100% - 10px);
    clip-path: polygon(0% 25%, 0% 75%, 50% 100%, 100% 75%, 100% 25%, 50% 0%);
    background-color: red;
  }
`

const hexagonOffStyle = css`
  ${hexagonStyle};
  background-color: red;
  &::before {
    z-index: 2;
    content: '';
    position: absolute;
    top: 4px;
    left: 4px;
    width: calc(100% - 8px);
    height: calc(100% - 8px);
    clip-path: polygon(0% 25%, 0% 75%, 50% 100%, 100% 75%, 100% 25%, 50% 0%);
    background-color: black;
  }

  &::after {
    z-index: 2;
    content: '';
    position: absolute;
    top: 6px;
    left: 6px;
    width: calc(100% - 12px);
    height: calc(100% - 12px);
    clip-path: polygon(0% 25%, 0% 75%, 50% 100%, 100% 75%, 100% 25%, 50% 0%);
    background-color: black;
  }
`

const textStyle = css`
  z-index: 4;
  font-family: 'Helvetica', monospace;
  font-size: 0.75rem;
  opacity: 0.8;
  display: inline-block;
  transform: rotate(-90deg);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(-90deg);
  text-transform: uppercase;
  letter-spacing: 0.1em;
`

const downTriangleStyle = css`
  &::before {
    clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
    z-index: 4;
    content: '▲';
    position: absolute;
    top: 42%;
    left: 68%;
    transform: rotate(90deg);
    font-size: 1rem;
    color: black;
    filter: blur(0.8px);
  }
`

const upTriangleStyle = css`
  &::after {
    z-index: 4;
    content: '▼';
    position: absolute;
    bottom: 42%;
    right: 68%;
    transform: rotate(90deg);
    font-size: 1rem;
    color: black;
    filter: blur(0.8px);
  }
`
const useHexagonStateAndFlash = (numberOfHexagons: number, range: number = 3) => {
  const [hexagonStates, setHexagonStates] = useState<number[]>(Array(numberOfHexagons).fill(0))
  const [flash, setFlash] = useState(false)

  useEffect(() => {
    let hexagonInterval: NodeJS.Timeout
    let flashInterval: NodeJS.Timeout

    const startHexagonState = () => {
      hexagonInterval = setInterval(() => {
        setHexagonStates((prevStates) => {
          return prevStates.map((state) => {
            if (state < 1) {
              const deviation = Math.random() * range * 2 - range
              return Math.min(1, state + deviation)
            }
            return state
          })
        })
      }, 300)
    }

    const startFlash = () => {
      flashInterval = setInterval(() => {
        setFlash((prevFlash) => !prevFlash)
      }, 500)
    }

    const cycleIntervals = () => {
      startHexagonState()
      setTimeout(() => {
        clearInterval(hexagonInterval)
        setHexagonStates(Array(numberOfHexagons).fill(0))
        startFlash()

        setTimeout(() => {
          clearInterval(flashInterval)
          setHexagonStates(Array(numberOfHexagons).fill(0))

          cycleIntervals()
        }, 3000)
      }, 3000)
    }

    cycleIntervals()

    return () => {
      clearInterval(hexagonInterval)
      clearInterval(flashInterval)
    }
  }, [numberOfHexagons, range])

  return { hexagonStates, flash }
}

interface Readout2Props {
  numberOfHexagons?: number
}

const Readout2: React.FC<Readout2Props> = ({ numberOfHexagons = 1000 }) => {
  const { hexagonStates, flash } = useHexagonStateAndFlash(numberOfHexagons)

  return (
    <div css={mainStyle}>
      <div css={containerStyle}>
        {hexagonStates.map((_, i) => (
          <div key={i} css={flash || hexagonStates[i] === 1 ? hexagonOnStyle : hexagonOffStyle}>
            <div css={upTriangleStyle} />
            <div css={downTriangleStyle} />
            <span css={textStyle}>Emergency</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Readout2
