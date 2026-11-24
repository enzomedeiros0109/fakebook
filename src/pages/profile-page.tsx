import { Suspense } from "react"
import { useParams } from "react-router"
import PostList from "@/components/layout/post-list"
import Photos from "@/components/layout/profile-page/photos"
import ProfileView from "@/components/layout/profile-page/profile-view"
import UserProfile from "@/components/layout/profile-page/user-profile"
import ProfileSkeleton from "@/components/skeletons/profile-skeleton"
import { CURRENT_USER, CURRENT_USER_ID } from "@/lib/current-user"

const ownerProfile = {
   name: `${CURRENT_USER.firstName} ${CURRENT_USER.lastName}`,
   username: CURRENT_USER.username,
   picture: CURRENT_USER.picture,
   details: CURRENT_USER.details,
   stats: CURRENT_USER.stats,
   friends: CURRENT_USER.friends,
}

const ProfilePage = () => {
   const { userId } = useParams()
   const profileUserId = userId ? Number(userId) : CURRENT_USER_ID

   if (profileUserId === CURRENT_USER_ID) {
      return (
         <ProfileView
            isOwner
            profile={ownerProfile}
            photos={<Photos photos={CURRENT_USER.photos} />}
            posts={<PostList posts={CURRENT_USER.posts} />}
         />
      )
   }

   return (
      <Suspense fallback={<ProfileSkeleton />}>
         <UserProfile userId={profileUserId} />
      </Suspense>
   )
}

export default ProfilePage
