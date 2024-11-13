import { prisma } from '@/lib/prisma'
import {
  ICreate,
  UsersRepository,
} from '../interfaces/users-repository.interface'

export class PrismaUsersRepository implements UsersRepository {
  async create({ name, age, message, bond }: ICreate) {
    const user = await prisma.user.create({
      data: {
        name,
        age,
        message,

        Bonds: {
          create: bond,
        },
      },
    })

    return user
  }
}
