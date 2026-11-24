import { z } from "zod"

export const userSchema = z
   .object({
      name: z.object(
         {
            first: z.string(),
            last: z.string()
         }),
      location: z.object({
         street: z.object(
            {
               number: z.number(),
               name: z.string().trim()
            }),
         city: z.string(),
         state: z.string(),
         country: z.string(),
      }),
      login: z.object(
         {
            uuid: z.string(),
            username: z.string()
         }),
      phone: z.string(),
      picture: z.object(
         {
            large: z.url(),
            thumbnail: z.url()
         }),
   })
   .transform(({ name, location, login, phone, picture }) => ({
      id: login.uuid,
      firstName: name.first,
      lastName: name.last,
      username: login.username,
      phone,
      location: {
         street: `${location.street.number} ${location.street.name}`,
         city: location.city,
         state: location.state,
         country: location.country,
      },
      picture,
   }))

export const usersResponseSchema = z.object({ results: z.array(userSchema) })

export type User = z.infer<typeof userSchema>
