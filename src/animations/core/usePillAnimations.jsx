import gsap from 'gsap';
const usePillAnimations = (pillColor) => {
    const enter = (e) => gsap.to(e.currentTarget, {
        duration: 0.2,
        scaleX: 1.08,
        scaleY: 1.08,
        backgroundColor: pillColor,
        borderWidth: "2px",
        color: "#111111"
    });
    const exit = (e) => gsap.to(e.currentTarget, {
        duration: 0.2,
        scaleX: 1,
        scaleY: 1,
        clearProps: "backgroundColor,color"
    })
    return {enter, exit}
}
export default usePillAnimations;