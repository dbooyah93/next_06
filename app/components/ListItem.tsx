import Link from "next/link"
import getFormattedDate from "@/lib/getFormattedDate"

type Post = {
    post: BlogPost
}

export default function ListItem({ post }: Post) {
    const { id, title, date  } = post
    const formattedDate = getFormattedDate(date)

    return (
        <li className="mt-4 text-2xl dark:text-white/90">
            <Link className="underline
                hover:text-black/70
                dark:hover:text-white"
                href={`/post/${id}`}>
                    {/* in this case we built this
                    component specifcally for post */}
                    {title}
            </Link>
            <br />
            <p className="text-sm mt-1">{formattedDate}</p>
        </li>
    )
}
