import { useForm } from "react-hook-form";
import EmailInput from "../../ui/form/EmailInput";
import Button from "../../ui/Button";
import * as Icons from '../../assets/icons';

function Forgot() {
  return (
    <section className='h-lvh bg-ground-color'>
      <div className="flex items-center justify-center gap-20 custom-min:px-8 sm:px-20 custom-min:w-full sm:w-3/5  md:w-4/5 pt-20 mx-auto">
        <div className="px-8 py-12 rounded bg-white custom-min:w-full custom-md:w-3/4 sm:w-3/4 md:w-2/4">
          <h3 className='text-2xl font-semibold mb-1'>Forgot Password</h3>
          <p className='text-slate-400 mb-10'>Please Enter Your Email</p>
          <ForgotForm />
        </div>
      </div>
    </section>
  )
}

export default Forgot


function ForgotForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mb-8">
      <EmailInput register={register} errors={errors} className="mb-8" Icon={Icons.EmailIcon} />

      <Button type="submit" className="py-2 px-4">Sign In</Button>
    </form>
  );
}