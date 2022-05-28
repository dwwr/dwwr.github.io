// import { TAU, lerp, easeInOut } from 'zdog'
import React, { useRef } from 'react'
import { Illustration, Group, Box } from 'react-zdog'

// const side = [
//   [-1, -1, 1],
//   [-1, 0, 1],
//   [-1, 1, 1],
//   [0, -1, 1],
//   [0, 1, 1],
//   [1, -1, 1],
//   [1, 0, 1],
//   [1, 1, 1],
// ]
// const middle = [
//   [1, 1, 0],
//   [1, -1, 0],
//   [-1, 1, 0],
//   [-1, -1, 0],
// ]
// const frames = [
//   [0, 0, 0],
//   [0, 0, TAU / 4],
//   [-TAU / 4, 0, TAU / 4],
//   [-TAU / 4, 0, TAU / 2],
// ]

// function Dots({ stroke = 2.5, color = 'lightblue', coords, ...props }) {
//   return (
//     <Anchor {...props}>
//       {coords.map(([x, y, z], index) => (
//         <Shape
//           key={index}
//           stroke={stroke}
//           color={color}
//           translate={{ x, y, z }}
//         />
//       ))}
//     </Anchor>
//   )
// }

const BoxGroup = () => {
  // let ticker = 0
  // let cycleCount = 75
  // let turnLimit = frames.length - 1
  let ref = useRef(undefined)
  // useRender(() => {
  //   let progress = ticker++ / cycleCount
  //   let tween = easeInOut(progress % 1, 4)
  //   let turn = Math.floor(progress % turnLimit)
  //   ref.current.rotate.x = lerp(frames[turn][0], frames[turn + 1][0], tween)
  //   ref.current.rotate.y = lerp(frames[turn][1], frames[turn + 1][1], tween)
  //   ref.current.rotate.z = lerp(frames[turn][2], frames[turn + 1][2], tween)
  // })
  return (
    <Group ref={ref} updateSort>
      {/* <Dots coords={side} translate={{ z: 0 }} rotate={{ y: 0 }} />
      <Dots coords={middle} />
      <Dots coords={side} translate={{ z: 0 }} rotate={{ x: TAU / 2 }} /> */}
      <ResumeBox />
    </Group>
  )
}

const ResumeBox = () => {
  return (
    <Box
      width={300}
      height={300}
      depth={300}
      color="#C25"
      stroke={false}
      leftFace="#EA0"
      rightFace="#E62"
      topFace="#ED0"
      bottomFace="#636"
      updateSort={true}
    />
  )
}

export const CubeScene = () => {
  return (
    <Illustration
      // rotate={{ x: (TAU * -35) / 360, y: (TAU * 1) / 8 }}
      element="canvas"
      // zoom={15}
      dragRotate={true}
    >
      <BoxGroup />
    </Illustration>
  )
}
