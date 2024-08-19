function Input() {
    return (
        <input className="border-none rounded h-4 p-3 text-lg" />
    )
}

export default Input

// function Input({register,errors,...props,name}) {
//     return (
//         <div className="grid grid-cols-[1fr_2fr] py-2 border-b w-full border-b-slate-100">
//             <label className="font-semibold">{props.label}</label>
//             <div className="flex items-center gap-4">
//                 <input
//                     {...register("firstName", { required: props.required })}
//                     name=name
//                     className={`border w-2/4 text-lg ${errors.firstName ? 'border-red-500' : 'border-gray-300'} rounded p-2 focus:outline-none`}
//                 />
//                 {errors.firstName && <span className="text-red-500 text-md mt-1">{errors.firstName.message}</span>}
//             </div>
//         </div>)
// }

// export default Input
