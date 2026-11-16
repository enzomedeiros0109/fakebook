import { Input } from "../ui/input"
import { Bell, CirclePlay, Gamepad2, House, MessageCircle, Store, User2, Users } from "lucide-react"

type Props = {}

const centerIcons = [
   { name: "home", Icon: House },
   { name: "people", Icon: Users },
   { name: "videos", Icon: CirclePlay },
   { name: "marketplace", Icon: Store },
   { name: "friends", Icon: Gamepad2 },
]

const endIcons = [
   { name: "chat", Icon: MessageCircle },
   { name: "bell", Icon: Bell },
]

const Header = (props: Props) => {
   return (
      <div className="relative flex bg-header p-2">
         <div className="flex w-full gap-4 items-center justify-between px-2">

            {/* Start of header */}
            <div className="flex gap-2">
               <h1 className="text-white font-bold text-2xl ">fakebook</h1>
               <Input
                  className="border-none bg-white max-w-40"
                  placeholder="Search users..."
               />
            </div>

            {/* Middle of header */}
            <div className="flex justify-between gap-2">
               {centerIcons.map(({ name, Icon }) => (
                  <div key={name} className="flex justify-center p-2 w-15 rounded-sm bg-transparent hover:bg-white/10 cursor-pointer">
                     <Icon className="size-5 text-white" />
                  </div>
               ))}
            </div>

            {/* End of header */}
            <div className="flex items-center gap-1">

               <div className="flex justify-center items-center p-1 rounded-sm bg-transparent hover:bg-white/10 cursor-pointer">
                  <MessageCircle className="size-4 text-white" />
               </div>

               <div className="flex justify-center items-center p-1 rounded-sm bg-transparent hover:bg-white/10 cursor-pointer">
                  <Bell className="size-4 text-white" />
               </div>

               <div className="border p-0.5 rounded-full flex justify-center cursor-pointer">
                  <User2 className="size-4 text-white" />
               </div>

            </div>

         </div>
      </div>
   )
}

export default Header