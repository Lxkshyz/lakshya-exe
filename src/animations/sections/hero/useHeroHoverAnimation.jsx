import gsap from "gsap";
function useHeroAnimation(){
    const timing = 0.18;
    const enter = () => {
        gsap.to(".hero-role", {
            duration: timing,
            overwrite: true,
            color: "#111111"
        })
        gsap.to(".hero-title", {
            duration: timing,
            overwrite: true,
            color: "#111111"
        });

        gsap.to(".hero-description", {
            duration: timing,
            overwrite: true,
            color: "#111111"
        });

        gsap.to(".primary-button", {
            duration: timing,
            overwrite: true,
            color: "#FFFFFF",
            backgroundColor: "#111111"
        });

        gsap.to(".secondary-button", {
            duration: timing,
            overwrite: true,
            backgroundColor: "var(--color-lime)",
            color: "#111111"
        });
    };
    const exit = () => {
        gsap.to(".hero-title", {
            duration: timing,
            overwrite: true,
            clearProps: "color"
        });
        gsap.to(".hero-role", {
            duration: timing,
            overwrite: true,
            clearProps: "color"
        })
        gsap.to(".hero-description", {
            duration: timing,
            overwrite: true,
            clearProps: "color"
        });

        gsap.to(".primary-button", {
            duration: timing,
            overwrite: true,
            clearProps: "color,backgroundColor"
        });

        gsap.to(".secondary-button", {
            duration: timing,
            overwrite: true,
            clearProps: "color,backgroundColor"
        });
    };
    return {enter, exit}
}
export default useHeroAnimation;