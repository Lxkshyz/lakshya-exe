import useSectionHoverAnimation from "../../animations/core/useSectionHoverAnimation.jsx";
function About() {
    const {enter: sectionEnter, exit: sectionExit} = useSectionHoverAnimation("var(--color-pink)");
    return (
        <section
            className="section-box flex flex-col gap-4 lg:gap-6 col-span-full md:col-span-5 bg-card border-4 border-border rounded-4xl p-8 md:p-10"
            onMouseEnter={e => sectionEnter(e)}
            onMouseLeave={e => sectionExit(e)}
        >
            <h1 className="hoverColor section-title mb-4.5 font-mono text-secondary-text font-thin text-sm md:text-md">ABOUT</h1>
            <article className="hoverColor flex flex-col gap-4 text-text font-outfit">
                <p>I'm a full stack developer who loves turning complex problems into simple, elegant solutions. I care deeply about developer experience and user experience equally.</p>
                <p>When I'm not coding, you'll find me contributing to open source, writing tech blogs, or exploring new frameworks.</p>
            </article>
        </section>
    )
}
export default About;