import { useUserPhotos } from "@/hooks/use-user-photos"
import Photos from "./photos"

type Props = {
   userId: number
}

const UserPhotos = ({ userId }: Props) => {
   const { data: photos } = useUserPhotos(userId)

   return <Photos photos={photos.map(({ thumbnailUrl }) => thumbnailUrl)} />
}

export default UserPhotos
