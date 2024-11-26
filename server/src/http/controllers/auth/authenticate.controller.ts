import { PrismaKeyWordRepository } from '@/repositories/prisma/prisma-key-word.repository'
import { AuthenticateService } from '@/services/auth/authenticate.service'
import { UnauthorizedError } from '@/services/errors/unauthorized.error'
import { FastifyReply, FastifyRequest } from 'fastify'
import z from 'zod'

export async function Authenticate(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  try {
    const bodySchema = z.object({
      keyWord: z.string(),
    })

    const body = bodySchema.safeParse(request.body)

    if (!body.success) {
      return reply.status(400).send({ message: 'Key word is required' })
    }

    const keyWordRepository = new PrismaKeyWordRepository()
    const authenticateService = new AuthenticateService(keyWordRepository)

    const { key } = await authenticateService.execute({
      keyWord: body.data.keyWord,
    })

    const token = await reply.jwtSign({
      keyId: key.id,
    })

    return reply.send({ token })
  } catch (error) {
    if (error instanceof UnauthorizedError) {
      return reply.status(401).send({ message: error.message })
    }

    throw error
  }
}
