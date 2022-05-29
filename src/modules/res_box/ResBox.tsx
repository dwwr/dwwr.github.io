import { Box } from 'react-zdog'
import { Face } from '../../content/types'

export type ColorMap = Record<Face, { color: string }>

interface ResumeBoxProps {
  colorMap: ColorMap
}

export const ResumeBox: React.FC<ResumeBoxProps> = ({ colorMap }) => {
  return (
    <Box
      width={300}
      height={300}
      depth={300}
      color={colorMap.back.color}
      stroke={false}
      leftFace={colorMap.left.color}
      rightFace={colorMap.right.color}
      topFace={colorMap.top.color}
      bottomFace={colorMap.bottom.color}
      backFace={colorMap.back.color}
      frontFace={colorMap.front.color}
      updateSort={true}
    />
  )
}
