import { useForm } from "react-hook-form"
import Button from "../../../ui/Button"
import { createUser } from "../../../api/userAuthentication"

function CreateAdminForm() {
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        createUser(data,reset);
    };

    function handleCancel() {
        reset();
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6 py-2 px-4 bg-white">
            <div>
                <div className="grid grid-cols-[1fr_2fr] py-2 border-b w-full border-b-slate-100">
                    <label className="font-semibold">First Name</label>
                    <div className="flex items-center gap-4">
                        <input
                            {...register("firstName", { required: "First Name is required" })}
                            name="firstName"
                            className={`border w-2/4 text-lg ${errors.firstName ? 'border-red-500' : 'border-gray-300'} rounded p-2 focus:outline-none`}
                        />
                        {errors.firstName && <span className="text-red-500 text-md mt-1">{errors.firstName.message}</span>}
                    </div>
                </div>
                <div className="grid grid-cols-[1fr_2fr] w-full py-2 border-b border-b-slate-100">
                    <label className="font-semibold">Last Name</label>
                    <div className="flex items-center gap-4">

                        <input
                            {...register("lastName", { required: "Last Name is required" })}
                            name="lastName"
                            className={`border w-2/4 text-lg ${errors.lastName ? 'border-red-500' : 'border-gray-300'} rounded p-2 focus:outline-none`}
                        />
                        {errors.lastName && <span className="text-red-500 text-md mt-1">{errors.lastName.message}</span>}
                    </div>
                </div>
                <div className="grid grid-cols-[1fr_2fr] w-full py-2 border-b border-b-slate-100">
                    <label className="font-semibold">Email</label>
                    <div className="flex items-center gap-4">

                        <input
                            {...register("email", { required: "Email is required" })}
                            name="email"
                            type="email"
                            className={`border w-2/4 text-lg ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded p-2 focus:outline-none`}
                        />
                        {errors.email && <span className="text-red-500 text-md mt-1">{errors.email.message}</span>}
                    </div>

                </div>
                <div className="grid grid-cols-[1fr_2fr] w-full py-2 border-b border-b-slate-100">
                    <label className="font-semibold">Password</label>
                    <div className="flex items-center gap-4">

                        <input
                            {...register("password", {
                                required: "Password is required", minLength: {
                                    value: 6,
                                    message: 'Password must be 6 characters long',
                                }
                            })}
                            name="password"
                            type="password"
                            className={`border w-2/4 text-lg ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded p-2 focus:outline-none`}
                        />
                        {errors.password && <span className="text-red-500 text-md mt-1">{errors.password.message}</span>}
                    </div>
                </div>
                <div className="grid grid-cols-[1fr_2fr] w-full py-2 border-b border-b-slate-100">
                    <label className="font-semibold">Confirm Password</label>
                    <div className="flex items-center gap-4">
                        <input
                            {...register("confirmPassword", {
                                required: "Confirm Password is required", validate: (value) => value === watch('password') || 'Passwords do not match'
                            })}
                            name="confirmPassword"
                            type="password"
                            className={`border w-2/4 text-lg ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300'} rounded p-2 focus:outline-none`}
                        />
                        {errors.confirmPassword && <span className="text-red-500 text-md mt-1">{errors.confirmPassword.message}</span>}
                    </div>
                </div>
                <div className="flex items-center justify-end p-4 gap-8">
                    <Button className="py-2 px-4 bg-slate-100" color="black" onClick={handleCancel}>Cancel</Button>
                    <Button className="py-2 px-4" type="submit">Create User</Button>
                </div>
            </div>
        </form>
    )
}

export default CreateAdminForm;
