import Zfont from 'zfont'
import Zdog from 'zdog'
import React from 'react'
import { Illustration } from 'react-zdog'
import noto from '../assets/NotoSans-Regular.ttf'
import { FacetGroup } from '../modules/facet_group/FacetGroup'
import { BoxGroup } from '../modules/box_group/BoxGroup'
import { ResumeBox } from '../modules/res_cube/ResumeBox'

Zfont.init(Zdog)
const font = new Zdog.Font({
  src: noto,
})

const chillin = [
  'sweet bbj!!!',
  'sweet bbj!!!',
  'sweet bbj!!!',
  'sweet bbj!!!',
  'sweet bbj!!!',
  'sweet bbj!!!',
]
export const CubeScene: React.FC = () => {
  return (
    <Illustration
      // rotate={{ x: (Zdog.TAU * -35) / 360, y: (Zdog.TAU * 1) / 8 }}
      element="canvas"
      dragRotate={true}
    >
      <BoxGroup>
        <ResumeBox />
        <FacetGroup font={font}>{chillin}</FacetGroup>
      </BoxGroup>
    </Illustration>
  )
}
