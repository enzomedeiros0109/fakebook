import type { ReactNode } from "react"
import { User } from "lucide-react"
import { cn } from "cn"

type PostAuthorProps = {
   name: string
   children?: ReactNode
   className?: string
   iconClassName?: string
   nameClassName?: string
}

const PostAuthor = ({
   name,
   children,
   className,
   iconClassName,
   nameClassName,
}: PostAuthorProps) => (
   <div className={cn("flex gap-1 items-center", className)}>
      <div className="p-1 h-fit border rounded-full">
         <User className={cn("size-8", iconClassName)} />
      </div>

      <div className="flex flex-col">
         <p className={nameClassName}>{name}</p>
         {children}
      </div>
   </div>
)

export default PostAuthor
