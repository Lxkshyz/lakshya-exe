import usePrimaryButtonHover from '../../../animations/core/button/usePrimaryButtonHover';
function Button({children}) {
    const clicked = usePrimaryButtonHover()
    return (
        <button
            onClick={(e) => clicked(e)}
            className="cursor-pointer primary-button rounded-full w-[70%] md:w-[35%] bg-invert-bg text-bg py-3.5 font-extrabold font-outfit">
            {children}
        </button>
    )
}
export default Button;