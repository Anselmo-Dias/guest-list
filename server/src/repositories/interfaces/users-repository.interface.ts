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
  findById(id: string): Promise<User | null>
  delete(id: string): Promise<void>
}
