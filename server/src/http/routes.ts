import { FastifyInstance } from 'fastify'
import { RegisterGuest } from './controllers/guest/register-guest.controller'
import { ListAllGuest } from './controllers/guest/list-all-guest.controller'
import { Authenticate } from './controllers/auth/authenticate.controller'
import { VerifyJWT } from '@/middleware/verify-jwt.middleware'
import { RefreshToken } from './controllers/auth/refresh.controller'
import { VerifyUserRole } from '@/middleware/verify-user-role.middleware'

export async function appRoutes(app: FastifyInstance) {
  app.post('/sign-in', Authenticate)

  app.patch('/token/refresh', RefreshToken)

  app.post('/guest', { onRequest: [VerifyJWT] }, RegisterGuest)
  app.get(
    '/guest',
    { onRequest: [VerifyJWT, await VerifyUserRole('ADMIN')] },
    ListAllGuest,
  )
}
