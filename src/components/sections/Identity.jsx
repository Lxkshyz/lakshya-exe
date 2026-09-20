import { useRef } from "react";
import useSectionHoverAnimation from "../../animations/core/useSectionHoverAnimation.jsx";
import useTypeWriterAnimation from "../../animations/sections/identity/useTypewriterAnimation.jsx";

function Identity() {
    const { enter: sectionEnter, exit: sectionExit } = useSectionHoverAnimation("var(--color-lime)");
    const sectionRef = useRef(null);
    useTypeWriterAnimation(sectionRef);
    return (
        <section className="section-box col-span-full md:col-span-8 bg-card border-4 border-border rounded-4xl p-8 md:p-10"
                 onMouseEnter={e => sectionEnter(e)}
                 onMouseLeave={e => sectionExit(e)}
        >
            <h1 className="hoverColor mb-4.5 font-mono text-secondary-text font-thin text-sm md:text-md">I AM A</h1>
            <div ref={sectionRef} className="hoverColor font-outfit font-bold text-4xl text-text">
                <span className="text"></span>
                <span className="cursorEffect">|</span>
            </div>
        </section>
    )
}
export default Identity;