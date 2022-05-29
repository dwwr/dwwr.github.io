import { Box } from 'react-zdog'
import { Face } from '../../content/types'

export type ColorMap = Record<Face, string>

interface ResumeBoxProps {
  colorMap: ColorMap
}

export const ResumeBox: React.FC<ResumeBoxProps> = ({ colorMap }) => {
  return (
    <Box
      width={300}
      height={300}
      depth={300}
      color={colorMap.back}
      leftFace={colorMap.left}
      rightFace={colorMap.right}
      topFace={colorMap.top}
      bottomFace={colorMap.bottom}
      backFace={colorMap.back}
      frontFace={colorMap.front}
    />
  )
}
