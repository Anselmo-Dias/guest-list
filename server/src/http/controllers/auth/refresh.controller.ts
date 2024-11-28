import { FastifyReply, FastifyRequest } from 'fastify'

export async function RefreshToken(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  await request.jwtVerify({
    onlyCookie: true,
  })

  const token = await reply.jwtSign({
    keyId: request.user.keyId,
  })

  const refreshToken = await reply.jwtSign(
    {
      keyId: request.user.keyId,
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
}
