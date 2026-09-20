import Pill from '../ui/Button/Pill.jsx'
import useSectionHoverAnimation from "../../animations/core/useSectionHoverAnimation.jsx";
function TechStack() {
    const {enter: sectionEnter, exit: sectionExit} = useSectionHoverAnimation("var(--color-yellow)")
    return (
        <section
            onMouseEnter={e => sectionEnter(e)}
            onMouseLeave={e => sectionExit(e)}
            className="section-box col-span-full md:col-span-7 bg-card border-4 border-border rounded-4xl p-8 md:p-10">
            <h1 className="hoverColor section-title mb-4.5 font-mono text-secondary-text font-thin text-sm md:text-md">Tech Stack</h1>
            <div className="flex flex-wrap gap-1.5 md:gap-y-3.5 md:gap-x-2">
                <Pill pillColor="var(--color-blue)">React</Pill>
                <Pill pillColor="var(--color-white)">Next.js</Pill>
                <Pill pillColor="var(--color-blue)">TypeScript</Pill>
                <Pill pillColor="var(--color-green)">Node JS</Pill>
                <Pill pillColor="var(--color-lime)">Express</Pill>
                <Pill pillColor="var(--color-blue)">PostgreSQL</Pill>
                <Pill pillColor="var(--color-green)">MongoDB</Pill>
                <Pill pillColor="var(--color-red)">Redis</Pill>
                <Pill pillColor="var(--color-lime)">TailwindCSS</Pill>
                <Pill pillColor="var(--color-purple)">REST APIs</Pill>
                <Pill pillColor="var(--color-orange)">AWS</Pill>
                <Pill pillColor="var(--color-orange)">Git</Pill>
            </div>
        </section>
    )
}
export default TechStack;