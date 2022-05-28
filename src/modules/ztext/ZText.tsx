import { Group, Shape } from 'react-zdog'
import Zdog from 'zdog'
import Zfont from 'zfont'

Zfont.init(Zdog)

export const ZText = ({ content, size, font }) => {
  const text = font.getTextPath(content || '.', size)
  return (
    <div>
      <Group translate={{ z: 1 }}>
        <Shape
          translate={{ x: -150, z: 151 }}
          closed={false}
          path={text}
          stroke={2}
          color="#fff"
          fill
          backface={false}
        />
        <Shape
          translate={{ x: -150, z: Zdog.TAU * 1000 }}
          closed={false}
          path={text}
          stroke={2}
          color="#fff"
          visible={false}
        />
      </Group>
    </div>
  )
}
