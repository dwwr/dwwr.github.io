import React from 'react'
import { CubeScene } from './scenes/CubeScene'
import { contents, SIDE_LENGTH } from './content/contents'

const App = () => {
  return (
    <div className="app">
      <CubeScene contents={contents} sideLength={SIDE_LENGTH} />
    </div>
  )
}
export default App
