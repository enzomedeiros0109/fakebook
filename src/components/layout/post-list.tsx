import { useState } from "react"
import { Ellipsis, Globe, Heart, MessageCircle, Share2, ThumbsUp } from "lucide-react"
import type { FeedPost } from "@/hooks/use-posts"
import { cn } from "@/lib/utils"
import SkeletonImage from "../skeletons/skeleton-image"
import UserLink from "./user-link"

type Props = {
   posts: FeedPost[]
}

const PostIcons = [
   { Icon: ThumbsUp, name: "Like" },
   { Icon: MessageCircle, name: "Comment" },
   { Icon: Share2, name: "Share" },
]

const minute = 60 * 1000
const hour = 60 * minute
const day = 24 * hour
const week = 7 * day
const year = 365 * day

const relativeTimeFormatter = new Intl.RelativeTimeFormat("en", { numeric: "always" })

const formatPostedAt = (postedAt: string) => {
   const elapsed = Math.max(0, Date.now() - new Date(postedAt).getTime())

   if (elapsed < minute) return "Just now"

   const units = [
      { unit: "year", milliseconds: year },
      { unit: "week", milliseconds: week },
      { unit: "day", milliseconds: day },
      { unit: "hour", milliseconds: hour },
      { unit: "minute", milliseconds: minute },
   ] as const

   const unit = units.find(({ milliseconds }) => elapsed >= milliseconds)
   if (!unit) return "Just now"

   return relativeTimeFormatter.format(-Math.floor(elapsed / unit.milliseconds), unit.unit)
}

const PAGE_SIZE = 10

const PostList = ({ posts }: Props) => {
   const [likedPosts, setLikedPosts] = useState<Record<string, boolean>>({})
   const [visibleCount, setVisibleCount] = useState(PAGE_SIZE)

   const loadMoreRef = (node: HTMLDivElement | null) => {
      if (!node) return

      const observer = new IntersectionObserver(([entry]) => {
         if (entry.isIntersecting) setVisibleCount((count) => count + PAGE_SIZE)
      }, { rootMargin: "400px" })

      observer.observe(node)
      return () => observer.disconnect()
   }

   const handleLike = (postKey: string) =>
      setLikedPosts((previous) => ({ ...previous, [postKey]: !previous[postKey] }))

   return (
      <>
         {posts.slice(0, visibleCount).map((post) => {
            const postKey = `${post.userId}-${post.id}`
            const isLiked = Boolean(likedPosts[postKey])

            return (
               <article key={postKey} className="flex flex-col bg-card rounded-lg shadow-sm overflow-hidden">

                  <div className="flex items-start justify-between px-4 pt-3">
                     <UserLink userId={post.userId} name={post.name} picture={post.picture}>
                        <div className="flex gap-1 items-center text-xs text-muted-foreground">
                           <time dateTime={post.postedAt}>{formatPostedAt(post.postedAt)}</time>
                           <Globe className="size-3" />
                        </div>
                     </UserLink>

                     <button type="button" aria-label="Post options" className="flex size-8 items-center justify-center rounded-full hover:bg-blue-500/10 cursor-pointer">
                        <Ellipsis className="size-5 text-muted-foreground" />
                     </button>
                  </div>

                  <div className="flex flex-col gap-1.5 px-4 py-3 text-[15px]">
                     <p>{post.title}</p>
                     <p>{post.body}</p>
                  </div>

                  {post.image && <SkeletonImage className="aspect-square w-full" src={post.image} alt={post.title} />}

                  <div className="flex items-center justify-between px-4 py-2.5 text-sm text-muted-foreground">
                     <div className="flex items-center gap-1">
                        <ThumbsUp className="size-3.5 shrink-0 text-primary" />
                        <Heart className="size-3.5 shrink-0 text-destructive" />
                        <span className="leading-none">{post.likes + (isLiked ? 1 : 0)}</span>
                     </div>

                     <div className="flex gap-2">
                        <p>{`${post.comments} Comments`}</p>
                        <p>{`${post.shares} Shares`}</p>
                     </div>
                  </div>

                  <div className="flex mx-4 py-1 border-t">
                     {PostIcons.map(({ Icon, name }) => {
                        const isLikeButton = name === "Like"
                        const isActive = isLikeButton && isLiked

                        return (
                           <button
                              key={name}
                              type="button"
                              aria-pressed={isLikeButton ? isLiked : undefined}
                              onClick={isLikeButton ? () => handleLike(postKey) : undefined}
                              className={cn("flex flex-1 h-9 gap-2 items-center justify-center rounded-md hover:bg-blue-500/10 cursor-pointer text-muted-foreground transition-transform active:scale-95", isActive && "text-primary")}
                           >
                              <Icon className={cn("size-4.5", isActive && "fill-primary")} />
                              <span className="text-[15px]">{name}</span>
                           </button>
                        )
                     })}
                  </div>

               </article>
            )
         })}

         {visibleCount < posts.length && <div ref={loadMoreRef} />}
      </>
   )
}

export default PostList
