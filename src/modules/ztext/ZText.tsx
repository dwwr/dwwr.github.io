import React from 'react'
import { Group, Shape } from 'react-zdog'
import Zdog from 'zdog'

export interface ZTextProps {
  readonly text: string
  readonly fontSize: number
  readonly font: any
}
export const ZText: React.FC<ZTextProps> = ({ text, fontSize, font }) => {
  const textPath = font.getTextPath(text || '.', fontSize)
  return (
    <div>
      <Group translate={{ z: 1 }}>
        <Shape
          translate={{ x: -150, z: 150 }}
          closed={false}
          path={textPath}
          stroke={0.05}
          color="#fff"
          fill
          backface={false}
        />
        {/* invisible Shape to counter-balance group z-index */}
        <Shape translate={{ x: -150, z: Zdog.TAU * 1000 }} visible={false} />
      </Group>
    </div>
  )
}
