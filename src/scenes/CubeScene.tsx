import Zfont from 'zfont'
import Zdog from 'zdog'
import React from 'react'
import { Illustration } from 'react-zdog'
import noto from '../assets/NotoSans-Regular.ttf'
import { FacetAnchor } from '../modules/facet_anchor/FacetAnchor'
import { BoxGroup } from '../modules/box_group/BoxGroup'
import { ResumeBox } from '../modules/res_box/ResBox'
import { Face, FacetContent } from '../content/types'

Zfont.init(Zdog)
const font = new Zdog.Font({
  src: noto,
})

const content: Record<Face, FacetContent> = {
  front: {
    text: 'front',
    fontSize: 25,
    font: noto,
    color: '',
    face: 'front',
  },
  right: {
    text: 'right',
    fontSize: 25,
    font: noto,
    color: '',
    face: 'front',
  },
  back: {
    text: 'back',
    fontSize: 25,
    font: noto,
    color: '',
    face: 'front',
  },
  left: {
    text: 'left',
    fontSize: 25,
    font: noto,
    color: '',
    face: 'front',
  },
  top: {
    text: 'top',
    fontSize: 25,
    font: noto,
    color: '',
    face: 'front',
  },
  bottom: {
    text: 'bottom',
    fontSize: 25,
    font: noto,
    color: '',
    face: 'front',
  },
}

export const CubeScene: React.FC = () => {
  return (
    <Illustration
      // rotate={{ x: (Zdog.TAU * -35) / 360, y: (Zdog.TAU * 1) / 8 }}
      element="canvas"
      dragRotate={true}
    >
      <BoxGroup>
        <>
          <ResumeBox />
          <FacetAnchor font={font} contents={content} />
        </>
      </BoxGroup>
    </Illustration>
  )
}
