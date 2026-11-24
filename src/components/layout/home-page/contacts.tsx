import { useUsers } from "@/hooks/use-users"
import UserLink from "../user-link"

const Contacts = () => {
   const { data: users } = useUsers()

   return users.map((user, index) => (
      <UserLink
         key={user.id}
         userId={index + 1}
         name={`${user.firstName} ${user.lastName}`}
         picture={user.picture.thumbnail}
         className="h-11.5 px-1 rounded-md hover:bg-blue-500/10"
         avatarClassName="size-8"
      />
   ))
}

export default Contacts
