import React from 'react'
import { Group } from 'react-zdog'
import Zdog from 'zdog'
import { ZText, ZTextProps } from '../ztext/ZText'

export interface FacetProps {
  readonly xRotate: number
  readonly yRotate: number
  content: ZTextProps
}

export const Facet: React.FC<FacetProps> = ({ xRotate, yRotate, content }) => {
  return (
    <Group
      translate={{ z: 1 }}
      rotate={{ x: Zdog.TAU / xRotate, y: Zdog.TAU / yRotate }}
    >
      <ZText
        text={content.text}
        fontSize={content.fontSize}
        font={content.font}
      />
    </Group>
  )
}
