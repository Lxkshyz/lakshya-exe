import { useCallback, useRef } from "react";
import { clearInlineProps, createHoverTweenController } from "../../core/hoverTween.js";

const DURATION = 0.28;
const EASE = "power2.out";

function useAboutAnimation() {
    const controllerRef = useRef(null);
    if (!controllerRef.current) {
        controllerRef.current = createHoverTweenController();
    }

    const enter = useCallback((e) => {
        const nodes = e.currentTarget.querySelectorAll("h1, p");
        controllerRef.current.run(nodes, {
            duration: DURATION,
            ease: EASE,
            color: "#111111",
        });
    }, []);

    const exit = useCallback((e) => {
        const root = e.currentTarget;
        const title = root.querySelector("h1");
        const paragraphs = root.querySelectorAll("p");
        const targets = [title, ...paragraphs].filter(Boolean);

        controllerRef.current.runTimeline(
            (tl) => {
                if (title) tl.to(title, { color: "var(--color-secondary-text)" }, 0);
                if (paragraphs.length) {
                    tl.to(paragraphs, { color: "var(--color-text)" }, 0);
                }
            },
            {
                defaults: { duration: DURATION, ease: EASE },
                onComplete: () => {
                    clearInlineProps(targets, "color");
                },
            },
        );
    }, []);

    return { enter, exit };
}

export default useAboutAnimation;
