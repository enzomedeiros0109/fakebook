import PostSkeleton from "./post-skeleton"

const PostsSkeleton = () => Array.from({ length: 3 }, (_, index) => <PostSkeleton key={index} />)

export default PostsSkeleton
