import { useQuery } from "@tanstack/react-query"
import { getUsers } from "@/services/random-user"

export const useUsers = (results = 10) =>
   useQuery({
      queryKey: ["users", results],
      queryFn: () => getUsers(results),
      staleTime: Infinity,
   })
