import { FastifyReply, FastifyRequest } from 'fastify'
import z from 'zod'
import { RegisterGuestService } from '../../services/register-guest.service'
import { PrismaUsersRepository } from '@/repositories/prisma/prisma-users.repository'

export async function RegisterGuest(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  try {
    const bodySchema = z.object({
      name: z.string().max(50),
      age: z.number().max(150).optional(),
      message: z.string().max(255).optional(),
      bond: z
        .array(
          z.object({
            name: z.string().max(50),
            age: z.number().max(150).optional(),
            bond: z.string().max(50),
          }),
        )
        .optional(),
    })

    const body = bodySchema.parse(request.body)

    const usersRepository = new PrismaUsersRepository()
    const registerGuestService = new RegisterGuestService(usersRepository)

    await registerGuestService.execute(body)

    return reply.status(201).send()
  } catch (error) {
    reply.status(500).send('Internal server error')
  }
}
