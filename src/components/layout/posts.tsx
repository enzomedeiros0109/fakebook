import { FaceSlightlySmiling, Heart, Image, MessageCircle, Share2, ThumbsUp, User, Video } from "lucide-react"
import { Input } from "../ui/input"
import PostAuthor from "./post-author"

type Props = {}

const writePostIcons = [
   { Icon: Video, name: "Live Video" },
   { Icon: Image, name: "Photo/Video" },
   { Icon: FaceSlightlySmiling, name: "Feeling/Activity" },
]

const PostIcons = [
   { Icon: ThumbsUp, name: "Like" },
   { Icon: MessageCircle, name: "Comment" },
   { Icon: Share2, name: "Share" },
]

type Post = {
   name: string
   postedAt: string
   body: string
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
      body: "Enjoying a quiet afternoon with a good book.",
      likes: 24,
      comments: 5,
      shares: 2,
   },
   {
      name: "Marina",
      postedAt: new Date(Date.now() - 5 * hour).toISOString(),
      body: "Found a new favorite spot for coffee today!",
      likes: 38,
      comments: 8,
      shares: 3,
   },
   {
      name: "Lucas",
      postedAt: new Date(Date.now() - 5 * day).toISOString(),
      body: "A little fresh air makes a big difference.",
      likes: 17,
      comments: 2,
      shares: 1,
   },
   {
      name: "Sofia",
      postedAt: new Date(Date.now() - 5 * week).toISOString(),
      body: "Made dinner for friends and it was a success.",
      likes: 52,
      comments: 11,
      shares: 4,
   },
   {
      name: "Andre",
      postedAt: new Date(Date.now() - 5 * year).toISOString(),
      body: "Weekend plans: explore somewhere new.",
      likes: 31,
      comments: 6,
      shares: 2,
   },
]

const Posts = ({ }: Props) => {
   return (
      <div className="flex flex-col gap-4">


         {/* Write Post Component*/}
         <div className="flex flex-col gap-4 bg-card rounded-md p-3 w-150">

            <div className="flex gap-4 pb-3 items-center border-b">
               <div className="border border-blue-600 p-1 rounded-full ">
                  <User className="text-blue-600" />
               </div>
               <Input className="w-full bg-accent" placeholder="What's on your mind?" />
            </div>

            <div className="flex justify-evenly mb-2">
               {writePostIcons.map(({ Icon, name }) => (
                  <div className="flex gap-2 items-center justify-center p-1 rounded-sm bg-transparent hover:bg-blue-500/10 cursor-pointer">
                     <Icon className={`${Icon === Video ? "text-red-500" : Icon === Image ? "text-green-500" : "text-yellow-500"} size-5`} />
                     <p className="text-sm text-muted-foreground">{name}</p>
                  </div>
               ))}
            </div>
         </div>

         {/* Posts Componentes*/}
         {posts.map((post: Post) => (
            <div className="flex flex-col gap-1 bg-card rounded-md p-2 w-150 shadow-md">

               <PostAuthor name={post.name} iconClassName="size-6">
                  <time className="text-muted-foreground text-sm" dateTime={post.postedAt}>
                     {formatPostedAt(post.postedAt)}
                  </time>
               </PostAuthor>

               <div className="flex flex-col gap-2">
                  <p className="text-sm text-nowrap">
                     {post.body}
                  </p>

                  <div className="flex justify-between">
                     <div className="flex items-center gap-1">
                        <ThumbsUp className="size-3 text-blue-500" />
                        <Heart className="size-3 text-red-500" />
                        <p className="text-xs text-muted-foreground">{post.likes}</p>
                     </div>

                     <div className="flex gap-3 text-sm text-muted-foreground">

                        <p>{`${post.comments} Comments`}</p>
                        <p>{`${post.shares} Shares`}</p>
                     </div>
                  </div>
               </div>

               <div className="flex justify-evenly p-2 border-t">
                  {PostIcons.map(({ Icon, name }) => (
                     <div key={name} className="flex gap-2 p-1 items-center rounded-sm bg-transparent hover:bg-blue-500/10 cursor-pointer">
                        <Icon className="size-4 text-muted-foreground" />
                        <p className="text-muted-foreground">{name}</p>
                     </div>
                  ))}
               </div>

            </div>
         ))}

         

      </div>
   )
}

export default Posts
