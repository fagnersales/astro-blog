import { z, defineCollection } from 'astro:content'

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.date(),
    draft: z.boolean(),
    author: z.enum(['Fagner Sales']),
    imageMetaUrl: z.string().url().optional(), 
    tags: z.array(z.string())
  })
})

export const collections = {
  blog
}