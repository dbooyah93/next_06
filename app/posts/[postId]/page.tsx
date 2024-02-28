import getSortedPosts from '@/cache/getSortedPosts';
import { notFound } from "next/navigation"



export default async function Post ({ params }: { params: { postId: string }}) {
    const posts = getSortedPosts() // deduped because of caching from freact
    const { postId } = params

    if (!posts.find( post => post.id === postId)){
        // return is not required
        notFound();
    }

    return (
        <div>page</div>
    )
}