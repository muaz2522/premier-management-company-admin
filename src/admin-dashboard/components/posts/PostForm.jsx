import { useForm } from "react-hook-form"
import Button from '../../../ui/Button'
import { useAuth } from "../../../contextApi"
import { createPost } from "../../../api/getPostDetails"


export default function PostForm({setIsNewPost}) {
    const auth=useAuth();
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        const customData={
            ...data,
            creatorId:auth.currentUser.id,
            imageUrl:auth.currentUser.imageUrl || null,
        }

        console.log("customData",customData);

        createPost(customData);
        setIsNewPost(false);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6 py-2 px-4 bg-white">
            {/* Heading Input with Validation */}
            <div className="flex flex-col">
                <input
                    {...register("title", { required: "Heading is required" })}
                    name="title"
                    className={`border text-lg ${errors.heading ? 'border-red-500' : 'border-gray-300'} rounded p-2 focus:outline-none`}
                    placeholder="Enter title..."
                />
                {errors.heading && <span className="text-red-500 text-sm mt-1">{errors.heading.message}</span>}
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
                {errors.content && <span className="text-red-500 text-sm mt-1">{errors.content.message}</span>}
            </div>

            {/* File Input with Validation */}
            <div className="flex flex-col">
                <input
                    type="file"
                    {...register("postImg", {
                        required: "Post Image is required",
                        validate: (files) => files.length > 0 || "Please select a file",
                    })}
                    className={`w-full border border-slate-200 p-2 rounded file:mr-4 file:py-1 file:px-2 file:rounded file:border-0 file:text-sm file:font-semibold ${errors.postImg ? 'border-red-500' : ''}`}
                />
                {errors.postImg && <span className="text-red-500 text-sm mt-1">{errors.postImg.message}</span>}
            </div>

            {/* Submit Button */}
            <div className="flex justify-end gap-4">
                <Button className="py-2 px-8 w-28" onClick={()=>setIsNewPost(false)}>
                    Cancel
                </Button>
                <Button type="submit" className="py-2 px-8 w-28">
                    Post
                </Button>
            </div>
        </form>
    );
}
