import axios from "axios"
import { usersResponseSchema } from "@/schemas/user-schema"

const randomUserApi = axios.create({ baseURL: "https://randomuser.me/api/" })

export const getUsers = async (results = 10) => {
   const { data } = await randomUserApi.get("", {
      params: { results, seed: "fakebook", inc: "name,location,login,phone,picture" },
   })

   return usersResponseSchema.parse(data).results
}
