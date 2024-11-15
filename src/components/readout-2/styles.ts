// Many thanks to Temani Afif: https://css-tricks.com/hexagons-and-beyond-flexible-responsive-grid-patterns-sans-media-queries/

import { css, keyframes } from '@emotion/react'

// Common variables
const vars = {
  emergencyColor: 'rgb(215, 0, 6)',
  size: '100px',
  ratio: '0.85',
  hexHeight: '0.25',
  hexWidth: '0.5',
  verticalMargin: '2px'
}

// Common calculations
const calculations = css`
  --emergency-color: ${vars.emergencyColor};
  --s: ${vars.size}; /* size */
  --r: ${vars.ratio}; /* ratio */
  --h: ${vars.hexHeight};
  --v: ${vars.hexWidth};
  --hc: calc(clamp(0, var(--h), 0.5) * var(--s));
  --vc: calc(clamp(0, var(--v), 0.5) * var(--s) * var(--r));
  --mv: ${vars.verticalMargin}; /* vertical margin */
  --mh: calc(var(--mv) + (var(--s) - 1.75 * var(--hc)) / 2); /* horizontal margin */
  --f: calc(2 * var(--s) * var(--r) + 4 * var(--mv) - 2 * var(--vc) - 2px);
`

export const mainStyle = css`
  ${calculations};
  background-color: black;
  display: flex;
  flex-direction: column;
  filter: blur(0.9px);
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  width: 100%;
  height: 100%;
  overflow: hidden;
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
  ::before {
    content: '';
    width: calc(var(--s) / 2 + var(--mh));
    float: left;
    height: 135%;
    shape-outside: repeating-linear-gradient(#0000 0 calc(var(--f) - 2px), #000 0 var(--f));
  }
`

const hexagonClipPath = (offset = 0) => css`
  clip-path: polygon(
    calc(var(--hc) ${offset ? `- ${offset}px` : ''}) 0,
    calc(100% - var(--hc) ${offset ? `+ ${offset}px` : ''}) 0,
    calc(100% ${offset ? `+ ${offset}px` : ''}) var(--vc),
    calc(100% ${offset ? `+ ${offset}px` : ''}) calc(100% - var(--vc)),
    calc(100% - var(--hc) ${offset ? `+ ${offset}px` : ''}) 100%,
    calc(var(--hc) ${offset ? `- ${offset}px` : ''}) 100%,
    ${offset ? `-${offset}px` : '0'} calc(100% - var(--vc)),
    ${offset ? `-${offset - 0.5}px` : '0'} var(--vc)
  );
`

const hexagonInnerLayer = css`
  content: '';
  position: absolute;
  background-color: black;
`

export const hexagonStyle = css`
  width: var(--s);
  margin: var(--mv) var(--mh);
  height: calc(var(--s) * var(--r));
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.45rem;
  ${hexagonClipPath()};
  margin-bottom: calc(var(--mv) - var(--vc));
`

export const hexagonOnStyle = css`
  ${hexagonStyle};
  background: var(--emergency-color);
  box-shadow: 0 0 15px var(--emergency-color);
  animation: ${pulse} 1s ease-in-out infinite;

  &::before {
    ${hexagonInnerLayer};
    top: 3px;
    left: 3px;
    width: calc(100% - 6px);
    height: calc(100% - 6px);
    ${hexagonClipPath(2)};
  }

  &::after {
    ${hexagonInnerLayer};
    z-index: 1;
    top: 4.5px;
    left: 4.5px;
    width: calc(100% - 9px);
    height: calc(100% - 9px);
    background-color: var(--emergency-color);
    ${hexagonClipPath(3)};
  }
`

export const hexagonOffStyle = (outlineOffHexagons: boolean) => css`
  ${hexagonStyle};
  background-color: ${outlineOffHexagons ? 'var(--emergency-color)' : 'black'};
  animation: ${pulse} 1s ease-in-out infinite;

  &::before {
    ${hexagonInnerLayer};
    top: 3px;
    left: 3px;
    width: calc(100% - 6px);
    height: calc(100% - 6px);
    ${hexagonClipPath(2)};
  }
`

export const textStyle = css`
  z-index: 2;
  font-family: 'Helvetica', monospace;
  font-size: 0.65rem;
  align-items: center;
  justify-content: center;
  align-self: center;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.04rem;
`

const commonTriangleStyle = css`
  position: relative;
  display: flex;
  justify-content: center;
  font-size: 0.85rem;
`

export const upTriangleStyle = css`
  &::after {
    ${commonTriangleStyle};
    z-index: 2;
    content: '▲';
  }
`
export const downTriangleStyle = css`
  &::before {
    ${commonTriangleStyle};
    z-index: 2;
    content: '▼';
  }
`
