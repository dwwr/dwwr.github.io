/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { flicker } from '../animations'
import { scanline } from '../animations'

export const containerStyle = css`
  width: 100%;
  height: 100%;
  background-color: black;
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  filter: blur(0.4px);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(transparent 0%, rgba(255, 0, 0, 0.15) 50%, transparent 100%);
    animation: ${scanline} 0.167s linear infinite, ${flicker} 0.167s infinite;
    pointer-events: none;
  }
`

export const topTextBarStyle = css`
  display: flex;
  justify-content: space-between;
  min-height: 10%;
  align-items: end;
  overflow-x: scroll;
  overflow-y: hidden;
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
  gap: 1rem;
`

export const bottomTextBarStyle = css`
  ${topTextBarStyle}
  align-items: start;
`

export const chartContainerStyle = css`
  display: flex;
  height: 80%;
  width: 200%;
  margin: 0.25rem 0;
  overflow: hidden;
`

export const overlayContainerStyle = css`
  position: absolute;
  right: 0;
  top: 15%;
  transform: scale(0.66);
  height: 110px;
  transform-origin: top right;
`
