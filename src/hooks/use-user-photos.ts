import { useSuspenseQuery } from "@tanstack/react-query"
import { getPhotos } from "@/services/json-placeholder"

export const useUserPhotos = (userId: number) =>
   useSuspenseQuery({
      queryKey: ["photos", userId],
      queryFn: () => getPhotos({ albumId: userId }),
   })
