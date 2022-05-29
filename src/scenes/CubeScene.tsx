import React from 'react'
import { Illustration } from 'react-zdog'
import { FacetAnchor } from '../modules/cubic_res/facet_anchor/FacetAnchor'
import { BoxGroup } from '../modules/cubic_res/box_group/BoxGroup'
import { ResumeBox } from '../modules/cubic_res/res_box/ResBox'
import { Contents, Face } from '../content/types'

export interface CubeSceneProps {
  contents: Contents
  sideLength: number
}

export const CubeScene: React.FC<CubeSceneProps> = ({
  contents,
  sideLength,
}) => {
  const colorMap: Record<Face, string> = {
    front: contents.front.color,
    right: contents.right.color,
    back: contents.back.color,
    left: contents.left.color,
    top: contents.top.color,
    bottom: contents.bottom.color,
  }
  return (
    <Illustration
      // rotate={{ x: (Zdog.TAU * -35) / 360, y: (Zdog.TAU * 1) / 8 }}
      element="canvas"
      dragRotate={true}
    >
      <BoxGroup>
        <>
          <ResumeBox sideLength={sideLength} colorMap={colorMap} />
          <FacetAnchor sideLength={sideLength} contents={contents} />
        </>
      </BoxGroup>
    </Illustration>
  )
}
