import { Link } from "react-router"

type Friend = {
   name: string
   picture: string
   mutualFriends: number
   userId?: number
}

type Props = {
   friends: Friend[]
   total: number
}

const Friends = ({ friends, total }: Props) => {
   return (
      <div className="flex flex-col p-4 gap-3 bg-card rounded-lg shadow-sm">
         <div className="flex justify-between items-center">
            <div className="flex flex-col">
               <h1 className="font-bold text-xl">Friends</h1>
               <p className="text-base text-muted-foreground">{total} friends</p>
            </div>
            <p className="text-base text-primary hover:underline cursor-pointer">See all friends</p>
         </div>

         <div className="grid grid-cols-3 gap-3">
            {friends.slice(0, 6).map(({ name, picture, mutualFriends, userId }) => {
               const card = (
                  <>
                     <img className="h-37.5 w-full border border-foreground/50 rounded-t-lg object-cover" src={picture} alt={name} />
                     <div className="flex flex-col px-2.5 py-2">
                        <h3 className="text-base">{name}</h3>
                        <p className="text-sm text-muted-foreground">{mutualFriends} mutual friends</p>
                     </div>
                  </>
               )
               const className = "flex flex-col rounded-lg bg-secondary overflow-hidden"

               return userId === undefined ? (
                  <div key={name} className={className}>{card}</div>
               ) : (
                  <Link key={name} to={`/profile/${userId}`} className={className}>{card}</Link>
               )
            })}
         </div>
      </div>
   )
}

export default Friends
