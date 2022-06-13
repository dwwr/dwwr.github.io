import React from 'react'
import { CubeScene } from './scenes/CubeScene'
import { contents, SIDE_LENGTH } from './content/contents'
import { Face } from './content/types'
import { CardContainer } from './components/card_container/CardContainer'

const App: React.FC = () => {
  // const [currentFace, setCurrentFace] = React.useState<Face | 'none'>('none')

  return (
    <div className="app">
      <div className="cube-scene-container">
        <CubeScene
          contents={contents}
          sideLength={SIDE_LENGTH}
          // setCurrentFace={face => {}}
        />
      </div>
      {/* <CardContainer currentFace={currentFace} /> */}
    </div>
  )
}
export default App
