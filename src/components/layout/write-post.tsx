import type { KeyboardEvent } from "react"
import { useForm, useWatch } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { FaceSlightlySmiling, Image, SendHorizontal, Video } from "lucide-react"
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { Textarea } from "@/components/ui/textarea"
import { useCreatePost } from "@/hooks/use-created-posts"
import { CURRENT_USER } from "@/lib/current-user"
import { writePostSchema, type WritePostForm } from "@/schemas/post-schema"

const writePostIcons = [
   { Icon: Video, name: "Live video", color: "text-destructive" },
   { Icon: Image, name: "Photo/video", color: "text-chart-3" },
   { Icon: FaceSlightlySmiling, name: "Feeling/activity", color: "text-chart-4" },
]

const WritePost = () => {
   const { register, handleSubmit, reset, control } = useForm<WritePostForm>({
      resolver: zodResolver(writePostSchema),
      defaultValues: { body: "" },
   })
   const body = useWatch({ control, name: "body" })
   const { mutate: createPost, isPending } = useCreatePost()

   const handleSend = handleSubmit(({ body }) => createPost(body, { onSuccess: () => reset() }))

   const handleKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => {
      if (event.key !== "Enter" || event.shiftKey || event.nativeEvent.isComposing) return

      event.preventDefault()
      handleSend()
   }

   return (
      <div className="flex flex-col gap-3 bg-card rounded-lg p-4 shadow-sm">

         <div className="flex gap-3 pb-3 items-start border-b">
            <Avatar className="size-10">
               <AvatarImage src={CURRENT_USER.picture} alt={CURRENT_USER.firstName} />
            </Avatar>

            <form onSubmit={handleSend} className="relative flex-1 min-w-0">
               <Textarea
                  {...register("body")}
                  rows={1}
                  onKeyDown={handleKeyDown}
                  placeholder={`What's on your mind, ${CURRENT_USER.firstName}?`}
                  className="min-h-10 rounded-3xl border-none bg-secondary py-2 pl-4 pr-12 text-[15px] md:text-[15px]"
               />

               {body.trim() && (
                  <button
                     type="submit"
                     aria-label="Send post"
                     disabled={isPending}
                     className="absolute right-1.5 bottom-1 flex size-8 items-center justify-center rounded-full text-primary hover:bg-blue-500/10 cursor-pointer transition-transform active:scale-95 disabled:opacity-50"
                  >
                     <SendHorizontal className="size-5" />
                  </button>
               )}
            </form>
         </div>

         <div className="flex">
            {writePostIcons.map(({ Icon, name, color }) => (
               <div key={name} className="flex flex-1 h-9 gap-2 items-center justify-center rounded-md hover:bg-blue-500/10 cursor-pointer transition-transform active:scale-95">
                  <Icon className={`size-4.5 ${color}`} />
                  <p className="text-sm text-muted-foreground">{name}</p>
               </div>
            ))}
         </div>
      </div>
   )
}

export default WritePost
