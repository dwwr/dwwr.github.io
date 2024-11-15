/** @jsxImportSource @emotion/react */
import { useHexagonStateAndFlash } from './useHexagonStateAndFlash'
import {
  containerStyle,
  downTriangleStyle,
  hexagonOffStyle,
  hexagonOnStyle,
  mainStyle,
  pulse,
  textStyle,
  upTriangleStyle
} from './styles'

interface Readout2Props {
  text: string
  numberOfHexagons?: number
  stayOn?: boolean
  stayOff?: boolean
  outlineOffHexagons?: boolean
}
const Readout2: React.FC<Readout2Props> = ({
  numberOfHexagons = 50,
  text,
  stayOn,
  stayOff,
  outlineOffHexagons
}) => {
  const { hexagonStates, flash } = useHexagonStateAndFlash(numberOfHexagons)

  return (
    <div css={[mainStyle, pulse]}>
      <div css={containerStyle}>
        {hexagonStates.map((_, i) => {
          const isOn = stayOn || (!stayOff && (flash || hexagonStates[i] === 1))
          return (
            <div key={i} css={isOn ? hexagonOnStyle : hexagonOffStyle(!!outlineOffHexagons)}>
              <div css={upTriangleStyle} />
              <span css={textStyle}>{text}</span>
              <div css={downTriangleStyle} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Readout2
