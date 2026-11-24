import { z } from "zod"

export const commentSchema = z.object({
   postId: z.number(),
   id: z.number(),
   name: z.string(),
   body: z.string(),
})

export const commentsResponseSchema = z.array(commentSchema)

export type Comment = z.infer<typeof commentSchema>
