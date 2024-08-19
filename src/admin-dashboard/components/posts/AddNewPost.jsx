import PostForm from "./PostForm"

function AddNewPost({ setIsNewPost }) {
    return (
        <div 
            onClick={() => setIsNewPost(false)} 
            className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black/25"
        >
            <div 
                onClick={(e) => e.stopPropagation()} 
                className="w-1/3 p-8 bg-white shadow-lg rounded-md"
            >
                <PostForm isOpenModal={setIsNewPost} />
            </div>
        </div>
    )
}

export default AddNewPost;


{/* <div className="fixed inset-0 bg-black/25 flex items-center justify-center z-50">
<div className="w-1/3 p-8 bg-white shadow-lg rounded-md">
    <PostForm setIsNewPost={setIsNewPost}/>
</div>
</div> */}