import { z, defineCollection } from "astro:content";

const aboutCollection = defineCollection({
    type: 'content',
    schema: ({ image }) => z.object({
        label: z.string(),
        img: image()
    })
});
const projectsCollection = defineCollection({
    type: 'content',
    schema: ({ image }) => z.object({
        img: image(),
        href: z.string().url(),
        title: z.string(),
        tags: z.array(z.string()),
        alt: z.string(),
    })
});

export const collections = {
    'projects': projectsCollection,
    'about': aboutCollection
}