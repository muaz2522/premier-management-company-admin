import { useForm } from "react-hook-form"
import Button from '../../../ui/Button'
import { useAuth } from "../../../contextApi"
import { createPost, updatePost } from "../../../api/getPostDetails"
import { Timestamp } from "firebase/firestore";
import { MdDelete } from "react-icons/md";


export default function PostForm({ isOpenModal, post, isEditPost }) {
    const auth = useAuth();
    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: post,
    });

    const onSubmit = (data) => {
        if (isEditPost) {
            const customData = {
                ...post,
                title: data.title,
                content: data.content,
                updatedAt: Timestamp.fromDate(new Date()),
                imgUrl: data.imageUrl || post.imgUrl,
            }
            // console.log(customData)
            updatePost(post.id, customData);
        } else {
            const customData = {
                ...data,
                creatorId: auth.currentUser.id,
                uImage: auth.currentUser.imageUrl || null,
            }
            createPost(customData);
        }
        isOpenModal(false);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6 py-2 px-4 bg-white">
            {/* Heading Input with Validation */}
            <div className="flex flex-col">
                <input
                    {...register("title", { required: "Title is required" })}
                    name="title"
                    className={`border text-lg ${errors.title ? 'border-red-500' : 'border-gray-300'} rounded p-2 focus:outline-none`}
                    placeholder="Enter your title here..."
                />
                {errors.title && <span className="text-red-500 text-md mt-1">{errors.title.message}</span>}
            </div>

            {/* Content Textarea */}
            <div className="flex flex-col">
                <textarea
                    rows="6"
                    cols="50"
                    {...register("content", { required: "Content is required" })}
                    className={`border text-lg ${errors.content ? 'border-red-500' : 'border-gray-300'} rounded p-2 focus:outline-none`}
                    placeholder="Enter your content here..."
                ></textarea>
                {errors.content && <span className="text-red-500 text-md mt-1">{errors.content.message}</span>}
            </div>

            {/* File Input with Validation */}
            <div className="flex flex-col">
                <input
                    type="file"
                    {...register("postImg", {
                        required: false,
                        // validate: (files) => files.length > 0 || "Please select a file",
                    })}
                    className={`w-full border border-slate-200 p-2 rounded file:mr-4 file:py-1 file:px-2 file:rounded file:border-0 file:text-sm file:font-semibold ${errors.postImg ? 'border-red-500' : ''}`}
                />
                {errors.postImg && <span className="text-red-500 text-sm mt-1">{errors.postImg.message}</span>}
            </div>
            {isEditPost && post.imgUrl ? <div className="border border-slate-200 py-1 px-2 rounded flex justify-between items-center">
                <img src={post.imgUrl} alt="postImg" className="w-24 h-12" />
                <MdDelete className="text-red-400 cursor-pointer" size={"1.3em"}/>
            </div> : ""}
            {/* Submit Button */}
            <div className="flex justify-end gap-4">
                <Button className="py-2 px-8 w-28 bg-slate-100"  color={"black"} onClick={() => isOpenModal(false)}>
                    Cancel
                </Button>
                <Button type="submit" className="py-2 px-8 w-28">
                    Post
                </Button>
            </div>
        </form>
    );
}
