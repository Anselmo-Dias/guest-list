import { PrismaUsersRepository } from '@/repositories/prisma/prisma-users.repository'
import { ListAllGuestService } from '@/services/guest/list-all-guest.service'
import { FastifyReply, FastifyRequest } from 'fastify'

export async function ListAllGuest(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  try {
    const usersRepository = new PrismaUsersRepository()
    const listAllGuestService = new ListAllGuestService(usersRepository)

    const users = await listAllGuestService.execute()

    return reply.status(200).send({ users })
  } catch (error) {
    throw error
  }
}
