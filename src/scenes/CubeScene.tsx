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

const contents: Record<Face, FacetContent> = {
  front: {
    text: 'front',
    fontSize: 25,
    font: noto,
    color: '#f5e0a3',
    face: 'front',
  },
  right: {
    text: 'right',
    fontSize: 25,
    font: noto,
    color: '#a3a3f5',
    face: 'front',
  },
  back: {
    text: 'back',
    fontSize: 25,
    font: noto,
    color: '#a3e0f5',
    face: 'front',
  },
  left: {
    text: 'left',
    fontSize: 25,
    font: noto,
    color: '#a3f5a3',
    face: 'front',
  },
  top: {
    text: 'top',
    fontSize: 25,
    font: noto,
    color: '#e0a3f5',
    face: 'front',
  },
  bottom: {
    text: 'bottom',
    fontSize: 25,
    font: noto,
    color: '#f5a3a3',
    face: 'front',
  },
}

export const CubeScene: React.FC = () => {
  const colorMap: Record<Face, { color: string }> = {
    front: { color: contents.front.color },
    right: { color: contents.right.color },
    back: { color: contents.back.color },
    left: { color: contents.left.color },
    top: { color: contents.top.color },
    bottom: { color: contents.bottom.color },
  }
  return (
    <Illustration
      // rotate={{ x: (Zdog.TAU * -35) / 360, y: (Zdog.TAU * 1) / 8 }}
      element="canvas"
      dragRotate={true}
    >
      <BoxGroup>
        <>
          <ResumeBox colorMap={colorMap} />
          <FacetAnchor font={font} contents={contents} />
        </>
      </BoxGroup>
    </Illustration>
  )
}
