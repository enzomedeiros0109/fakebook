import { AtSign, Cake, Calendar, GraduationCap, Mail, MapPin, Phone } from "lucide-react"

export type IntroDetails = {
   location?: string
   school?: string
   email?: string
   phone?: string
   birthday?: string
   joined?: string
   username: string
}

type Props = {
   details: IntroDetails
}

const introRows = [
   { key: "location", Icon: MapPin, prefix: "" },
   { key: "school", Icon: GraduationCap, prefix: "Studied at " },
   { key: "email", Icon: Mail, prefix: "" },
   { key: "phone", Icon: Phone, prefix: "" },
   { key: "birthday", Icon: Cake, prefix: "Born on " },
   { key: "joined", Icon: Calendar, prefix: "Joined Fakebook on " },
   { key: "username", Icon: AtSign, prefix: "@" },
] as const

const Intro = ({ details }: Props) => {
  return (
    <div className="flex flex-col p-4 gap-2 bg-card rounded-lg items-start shadow-sm">
      <h1 className="font-bold text-2xl">Intro</h1>

      {introRows.filter(({ key }) => details[key]).map(({ key, Icon, prefix }) => (
         <div key={key} className="flex gap-2 items-center">
            <Icon className="size-4"/>
            <p className="text-sm text-nowrap">{`${prefix}${details[key]}`}</p>
         </div>
      ))}

    </div>
  )
}

export default Intro
