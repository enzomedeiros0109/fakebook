import { Bookmark, Calendar, ChevronDown, CirclePlay, MessageSquare, Newspaper, Store, UsersRound } from "lucide-react"
import PostAuthor from "../post-author"

type Props = {}

const icons = [
   { Icon: Newspaper, name: "News Feed" },
   { Icon: MessageSquare, name: "Messenger" },
   { Icon: UsersRound, name: "Groups" },
   { Icon: Store, name: "Marketplace" },
   { Icon: CirclePlay, name: "Watch" },
   { Icon: Bookmark, name: "Saved" },
   { Icon: Calendar, name: "Events" },
   { Icon: ChevronDown, name: "See More" },
]

const LeftIcons = ({ }: Props) => {
   return (
      <div className="flex flex-col">
         <PostAuthor
            name="Jesse Nichols"
            className="h-11 px-2 rounded-md hover:bg-blue-500/10 cursor-pointer"
            avatarClassName="size-8"
         />

         {icons.map(({ Icon, name }) => (
            <div key={name} className="flex h-11 gap-3 items-center px-2 rounded-md hover:bg-blue-500/10 cursor-pointer">
               <Icon className="size-6 text-primary" />
               <p className="text-[15px]">{name}</p>
            </div>
         ))}

         <p className="mt-2 px-2 text-[15px] text-muted-foreground">Your shortcuts</p>
      </div>
   )
}

export default LeftIcons
