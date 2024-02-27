import { getSortedPostsData } from "@/lib/posts"

export default async function page ({ params }: { params: { postId: string }}) {
    const posts = getSortedPostsData() // deduped!
    const { postId } = params

    return (
        <div>page</div>
    )
}