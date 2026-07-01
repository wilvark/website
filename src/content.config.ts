import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const paintings = defineCollection({
  loader: glob({
    pattern: '**/*.md',
    base: './src/content/paintings',
  }),
  schema: z.object({
    title: z.string(),
    year: z.number(),
    medium: z.string(),
    size: z.string(),
    series: z.string().optional(),
    season: z.string().optional(),
    status: z
      .enum(['Available', 'Sold', 'Private collection', 'In progress'])
      .optional(),
    image: z.string(),
    imageAlt: z.string(),
    featured: z.boolean().default(false),
    order: z.number().default(999),
  }),
});

export const collections = {
  paintings,
};