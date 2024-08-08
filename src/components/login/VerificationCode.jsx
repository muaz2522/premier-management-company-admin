import { useForm } from "react-hook-form";
import ButtonLink from "../../ui/ButtonLink";
import * as Icons from '../../assets/icons';
import PhoneInput from "../../ui/form/PhoneInput";

function Verification() {
  return (
    <section  className='min-h-[calc(100vh-68px)] bg-ground-color'>
      <div className="flex items-center justify-center gap-20 custom-min:px-8 sm:px-20 custom-min:w-full sm:w-3/5  md:w-4/5 pt-20 mx-auto">
        <div className="px-[16px] py-[25px] rounded bg-white custom-min:w-full custom-md:w-3/4 sm:w-3/4 md:w-2/4">
          <h3 className='text-2xl text-base-color font-semibold mb-1'>Verification Code</h3>
          <p className='text-slate-400 mb-10 w-2/3'>Please enter your the code which has been sent to johndeo@gmail.com          </p>
          <VerificationForm />
        </div>
      </div>
    </section>
  )
}

export default Verification


function VerificationForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mb-28">
      <PhoneInput register={register} errors={errors} Icon={Icons.PasswordIcon} />
      <ButtonLink link="/reset" text="Next" className="py-1 mt-2 px-20"/>
    </form>
  );
}
