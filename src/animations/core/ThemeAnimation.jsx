import gsap from 'gsap';

function ThemeAnimation(targetTheme, animate = true) {
    const element = document.documentElement;
    const darkTarget = {
        "--bg": "#111111",
        "--invert-bg": "#f5f0e8",
        "--card": "#1e1e1e",
        "--text": "#e8e3d9",
        "--border": "#524e48",
        "--shadow": "#b8b3ac",
        "--secondary-text": "#A19E98",
    };
    const lightTarget = {
        "--bg": "#f5f0e8",
        "--invert-bg": "#111111",
        "--card": "#f5f0e8",
        "--text": "#111111",
        "--border": "#111111",
        "--shadow": "#111111",
        "--secondary-text": "#111111",
    };
    const target = targetTheme === "dark" ? darkTarget : lightTarget;

    if (animate) {
        gsap.to(element, {
            duration: 0.2,
            ease: "easeInOut",
            ...target
        });
    } else {
        gsap.set(element, {
            ...target
        });
    }
}
export default ThemeAnimation;