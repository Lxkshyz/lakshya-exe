function Button({children}) {
    return (
        <button className="secondary-button rounded-full w-[60%] md:w-[25%] border-3 border-border bg-card py-3 font-extrabold font-outfit">
            {children}
        </button>
    )
}
export default Button