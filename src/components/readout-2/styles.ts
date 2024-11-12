import { css, keyframes } from '@emotion/react'

const commonHexagonBeforeAfter = css`
  content: '';
  position: absolute;
  clip-path: polygon(0% 25%, 0% 75%, 50% 100%, 100% 75%, 100% 25%, 50% 0%);
`

export const mainStyle = css`
  height: 100%;
  width: 100%;
  background-color: black;
  display: flex;
  transform: rotate(90deg) scale(1);
  filter: blur(0.9px);
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  --emergency-color: rgb(215, 0, 6);

  @media (min-width: 600px) {
    transform: rotate(90deg) scale(1.5);
  }

  @media (min-width: 500px) {
    transform: rotate(90deg) scale(2);
  }
`

export const pulse = keyframes`
  0%, 100% {
    filter: brightness(1) drop-shadow(0 0 5px var(--emergency-color));
  }
  50% {
    filter: brightness(1.3) drop-shadow(0 0 15px var(--emergency-color));
  }
`

export const containerStyle = css`
  &::before {
    content: '';
    width: 54px;
    float: left;
    height: 120%;
    shape-outside: repeating-linear-gradient(#0000 0 174.2px, #000 0 178px);
  }
`

export const hexagonStyle = css`
  width: 100px;
  margin: 4px;
  height: 115.47px;
  display: inline-block;
  font-size: initial;
  clip-path: polygon(0% 25%, 0% 75%, 50% 100%, 100% 75%, 100% 25%, 50% 0%);
  margin-bottom: -24.85px;
  position: relative;
  vertical-align: top;
`

export const hexagonOnStyle = css`
  ${hexagonStyle};
  background: var(--emergency-color);
  box-shadow: 0 0 15px var(--emergency-color);
  animation: ${pulse} 1s ease-in-out infinite;

  &::before {
    ${commonHexagonBeforeAfter};
    top: 4px;
    left: 4px;
    width: calc(100% - 8px);
    height: calc(100% - 8px);
    background-color: black;
  }

  &::after {
    ${commonHexagonBeforeAfter};
    top: 5px;
    left: 5px;
    width: calc(100% - 10px);
    height: calc(100% - 10px);
    background-color: var(--emergency-color);
    box-shadow: 0 0 10px var(--emergency-color);
  }
`

export const hexagonOffStyle = (outlineOffHexagons: boolean) => css`
  ${hexagonStyle};
  background-color: ${outlineOffHexagons ? 'var(--emergency-color)' : 'black'};
  animation: ${pulse} 1s ease-in-out infinite;

  &::before {
    ${commonHexagonBeforeAfter};
    top: 4px;
    left: 4px;
    width: calc(100% - 8px);
    height: calc(100% - 8px);
    background-color: black;
  }

  &::after {
    ${commonHexagonBeforeAfter};
    top: 6px;
    left: 6px;
    width: calc(100% - 12px);
    height: calc(100% - 12px);
    background-color: black;
  }
`

export const textStyle = css`
  z-index: 3;
  font-family: 'Helvetica', monospace;
  font-size: 0.75rem;
  opacity: 0.8;
  display: inline-block;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(-90deg);
  text-transform: uppercase;
  letter-spacing: 0.1em;
`

const commonTriangleStyle = css`
  position: absolute;
  transform: rotate(90deg);
  font-size: 1rem;
  color: black;
  filter: blur(0.8px);
`

export const downTriangleStyle = css`
  &::before {
    ${commonTriangleStyle};
    z-index: 3;
    content: '▲';
    top: 42%;
    left: 68%;
  }
`

export const upTriangleStyle = css`
  &::after {
    ${commonTriangleStyle};
    z-index: 4;
    content: '▼';
    bottom: 42%;
    right: 68%;
  }
`
