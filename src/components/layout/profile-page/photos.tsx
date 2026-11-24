type Props = {}

const photos = Array.from({ length: 9 }, (_, i) => `https://picsum.photos/seed/photo-${i}/120`)

const Photos = ({}: Props) => {
   return (
      <div className="flex flex-col p-4 gap-2 bg-card rounded-lg items-start shadow-sm">
         <div className="flex w-full justify-between items-center">
            <h1 className="font-bold text-2xl">Photos</h1>
            <p className="text-blue-500 hover:underline cursor-pointer">See all photos</p>
         </div>

         <div className="grid grid-cols-3 gap-x-1 gap-y-2.5">
            {photos.map((src) => (
               <img key={src} className="size-30 rounded-sm object-cover" src={src} alt="Photo" />
            ))}
         </div>
      </div>
   )
}

export default Photos