import { Skeleton } from "@/components/ui/skeleton"

const PostSkeleton = () => (
   <div className="flex flex-col gap-3 bg-card rounded-lg p-4 shadow-sm">
      <div className="flex gap-3 items-center">
         <Skeleton className="size-10 rounded-full" />
         <div className="flex flex-col gap-1.5">
            <Skeleton className="h-4 w-32" />
            <Skeleton className="h-3 w-20" />
         </div>
      </div>

      <div className="flex flex-col gap-2">
         <Skeleton className="h-4 w-2/3" />
         <Skeleton className="h-4 w-full" />
         <Skeleton className="h-4 w-5/6" />
      </div>

      <div className="flex justify-between">
         <Skeleton className="h-3.5 w-12" />
         <Skeleton className="h-3.5 w-36" />
      </div>

      <div className="flex gap-4 pt-3 border-t">
         <Skeleton className="h-8 flex-1" />
         <Skeleton className="h-8 flex-1" />
         <Skeleton className="h-8 flex-1" />
      </div>
   </div>
)

export default PostSkeleton
