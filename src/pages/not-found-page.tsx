import { Unlink } from "lucide-react"
import { Link } from "react-router"
import { Button } from "@/components/ui/button"

const NotFoundPage = () => (
   <main className="flex flex-col items-center gap-4 px-4 py-16 text-center">
      <Unlink className="size-16 text-muted-foreground" />
      <h1 className="text-xl font-bold sm:text-2xl">This page isn't available</h1>
      <Button render={<Link to="/" />} nativeButton={false} size="lg" className="rounded-md">
         Go to News Feed
      </Button>
   </main>
)

export default NotFoundPage
