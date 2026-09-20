import { useCallback, useRef } from "react";
import { clearInlineProps, createHoverTweenController } from "./hoverTween.js";

const DURATION = 0.28;
const EASE = "power2.out";

function useSectionHoverAnimation(sectionColor) {
    const controllerRef = useRef(null);
    if (!controllerRef.current) {
        controllerRef.current = createHoverTweenController();
    }

    const enter = useCallback(
        (e) => {
            const el = e.currentTarget;
            controllerRef.current.run(el, {
                duration: DURATION,
                ease: EASE,
                x: -5,
                y: -5,
                borderColor: "#111111",
                boxShadow: "6px 6px 0px var(--color-border)",
                backgroundColor: sectionColor,
            });
        },
        [sectionColor],
    );

    const exit = useCallback((e) => {
        const el = e.currentTarget;
        controllerRef.current.run(el, {
            duration: DURATION,
            ease: EASE,
            x: 0,
            y: 0,
            borderColor: "var(--color-border)",
            boxShadow: "0px 0px 0px transparent",
            backgroundColor: "var(--color-card)",
            onComplete: () => {
                clearInlineProps(el, "borderColor,boxShadow,backgroundColor,x,y,transform");
            },
        });
    }, []);

    return { enter, exit };
}

export default useSectionHoverAnimation;
