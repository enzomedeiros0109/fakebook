import { Button } from "@/components/ui/button"
import { MessageCircle, Pen, Plus, PlusCircle, User } from "lucide-react"

type Props = {
   isOwner: boolean
}

const Profile = ({ isOwner }: Props) => {

   return (
      <div className="flex flex-col w-full h-100 items-center justify-center bg-card">
         <div className="flex flex-col items-center gap-4">
            <div className="border flex size-40 shrink-0 items-center justify-center rounded-full bg-muted">
               <User className="size-25" />
            </div>
            <h1 className="text-center font-bold text-4xl">Lewis Hamilton</h1>

            <p className="text-muted-foreground">LewisHamilton44 · 106 friends · 400 posts</p>
         </div>

         <div className="mt-4">
            {isOwner ? (
               <div className="flex gap-1 items-center">
                  <Button className="flex items-center gap-1 w-50 rounded-md cursor-pointer">
                     <Plus className="size-4" />
                     <p>Add to Story</p>
                  </Button>

                  <Button className="flex bg-gray-500 items-center gap-1 w-50 rounded-md hover:bg-gray-500/80 cursor-pointer">
                     <Pen className="size-4" />
                     <p>Edit profile</p>
                  </Button>
               </div>
            ) : (
               <div className="flex gap-1 items-center">
                  <Button className="flex items-center gap-1 w-50 rounded-md cursor-pointer">
                     <PlusCircle className="size-4" />
                     <p>Send Friend Request</p>
                  </Button>

                  <Button className="flex bg-gray-500 items-center gap-1 w-50 rounded-md hover:bg-gray-500/80 cursor-pointer">
                     <MessageCircle className="size-4" />
                     <p>Send Message</p>
                  </Button>
               </div>
            )}
         </div>
      </div>
   )
}

export default Profile