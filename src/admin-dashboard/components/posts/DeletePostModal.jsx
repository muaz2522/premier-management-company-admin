import { deletePost } from "../../../api/getPostDetails"
import Button from "../../../ui/Button"
import { LuAlertTriangle } from "react-icons/lu"

function DeletePostModal({ setIsDeletePost,postId }) {

    function handleDelete(){
        deletePost(postId);
        setIsDeletePost(false);
    }

    return (
        <div onClick={() => setIsDeletePost(false)} className="flex items-center justify-center w-full h-full fixed top-0 left-0 bg-black/25">
            <div className="bg-white shadow-lg py-12 px-8 rounded-md" onClick={(e) => e.stopPropagation()}>
                <div className="flex items-center gap-3">
                    <span><LuAlertTriangle color="rgb(239 68 68)" size={"1.3em"} /></span>
                    <span className="text-2xl font-semibold">Are you sure you want to delete this Post?</span>
                </div>
                <div className="flex justify-center gap-4 mt-16">
                    <Button className="py-2 px-12 bg-slate-100" color={"black"} onClick={()=>setIsDeletePost(false)}>cancel</Button>
                    <Button className="py-2 px-12 bg-red-500" onClick={handleDelete}>Delete</Button>
                </div>
            </div>
        </div>
    )
}

export default DeletePostModal
