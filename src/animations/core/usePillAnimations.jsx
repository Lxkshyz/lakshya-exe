import { useCallback, useRef } from "react";
import { clearInlineProps, createHoverTweenController } from "./hoverTween.js";

const DURATION = 0.2;
const EASE = "power2.out";

const usePillAnimations = (pillColor) => {
    const controllerRef = useRef(null);
    if (!controllerRef.current) {
        controllerRef.current = createHoverTweenController();
    }

    const enter = useCallback(
        (e) => {
            controllerRef.current.run(e.currentTarget, {
                duration: DURATION,
                ease: EASE,
                scaleX: 1.08,
                scaleY: 1.08,
                backgroundColor: pillColor,
                borderWidth: "2px",
                color: "#111111",
            });
        },
        [pillColor],
    );

    const exit = useCallback((e) => {
        const el = e.currentTarget;
        controllerRef.current.run(el, {
            duration: DURATION,
            ease: EASE,
            scaleX: 1,
            scaleY: 1,
            backgroundColor: "transparent",
            onComplete: () => {
                clearInlineProps(el, "backgroundColor,scaleX,scaleY,transform");
            },
        });
    }, []);

    return { enter, exit };
};

export default usePillAnimations;
