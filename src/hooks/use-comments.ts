import { useSuspenseQuery } from "@tanstack/react-query"
import { getComments } from "@/services/json-placeholder"

export const useComments = (postId: number) =>
   useSuspenseQuery({
      queryKey: ["comments", postId],
      queryFn: () => getComments(postId),
   })
