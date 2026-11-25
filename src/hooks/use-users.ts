import { queryOptions, useSuspenseQuery } from "@tanstack/react-query"
import { getUsers } from "@/services/random-user"

export const usersQueryOptions = (results = 10) =>
   queryOptions({
      queryKey: ["users", results],
      queryFn: () => getUsers(results),
      staleTime: Infinity,
      retry: 3,
   })

export const useUsers = (results = 10) => useSuspenseQuery(usersQueryOptions(results))
