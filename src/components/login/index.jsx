import React from 'react';
import { useForm } from 'react-hook-form';
import EmailInput from '../../ui/form/EmailInput';
import { PasswordInput } from '../../ui/form/PasswordInput';
// import Button from '../../ui/Button';
import * as Icons from '../../assets/icons';
import { Link, NavLink } from 'react-router-dom';
import ButtonLink from '../../ui/ButtonLink';

export default function LoginForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <EmailInput register={register} errors={errors} className="mb-8" Icon={Icons.EmailIcon} />
      <PasswordInput register={register} errors={errors} className="w-full" Icon={Icons.PasswordIcon} />

      <Link to="/forgot" className='d-block pb-8 text-text-color mt-2 '>Forgot your Password?</Link>
      {/* <Button type="submit" className="py-2 px-4">Sign In</Button> */}
      <ButtonLink link="/dashboard" text="Sign In" className="py-2 px-4" />
    </form>
  );
}
