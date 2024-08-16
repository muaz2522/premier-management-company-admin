import React from 'react';

const PhoneInput = ({ register, errors, Icon, className, color }) => {
  // Function to count digits in the input value
  const countDigits = (value) => {
    return (value.match(/\d/g) || []).length; 
  };

  return (
    <div className={`mb-8 ${className}`}>
      <div className='flex border-b items-center border-gray-300'>
        {Icon && <Icon className="mr-2" />}
        <input
          id="phone"
          type="tel"
          {...register('phone', {
            required: 'Phone number is required',
            validate: value => {
              const digitCount = countDigits(value);
              return digitCount >= 11 || 'Phone number must contain at least 11 digits';
            }
          })}
          className={`text-lg w-full ml-3 outline-none ${color}`}
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
