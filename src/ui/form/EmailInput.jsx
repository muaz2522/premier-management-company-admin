import React from 'react';

const EmailInput = ({ register, errors,Icon,className }) => {
  return (
    <div className={`flex border-b border-gray-300 ${className?className:"mb-4"}`}>
      {Icon && <Icon className="mr-2"  />}
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
        className="text-base outline-none w-full pl-3 mb-2"
        placeholder="Email"
      />
      {errors.email && <span className="text-red-500">{errors.email.message}</span>}
    </div>
  );
};

export default EmailInput;
