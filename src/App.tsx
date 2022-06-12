import React from 'react'
import { CubeScene } from './scenes/CubeScene'
import { contents, SIDE_LENGTH } from './content/contents'
import { LIWidget } from './components/li_widget/LIWidget'
import { GHWidget } from './components/gh_widget/GHWidget'
import { SOWidget } from './components/so_widget/SOWidget'
import { InstaWidget } from './components/insta_widget/InstaWidget'
import { CashWidget } from './components/cash_widget/CashWidget'
import { Face } from './content/types'

const App: React.FC = () => {
  const [currentFace, setCurrentFace] = React.useState<Face | 'none'>('none')

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
    <div className="app">
      <div className="cube-scene-container">
        <CubeScene
          contents={contents}
          sideLength={SIDE_LENGTH}
          setCurrentFace={face => setCurrentFace(face)}
        />
      </div>
      <div className="card-container">
        <CurrentWidget />
      </div>
    </div>
  )
}
export default App
