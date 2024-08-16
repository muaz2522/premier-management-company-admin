function Button({children,className,...props}) {
    return (
        <button onClick={props.onClick} className={`text-white rounded-3xl font-semibold text-base bg-base-color ${className}`}>{children}</button>
    )
}

export default Button
