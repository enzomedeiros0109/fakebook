import ProfilePicMockup from "@/assets/mockup/profile-page/profile-pic-mockup.png"
import type { FeedPost } from "@/hooks/use-posts"

export const CURRENT_USER_ID = 0

const HOUR = 60 * 60 * 1000
const name = "Lewis Hamilton"

const posts: FeedPost[] = [
   {
      id: 1,
      userId: CURRENT_USER_ID,
      name,
      picture: ProfilePicMockup,
      postedAt: new Date(Date.now() - 2 * HOUR).toISOString(),
      title: "Race week",
      body: "Back in Maranello getting ready for the weekend. Let's go!",
      likes: 1840,
      comments: 312,
      shares: 96,
   },
   {
      id: 2,
      userId: CURRENT_USER_ID,
      name,
      picture: ProfilePicMockup,
      postedAt: new Date(Date.now() - 72 * HOUR).toISOString(),
      title: "Simulator day",
      body: "Long hours in the sim with the team. Every detail counts.",
      likes: 1205,
      comments: 148,
      shares: 41,
   },
]

export const CURRENT_USER = {
   id: CURRENT_USER_ID,
   firstName: "Lewis",
   lastName: "Hamilton",
   username: "lewishamilton",
   picture: ProfilePicMockup,
   stats: { friends: 106, posts: 400 },
   details: {
      location: "Via Paolo Ferrari, 85, 41121 Modena MO, Itália",
      school: "The John Henry Newman School",
      email: "lewis.hamilton@ferrari.com",
      phone: "+44 20 7946 0144",
      birthday: "January 7, 1985",
      joined: "March 2007",
   },
   friends: [
      { name: "Fernando Alonso", mutualFriends: 3 },
      { name: "Heikki Kovalainen", mutualFriends: 2 },
      { name: "Jenson Button", mutualFriends: 4 },
      { name: "Nico Rosberg", mutualFriends: 5 },
      { name: "Valtteri Bottas", mutualFriends: 4 },
      { name: "George Russell", mutualFriends: 6 },
      { name: "Charles Leclerc", mutualFriends: 3 },
   ].map((friend) => ({ ...friend, picture: `https://picsum.photos/seed/${encodeURIComponent(friend.name)}/320/150` })),
   photos: Array.from({ length: 9 }, (_, i) => `https://picsum.photos/seed/photo-${i}/120`),
   posts,
}
