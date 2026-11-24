import type { ReactNode } from "react"
import { Link } from "react-router"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { CURRENT_USER_ID } from "@/lib/current-user"
import { cn } from "@/lib/utils"

type Props = {
   userId: number
   name: string
   picture: string
   children?: ReactNode
   className?: string
   avatarClassName?: string
   nameClassName?: string
}

const UserLink = ({ userId, name, picture, children, className, avatarClassName, nameClassName }: Props) => (
   <Link
      to={userId === CURRENT_USER_ID ? "/profile" : `/profile/${userId}`}
      className={cn("flex gap-3 items-center", className)}
   >
      <Avatar className={cn("size-10", avatarClassName)}>
         <AvatarImage src={picture} alt={name} />
         <AvatarFallback>{name.split(" ").map((word) => word[0]).join("").slice(0, 2)}</AvatarFallback>
      </Avatar>

      <div className="flex flex-col">
         <p className={cn("text-[15px]", nameClassName)}>{name}</p>
         {children}
      </div>
   </Link>
)

export default UserLink
