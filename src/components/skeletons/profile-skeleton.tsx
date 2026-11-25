import { Skeleton } from "@/components/ui/skeleton"
import PhotosSkeleton from "./photos-skeleton"
import PostsSkeleton from "./posts-skeleton"

const ProfileSkeleton = () => (
   <div>
      <section className="flex flex-col w-full h-125 items-center justify-center gap-4 bg-card">
         <Skeleton className="size-40 rounded-full" />
         <Skeleton className="h-10 w-64" />
         <Skeleton className="h-5 w-56" />
         <div className="flex flex-col md:flex-row gap-1 mt-4">
            <Skeleton className="h-9 w-50 rounded-md" />
            <Skeleton className="h-9 w-50 rounded-md" />
         </div>
      </section>

      <div className="mx-auto grid max-w-316 gap-4 p-4 lg:grid-cols-[25rem_1fr] lg:items-start">
         <aside className="flex flex-col gap-4">
            <div className="flex flex-col p-4 gap-3 bg-card rounded-lg shadow-sm">
               <Skeleton className="h-7 w-20" />
               {Array.from({ length: 3 }, (_, index) => (
                  <Skeleton key={index} className="h-4 w-3/4" />
               ))}
            </div>
            <PhotosSkeleton />
         </aside>

         <main className="flex flex-col gap-4 min-w-0">
            <div className="flex flex-col p-4 gap-3 bg-card rounded-lg shadow-sm">
               <Skeleton className="h-6 w-24" />
               <Skeleton className="h-5 w-20" />
               <div className="grid grid-cols-3 gap-3">
                  {Array.from({ length: 6 }, (_, index) => (
                     <Skeleton key={index} className="h-52 rounded-lg" />
                  ))}
               </div>
            </div>
            <PostsSkeleton />
         </main>
      </div>
   </div>
)

export default ProfileSkeleton
