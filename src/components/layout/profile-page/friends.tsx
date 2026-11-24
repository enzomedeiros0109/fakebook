type Props = {}

const Friends = ({ }: Props) => {

   const friends = [
      { name: "Fernando Alonso", mutualFriends: 3 },
      { name: "Heikki Kovalainen", mutualFriends: 2 },
      { name: "Jenson Button", mutualFriends: 4 },
      { name: "Nico Rosberg", mutualFriends: 5 },
      { name: "Valtteri Bottas", mutualFriends: 4 },
      { name: "George Russell", mutualFriends: 6 },
      { name: "Charles Leclerc", mutualFriends: 3 },
   ]

   return (
      <div className="flex flex-col p-4 gap-3 bg-card rounded-lg shadow-sm">
         <div className="flex justify-between items-center">
            <div className="flex flex-col">
               <h1 className="font-bold text-xl">Friends</h1>
               <p className="text-base text-muted-foreground">7 friends</p>
            </div>
            <p className="text-base text-primary hover:underline cursor-pointer">See all friends</p>
         </div>

         <div className="grid grid-cols-3 gap-3">
            {friends.slice(0, 6).map(({ name, mutualFriends }) => (
               <div key={name} className="flex flex-col rounded-lg bg-secondary overflow-hidden">
                  <img className="h-37.5 w-full border border-foreground/50 rounded-t-lg object-cover" src={`https://picsum.photos/seed/${encodeURIComponent(name)}/320/150`} alt="Friend photo" />
                  <div className="flex flex-col px-2.5 py-2">
                     <h3 className="text-base">{name}</h3>
                     <p className="text-sm text-muted-foreground">{mutualFriends} mutual friends</p>
                  </div>
               </div>
            ))}
         </div>
      </div>
   )
}

export default Friends