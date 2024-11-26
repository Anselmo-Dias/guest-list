import { User } from '@prisma/client'

interface IBond {
  name: string
  age?: number
  bond: string
}

export interface ICreate {
  name: string
  age?: number
  message?: string
  bond?: IBond[]
}

export interface UsersRepository {
  create(data: ICreate): Promise<User>
  listAll(): Promise<User[]>
}
