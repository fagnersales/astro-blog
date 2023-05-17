import { z, defineCollection } from 'astro:content'

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.date(),
    draft: z.boolean(),
    author: z.enum(['Fagner Sales']),
    image: z.object({
      src: z.string(),
      alt: z.string(),
      width: z.number(),
      height: z.number()
    }).optional(),
    tags: z.array(z.string())
  })
})

export const collections = {
  blog
}