import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import EmailInput from '../../ui/form/EmailInput';
import { PasswordInput } from '../../ui/form/PasswordInput';
import Button from '../../ui/Button';
import * as Icons from '../../assets/icons';
import { Link } from 'react-router-dom';
// import ButtonLink from '../../ui/ButtonLink';
import {SignInUser} from '../../api/userAuthentication';
// import { useAuth } from '../../contextApi';

export default function LoginForm() {
  const [isLoading,setIsLoading]=useState(false);
  // const auth=useAuth();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    setIsLoading(true);
    SignInUser(data,setIsLoading);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <EmailInput register={register} errors={errors} className="mb-8" Icon={Icons.EmailIcon} />
      <PasswordInput register={register} errors={errors} className="w-full" Icon={Icons.PasswordIcon} />

      <Link to="/forgot" className='d-block text-lg pb-8 text-text-color mt-2 '>Forgot your Password?</Link>
      <Button type="submit" className="py-2 px-4">{isLoading?"Loading...":"Sign In"}</Button>
      {/* <ButtonLink link="/dashboard" text="Sign In" className="py-2 px-4" classLink="text-white" /> */}
    </form>
  );
}
