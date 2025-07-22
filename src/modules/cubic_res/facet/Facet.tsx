import React from 'react'
import { Group } from 'react-zdog'
import Zdog from 'zdog'
import { ZText, ZTextProps } from '../ztext/ZText'

export interface FacetProps {
  readonly sideLength: number
  readonly xRotate: number
  readonly yRotate: number
  content: ZTextProps
}

export const Facet: React.FC<FacetProps> = ({ sideLength, xRotate, yRotate, content }) => {
  return (
    <Group rotate={{ x: Zdog.TAU / xRotate, y: Zdog.TAU / yRotate }}>
      <Group translate={{ z: sideLength / 2 }}>
        <ZText
          text={content.text}
          fontSize={content.fontSize}
          font={content.font}
          color={content.color}
          textAlign="center"
          textBaseline="middle"
        />
      </Group>
    </Group>
  )
}
