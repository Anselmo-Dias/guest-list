import { KeyWord } from '@prisma/client'

export interface KeyWordRepository {
  findAll(): Promise<KeyWord[]>
}
