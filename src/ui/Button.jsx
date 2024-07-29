function Button({children,className}) {
    return (
        <button className={`text-white rounded-3xl text-base ${className}`} style={{backgroundColor:"var(--color-base)"}}>{children}</button>
    )
}

export default Button
