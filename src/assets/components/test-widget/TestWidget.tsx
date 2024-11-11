/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { Header } from './Header'
import './style.css'
import { GlowLine } from '../GlowLine'

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
      <div className="scale-numbers">
        <span>-100.0</span>
        <span>+0</span>
        <span>+10.0</span>
        <span>+15.0</span>
      </div>
      <div className="toxicity-scale">
        <div className="scale-info">
          <div className="subject-number">
            <div className="label">SUBJECT</div>
            <div className="number">00</div>
            <div className="sub-label">FIRST.C</div>
          </div>
          <div className="scale-bar">
            <div className="gradient-bar"></div>
            <div className="warnings">
              <span className="caution">CAUTION</span>
              <span className="danger">DANGER</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
