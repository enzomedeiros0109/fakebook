import { useState } from "react"
import { Skeleton } from "@/components/ui/skeleton"
import { cn } from "@/lib/utils"

type Props = {
   src: string
   alt: string
   className?: string
}

const SkeletonImage = ({ src, alt, className }: Props) => {
   const [isLoaded, setIsLoaded] = useState(false)

   return (
      <div className={cn("relative shrink-0 overflow-hidden", className)}>
         {!isLoaded && <Skeleton className="absolute inset-0 rounded-none" />}
         <img
            className="size-full object-cover"
            src={src}
            alt={alt}
            onLoad={() => setIsLoaded(true)}
            onError={() => setIsLoaded(true)}
         />
      </div>
   )
}

export default SkeletonImage
