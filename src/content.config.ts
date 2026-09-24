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
    name: z.string(),
    image: z.string().optional(),
    description: z.string(),
    developer: z.string(),
    publisher: z.string(),
    releaseDate: z.coerce.date(),
    platforms: z.array(z.string()).default([]),
    genres: z.array(z.string()).default([]),
    personalRating: z.number().min(0).max(10).optional(),
  }),
});

export const collections = { blog, jeux };
