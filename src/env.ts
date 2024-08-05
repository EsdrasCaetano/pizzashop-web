import { z } from 'zod'

console.log(import.meta.env) // Verifique se as variáveis estão sendo lidas corretamente

export const envSchema = z.object({
  MODE: z.enum(['production', 'development', 'test']),
  VITE_API_URL: z.string(),
  VITE_ENABLE_API_DELAY: z.string().transform((value) => value === 'true'),
})

// const envSchema = z.object({
//   VITE_API_URL: z.string().url(),
//   VITE_ENABLE_API_DELAY: z
//     .string()
//     .transform((value) => value.toLowerCase() === 'true'),
// })

export const env = envSchema.parse(import.meta.env)
