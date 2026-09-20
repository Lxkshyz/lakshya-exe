import Pill from "../Button/Pill.jsx";
import useSectionHoverAnimation from "../../../animations/core/useSectionHoverAnimation.jsx";

export default function Work({project, year, tech, color, linkGithub, children, animate = true}) {
    const {enter, exit} = useSectionHoverAnimation(color);
    return (
        <section
            onMouseEnter={animate ? enter : undefined}
            onMouseLeave={animate ? exit : undefined}
            className="section-box flex flex-col grow shrink gap-3 bg-card text-text border-4 border-border rounded-4xl p-8 md:p-10">
            <div className="flex justify-between">
                <h1 className="hoverColor text-xl md:text-2xl font-archiveblack">{project}</h1>
                <p className="hoverColor font-mono">{year}</p>
            </div>
            <p className="hoverColor font-outfit text-sm md:text-md">
                {children}
            </p>
            <div className="pill-container flex flex-wrap gap-1">
                {tech}
            </div>
            <div className="pill-container flex gap-1">
                <Pill pillColor="var(--color-purple)" link={linkGithub}>GITHUB ↗</Pill>
            </div>
        </section>
    )
}