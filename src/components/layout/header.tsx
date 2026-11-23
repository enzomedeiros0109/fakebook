import { Input } from "../ui/input"
import { Bell, CirclePlay, Gamepad2, House, MessageCircle, Store, User2, Users } from "lucide-react"

const centerIcons = [
   { name: "home", Icon: House },
   { name: "people", Icon: Users },
   { name: "videos", Icon: CirclePlay },
   { name: "marketplace", Icon: Store },
   { name: "friends", Icon: Gamepad2 },
]

const Header = () => {
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
            <div className="flex justify-between gap-6">
               {centerIcons.map(({ name, Icon }) => (
                  <div key={name} className="flex justify-center p-2 w-15 rounded-sm bg-transparent hover:bg-white/10 cursor-pointer">
                     <Icon className="size-5 text-white" />
                  </div>
               ))}
            </div>

            {/* End of header */}
            <div className="flex items-center gap-2">
               <button
                  type="button"
                  aria-label="Messages"
                  className="flex size-8 cursor-pointer items-center justify-center rounded-sm bg-transparent hover:bg-white/10"
               >
                  <MessageCircle className="size-4 text-white" />
               </button>

               <button
                  type="button"
                  aria-label="Notifications"
                  className="flex size-8 cursor-pointer items-center justify-center rounded-sm bg-transparent hover:bg-white/10"
               >
                  <Bell className="size-4 text-white" />
               </button>

               <button
                  type="button"
                  aria-label="Profile"
                  className="flex size-8 cursor-pointer items-center justify-center rounded-full border hover:bg-white/10"
               >
                  <User2 className="size-4 text-white" />
               </button>
            </div>

         </div>
      </div>
   )
}

export default Header
