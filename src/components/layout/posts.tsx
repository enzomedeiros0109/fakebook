import { Ellipsis, FaceSlightlySmiling, Globe, Heart, Image, MessageCircle, Share2, ThumbsUp, User, Video } from "lucide-react"
import { Input } from "../ui/input"
import PostAuthor from "./post-author"

type Props = {}

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
   name: string
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
      name: "Torla",
      postedAt: new Date(Date.now() - 5 * minute).toISOString(),
      title: "Slow afternoon",
      body: "Enjoying a quiet afternoon with a good book.",
      likes: 24,
      comments: 5,
      shares: 2,
   },
   {
      name: "Marina",
      postedAt: new Date(Date.now() - 5 * hour).toISOString(),
      title: "Coffee break",
      body: "Found a new favorite spot for coffee today!",
      image: "https://picsum.photos/seed/fakebook/680/360",
      likes: 38,
      comments: 8,
      shares: 3,
   },
   {
      name: "Lucas",
      postedAt: new Date(Date.now() - 5 * day).toISOString(),
      title: "Outside for a while",
      body: "A little fresh air makes a big difference.",
      likes: 17,
      comments: 2,
      shares: 1,
   },
   {
      name: "Sofia",
      postedAt: new Date(Date.now() - 5 * week).toISOString(),
      title: "Dinner night",
      body: "Made dinner for friends and it was a success.",
      likes: 52,
      comments: 11,
      shares: 4,
   },
   {
      name: "Andre",
      postedAt: new Date(Date.now() - 5 * year).toISOString(),
      title: "Weekend plans",
      body: "Explore somewhere new.",
      likes: 31,
      comments: 6,
      shares: 2,
   },
]

const Posts = ({ }: Props) => {
   return (
      <div className="flex flex-col gap-4">

         {/* Write Post Component*/}
         <div className="flex flex-col gap-3 bg-card rounded-lg p-4 shadow-sm">

            <div className="flex gap-3 pb-3 items-center border-b">
               <div className="flex size-10 shrink-0 items-center justify-center rounded-full border">
                  <User className="size-1/2 text-muted-foreground" />
               </div>
               <Input className="h-10 rounded-full border-none bg-secondary px-4 text-[15px]" placeholder="What's on your mind, Jesse?" />
            </div>

            <div className="flex">
               {writePostIcons.map(({ Icon, name, color }) => (
                  <div key={name} className="flex flex-1 h-9 gap-2 items-center justify-center rounded-md hover:bg-blue-500/10 cursor-pointer">
                     <Icon className={`size-4.5 ${color}`} />
                     <p className="text-sm text-muted-foreground">{name}</p>
                  </div>
               ))}
            </div>
         </div>

         {/* Posts Componentes*/}
         {posts.map((post) => (
            <article key={`${post.name}-${post.postedAt}`} className="flex flex-col bg-card rounded-lg shadow-sm overflow-hidden">

               <div className="flex items-start justify-between px-4 pt-3">
                  <PostAuthor name={post.name}>
                     <div className="flex gap-1 items-center text-xs text-muted-foreground">
                        <time dateTime={post.postedAt}>{formatPostedAt(post.postedAt)}</time>
                        <Globe className="size-3" />
                     </div>
                  </PostAuthor>

                  <button type="button" aria-label="Post options" className="flex size-8 items-center justify-center rounded-full hover:bg-blue-500/10 cursor-pointer">
                     <Ellipsis className="size-5 text-muted-foreground" />
                  </button>
               </div>

               <div className="flex flex-col gap-1.5 px-4 py-3 text-[15px]">
                  <p>{post.title}</p>
                  <p>{post.body}</p>
               </div>

               {post.image && <img className="w-full object-cover" src={post.image} alt="" />}

               <div className="flex justify-between px-4 py-2.5 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                     <ThumbsUp className="size-3.5 text-primary" />
                     <Heart className="size-3.5 text-destructive" />
                     <p>{post.likes}</p>
                  </div>

                  <div className="flex gap-2">
                     <p>{`${post.comments} Comments`}</p>
                     <p>{`${post.shares} Shares`}</p>
                  </div>
               </div>

               <div className="flex mx-4 py-1 border-t">
                  {PostIcons.map(({ Icon, name }) => (
                     <div key={name} className="flex flex-1 h-9 gap-2 items-center justify-center rounded-md hover:bg-blue-500/10 cursor-pointer">
                        <Icon className="size-4.5 text-muted-foreground" />
                        <p className="text-[15px] text-muted-foreground">{name}</p>
                     </div>
                  ))}
               </div>

            </article>
         ))}

      </div>
   )
}

export default Posts
