import z from 'zod'

const envSchema = z.object({
  VITE_API_URL: z.string().optional(),
})

export const env = envSchema.parse(import.meta.env)
