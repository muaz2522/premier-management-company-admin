import { useState } from "react";
import { MdDelete,MdModeEdit } from "react-icons/md";
import { BsFilePost } from "react-icons/bs";
import DeletePostModal from "./DeletePostModal";
import EditPostModal from "./EditPostModal";

function PostList({ post } ) {
    const [isEditPost, setIsEditPost] = useState(false);
    const [isDeletePost, setIsDeletePost] = useState(false);
    console.log("post", post)
    return (
        <>
            <div className="grid grid-cols-[1.5fr_2fr_3fr_1fr]  text-xl place-content-center bg-white px-2 py-3 h-20 border">
                {post?.imgUrl?<img src={post?.imgUrl} alt="post" className="w-12 h-8" />:<BsFilePost size={"1.4em"}/>}
                <div className="text-xs mt-2 font-semibold">{post?.title}</div>
                <div className="text-xs">{post?.content}</div>
                <div className="flex items-center gap-4">
                    <div className="cursor-pointer"><MdModeEdit size="1.3em" color="#383C6C" onClick={()=>setIsEditPost(true)} /></div>
                    <div className="cursor-pointer" onClick={() => setIsDeletePost(true)}> <MdDelete size="1.3em" className="text-red-400" /></div>
                </div>
            </div>
            {isDeletePost ? <DeletePostModal postId={post.id} setIsDeletePost={setIsDeletePost} /> : ""}
            {isEditPost ? <EditPostModal isEditPost={isEditPost} setIsEditPost={setIsEditPost} post={post} />:""}
        </>
    )
}

export default PostList
