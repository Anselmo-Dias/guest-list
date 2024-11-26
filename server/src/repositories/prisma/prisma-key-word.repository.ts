import { prisma } from '@/lib/prisma'
import { KeyWordRepository } from '../interfaces/key-word-repository'

export class PrismaKeyWordRepository implements KeyWordRepository {
  async findAll() {
    const keys = await prisma.keyWord.findMany()

    return keys
  }
}
