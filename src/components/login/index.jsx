import React from 'react';
import { useForm } from 'react-hook-form';
import EmailInput from '../../ui/form/EmailInput';
import { PasswordInput } from '../../ui/form/PasswordInput';
import Button from '../../ui/Button';
import * as Icons from '../../assets/icons';
import { Link, NavLink } from 'react-router-dom';

export default function LoginForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <EmailInput register={register} errors={errors} className="mb-8" Icon={Icons.EmailIcon} />
      <PasswordInput register={register} errors={errors} className="w-full" Icon={Icons.PasswordIcon} />

      <Link to="/forgot" className='d-block pb-8 text-sky-600 mt-2 hover:underline'>Forgot your Password?</Link>

      <NavLink to="/dashboard"><Button type="submit" className="py-2 px-4">Sign In</Button></NavLink>
    </form>
  );
}
