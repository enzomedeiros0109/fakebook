import { CircleAlert } from "lucide-react"
import { Button } from "@/components/ui/button"

const ErrorPage = () => (
   <main className="flex flex-col items-center gap-4 px-4 py-16 text-center">
      <CircleAlert className="size-16 text-muted-foreground" />
      <h1 className="text-xl font-bold sm:text-2xl">Something went wrong</h1>
      <Button size="lg" className="rounded-md" onClick={() => window.location.reload()}>
         Try again
      </Button>
   </main>
)

export default ErrorPage
