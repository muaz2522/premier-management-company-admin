import { useEffect, useState } from 'react';
import Post from '../components/posts'
import { getAllPosts } from '../../api/getPostDetails'
import { Bars } from 'react-loader-spinner';

export default function CreatePost() {
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        async function getPosts() {
            setIsLoading(true);
            const Post = await getAllPosts();
            setPosts(Post);
            setIsLoading(false)
        }
        getPosts();
    }, [])

    if (isLoading)
        return
    <div>
        <Bars
            height="60"
            width="70"
            color="#383C6C"
            ariaLabel="bars-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
        />
    </div>
    return (
         <Post posts={posts} /> 
    );
}
