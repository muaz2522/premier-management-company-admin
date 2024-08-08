import React from 'react';

const PhoneInput = ({ register, errors, Icon, className, color }) => {
  return (
    <div className={`mb-8 ${className}`}>
      <div className='flex border-b items-center border-gray-300'>
        {Icon && <Icon className="mr-2" />}
        <input
          id="phone"
          type="tel"
          {...register('phone', {
            required: 'Phone number is required',
            pattern: {
              value: /^\d{10}$/,
              message: 'Phone number must be 10 digits'
            }
          })}
          className={`text-base w-full ml-3 outline-none ${color}`}
          placeholder="Phone"
        />
      </div>
      <span>
        {errors.phone && <span className="text-red-500">{errors.phone.message}</span>}
      </span>
    </div>
  );
};

export default PhoneInput;
