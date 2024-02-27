import Link from "next/link"
import getFormattedDate from "@/lib/getFormattedDate"


type Props = {
    post: BlogPost
}

export default function LIstItem({post} : Props) {
    const {id,title, date} = post
    const formattedDate = getFormattedDate('2023-03-14')
    return (
        <li className="mt-4 text-2xl dark:text-white/90">
            <Link className="underline hover:text-black/70 dark:hover:text-white"
            href={`/posts/${id}`}>{title}</Link>
            <br />
            <p className="text-sm mt-1">{formattedDate}</p>
        </li>
    )
}
