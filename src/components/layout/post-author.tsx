import type { ReactNode } from "react"
import { User } from "lucide-react"
import { cn } from "@/lib/utils"

type PostAuthorProps = {
   name: string
   children?: ReactNode
   className?: string
   avatarClassName?: string
   nameClassName?: string
}

const PostAuthor = ({
   name,
   children,
   className,
   avatarClassName,
   nameClassName,
}: PostAuthorProps) => (
   <div className={cn("flex gap-3 items-center", className)}>
      <div className={cn("flex size-10 shrink-0 items-center justify-center rounded-full border", avatarClassName)}>
         <User className="size-1/2 text-muted-foreground" />
      </div>

      <div className="flex flex-col">
         <p className={cn("text-[15px]", nameClassName)}>{name}</p>
         {children}
      </div>
   </div>
)

export default PostAuthor
