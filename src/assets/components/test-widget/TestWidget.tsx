/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { Header } from './Header'
import './style.css'
import { GlowLine } from '../GlowLine'
import { ListContainer } from './ListContainer'

const testWidget = css`
  background-color: black;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`

export const TestWidget: React.FC = () => {
  return (
    <div css={testWidget} className="test-widget glow-text">
      <Header />
      <GlowLine />
      <ListContainer />
    </div>
  )
}
