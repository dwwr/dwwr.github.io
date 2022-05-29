export interface FacetContent {
  readonly color: string
  readonly text: string
  readonly fontSize: number
  readonly font?: any
  readonly face: Face
}

export interface FacetVector {
  readonly face: Face
  readonly x: number
  readonly y: number
}

export type Face = 'front' | 'right' | 'back' | 'left' | 'top' | 'bottom'

export type ColorMap = Record<Face, string>

export type Contents = Record<Face, FacetContent>
