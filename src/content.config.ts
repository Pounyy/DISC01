import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string(),
    image: z.string().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

const jeux = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/jeux' }),
  schema: z.object({
    title: z.string(),
    image: z.string(),
    link: z.url(),
    platform: z.string(),
    year: z.number().int().optional(),
    category: z.enum(['ps1', 'favorite']),
  }),
});

export const collections = { blog, jeux };
