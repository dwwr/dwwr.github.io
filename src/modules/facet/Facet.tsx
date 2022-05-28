import { Group } from 'react-zdog'
import Zdog from 'zdog'
import { ZText } from '../ztext/ZText'

export const Facet = ({ xRotate, yRotate, children, font }) => {
  return (
    <Group
      translate={{ z: 1 }}
      rotate={{ x: Zdog.TAU / xRotate, y: Zdog.TAU / yRotate }}
    >
      <ZText content={children} size={25} font={font} />
    </Group>
  )
}
