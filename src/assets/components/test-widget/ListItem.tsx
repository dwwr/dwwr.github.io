import React from 'react'
import './style.css'

export const ListItem: React.FC = () => {
  return (
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
  )
}
