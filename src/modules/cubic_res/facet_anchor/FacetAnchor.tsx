import React from 'react'
import { Anchor } from 'react-zdog'
import { Facet } from '../facet/Facet'
import { FacetContent, Face } from '../../../content/types'

interface FacetVector {
  readonly face: Face
  readonly x: number
  readonly y: number
}
const facetVectors: ReadonlyArray<FacetVector> = [
  { face: 'front', x: 1, y: 1 },
  { face: 'left', x: 1, y: 4 },
  { face: 'back', x: 1, y: 2 },
  { face: 'right', x: 1, y: -4 },
  { face: 'top', x: 4, y: 1 },
  { face: 'bottom', x: -4, y: 1 },
]

export interface FacetAnchorProps {
  readonly sideLength: number
  readonly font: any
  readonly contents: Record<Face, FacetContent>
}

export const FacetAnchor: React.FC<FacetAnchorProps> = ({
  sideLength,
  font,
  contents,
}) => {
  return (
    <Anchor>
      {Object.values(facetVectors).map((vector, i) => {
        return (
          <Facet
            sideLength={sideLength}
            xRotate={vector.x}
            yRotate={vector.y}
            content={{
              text: contents[vector.face].text,
              font,
              fontSize: contents[vector.face].fontSize,
            }}
            key={`${vector.face}-${i}`}
          />
        )
      })}
    </Anchor>
  )
}
