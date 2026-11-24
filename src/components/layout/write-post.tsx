import { FaceSlightlySmiling, Image, Video } from "lucide-react"
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { CURRENT_USER } from "@/lib/current-user"

const writePostIcons = [
   { Icon: Video, name: "Live video", color: "text-destructive" },
   { Icon: Image, name: "Photo/video", color: "text-chart-3" },
   { Icon: FaceSlightlySmiling, name: "Feeling/activity", color: "text-chart-4" },
]

const WritePost = () => (
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
)

export default WritePost
