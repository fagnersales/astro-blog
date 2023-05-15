import { z, defineCollection } from 'astro:content'

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    draft: z.boolean(),
    author: z.enum(['Fagner Sales', 'Alice Vieger', 'Felipe Indigo']),
    image: z.object({
      src: z.string(),
      alt: z.string(),
      width: z.number(),
      height: z.number()
    })
  })
})

export const collections = {
  blog
}