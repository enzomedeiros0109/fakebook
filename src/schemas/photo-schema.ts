import { z } from "zod"

export const photoSchema = z.object({
   albumId: z.number(),
   id: z.number(),
   title: z.string(),
   url: z.url(),
   thumbnailUrl: z.url(),
})

export const photosResponseSchema = z.array(photoSchema)

export type Photo = z.infer<typeof photoSchema>
