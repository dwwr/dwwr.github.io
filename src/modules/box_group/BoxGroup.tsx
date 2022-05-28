import { Group } from 'react-zdog'
import { Facet } from '../facet/Facet'
import { ResumeBox } from '../res_cube/ResumeBox'
import { ZText } from '../ztext/ZText'

export const BoxGroup = ({ children }) => {
  return <Group updateSort>{children}</Group>
}
