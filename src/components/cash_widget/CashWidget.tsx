import React from 'react'
import cash from '../../assets/cashapp.png'

export const CashWidget: React.FC = () => {
  return (
    <div
      style={{
        borderRadius: 10,
        overflow: 'hidden',
        objectFit: 'contain',
        width: 368,
        height: 209,
      }}
    >
      <a href="https://cash.app/$dwcashmoney" target="_blank">
        <img
          src={cash}
          style={{
            width: 368,
            height: 209,
            objectFit: 'contain',
          }}
          alt="dw-cashapp"
          title="dw-cashapp"
        />
      </a>
    </div>
  )
}
