import React from 'react';

const PhoneInput = ({ register, errors,Icon }) => {
  return (
    <div className='flex border-b border-gray-300 mb-4'>
      {Icon && <Icon className="mr-2"  />}
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
        className="text-base w-full ml-3 mb-2 outline-none"
        placeholder="Phone"
      />
      {errors.phone && <span className="text-red-500">{errors.phone.message}</span>}
    </div>
  );
};

export default PhoneInput;
