import { prisma } from '@/lib/prisma'
import { Role } from '@prisma/client'
import { FastifyRequest, FastifyReply } from 'fastify'

export function VerifyUserRole(roleToVerify: Role) {
  return async (request: FastifyRequest, reply: FastifyReply) => {
    const keyword = await prisma.keyword.findUnique({
      where: {
        id: request.user.keyId,
      },
    })

    if (keyword?.type !== roleToVerify) {
      return reply.status(401).send({ message: 'Unauthorized' })
    }
  }
}
