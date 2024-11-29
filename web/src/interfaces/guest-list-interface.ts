export interface IBond {
  id: string
  name: string
  age: number | null
  bond: string
}

export interface IGuestList {
  id: string
  name: string
  age: number | null
  message: string
  bond: IBond[]
}
