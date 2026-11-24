import { Skeleton } from "@/components/ui/skeleton"

const ContactsSkeleton = () =>
   Array.from({ length: 10 }, (_, index) => (
      <div key={index} className="flex h-11.5 gap-3 items-center px-1">
         <Skeleton className="size-8 rounded-full bg-foreground/10" />
         <Skeleton className="h-4 w-32 bg-foreground/10" />
      </div>
   ))

export default ContactsSkeleton
