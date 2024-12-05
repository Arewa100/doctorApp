const CustomButton = (props)=> {
    const {style, type, textContent, onClick, value} = props
    return(
        <>
        <button className={style} type={type} onClick={onClick} value={value}>{textContent}</button>
        </>
    )
}

export default CustomButton