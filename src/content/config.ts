import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';

const devblogCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        pubDate: z.string(),
        description: z.string(),
        tags: z.array(z.string()),
    })
});

export const collections = {
    'devblog': devblogCollection,
};