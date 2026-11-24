import { queryOptions, useQuery } from "@tanstack/react-query"
import { getUsers } from "@/services/random-user"

export const usersQueryOptions = (results = 10) =>
   queryOptions({
      queryKey: ["users", results],
      queryFn: () => getUsers(results),
      staleTime: Infinity,
   })

export const useUsers = (results = 10) => useQuery(usersQueryOptions(results))
