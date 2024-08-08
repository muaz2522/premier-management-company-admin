import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import * as Icons from '../../assets/icons';
import { ConfirmPasswordInput, PasswordInput } from "../../ui/form/PasswordInput";

function Reset() {
    return (
        <section className='min-h-[calc(100vh-68px)] bg-ground-color'>
            <div className="flex items-center justify-center gap-20 custom-min:px-8 sm:px-20 custom-min:w-full sm:w-3/5  md:w-4/5 pt-20 mx-auto">
                <div className="px-[16px] py-[25px] rounded bg-white custom-min:w-full custom-md:w-3/4 sm:w-3/4 md:w-2/4">
                    <h3 className='text-2xl text-base-color font-semibold mb-1'>Reset Password</h3>
                    <p className='text-slate-400 mb-10'>Please Enter your new Password</p>
                    <ResetPassForm />
                </div>
            </div>
        </section>
    )
}

export default Reset


function ResetPassForm() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="mb-20">
            <div className="flex flex-col gap-8">
                <PasswordInput register={register} errors={errors} Icon={Icons.PasswordIcon} />
                <ConfirmPasswordInput register={register} errors={errors} Icon={Icons.PasswordIcon} />
            </div>
            <Button type="submit" className="py-2 px-16 mt-8">Reset</Button>
        </form>
    );
}
