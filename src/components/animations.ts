import { keyframes } from '@emotion/react'

export const flicker = keyframes`
  0% {
    opacity: 0.9;
  }
  50% {
    opacity: 0.2;
  }
  100% {
    opacity: 0.9;
  }
`

export const scanline = keyframes`
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(100%);
  }
`
