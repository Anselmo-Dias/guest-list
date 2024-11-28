import { Keyword } from '@prisma/client'

export interface KeywordRepository {
  findAll(): Promise<Keyword[]>
  findByName(name: string): Promise<Keyword | null>
}
