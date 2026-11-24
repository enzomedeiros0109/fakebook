import { Suspense } from "react"
import LeftIcons from "@/components/layout/home-page/left-icons"
import Posts from "@/components/layout/posts"
import RightIcons from "@/components/layout/home-page/right-icons"
import WritePost from "@/components/layout/write-post"
import PostsSkeleton from "@/components/skeletons/posts-skeleton"

type Props = {}

const HomePage = ({ }: Props) => {
   return (
      <div>

         <div className="mx-auto grid max-w-316 gap-4 px-4 py-4 lg:grid-cols-[15.5rem_1fr] xl:grid-cols-[15.5rem_1fr_18.75rem]">
            <aside className="hidden lg:block">
               <LeftIcons />
            </aside>

            <main className="flex flex-col gap-4 min-w-0">
               <WritePost />
               <Suspense fallback={<PostsSkeleton />}>
                  <Posts />
               </Suspense>
            </main>

            <aside className="hidden xl:block">
               <RightIcons />
            </aside>
         </div>
      </div>
   )
}

export default HomePage
