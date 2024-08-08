function Button({children,className}) {
    return (
        <button className={`text-white rounded-3xl font-semibold text-base bg-base-color ${className}`}>{children}</button>
    )
}

export default Button
