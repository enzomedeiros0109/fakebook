import { Plus, Users } from "lucide-react"
import PostAuthor from "./post-author"
import Sponsor from "../../assets/mockup/counter-strike-2.png"

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

export const groups = [
   {
      name: "Turma de 99",
   },
   {
      name: "Turma do Rock",
   },
   {
      name: "Tecnologia e afins",
   },
   {
      name: "Clube do Livro",
   },
   {
      name: "Fofocas dos famosos",
   },
]

const RightIcons = ({ }: Props) => {
   return (
      <div className="flex flex-col gap-2 ">

         <div className="flex flex-col pb-4 border-b-2">
            <p className="text-muted-foreground">
               Sponsored
            </p>

            <div className="flex gap-2 items-center">
               <img className="size-30" src={Sponsor} alt="Sponsor image" />

               <div className="flex flex-col">
                  <h1 className="text-md">Counter-Strike 2 Out Now!</h1>
                  <p className="text-muted-foreground">Try it on steam.com</p>
               </div>
            </div>
         </div>

         <div className="flex flex-col pb-4 border-b-2 gap-2">
            <h1 className="text-muted-foreground">Contacts</h1>

            <div className="flex flex-col gap-4">
               {contacts.map((contact) => (
                  <PostAuthor name={contact.name} iconClassName="size-6" />
               ))}
            </div>
         </div>

         <div className="flex flex-col gap-2">
            <h1 className="text-muted-foreground">Group Conversations</h1>

            <div className="flex flex-col">
               {groups.map((group) => (
                  <div className="flex gap-4 w-60 items-center p-1 rounded-sm bg-transparent hover:bg-blue-500/10 cursor-pointer">
                     <div className="border border-black p-1 rounded-full hover:">
                        <Users className="size-6" />
                     </div>

                     <p>{group.name}</p>
                  </div>
               ))}
            </div>

            <div className="flex gap-4 w-60 items-center p-1 rounded-sm bg-transparent hover:bg-blue-500/10 cursor-pointer">
               <div className="border border-black p-1 rounded-full">
                  <Plus className="size-6" />
               </div>

               <p>Create a new group</p>
            </div>
         </div>

      </div>
   )
}

export default RightIcons