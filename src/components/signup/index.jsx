import React from 'react';
import { useForm } from 'react-hook-form';
import Input from '../../ui/form/Input';
import EmailInput from '../../ui/form/EmailInput';
import { PasswordInput, ConfirmPasswordInput } from '../../ui/form/PasswordInput';
import PhoneInput from '../../ui/form/PhoneInput';
import Button from '../../ui/Button';
import * as Icons from '../../assets/icons';
// import ButtonLink from '../../ui/ButtonLink';
import { Link, useNavigate } from 'react-router-dom';
import {createUser} from '../../api/userAuthentication';

export default function SignUpForm() {
  const navigate=useNavigate();
  const { register, handleSubmit,reset, watch, formState: { errors } } = useForm();

  const passwordValue = watch('password');

  const onSubmit = async (data) => {
    try {
      const updatedData = {
        ...data,
        password: passwordValue,
      };
  
      const user = await createUser(updatedData);
      console.log(user)
      if(user){
        navigate("/login")
      }
      reset();
  
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='grid md:grid-cols-2 mb-8 sm:grid-cols-1 custom-min:gap-8 lg:gap-0'>
        <Input
          register={register}
          errors={errors}
          name="firstName"
          text="First name is required"
          placeholder="First Name"
          className="w-full"
          classDiv="mr-3"
          Icon={Icons.NameIcon}
        />
        <Input
          register={register}
          errors={errors}
          name="lastName"
          text="Last name is required"
          placeholder="Last Name"
          className="w-full"
          Icon={Icons.NameIcon}
        />
      </div>

      <EmailInput register={register} errors={errors} Icon={Icons.EmailIcon} className="mb-8" />

      <div className='grid md:grid-cols-2 lg:gap-0 mb-8 custom-min:grid-cols-1 custom-min:gap-8'>
        <PasswordInput register={register} errors={errors} Icon={Icons.PasswordIcon}  />
        <ConfirmPasswordInput register={register} errors={errors}  Icon={Icons.PasswordIcon} watch={watch} />
      </div>

      <PhoneInput register={register} errors={errors} Icon={Icons.PhoneIcon} />

      <div className='grid md:grid-cols-2 lg:gap-0 mb-8 custom-min:grid-cols-1 custom-min:gap-8'>
        <Input
          register={register}
          errors={errors}
          name="jobTitle"
          text='Job title is required'
          placeholder="Job Title"
          className="w-full"
          classDiv="mr-3"
          Icon={Icons.JobTitleIcon}
        />
        <Input
          register={register}
          errors={errors}
          name="experience"
          text='Job experience is required'
          placeholder="Job Experience"
          className="w-full"
          Icon={Icons.JobexpIcon}
        />
      </div>
      <div className='grid grid-cols-1 mb-8'>
        <Input
          register={register}
          errors={errors}
          name="about"
          text='About is required'
          placeholder="About"
          className="w-full"
          Icon={Icons.AboutIcon}
        />
      </div>
      <div className='grid grid-cols-1 mb-8'>
        <Input
          register={register}
          errors={errors}
          name="cv"
          text='cv is required'
          type="file"
          accept=".pdf,.docx"
          className="w-full border-none text-lime-700"
          Icon={Icons.CvIcon}
        />
      </div>

      <div className='mb-8'>
        <div className='flex'>
          <input type="checkbox" {...register("isAgree", { required: "Checkbox is required" })} />
          <span className='ml-2 text-lg text-text-color'>I agree to the <Link>Terms of Services</Link> and <Link>Privacy Policy</Link>.</span>
        </div>
        {errors.isAgree && <span className="text-red-500">{errors.isAgree.message}</span>}
      </div>


      <Button type="submit" className="py-2 text-lg text-semibold px-4">Sign Up</Button>
      {/* <ButtonLink link="/verify" text="Sign Up" className="py-2 px-4 text-white" classLink="text-white" /> */}
    </form>
  );
}
