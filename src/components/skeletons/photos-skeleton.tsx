import { Skeleton } from "@/components/ui/skeleton"

const PhotosSkeleton = () => (
   <div className="flex flex-col p-4 gap-2 bg-card rounded-lg items-start shadow-sm">
      <div className="flex w-full justify-between items-center">
         <Skeleton className="h-7 w-24" />
         <Skeleton className="h-5 w-24" />
      </div>

      <div className="grid grid-cols-3 gap-x-1 gap-y-2.5">
         {Array.from({ length: 9 }, (_, index) => (
            <Skeleton key={index} className="size-30 rounded-sm" />
         ))}
      </div>
   </div>
)

export default PhotosSkeleton
