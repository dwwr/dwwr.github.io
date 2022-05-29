import { Box } from 'react-zdog'
import { Face } from '../../../content/types'

export type ColorMap = Record<Face, string>

interface ResumeBoxProps {
  readonly sideLength: number
  readonly colorMap: ColorMap
}

export const ResumeBox: React.FC<ResumeBoxProps> = ({
  sideLength,
  colorMap,
}) => {
  return (
    <Box
      width={sideLength}
      height={sideLength}
      depth={sideLength}
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
