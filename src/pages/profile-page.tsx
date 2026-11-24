import Posts from "@/components/layout/posts"
import Friends from "@/components/layout/profile-page/friends"
import Intro from "@/components/layout/profile-page/intro"
import Photos from "@/components/layout/profile-page/photos"
import { Button } from "@/components/ui/button"
import { MessageCircle, Pen, Plus, PlusCircle } from "lucide-react"
import ProfilePicMockup from '../assets/mockup/profile-pic-mockup.png'

type Props = {
   isOwner: boolean
}

const Profile = ({ isOwner }: Props) => {

   return (
      <div>
         <section className="flex flex-col w-full h-125 items-center justify-center bg-card">
            <div className="flex flex-col items-center gap-4">
               <div className="border flex shrink-0 rounded-full bg-muted">
                  <img src={ProfilePicMockup} alt="Profile Picture" className="size-40 rounded-full"/>
               </div>
               <h1 className="text-center font-bold text-4xl">Lewis Hamilton</h1>

               <p className="text-muted-foreground">lewishamilton · 106 friends · 400 posts</p>
            </div>

            <div className="mt-4">
               {isOwner ? (
                  <div className="flex flex-col md:flex-row gap-1 items-center">
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
                  <div className="flex flex-col md:flex-row gap-1 items-center">
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
         </section>

         <div className="mx-auto grid max-w-316 gap-4 p-4 lg:grid-cols-[25rem_1fr] lg:items-start">
            <aside className="flex flex-col gap-4">
               <Intro />
               <Photos />
            </aside>

            <main className="flex flex-col gap-4 min-w-0">
               <Friends />
               <Posts userId={1} />
            </main>
         </div>
      </div>
   )
}

export default Profile
