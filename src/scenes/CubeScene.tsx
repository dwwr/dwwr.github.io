import React from 'react'
import { Illustration } from 'react-zdog'
import Zdog from 'zdog'
import { FacetAnchor } from '../modules/cubic_res/facet_anchor/FacetAnchor'
import { BoxGroup } from '../modules/cubic_res/box_group/BoxGroup'
import { ResumeBox } from '../modules/cubic_res/res_box/ResBox'
import { Contents, Face } from '../content/types'

export interface CubeSceneProps {
  contents: Contents
  sideLength: number
  rotate?: boolean
}

// const rgbToHex = (r: number, g: number, b: number) => {
//   if (r > 255 || g > 255 || b > 255) throw 'Invalid color component'
//   return ((r << 16) | (g << 8) | b).toString(16)
// }

export const CubeScene: React.FC<CubeSceneProps> = ({ contents, sideLength, rotate }) => {
  const colorMap: Record<Face, string> = {
    front: contents.front.color,
    right: contents.right.color,
    back: contents.back.color,
    left: contents.left.color,
    top: contents.top.color,
    bottom: contents.bottom.color
  }

  // const backwardColorMap: Record<string, string> = Object.fromEntries(
  //   Object.entries(colorMap).map(([key, value]) => [value, key])
  // )

  // const getClickedColor = React.useCallback(() => {
  //   const canvas = document.getElementsByTagName('canvas')[0]
  //   canvas?.addEventListener(
  //     'click',
  //     (e) => {
  //       const rect = canvas.getBoundingClientRect()
  //       const x = ((e.clientX - rect.left) / (rect.right - rect.left)) * canvas.width
  //       const y = ((e.clientY - rect.top) / (rect.bottom - rect.top)) * canvas.height
  //       var c = canvas.getContext('2d')
  //       var p = c!.getImageData(x, y, 1, 1).data

  //       // var hex = '#' + ('000000' + rgbToHex(p[0], p[1], p[2])).slice(-6)
  //       // console.log(`%c${getClickedFace(hex)}`, `color: ${hex}`)
  //     },
  //     { once: true }
  //   )
  // }, [])

  // const getClickedFace = (hex: string) => {
  //   return backwardColorMap[hex]
  // }

  return (
    <Illustration
      rotate={{ x: (Zdog.TAU * -35) / 360, y: (Zdog.TAU * 1) / 8 }}
      element="canvas"
      dragRotate={true}
      // onDragStart={getClickedColor}
      onDragEnd={() => {
        const canvas = document.getElementsByTagName('canvas')[0]
        canvas.onclick = null
      }}
    >
      <BoxGroup rotate={rotate}>
        <ResumeBox sideLength={sideLength} colorMap={colorMap} />
        <FacetAnchor sideLength={sideLength} contents={contents} />
      </BoxGroup>
    </Illustration>
  )
}
