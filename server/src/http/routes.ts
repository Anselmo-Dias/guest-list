import { FastifyInstance } from 'fastify'
import { RegisterGuest } from './controllers/register-guest.controller'

export async function appRoutes(app: FastifyInstance) {
  app.post('/guest', RegisterGuest)
}
