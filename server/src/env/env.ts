import z from 'zod'
import 'dotenv/config'

const envSchema = z.object({
  PORT: z.coerce.number(),
  NODE_ENV: z.enum(['dev', 'production']),
})

export const env = envSchema.parse(process.env)
