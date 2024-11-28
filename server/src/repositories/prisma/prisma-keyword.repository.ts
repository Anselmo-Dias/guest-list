import { prisma } from '@/lib/prisma'
import { KeywordRepository } from '../interfaces/keyword-repository'

export class PrismaKeywordRepository implements KeywordRepository {
  async findAll() {
    const keys = await prisma.keyword.findMany()

    return keys
  }

  async findByName(name: string) {
    const key = await prisma.keyword.findUnique({
      where: {
        name,
      },
    })

    return key
  }
}
