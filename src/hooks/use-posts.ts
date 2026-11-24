import { useQuery, useQueryClient } from "@tanstack/react-query"
import { getPhotos, getPosts } from "@/services/json-placeholder"
import { usersQueryOptions } from "./use-users"

const POST_IMAGE_INTERVAL = 3

export const usePosts = (userId?: number) => {
   const queryClient = useQueryClient()

   return useQuery({
      queryKey: ["posts", userId],
      queryFn: async () => {
         const [posts, users] = await Promise.all([
            getPosts(userId),
            queryClient.ensureQueryData(usersQueryOptions()),
         ])

         const imageIds = posts.filter(({ id }) => id % POST_IMAGE_INTERVAL === 0).map(({ id }) => id)
         const photos = imageIds.length ? await getPhotos({ id: imageIds }) : []

         return posts.map((post) => ({
            ...post,
            author: users[post.userId - 1],
            image: photos.find(({ id }) => id === post.id)?.url,
         }))
      },
   })
}
