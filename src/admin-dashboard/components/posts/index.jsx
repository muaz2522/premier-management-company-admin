import { useState } from "react"
import  Button  from "../../../ui/Button"
import BreadCrumb from "../../ui/breadCrumb"
import PostList from './PostList'
import AddNewPost from "./AddNewPost";

export default function Post({posts}){
    const[isNewPost,setIsNewPost]=useState(false);
    console.log(isNewPost)

    function handleAddPost(){
        setIsNewPost(!isNewPost)
    }

    return(
        <section className="p-4">
                    <div className="flex items-center justify-between">
                        <span className="text-3xl font-bold">All Posts</span>
                        <BreadCrumb to="/admin/users" text="Users" />
                    </div>
                    <div className="text-lg py-8">
                        <header className="grid grid-cols-[1.5fr_2fr_3fr_1fr] py-4 px-2 border">
                            <div className="font-semibold">image</div>
                            <div className="font-semibold">Heading</div>
                            <div className="font-semibold">content</div>
                            <div className="font-semibold">Action</div>
                        </header>
                        {/* <section> */}
                            {posts.map((item, i) => (
                                <PostList post={item} key={i} />
                            ))}
                        {/* </section> */}
                    </div>
                    <Button className="py-2 px-4" onClick={handleAddPost}>
                        Add new Post
                    </Button>
                    {/* <button onClick={handleAddPost}>Add new Post</button> */}
                    {isNewPost ? <AddNewPost setIsNewPost={setIsNewPost} />:""}
        </section>
    )
}
