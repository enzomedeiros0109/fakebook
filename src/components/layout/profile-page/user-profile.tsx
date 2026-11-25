import { Suspense } from "react"
import PhotosSkeleton from "@/components/skeletons/photos-skeleton"
import { usePosts } from "@/hooks/use-posts"
import { useUsers } from "@/hooks/use-users"
import PostList from "../post-list"
import ProfileView from "./profile-view"
import UserPhotos from "./user-photos"

type Props = {
   userId: number
}

const UserProfile = ({ userId }: Props) => {
   const { data: users } = useUsers()
   const { data: posts } = usePosts()

   const user = users[userId - 1]
   if (!user) return null

   const userPosts = posts.filter((post) => post.userId === userId)
   const friends = users
      .map((friend, index) => ({ friend, friendId: index + 1 }))
      .filter(({ friendId }) => friendId !== userId)
      .map(({ friend, friendId }) => ({
         userId: friendId,
         name: `${friend.firstName} ${friend.lastName}`,
         picture: friend.picture.large,
         mutualFriends: (friendId * userId) % 7 + 1,
      }))

   return (
      <ProfileView
         isOwner={false}
         profile={{
            name: `${user.firstName} ${user.lastName}`,
            username: user.username,
            picture: user.picture.large,
            details: { location: Object.values(user.location).join(", "), phone: user.phone },
            stats: { friends: friends.length, posts: userPosts.length },
            friends,
         }}
         photos={
            <Suspense key={userId} fallback={<PhotosSkeleton />}>
               <UserPhotos userId={userId} />
            </Suspense>
         }
         posts={<PostList posts={userPosts} />}
      />
   )
}

export default UserProfile
