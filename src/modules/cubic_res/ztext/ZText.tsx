import React from 'react'
import { Group, Shape } from 'react-zdog'
import Zdog from 'zdog'

export interface ZTextProps {
  readonly text: string
  readonly fontSize: number
  readonly font: any
}
export const ZText: React.FC<ZTextProps> = ({ text, fontSize, font }) => {
  const textPath = font.getTextPath(text, fontSize)
  return (
    <Group>
      <Shape
        closed={false}
        path={textPath}
        stroke={0.05}
        color="#fff"
        fill
        backface={false}
      />
      {/* invisible Shape to counter-balance group z-index */}
      <Shape translate={{ z: Zdog.TAU * 1000 }} visible={false} />
    </Group>
  )
}
