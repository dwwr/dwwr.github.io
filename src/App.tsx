import React from 'react'
import { CubeScene } from './scenes/CubeScene'
import { contents, SIDE_LENGTH } from './content/contents'
import { LIWidget } from './components/li_widget/LIWidget'
import { GHWidget } from './components/gh_widget/GHWidget'

const App: React.FC = () => {
  return (
    <div className="app">
      <div className="cube-scene-container">
        <CubeScene contents={contents} sideLength={SIDE_LENGTH} />
      </div>
      <div className="card-container">
        <LIWidget />
        <GHWidget />
      </div>
    </div>
  )
}
export default App
