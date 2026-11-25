import { useMutation, useQueryClient, useSuspenseQuery } from "@tanstack/react-query"
import { createPost } from "@/services/json-placeholder"
import { CURRENT_USER } from "@/lib/current-user"
import type { FeedPost } from "./use-posts"

const createdPostsKey = ["created-posts"]

export const useCreatedPosts = () =>
   useSuspenseQuery({
      queryKey: createdPostsKey,
      queryFn: (): FeedPost[] => [],
      initialData: [],
      staleTime: Infinity,
      gcTime: Infinity,
   })

export const useCreatePost = () => {
   const queryClient = useQueryClient()

   return useMutation({
      mutationFn: (body: string) => createPost({ userId: CURRENT_USER.id, title: "", body }),
      onSuccess: ({ title, body }) =>
         queryClient.setQueryData<FeedPost[]>(createdPostsKey, (posts = []) => [
            {
               id: Date.now(),
               userId: CURRENT_USER.id,
               name: `${CURRENT_USER.firstName} ${CURRENT_USER.lastName}`,
               picture: CURRENT_USER.picture,
               postedAt: new Date().toISOString(),
               title,
               body,
               likes: 0,
               comments: 0,
               shares: 0,
            },
            ...posts,
         ]),
   })
}
