import { Contents } from './types'
import Zfont from 'zfont'
import Zdog from 'zdog'
import '../assets/fonts'
import NotoSans from '../assets/NotoSans-Regular.ttf'

Zfont.init(Zdog)
const font: Zdog.Font = new Zdog.Font({
  src: NotoSans
})

export const SIDE_LENGTH = window.innerWidth < 400 ? 150 : 300

const fontSize = window.innerWidth < 400 ? 22 : 40

// 'multifaceted'
export const contents: Contents = {
  front: {
    text: 'In \nDepth \nExperience',
    fontSize,
    font,
    color: '#f5e0a3',
    face: 'front'
  },
  right: {
    text: 'Contributions \nIn \nVolume',
    fontSize,
    font,
    color: '#a3a3f5',
    face: 'front'
  },
  back: {
    text: 'Expertise \nIn \nBackend',
    fontSize,
    font,
    color: '#a3e0f5',
    face: 'front'
  },
  left: {
    text: 'Dimensions \nOf \nCreativity',
    fontSize,
    font,
    color: '#a3f5a3',
    face: 'front'
  },
  top: {
    text: 'Top \nTier \nEngineering',
    fontSize,
    font,
    color: '#e0a3f5',
    face: 'front'
  },
  bottom: {
    text: 'Bottom \nLine \nOriented',
    fontSize,
    font,
    color: '#f5a3a3',
    face: 'front'
  }
}
