function Button({children}) {
    return (
        <button className="primary-button rounded-full w-[70%] md:w-[35%] bg-invert-bg text-bg py-3.5 font-extrabold font-outfit">
            {children}
        </button>
    )
}
export default Button;