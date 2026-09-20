import { useCallback, useRef } from "react";
import { clearInlineProps, createHoverTweenController } from "../../core/hoverTween.js";

const DURATION = 0.22;
const EASE = "power2.out";

function useHeroHoverAnimation(heroRef) {
    const controllerRef = useRef(null);
    if (!controllerRef.current) {
        controllerRef.current = createHoverTweenController();
    }

    const enter = useCallback(() => {
        const root = heroRef.current;
        if (!root) return;

        const text = root.querySelectorAll(".hero-role, .hero-title, .hero-description");
        const primary = root.querySelector(".primary-button");
        const secondary = root.querySelector(".secondary-button");

        controllerRef.current.runTimeline(
            (tl) => {
                tl.to(text, { color: "#111111" }, 0);
                if (primary) {
                    tl.to(primary, { color: "#FFFFFF", backgroundColor: "#111111" }, 0);
                }
                if (secondary) {
                    tl.to(
                        secondary,
                        { backgroundColor: "var(--color-lime)", color: "#111111" },
                        0,
                    );
                }
            },
            { defaults: { duration: DURATION, ease: EASE } },
        );
    }, [heroRef]);

    const exit = useCallback(() => {
        const root = heroRef.current;
        if (!root) return;

        const role = root.querySelector(".hero-role");
        const title = root.querySelector(".hero-title");
        const description = root.querySelector(".hero-description");
        const primary = root.querySelector(".primary-button");
        const secondary = root.querySelector(".secondary-button");
        const targets = [role, title, description, primary, secondary].filter(Boolean);

        controllerRef.current.runTimeline(
            (tl) => {
                if (role) tl.to(role, { color: "var(--color-secondary-text)" }, 0);
                if (title) tl.to(title, { color: "var(--color-text)" }, 0);
                if (description) {
                    tl.to(description, { color: "var(--color-secondary-text)" }, 0);
                }
                if (primary) {
                    tl.to(
                        primary,
                        {
                            color: "var(--color-bg)",
                            backgroundColor: "var(--color-invert-bg)",
                        },
                        0,
                    );
                }
                if (secondary) {
                    tl.to(
                        secondary,
                        {
                            color: "var(--color-text)",
                            backgroundColor: "var(--color-card)",
                        },
                        0,
                    );
                }
            },
            {
                defaults: { duration: DURATION, ease: EASE },
                onComplete: () => {
                    clearInlineProps(targets, "color,backgroundColor");
                },
            },
        );
    }, [heroRef]);

    return { enter, exit };
}

export default useHeroHoverAnimation;
