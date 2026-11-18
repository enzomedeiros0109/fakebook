import Header from "@/components/layout/header"
import LeftIcons from "@/components/layout/left-icons"
import Posts from "@/components/layout/posts"
import RightIcons from "@/components/layout/right-icons"

type Props = {}

const Home = ({ }: Props) => {
   return (
      <div>
         <Header />

         <div className="grid grid-cols-3 ">
            <div className="px-20 py-6 text-nowrap">
               <LeftIcons />
            </div>

            <div className="flex flex-col mt-8">
               <Posts />
            </div>

            <RightIcons />
         </div>
      </div>
   )
}

export default Home