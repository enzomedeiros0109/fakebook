import { useState } from "react"
import { Ellipsis, FaceSlightlySmiling, Globe, Heart, Image, MessageCircle, Share2, ThumbsUp, Video } from "lucide-react"
import { Avatar, AvatarImage } from "../ui/avatar"
import { Input } from "../ui/input"
import { CURRENT_USER } from "@/lib/current-user"
import { cn } from "@/lib/utils"
import UserLink from "./user-link"

type Props = {
   userId?: number
}

const writePostIcons = [
   { Icon: Video, name: "Live video", color: "text-destructive" },
   { Icon: Image, name: "Photo/video", color: "text-chart-3" },
   { Icon: FaceSlightlySmiling, name: "Feeling/activity", color: "text-chart-4" },
]

const PostIcons = [
   { Icon: ThumbsUp, name: "Like" },
   { Icon: MessageCircle, name: "Comment" },
   { Icon: Share2, name: "Share" },
]

type Post = {
   userId: number
   name: string
   picture: string
   postedAt: string
   title: string
   body: string
   image?: string
   likes: number
   comments: number
   shares: number
}

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

export const posts: Post[] = [
   {
      userId: CURRENT_USER.id,
      name: `${CURRENT_USER.firstName} ${CURRENT_USER.lastName}`,
      picture: CURRENT_USER.picture,
      postedAt: new Date(Date.now() - 2 * hour).toISOString(),
      title: "Race week",
      body: "Back in Maranello getting ready for the weekend. Let's go!",
      likes: 1840,
      comments: 312,
      shares: 96,
   },
   {
      userId: CURRENT_USER.id,
      name: `${CURRENT_USER.firstName} ${CURRENT_USER.lastName}`,
      picture: CURRENT_USER.picture,
      postedAt: new Date(Date.now() - 3 * day).toISOString(),
      title: "Simulator day",
      body: "Long hours in the sim with the team. Every detail counts.",
      likes: 1205,
      comments: 148,
      shares: 41,
   },
   {
      userId: 2,
      name: "Torla",
      picture: "https://randomuser.me/api/portraits/thumb/women/12.jpg",
      postedAt: new Date(Date.now() - 5 * minute).toISOString(),
      title: "Slow afternoon",
      body: "Enjoying a quiet afternoon with a good book.",
      likes: 24,
      comments: 5,
      shares: 2,
   },
   {
      userId: 3,
      name: "Marina",
      picture: "https://randomuser.me/api/portraits/thumb/women/44.jpg",
      postedAt: new Date(Date.now() - 5 * hour).toISOString(),
      title: "Coffee break",
      body: "Found a new favorite spot for coffee today!",
      image: "https://picsum.photos/seed/fakebook/680/360",
      likes: 38,
      comments: 8,
      shares: 3,
   },
   {
      userId: 4,
      name: "Lucas",
      picture: "https://randomuser.me/api/portraits/thumb/men/32.jpg",
      postedAt: new Date(Date.now() - 5 * day).toISOString(),
      title: "Outside for a while",
      body: "A little fresh air makes a big difference.",
      likes: 17,
      comments: 2,
      shares: 1,
   },
   {
      userId: 5,
      name: "Sofia",
      picture: "https://randomuser.me/api/portraits/thumb/women/68.jpg",
      postedAt: new Date(Date.now() - 5 * week).toISOString(),
      title: "Dinner night",
      body: "Made dinner for friends and it was a success.",
      likes: 52,
      comments: 11,
      shares: 4,
   },
   {
      userId: 6,
      name: "Andre",
      picture: "https://randomuser.me/api/portraits/thumb/men/51.jpg",
      postedAt: new Date(Date.now() - 5 * year).toISOString(),
      title: "Weekend plans",
      body: "Explore somewhere new.",
      likes: 31,
      comments: 6,
      shares: 2,
   },
]

const Posts = ({ userId }: Props) => {
   const [likedPosts, setLikedPosts] = useState<Record<string, boolean>>({})

   const visiblePosts = userId === undefined ? posts : posts.filter((post) => post.userId === userId)

   const handleLike = (postKey: string) =>
      setLikedPosts((previous) => ({ ...previous, [postKey]: !previous[postKey] }))

   return (
      <div className="flex flex-col gap-4">

         {/* Write Post Component*/}
         {userId === undefined ? (
            <div className="flex flex-col gap-3 bg-card rounded-lg p-4 shadow-sm">

               <div className="flex gap-3 pb-3 items-center border-b">
                  <Avatar className="size-10">
                     <AvatarImage src={CURRENT_USER.picture} alt={CURRENT_USER.firstName} />
                  </Avatar>
                  <Input className="h-10 rounded-full border-none bg-secondary px-4 text-[15px]" placeholder={`What's on your mind, ${CURRENT_USER.firstName}?`} />
               </div>

               <div className="flex">
                  {writePostIcons.map(({ Icon, name, color }) => (
                     <div key={name} className="flex flex-1 h-9 gap-2 items-center justify-center rounded-md hover:bg-blue-500/10 cursor-pointer transition-transform active:scale-95">
                        <Icon className={`size-4.5 ${color}`} />
                        <p className="text-sm text-muted-foreground">{name}</p>
                     </div>
                  ))}
               </div>
            </div>
         ) : null}

         {/* Posts Componentes*/}
         {visiblePosts.map((post) => {
            const postKey = `${post.name}-${post.postedAt}`
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

                  {post.image && <img className="w-full object-cover" src={post.image} alt="" />}

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

      </div>
   )
}

export default Posts
