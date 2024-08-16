import { CiEdit } from "react-icons/ci";
import { MdOutlineDelete } from "react-icons/md";

function PostList({ post }) {
    return (
        // <>
        <div className="grid grid-cols-[1.5fr_2fr_3fr_1fr] bg-white px-2 py-3 border">
            <img src={post?.imgUrl} alt="post" className="w-12" />
            <div>{post?.title}</div>
            <div>{post?.content}</div>
            <div className="flex items-center gap-4">
                <CiEdit size="1.5em" color="#383C6C" />
                <MdOutlineDelete size="1.5em" color="#383C6C" />
            </div>
        </div>
        // </>
    )
}

export default PostList
