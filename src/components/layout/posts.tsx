import { usePosts } from "@/hooks/use-posts"
import { CURRENT_USER } from "@/lib/current-user"
import PostList from "./post-list"

const Posts = () => {
   const { data: apiPosts } = usePosts()

   const posts = [...CURRENT_USER.posts, ...apiPosts].toSorted((a, b) => b.postedAt.localeCompare(a.postedAt))

   return <PostList posts={posts} />
}

export default Posts
