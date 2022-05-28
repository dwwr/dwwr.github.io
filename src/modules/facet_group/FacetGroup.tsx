import { Group, Anchor } from 'react-zdog'
import Zdog from 'zdog'
import { Facet } from '../facet/Facet'
import { ZText } from '../ztext/ZText'

const faceVectors = {
  front: { x: 1, y: 1 },
  left: { x: 1, y: 4 },
  back: { x: 1, y: 2 },
  right: { x: 1, y: -4 },
  top: { x: 4, y: 1 },
  bottom: { x: -4, y: 1 },
}

export const FacetGroup = ({ font, children }) => {
  return (
    <Anchor>
      {Object.values(faceVectors).map((vector, i) => {
        return (
          <Facet xRotate={vector.x} yRotate={vector.y} font={font}>
            {children[i]}
          </Facet>
        )
      })}
    </Anchor>
  )
}
