import React from 'react'
import { Anchor } from 'react-zdog'
import { Face } from '../../content/types'
import { Facet } from '../facet/Facet'
import { FacetContent } from '../../content/types'

interface FaceVector {
  readonly face: Face
  readonly x: number
  readonly y: number
}
const faceVectors: ReadonlyArray<FaceVector> = [
  { face: 'front', x: 1, y: 1 },
  { face: 'right', x: 1, y: 4 },
  { face: 'back', x: 1, y: 2 },
  { face: 'left', x: 1, y: -4 },
  { face: 'top', x: 4, y: 1 },
  { face: 'bottom', x: -4, y: 1 },
]

export interface FacetAnchorProps {
  readonly font: any
  readonly contents: Record<Face, FacetContent>
}

export const FacetAnchor: React.FC<FacetAnchorProps> = ({ font, contents }) => {
  return (
    <Anchor>
      {Object.values(faceVectors).map((vector, i) => {
        return (
          <Facet
            xRotate={vector.x}
            yRotate={vector.y}
            content={{
              text: contents[vector.face].text,
              font,
              fontSize: contents[vector.face].fontSize,
            }}
            key={`${vector.face}-i`}
          />
        )
      })}
    </Anchor>
  )
}
