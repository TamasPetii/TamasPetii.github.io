import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const devblog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/devblog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.string(),
    tags: z.array(z.string()),
  }),
});

export const collections = { devblog };