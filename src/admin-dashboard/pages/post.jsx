import { useEffect, useState } from 'react';
import Post from '../components/posts'
import { getAllPosts } from '../../api/getPostDetails'

export default function CreatePost(){
    const[posts,setPosts]=useState([]);

    useEffect(()=>{
        async function getPosts(){
            const Post=await getAllPosts();
            setPosts(Post);
        }
        getPosts();
    },[])

    return(
        <Post posts={posts}/>
    );
}
