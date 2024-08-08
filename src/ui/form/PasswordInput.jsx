import React from 'react';

const PasswordInput = ({ register, errors, className, Icon, classDiv }) => {
  return (
    <div>
      <div className={`flex items-center border-b border-gray-300 mr-2 ${classDiv}`}>
        {Icon && <Icon className="mr-2" />}
        <input
          id="password"
          type="password"
          {...register('password', {
            required: 'Password is required',
            minLength: {
              value: 6,
              message: 'Password must be at least 6 characters long'
            }
          })}
          className={`text-lg ml-3 w-full outline-none mb-2 ${className}`}
          placeholder="Password"
        />
      </div>
      <span>
        {errors.password && <span className="text-red-500">{errors.password.message}</span>}
      </span>
    </div>
  );
};

const ConfirmPasswordInput = ({ register, errors, className, Icon }) => {
  return (
    <div>
      <div className='flex border-b border-gray-300'>
      {Icon && <Icon className="mr-2" />}
      <input
        id="confirmPassword"
        type="password"
        {...register('confirmPassword', {
          required: 'Confirm Password is required',
          validate: (value) => value === watch('password') || 'Passwords do not match'
        })}
        className={`text-base ml-3 mb-2 w-full outline-none ${className}`}
        placeholder="Confirm Password"
        />
        </div>
        <span>
      {errors.confirmPassword && <span className="text-red-500">{errors.confirmPassword.message}</span>}
        </span>
    </div>
  );
};

export { PasswordInput, ConfirmPasswordInput };
