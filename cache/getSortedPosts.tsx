import { cache } from "react";
import { getSortedPostsData } from "@/lib/posts";

export default cache(getSortedPostsData);