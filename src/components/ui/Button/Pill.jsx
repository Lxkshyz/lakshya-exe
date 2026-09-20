import usePillAnimation from "../../../animations/core/usePillAnimations.jsx";

function Pill({ children, pillColor }) {
    const { enter, exit } = usePillAnimation(pillColor);

    return (
        <button
            onMouseEnter={enter}
            onMouseLeave={exit}
            className={`px-2.5 py-1.5 border-2 border-border text-sm font-mono rounded-full`}
        >
            {children}
        </button>
    );
}

export default Pill;