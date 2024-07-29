import React from 'react';
import { useForm } from 'react-hook-form';
import Input from '../ui/form/Input';
import EmailInput from '../ui/form/EmailInput';
import { PasswordInput, ConfirmPasswordInput } from '../ui/form/PasswordInput';
import PhoneInput from '../ui/form/PhoneInput';
import Button from '../ui/Button';
import * as Icons from '../assets/icons';


export default function SignUpForm() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const passwordValue = watch('password');

  const onSubmit = (data) => {
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='grid grid-cols-2 mb-4'>
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

      <EmailInput register={register} errors={errors} Icon={Icons.EmailIcon} />

      <div className='grid grid-cols-2 mb-4'>
        <PasswordInput register={register} errors={errors} className="w-[49%]" Icon={Icons.PasswordIcon} />
        <ConfirmPasswordInput register={register} errors={errors} className="w-[49%]" Icon={Icons.PasswordIcon} />
      </div>

      <PhoneInput register={register} errors={errors} Icon={Icons.PhoneIcon}  />

      <div className='grid grid-cols-2 mb-4'>
      <Input
        register={register}
        errors={errors}
        name="jobTitle"
        text='Job title is required'
        placeholder="Job Title"
        className="mr-3 w-[49%]"
        Icon={Icons.JobTitleIcon}
      />

      <Input
        register={register}
        errors={errors}
        name="jobExp"
        text='Job experience is required'
        placeholder="Job Experience"
        className="w-[49%]"
        Icon={Icons.JobexpIcon}
      />
    </div>
      <Input
        register={register}
        errors={errors}
        name="about"
        text='About is required'
        placeholder="About"
        className="w-full"
        classDiv="mb-4"
        Icon={Icons.AboutIcon}
      />

      <Input
        register={register}
        errors={errors}
        name="cv"
        text='cv is required'
        type="file"
        accept=".pdf,.docx"
        className="w-full"
        classDiv="mb-4"
        Icon={Icons.CvIcon}
      />
      <div className='flex'>
        <Input
          register={register}
          errors={errors}
          name="checkbox"
          text='checkbox is required'
          type="checkbox"
          classDiv="mb-10 border-none"
        /> <span className='ml-2'>I agree to the terms and services.</span>
      </div>

      <Button type="submit" className="py-2 px-4">Sign Up</Button>
    </form>
  );
}
