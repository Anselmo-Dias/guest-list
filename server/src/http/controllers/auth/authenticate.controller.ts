import { PrismaKeywordRepository } from '@/repositories/prisma/prisma-keyword.repository'
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
      keyword: z.string(),
    })

    const body = bodySchema.safeParse(request.body)

    if (!body.success) {
      return reply.status(400).send({ message: 'Key word is required' })
    }

    const keyWordRepository = new PrismaKeywordRepository()
    const authenticateService = new AuthenticateService(keyWordRepository)

    const { key } = await authenticateService.execute({
      keyword: body.data.keyword,
    })

    const token = await reply.jwtSign({
      keyId: key.id,
    })

    const refreshToken = await reply.jwtSign(
      {
        keyId: key.id,
      },
      {
        sign: {
          expiresIn: '7d',
        },
      },
    )

    return reply
      .setCookie('refreshToken', refreshToken, {
        path: '/',
        secure: true,
        sameSite: true,
        httpOnly: true,
      })
      .send({ token })
  } catch (error) {
    if (error instanceof UnauthorizedError) {
      return reply.status(401).send({ message: error.message })
    }

    throw error
  }
}
