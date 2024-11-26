import z from 'zod'
import 'dotenv/config'

const envSchema = z.object({
  PORT: z.coerce.number(),
  NODE_ENV: z.enum(['dev', 'production']),
  MYSQL_USERNAME: z.string(),
  MYSQL_ROOT_PASSWORD: z.string(),
  MYSQL_DATABASE: z.string(),

  JWT_SECRET: z.string(),
})

export const env = envSchema.parse(process.env)
