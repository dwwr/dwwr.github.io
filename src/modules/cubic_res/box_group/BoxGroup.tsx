import React from 'react'
import { Group, useZdog, useRender } from 'react-zdog'

export interface BoxGroupProps {
  children: React.ReactNode
  rotate?: boolean
}
export const BoxGroup: React.FC<BoxGroupProps> = ({ children, rotate }) => {
  const { illustration } = useZdog()
  const ref = React.useRef(illustration)
  useRender(() => {
    if (ref.current && rotate) {
      ref.current.rotate.y += 0.01
    }
  })
  return (
    <>
      {children && (
        <Group ref={ref} updateSort>
          {children}
        </Group>
      )}
    </>
  )
}
