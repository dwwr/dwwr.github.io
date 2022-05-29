import React from 'react'
import { Anchor } from 'react-zdog'
import { Facet } from '../facet/Facet'

const faceVectors = {
  front: { x: 1, y: 1 },
  left: { x: 1, y: 4 },
  back: { x: 1, y: 2 },
  right: { x: 1, y: -4 },
  top: { x: 4, y: 1 },
  bottom: { x: -4, y: 1 },
}

export interface FacetGroupProps {
  readonly font: any
  readonly contents: ReadonlyArray<{ text: string; fontSize: number }>
}

export const FacetGroup: React.FC<FacetGroupProps> = ({ font, contents }) => {
  return (
    <Anchor>
      {Object.values(faceVectors).map((vector, i) => {
        return (
          <Facet
            xRotate={vector.x}
            yRotate={vector.y}
            content={{
              text: contents[i].text,
              font,
              fontSize: contents[i].fontSize,
            }}
          />
        )
      })}
    </Anchor>
  )
}
