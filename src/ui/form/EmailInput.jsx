import React from 'react';

const EmailInput = ({ register, errors, Icon, className, color }) => {
  return (
    <div className={`${className ? className : "mb-4"}`}>
      <div className="flex items-center border-b border-gray-300">
        {Icon && <Icon className="mr-2" />}
        <input
          id="email"
          type="email"
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: 'Invalid email address'
            }
          })}
          className={`text-lg outline-none w-full pl-3 ${color}`}
          placeholder="Email"
        />
      </div>
      <span>
        {errors.email && <span className="text-red-500">{errors.email.message}</span>}
      </span >
    </div>
  );
};

export default EmailInput;
