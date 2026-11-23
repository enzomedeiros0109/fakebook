import { AtSign, Cake, Calendar, GraduationCap, Mail, MapPin, Phone } from "lucide-react"

type Props = {}

const introInfos = [
   { Icon: MapPin, info: "Via Paolo Ferrari, 85, 41121 Modena MO, Itália" },
   { Icon: GraduationCap, info: "Studied at The John Henry Newman School" },
   { Icon: Mail, info: "lewis.hamilton@ferrari.com" },
   { Icon: Phone, info: "+44 20 7946 0144" },
   { Icon: Cake, info: "Born on January 7, 1985" },
   { Icon: Calendar, info: "Joined Fakebook on March 2007" },
   { Icon: AtSign, info: "@lewishamilton" },
]

const Intro = ({}: Props) => {
  return (
    <div className="flex flex-col p-4 gap-2 bg-card rounded-md items-start">
      <h1 className="font-bold text-2xl">Intro</h1>

      {introInfos.map( ({Icon, info}) => (
         <div className="flex gap-2 items-center">
            <Icon className="size-4"/>
            <p className="text-sm text-nowrap">{info}</p>
         </div>
      ))}

    </div>
  )
}

export default Intro