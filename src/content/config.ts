import { defineCollection, z } from "astro:content";

const paintings = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    year: z.number(),
    medium: z.string(),
    size: z.string(),
    image: z.string(),
    status: z.enum(["available", "sold", "private-collection", "study"]),
    series: z.string().optional(),
    order: z.number().optional(),
  }),
});

export const collections = {
  paintings,
};