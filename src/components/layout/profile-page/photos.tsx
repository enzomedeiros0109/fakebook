import SkeletonImage from "@/components/skeletons/skeleton-image"

type Props = {
   photos: string[]
}

const Photos = ({ photos }: Props) => {
   return (
      <div className="flex flex-col p-4 gap-2 bg-card rounded-lg items-start shadow-sm">
         <div className="flex w-full justify-between items-center">
            <h1 className="font-bold text-2xl">Photos</h1>
            <p className="text-blue-500 hover:underline cursor-pointer">See all photos</p>
         </div>

         <div className="grid grid-cols-3 gap-x-1 gap-y-2.5">
            {photos.slice(0, 9).map((src) => (
               <SkeletonImage key={src} className="size-30 rounded-sm" src={src} alt="Photo" />
            ))}
         </div>
      </div>
   )
}

export default Photos
