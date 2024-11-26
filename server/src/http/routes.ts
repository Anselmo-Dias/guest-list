import { FastifyInstance } from 'fastify'
import { RegisterGuest } from './controllers/guest/register-guest.controller'
import { ListAllGuest } from './controllers/guest/list-all-guest.controller'
import { Authenticate } from './controllers/auth/authenticate.controller'
import { VerifyJWT } from '@/middleware/verify-jwt.middleware'

export async function appRoutes(app: FastifyInstance) {
  app.post('/sign-in', Authenticate)

  app.post('/guest', { onRequest: [VerifyJWT] }, RegisterGuest)
  app.get('/guest', { onRequest: [VerifyJWT] }, ListAllGuest)
}
