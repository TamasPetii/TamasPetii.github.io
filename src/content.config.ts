import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const devblog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/devblog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.string(),
    tags: z.array(z.string()),
  }),
});

export const collections = { devblog };