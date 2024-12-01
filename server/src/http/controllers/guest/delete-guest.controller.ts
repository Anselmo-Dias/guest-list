import { PrismaUsersRepository } from '@/repositories/prisma/prisma-users.repository'
import { ResourceNotFound } from '@/services/errors/resource-not-found.error'
import { DeleteGuestService } from '@/services/guest/delete-guest.service'
import { FastifyReply, FastifyRequest } from 'fastify'
import z from 'zod'

export async function DeleteGuest(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  try {
    const paramsSchema = z.object({
      id: z.string(),
    })

    const body = paramsSchema.parse(request.params)

    const usersRepository = new PrismaUsersRepository()
    const deleteGuestService = new DeleteGuestService(usersRepository)

    await deleteGuestService.execute({ id: body.id })

    return reply.status(201).send()
  } catch (error) {
    if (error instanceof ResourceNotFound) {
      return reply.status(404).send({ message: error.message })
    }

    throw error
  }
}
