import src from '../../../assets/images/dashboard/article-img.png'
import src1 from '../../../assets/images/dashboard/main-article-img.png'
import src2 from '../../../assets/images/dashboard/d-full-img.png'
import src3 from '../../../assets/images/dashboard/d-img1.png'
import src4 from '../../../assets/images/dashboard/d-img2.png'
import { useEffect, useState } from 'react'
import { getAllPosts } from '../../../api/getPostDetails'
import { getPostTime } from '../../../helpers'


function Home() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        async function getPosts() {
            const Post = await getAllPosts();
            setPosts(Post);
        }
        getPosts();
    }, [])

    console.log("posts", posts)

    return (
        <div className="bg-ground-color">
            {
                posts.map((post, i) => <PostList post={post} key={i} />)
            }
            {/* <section className="p-8 border-b border-slate-300">
                <div className='flex gap-4'>
                    <img src={src} alt="Articles" className='sm:w-12 custom-min:h-10 sm:h-12' />
                    <div>
                        <h3 className='text-xl font-semibold'>{posts[0]?.heading}
                        </h3>
                        <p className='text-slate-400'>4 hrs ago</p>
                    </div>
                </div>
                <p className='text-dashboard-para py-4 text-lg'>
                    {posts[0]?.content}
                </p>
            </section>
            <section className='p-8'>
                <div className='flex gap-4'>
                    <img src={src} alt="Articles" className='sm:w-12 custom-min:h-10 sm:h-12' />
                    <div>
                        <h3 className='text-xl font-semibold'>{posts[0]?.heading}
                        </h3>
                        <p className='text-slate-400'>4 hrs ago</p>
                    </div>
                </div>
                <div className='grid custom-md:grid-cols-2 gap-4 custom-min:grid-cols-1 py-4 place-items-center'>
                    <img src={posts[0]?.imgUrl} alt="image" />
                    <div className='flex flex-col gap-4'>
                        <img src={posts[0]?.imgUrl} alt="image" />
                        <img src={posts[0]?.imgUrl} alt="image" />
                    </div>
                </div>
            </section> */}
        </div>
    )
}

export default Home

function PostList({ post }) {
    const time = getPostTime(post.createdAt);
    return (
        <section className="p-8 border-b border-slate-300">
            <div className='flex gap-4'>
                <img src={post.uImage ? post.uImage : src} alt="Articles" className='sm:w-12 custom-min:h-10 sm:h-12' />
                <div>
                    <h3 className='text-xl font-semibold'>{post.title}</h3>
                    <p className='text-slate-400'>{time}</p>
                </div>
            </div>
            <div className='py-4'>
                <img src={post.imgUrl} alt="Article images" className='pb-4 h-96 w-full' />
                <p className='text-dashboard-para text-lg'>
                    {post.content}
                </p>
            </div>
        </section>
    )
}
