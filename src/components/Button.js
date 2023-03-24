function Button({label,handleClick}){
    return (
        <button type = "submit" onClick={handleClick}>{label}</button>
    )
}

export default Button;