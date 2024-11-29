import { prisma } from '@/lib/prisma'
import {
  ICreate,
  UsersRepository,
} from '../interfaces/users-repository.interface'
import { User } from '@prisma/client'

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

  async listAll(): Promise<User[]> {
    const users = await prisma.user.findMany({ include: { Bonds: true } })

    const formattedUsers = users.map((user) => ({
      ...user,
      bond: user.Bonds,
      Bonds: undefined,
    }))

    return formattedUsers
  }
}
