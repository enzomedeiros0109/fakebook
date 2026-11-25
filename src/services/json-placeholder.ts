import axios from "axios"
import { commentsResponseSchema } from "@/schemas/comment-schema"
import { photosResponseSchema } from "@/schemas/photo-schema"
import { postSchema, postsResponseSchema, type Post } from "@/schemas/post-schema"

const jsonPlaceholderApi = axios.create({
   baseURL: "https://jsonplaceholder.typicode.com",
   paramsSerializer: { indexes: null },
})

export const getPosts = async (userId?: number) => {
   const { data } = await jsonPlaceholderApi.get("/posts", { params: { userId } })

   return postsResponseSchema.parse(data)
}

export const createPost = async (post: Omit<Post, "id">) => {
   const { data } = await jsonPlaceholderApi.post("/posts", post)

   return postSchema.parse(data)
}

export const getComments = async (postId: number) => {
   const { data } = await jsonPlaceholderApi.get("/comments", { params: { postId } })

   return commentsResponseSchema.parse(data)
}

export const getPhotos = async (params: { albumId?: number, id?: number[] }) => {
   const { data } = await jsonPlaceholderApi.get("/photos", { params })

   return photosResponseSchema.parse(data)
}
