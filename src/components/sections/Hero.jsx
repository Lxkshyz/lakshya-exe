import {useRef} from 'react';
import PrimaryButton from '../ui/Button/PrimaryButton.jsx';
import SecondaryButton from '../ui/Button/SecondaryButton.jsx';
import useHeroHoverAnimation from '../../animations/sections/hero/useHeroHoverAnimation.jsx';
import useSectionHoverAnimation from "../../animations/core/useSectionHoverAnimation.jsx";

function Hero(){
    const heroRef = useRef(null);
    const { enter: sectionEnter, exit: sectionExit } = useSectionHoverAnimation("var(--color-lime)");
    const { enter:heroEnter, exit:heroExit} = useHeroHoverAnimation(heroRef)
    return (
        <section
            onMouseEnter={(e) => {
                sectionEnter(e)
                heroEnter()
            }}
            onMouseLeave={(e) => {
                sectionExit(e)
                heroExit()
            }}
            ref={heroRef} className="flex flex-col gap-4 lg:gap-6 col-span-full bg-card border-4 border-border rounded-4xl p-8 md:p-10">
            <h1 className="section-title hero-role mb-4.5 font-mono text-secondary-text font-thin text-sm md:text-md">FULL STACK DEVELOPER</h1>
            <h1 className="hero-title flex flex-col font-archiveblack font-bold text-4xl lg:text-5xl">
                <span >HEY, I'm</span>
                <span>LAKSHYA</span>
            </h1>
            <article className="hero-description text-secondary-text text-sm lg:text-md font-outfit">
                <p>I'm a B.Tech student pursuing a degree in AI/ML. I love Software Engineering alongside AI/ML.</p>
                <p>I'm obsessed with system design, code that lasts, and clean APIs.</p>
            </article>
            <div className="flex flex-col md:flex-row gap-2">
                <PrimaryButton>
                    <p className="md:text-md lg:text-lg">View My Work <span>→</span></p>
                </PrimaryButton>
                <SecondaryButton>
                    <p className="md:text-md lg:text-lg">Download CV</p>
                </SecondaryButton>
            </div>
        </section>
    )
}
export default Hero;