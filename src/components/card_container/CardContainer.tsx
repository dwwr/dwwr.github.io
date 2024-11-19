import React from 'react'
import { Face } from '../../content/types'
import { LIWidget } from '../li_widget/LIWidget'
import { GHWidget } from '../gh_widget/GHWidget'
import { SOWidget } from '../so_widget/SOWidget'
import { InstaWidget } from '../insta_widget/InstaWidget'
import { CashWidget } from '../cash_widget/CashWidget'

export const CardContainer: React.FC<{ currentFace: Face | 'none' }> = ({
  currentFace,
}) => {
  const widgetMap: Record<Face | 'none', () => React.ReactElement | null> = {
    front: () => <LIWidget />,
    right: () => <GHWidget />,
    back: () => <SOWidget />,
    left: () => <InstaWidget />,
    top: () => <InstaWidget />,
    bottom: () => <CashWidget />,
    none: () => null,
  }

  const CurrentWidget = widgetMap[currentFace]

  return (
    <div className="card-container">
      <CurrentWidget />
    </div>
  )
}
