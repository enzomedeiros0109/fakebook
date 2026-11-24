import { useQuery } from "@tanstack/react-query"
import { getPhotos } from "@/services/json-placeholder"

export const useUserPhotos = (userId: number) =>
   useQuery({
      queryKey: ["photos", userId],
      queryFn: () => getPhotos({ albumId: userId }),
   })
