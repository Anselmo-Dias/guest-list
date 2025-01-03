import z from 'zod'
import 'dotenv/config'

const envSchema = z.object({
  PORT: z.coerce.number().default(3000),
  NODE_ENV: z.enum(['dev', 'production']).default('production'),
  DATABASE_URL: z.string(),
  JWT_SECRET: z.string(),
})

export const env = envSchema.parse(process.env)
