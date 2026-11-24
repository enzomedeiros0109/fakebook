import { useQuery } from "@tanstack/react-query"
import { getComments } from "@/services/json-placeholder"

export const useComments = (postId: number) =>
   useQuery({
      queryKey: ["comments", postId],
      queryFn: () => getComments(postId),
   })
