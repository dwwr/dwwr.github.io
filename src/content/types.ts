export interface Facet {
  readonly color: string
  readonly content: string
  readonly font: string
  readonly face: Face
}

export type Face = 'front' | 'right' | 'back' | 'left' | 'top' | 'bottom'
