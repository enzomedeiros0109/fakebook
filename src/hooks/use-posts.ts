import { useQuery, useQueryClient } from "@tanstack/react-query"
import { getPhotos, getPosts } from "@/services/json-placeholder"
import { CURRENT_USER_ID } from "@/lib/current-user"
import { usersQueryOptions } from "./use-users"

const POST_IMAGE_INTERVAL = 3
const HOUR = 60 * 60 * 1000

export type FeedPost = {
   id: number
   userId: number
   name: string
   picture: string
   postedAt: string
   title: string
   body: string
   image?: string
   likes: number
   comments: number
   shares: number
}

export const usePosts = (userId?: number) => {
   const queryClient = useQueryClient()

   return useQuery({
      queryKey: ["posts", userId],
      enabled: userId !== CURRENT_USER_ID,
      queryFn: async (): Promise<FeedPost[]> => {
         const [posts, users] = await Promise.all([
            getPosts(userId),
            queryClient.ensureQueryData(usersQueryOptions()),
         ])

         const imageIds = posts.filter(({ id }) => id % POST_IMAGE_INTERVAL === 0).map(({ id }) => id)
         const photos = imageIds.length ? await getPhotos({ id: imageIds }) : []

         return posts.map(({ id, userId, title, body }) => {
            const author = users[userId - 1]

            return {
               id,
               userId,
               name: `${author.firstName} ${author.lastName}`,
               picture: author.picture.thumbnail,
               postedAt: new Date(Date.now() - id * 3 * HOUR).toISOString(),
               title,
               body,
               image: photos.find((photo) => photo.id === id)?.url,
               likes: (id * 37) % 480 + 20,
               comments: (id * 13) % 60 + 1,
               shares: (id * 7) % 25,
            }
         })
      },
   })
}
