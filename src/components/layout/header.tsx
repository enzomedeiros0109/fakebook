import { Link } from "react-router"
import { Input } from "../ui/input"
import { Bell, CirclePlay, Gamepad2, House, MessageCircle, Search, Store, Users } from "lucide-react"
import { CURRENT_USER } from "@/lib/current-user"
import UserLink from "./user-link"

const centerIcons = [
   { name: "home", Icon: House, to: "/" },
   { name: "people", Icon: Users },
   { name: "videos", Icon: CirclePlay },
   { name: "marketplace", Icon: Store },
   { name: "friends", Icon: Gamepad2 },
]

const Header = () => {
   return (
      <header className="grid grid-cols-[1fr_auto] md:grid-cols-[1fr_auto_1fr] items-center gap-x-4 gap-y-1 bg-header px-4 py-2">

         {/* Start of header */}
         <div className="flex gap-2 items-center min-w-0">
            <h1 className="text-white font-bold text-xl sm:text-2xl">
               <Link to="/">fakebook</Link>
            </h1>
            <Input
               className="hidden md:block border-none bg-white max-w-40"
               placeholder="Search users..."
            />
         </div>

         {/* Middle of header */}
         <nav className="col-span-2 order-last flex justify-around md:col-span-1 md:order-0 md:gap-6">
            {centerIcons.map(({ name, Icon, to }) => {
               const className = "flex flex-1 md:flex-none md:w-15 justify-center p-2 rounded-sm bg-transparent hover:bg-white/10 cursor-pointer transition-transform active:scale-95"

               return to ? (
                  <Link key={name} to={to} aria-label={name} className={className}>
                     <Icon className="size-5 text-white" />
                  </Link>
               ) : (
                  <div key={name} className={className}>
                     <Icon className="size-5 text-white" />
                  </div>
               )
            })}
         </nav>

         {/* End of header */}
         <div className="flex items-center justify-end gap-2">
            <button
               type="button"
               aria-label="Search"
               className="flex md:hidden size-8 cursor-pointer items-center justify-center rounded-sm bg-transparent hover:bg-white/10"
            >
               <Search className="size-4 text-white" />
            </button>

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

            <UserLink
               userId={CURRENT_USER.id}
               picture={CURRENT_USER.picture}
               className="h-11 rounded-md hover:bg-blue-500/10"
               avatarClassName="size-8"
            />
         </div>

      </header>
   )
}

export default Header
