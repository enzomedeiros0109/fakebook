import { useQuery, useQueryClient } from "@tanstack/react-query"
import { getPhotos, getPosts } from "@/services/json-placeholder"
import { shuffle } from "@/lib/utils"
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

export const usePosts = () => {
   const queryClient = useQueryClient()

   return useQuery({
      queryKey: ["posts"],
      staleTime: Infinity,
      queryFn: async (): Promise<FeedPost[]> => {
         const [posts, users] = await Promise.all([
            getPosts(),
            queryClient.ensureQueryData(usersQueryOptions()),
         ])

         const imageIds = posts.filter(({ id }) => id % POST_IMAGE_INTERVAL === 0).map(({ id }) => id)
         const photos = imageIds.length ? await getPhotos({ id: imageIds }) : []

         return shuffle(posts).map(({ id, userId, title, body }, index) => {
            const author = users[userId - 1]

            return {
               id,
               userId,
               name: `${author.firstName} ${author.lastName}`,
               picture: author.picture.thumbnail,
               postedAt: new Date(Date.now() - (index + 1) * 2 * HOUR).toISOString(),
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
