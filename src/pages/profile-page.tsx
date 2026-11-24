import Posts from "@/components/layout/posts"
import Friends from "@/components/layout/profile-page/friends"
import Intro from "@/components/layout/profile-page/intro"
import Photos from "@/components/layout/profile-page/photos"
import { Button } from "@/components/ui/button"
import { usePosts } from "@/hooks/use-posts"
import { useUserPhotos } from "@/hooks/use-user-photos"
import { useUsers } from "@/hooks/use-users"
import { CURRENT_USER, CURRENT_USER_ID } from "@/lib/current-user"
import { MessageCircle, Pen, Plus, PlusCircle } from "lucide-react"
import { useParams } from "react-router"

const ProfilePage = () => {
   const { userId } = useParams()
   const profileUserId = userId ? Number(userId) : CURRENT_USER_ID
   const isOwner = profileUserId === CURRENT_USER_ID

   const { data: users } = useUsers()
   const { data: userPhotos = [] } = useUserPhotos(profileUserId)
   const { data: userPosts = [] } = usePosts(profileUserId)

   const randomUser = users?.[profileUserId - 1]
   const randomUserFriends = (users ?? [])
      .map((user, index) => ({ user, userId: index + 1 }))
      .filter(({ userId }) => userId !== profileUserId)
      .map(({ user, userId }) => ({
         userId,
         name: `${user.firstName} ${user.lastName}`,
         picture: user.picture.large,
         mutualFriends: (userId * profileUserId) % 7 + 1,
      }))

   const profile = isOwner
      ? {
         name: `${CURRENT_USER.firstName} ${CURRENT_USER.lastName}`,
         username: CURRENT_USER.username,
         picture: CURRENT_USER.picture,
         details: CURRENT_USER.details,
         stats: CURRENT_USER.stats,
         friends: CURRENT_USER.friends,
         photos: CURRENT_USER.photos,
      }
      : randomUser && {
         name: `${randomUser.firstName} ${randomUser.lastName}`,
         username: randomUser.username,
         picture: randomUser.picture.large,
         details: { location: Object.values(randomUser.location).join(", "), phone: randomUser.phone },
         stats: { friends: randomUserFriends.length, posts: userPosts.length },
         friends: randomUserFriends,
         photos: userPhotos.map(({ thumbnailUrl }) => thumbnailUrl),
      }

   if (!profile) return null

   return (
      <div>
         <section className="flex flex-col w-full h-125 items-center justify-center bg-card">
            <div className="flex flex-col items-center gap-4">
               <div className="border flex shrink-0 rounded-full bg-muted">
                  <img src={profile.picture} alt={profile.name} className="size-40 rounded-full object-cover"/>
               </div>
               <h1 className="text-center font-bold text-4xl">{profile.name}</h1>

               <p className="text-muted-foreground">{profile.username} · {profile.stats.friends} friends · {profile.stats.posts} posts</p>
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
               <Intro details={{ ...profile.details, username: profile.username }} />
               <Photos photos={profile.photos} />
            </aside>

            <main className="flex flex-col gap-4 min-w-0">
               <Friends friends={profile.friends} total={profile.friends.length} />
               <Posts userId={profileUserId} />
            </main>
         </div>
      </div>
   )
}

export default ProfilePage
