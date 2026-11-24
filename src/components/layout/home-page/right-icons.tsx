import { useState } from "react"
import { Ellipsis, Plus, Search, Video } from "lucide-react"
import UserLink from "../user-link"
import CounterStrike2 from "@/assets/mockup/sponsors/counter-strike-2.png"
import F1TV from "@/assets/mockup/sponsors/f1-tv.png"
import Spotify from "@/assets/mockup/sponsors/spotify.png"
import Duolingo from "@/assets/mockup/sponsors/duolingo.png"
import GTAVI from "@/assets/mockup/sponsors/gta-vi.png"

type Props = {}

const sponsors = [
   {
      image: CounterStrike2,
      title: "Counter-Strike 2 Out Now!",
      label: "steam.com",
      url: "https://store.steampowered.com/app/730/CounterStrike_2/",
   },
   {
      image: F1TV,
      title: "F1 TV Pro: every session, live",
      label: "f1tv.formula1.com",
      url: "https://f1tv.formula1.com/",
   },
   {
      image: Spotify,
      title: "Spotify Premium: 3 months free",
      label: "spotify.com",
      url: "https://open.spotify.com/",
   },
   {
      image: Duolingo,
      title: "Learn Italian in 5 minutes a day",
      label: "duolingo.com",
      url: "duolingo.com",
   },
   {
      image: GTAVI,
      title: "GTA VI Out Now!",
      label: "rockstargames.com",
      url: "https://www.rockstargames.com/VI",
   },
]

export const contacts = [
   { userId: 2, name: "Torla", picture: "https://randomuser.me/api/portraits/thumb/women/12.jpg" },
   { userId: 3, name: "Marina", picture: "https://randomuser.me/api/portraits/thumb/women/44.jpg" },
   { userId: 4, name: "Lucas", picture: "https://randomuser.me/api/portraits/thumb/men/32.jpg" },
   { userId: 5, name: "Sofia", picture: "https://randomuser.me/api/portraits/thumb/women/68.jpg" },
   { userId: 6, name: "Andre", picture: "https://randomuser.me/api/portraits/thumb/men/51.jpg" },
]

export const groups = [
   { name: "Turma de 99", image: "https://picsum.photos/seed/turma-de-99/64" },
   { name: "Turma do Rock", image: "https://picsum.photos/seed/turma-do-rock/64" },
   { name: "Tecnologia e afins", image: "https://picsum.photos/seed/tecnologia/64" },
   { name: "Clube do Livro", image: "https://picsum.photos/seed/clube-do-livro/64" },
   { name: "Fofocas dos famosos", image: "https://picsum.photos/seed/fofocas/64" },
]

const contactActions = [
   { Icon: Video, name: "New video call" },
   { Icon: Search, name: "Search contacts" },
   { Icon: Ellipsis, name: "Contact options" },
]

const RightIcons = ({ }: Props) => {
   const [sponsor] = useState(() => sponsors[Math.floor(Math.random() * sponsors.length)])

   return (
      <div className="flex flex-col gap-5">

         <div className="flex flex-col gap-2">
            <h2 className="text-[17px] text-muted-foreground">Sponsored</h2>

            <div className="flex gap-3 items-center">
               <img className="size-27.5 shrink-0 rounded-lg object-cover" src={sponsor.image} alt={sponsor.title} />

               <div className="flex flex-col gap-1">
                  <p className="text-sm">{sponsor.title}</p>
                  <a href={sponsor.url} target="_blank" rel="noreferrer" className="text-xs text-muted-foreground hover:underline">
                     {sponsor.label}
                  </a>
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
                  <UserLink
                     key={contact.userId}
                     userId={contact.userId}
                     name={contact.name}
                     picture={contact.picture}
                     className="h-11.5 px-1 rounded-md hover:bg-blue-500/10"
                     avatarClassName="size-8"
                  />
               ))}
            </div>
         </div>

         <div className="flex flex-col gap-1">
            <h2 className="text-[17px] text-muted-foreground">Group conversations</h2>

            <div className="flex flex-col">
               {groups.map(({ name, image }) => (
                  <div key={name} className="flex h-11.5 gap-3 items-center px-1 rounded-md hover:bg-blue-500/10 cursor-pointer transition-transform active:scale-95">
                     <img className="size-8 shrink-0 rounded-full border object-cover" src={image} alt={name} />
                     <p className="text-[15px]">{name}</p>
                  </div>
               ))}

               <div className="flex h-11.5 gap-3 items-center px-1 rounded-md hover:bg-blue-500/10 cursor-pointer transition-transform active:scale-95">
                  <div className="border flex size-8 shrink-0 items-center justify-center rounded-full bg-muted">
                     <Plus className="size-4" />
                  </div>
                  <p className="text-[15px]">Create new group</p>
               </div>
            </div>
         </div>

      </div>
   )
}

export default RightIcons
