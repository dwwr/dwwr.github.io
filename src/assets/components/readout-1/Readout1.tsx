/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { Header } from './subcomponents/Header'
import { GlowLine } from './subcomponents/GlowLine'
import { ListContainer } from './subcomponents/ListContainer'
import { Readout1ListItemProps } from './subcomponents/Readout1ListItem'

const readout1 = css`
  background-color: black;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  padding: 1rem;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(transparent 0%, rgba(255, 0, 0, 0.1) 50%, transparent 100%);
    animation: scanline 0.167s linear infinite, flicker 0.167s infinite;
    pointer-events: none;
  }

  @keyframes flicker {
    0% {
      opacity: 0.9;
    }
    50% {
      opacity: 0.2;
    }
    100% {
      opacity: 0.9;
    }
  }

  @keyframes scanline {
    0% {
      transform: translateY(-100%);
    }
    100% {
      transform: translateY(100%);
    }
  }
`

export const glowText = css`
  font-family: 'Helvetica', monospace;
  font-weight: bold;
  color: rgb(237, 110, 46);
  text-shadow: 0 0 3px #ff0000, 0 0 10px #ff0000, 0 0 15px #ff0000, 0 0 20px #ff0000;
  // letter-spacing: 0.1rem;
  height: 100%;
  opacity: 0.95;
`

export const Readout1: React.FC<Readout1Props> = ({
  title,
  kpi1Key,
  kpi1Value,
  kpi2Key,
  kpi2Value,
  items
}) => {
  return (
    <div css={[readout1, glowText]}>
      <Header
        title={title}
        kpi1Key={kpi1Key}
        kpi1Value={kpi1Value}
        kpi2Key={kpi2Key}
        kpi2Value={kpi2Value}
      />
      <GlowLine />
      <ListContainer items={items} />
    </div>
  )
}

export interface Readout1Props {
  title: string
  kpi1Key: string
  kpi1Value: string
  kpi2Key: string
  kpi2Value: string
  items: Readout1ListItemProps[]
}
