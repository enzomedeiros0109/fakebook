import PostAuthor from "./post-author"

type Props = {}

export const contacts = [
   {
      name: "Torla",
   },
   {
      name: "Marina",
   },
   {
      name: "Lucas",
   },
   {
      name: "Sofia",
   },
   {
      name: "Andre",
   },
]

const RightIcons = ({ }: Props) => {
   return (
      <div className="flex flex-col gap-2">

         <div className="flex flex-col">
            <p className="text-muted-foreground">
               Sponsored
            </p>

            <div className="flex gap-1">
               <img src="" alt="" />

               <div className="flex flex-col">
                  <h1 className="text-md">Counter-Strike 2 Out Now!</h1>
                  <p className="text-muted-foreground">Try it on playcs2.com</p>
               </div>
            </div>
         </div>

         <div className="flex flex-col">
            <h1 className="text-muted-foreground">Contacts</h1>

            {contacts.map( (contact) => (
               <PostAuthor name={contact.name} />
            ))}
         </div>

      </div>
   )
}

export default RightIcons