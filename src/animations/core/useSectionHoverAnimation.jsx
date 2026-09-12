import gsap from 'gsap';

function useSectionHoverAnimation(sectionColor) {
    const enter = (e) => {
        gsap.to(e.currentTarget, {
            duration: 0.2,
            x: -5,
            y: -5,
            borderColor: "#111111",
            boxShadow: "6px 6px 0px var(--color-border)",
            backgroundColor: sectionColor,
            overwrite: true
        })
    }
    const exit = (e) => {
        gsap.to(e.currentTarget, {
            duration: 0.2,
            x: 0,
            y: 0,
            clearProps: "borderColor,boxShadow,backgroundColor",
            overwrite: true
        })
    }
    return {enter, exit}
}
export default useSectionHoverAnimation;