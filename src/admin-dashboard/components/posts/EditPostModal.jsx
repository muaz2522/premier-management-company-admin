import PostForm from "./PostForm"

function EditPostModal({setIsEditPost,post,isEditPost}) {
    return (
        <div 
            onClick={() => setIsEditPost(false)} 
            className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black/25"
        >
            <div 
                onClick={(e) => e.stopPropagation()} 
                className="w-1/3 p-8 bg-white shadow-lg rounded-md"
            >
                <PostForm isEditPost={isEditPost} isOpenModal={setIsEditPost} post={post} />
            </div>
        </div>
    )
}

export default EditPostModal
