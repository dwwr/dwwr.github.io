export interface FacetContent {
  readonly color: string
  readonly text: string
  readonly fontSize: number
  readonly font?: any
  readonly face: Face
}

export type Face = 'front' | 'right' | 'back' | 'left' | 'top' | 'bottom'
