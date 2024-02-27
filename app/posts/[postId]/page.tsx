import { getSortedPostsData } from "@/lib/posts"
import { notFound } from "next/navigation"

export default async function page ({ params }: { params: { postId: string }}) {
    const posts = getSortedPostsData() // deduped!
    const { postId } = params

    if (!posts.find( post => post.id === postId)){
        // return is not required
        return notFound();
    }

    return (
        <div>page</div>
    )
}