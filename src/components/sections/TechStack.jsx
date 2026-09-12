import Pill from '../ui/Button/Pill.jsx'
import useSectionHoverAnimation from "../../animations/core/useSectionHoverAnimation.jsx";
function TechStack() {
    const {enter, exit} = useSectionHoverAnimation("var(--color-yellow)")
    return (
        <section
            onMouseEnter={enter}
            onMouseLeave={exit}
            className="col-span-full bg-card border-4 border-border rounded-4xl p-8 md:p-10">
            <h1 className="mb-4.5 font-mono text-secondary-text font-thin text-sm md:text-md">Tech Stack</h1>
            <div className="flex flex-wrap gap-1.5">
                <Pill pillColor="var(--color-blue)">React</Pill>
                <Pill pillColor="var(--color-pink)">Prisma</Pill>
                <Pill pillColor="var(--color-white)">Node JS</Pill>
            </div>
        </section>
    )
}
export default TechStack;