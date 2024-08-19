function Button({children,className,...props}) {
    return (
        <button onClick={props.onClick} type={props.type} className={`text-${props.color||"white"} rounded-3xl font-semibold text-base bg-base-color ${className}`}>{children}</button>
    )
}

export default Button
