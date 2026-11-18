import { Bookmark, Calendar, ChevronDown, CirclePlay, MessageSquare, Newspaper, Store, User, UsersRound } from "lucide-react"

type Props = {}

const icons = [
   {Icon: Newspaper, name: "News Feed"},
   {Icon: MessageSquare, name: "Messenger"},
   {Icon: UsersRound, name: "Groups"},
   {Icon: Store, name: "Marketplace"},
   {Icon: CirclePlay, name: "Watch"},
   {Icon: Bookmark, name: "Saved"},
   {Icon: Calendar, name: "Events"},
   {Icon: ChevronDown, name: "See More"},
]

const LeftIcons = ({ }: Props) => {
   return (
      <div className="flex flex-col">
         <div className="flex gap-4 items-center p-2 rounded-sm bg-transparent hover:bg-blue-500/10 cursor-pointer">
            <div className="border border-blue-600 p-1 rounded-full">
               <User className="text-blue-600"/>
            </div>
            <p>{`Jesse Nichols`}</p>
         </div>

         <div className="flex flex-col">
            {icons.map( ({Icon, name}) => (
               <div className="flex gap-4 items-center p-2 rounded-sm bg-transparent hover:bg-blue-500/10 cursor-pointer ">
                  <Icon className="text-blue-600"/>
                  <p>{name}</p>
               </div>
            ))}
         </div>

      </div>
   )
}

export default LeftIcons