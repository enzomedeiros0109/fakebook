import { Ellipsis, Plus, Search, Users, Video } from "lucide-react"
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

const contactActions = [
   { Icon: Video, name: "New video call" },
   { Icon: Search, name: "Search contacts" },
   { Icon: Ellipsis, name: "Contact options" },
]

const RightIcons = ({ }: Props) => {
   return (
      <div className="flex flex-col gap-5">

         <div className="flex flex-col gap-2">
            <h2 className="text-[17px] text-muted-foreground">Sponsored</h2>

            <div className="flex gap-3 items-center">
               <img className="size-27.5 shrink-0 rounded-lg object-cover" src={Sponsor} alt="Sponsor image" />

               <div className="flex flex-col gap-1">
                  <p className="text-sm">Counter-Strike 2 Out Now!</p>
                  <p className="text-xs text-muted-foreground">steam.com</p>
               </div>
            </div>
         </div>

         <div className="flex flex-col gap-1">
            <div className="flex items-center justify-between">
               <h2 className="text-[17px] text-muted-foreground">Contacts</h2>

               <div className="flex gap-1">
                  {contactActions.map(({ Icon, name }) => (
                     <button key={name} type="button" aria-label={name} className="flex size-7 items-center justify-center rounded-full hover:bg-blue-500/10 cursor-pointer">
                        <Icon className="size-4 text-muted-foreground" />
                     </button>
                  ))}
               </div>
            </div>

            <div className="flex flex-col">
               {contacts.map((contact) => (
                  <PostAuthor
                     key={contact.name}
                     name={contact.name}
                     className="h-11.5 px-1 rounded-md hover:bg-blue-500/10 cursor-pointer"
                     avatarClassName="size-8"
                  />
               ))}
            </div>
         </div>

         <div className="flex flex-col gap-1">
            <h2 className="text-[17px] text-muted-foreground">Group conversations</h2>

            <div className="flex flex-col">
               {[...groups.map(({ name }) => ({ Icon: Users, name })), { Icon: Plus, name: "Create new group" }].map(({ Icon, name }) => (
                  <div key={name} className="flex h-11.5 gap-3 items-center px-1 rounded-md hover:bg-blue-500/10 cursor-pointer">
                     <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-muted">
                        <Icon className="size-4" />
                     </div>

                     <p className="text-[15px]">{name}</p>
                  </div>
               ))}
            </div>
         </div>

      </div>
   )
}

export default RightIcons
