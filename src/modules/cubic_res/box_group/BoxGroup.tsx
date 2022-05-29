import React from 'react'
import { Group } from 'react-zdog'

export const BoxGroup: React.FC<{ children: React.ReactElement }> = ({
  children,
}) => {
  return <Group updateSort>{children}</Group>
}
