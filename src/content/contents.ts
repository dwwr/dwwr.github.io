import { Contents } from './types'
import Zfont from 'zfont'
import Zdog from 'zdog'
import '../assets/fonts'
import NotoSans from '../assets/NotoSans-Regular.ttf'

Zfont.init(Zdog)
const noto = new Zdog.Font({
  src: NotoSans,
})

export const contents: Contents = {
  front: {
    text: 'front',
    fontSize: 50,
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

export const SIDE_LENGTH = 300
