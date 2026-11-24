import { useQuery } from "@tanstack/react-query"
import { getPhotos } from "@/services/json-placeholder"
import { CURRENT_USER_ID } from "@/lib/current-user"

export const useUserPhotos = (userId: number) =>
   useQuery({
      queryKey: ["photos", userId],
      queryFn: () => getPhotos({ albumId: userId }),
      enabled: userId !== CURRENT_USER_ID,
   })
