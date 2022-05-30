import React from 'react'
import { Group } from 'react-zdog'

export interface BoxGroupProps {
  children: React.ReactNode
}
export const BoxGroup: React.FC<BoxGroupProps> = ({ children }) => {
  return <>{children && <Group updateSort>{children}</Group>}</>
}
