/** @jsxImportSource @emotion/react */

import {
  downTriangleStyle,
  hexagonOffStyle,
  hexagonOnStyle,
  textStyle,
  upTriangleStyle
} from './styles'

export interface HexagonProps {
  isOn: boolean
  outlineOffHexagons: boolean
  text: string
}

export const Hexagon: React.FC<HexagonProps> = ({ isOn, outlineOffHexagons, text }) => {
  console.log('isOn', isOn)
  return (
    <div css={isOn ? hexagonOnStyle : hexagonOffStyle(outlineOffHexagons)}>
      <div css={upTriangleStyle} />
      <span css={textStyle}>{text}</span>
      <div css={downTriangleStyle} />
    </div>
  )
}
