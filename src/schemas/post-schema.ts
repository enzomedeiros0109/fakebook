import { z } from "zod"

export const postSchema = z.object({
   userId: z.number(),
   id: z.number(),
   title: z.string(),
   body: z.string(),
})

export const postsResponseSchema = z.array(postSchema)

export const writePostSchema = z.object({
   body: z.string().trim().min(1),
})

export type Post = z.infer<typeof postSchema>

export type WritePostForm = z.infer<typeof writePostSchema>
