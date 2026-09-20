import usePillAnimation from "../../../animations/core/usePillAnimations.jsx";

function Pill({ children, pillColor, link = null, onClick }) {
    const { enter, exit } = usePillAnimation(pillColor);

    const button = (
        <button
            onMouseEnter={enter}
            onMouseLeave={exit}
            onClick={onClick}
            className="hoverColor px-2.5 py-1.5 border-2 border-border text-sm font-mono rounded-full"
        >
            {children}
        </button>
    );
    if (!link) {
        return button;
    }
    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
        >
            {button}
        </a>
    );
}

export default Pill;