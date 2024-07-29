function Input({ register, errors, name, text, type = 'text', placeholder, className,classDiv, Icon }) {
  return (
    <div className={`flex border-b border-slate-300 ${classDiv}`}>
      {Icon && <Icon className="mr-2" width="16px" height="12px" />}
      <input
        id={name}
        type={type}
        {...register(name, { required: text })}
        placeholder={placeholder}
        className={` outline-none mb-2 text-base pl-3 ${className}`}
      />
      {errors[name] && <span className="text-red-500">{errors[name].message}</span>}
    </div>
  );
}

export default Input;
