import { useCallback, useRef } from "react";
import {
    clearInlineProps,
    createHoverTweenController,
} from "./hoverTween.js";

const DURATION = 0.28;
const EASE = "power2.out";

function getHoverText(el) {
    return [...el.querySelectorAll(".hoverColor")].filter(
        (node) => node.closest(".section-box") === el,
    );
}

function useSectionHoverAnimation(sectionColor) {
    const controllerRef = useRef(null);

    if (!controllerRef.current) {
        controllerRef.current = createHoverTweenController();
    }

    const enter = useCallback(
        (e) => {
            const el = e.currentTarget;
            const text = getHoverText(el);

            text.forEach((node) => {
                if (!node.dataset.originalColor) {
                    node.dataset.originalColor = getComputedStyle(node).color;
                }
            });

            controllerRef.current.runTimeline(
                (tl) => {
                    tl.to(
                        el,
                        {
                            x: -5,
                            y: -5,
                            borderColor: "#111111",
                            boxShadow: "6px 6px 0px var(--color-border)",
                            backgroundColor: sectionColor,
                        },
                        0,
                    );

                    if (text.length) {
                        tl.to(text, { color: "#111111" }, 0);
                    }
                },
                { defaults: { duration: DURATION, ease: EASE } },
            );
        },
        [sectionColor],
    );

    const exit = useCallback((e) => {
        const el = e.currentTarget;
        const text = getHoverText(el);

        controllerRef.current.runTimeline(
            (tl) => {
                tl.to(
                    el,
                    {
                        x: 0,
                        y: 0,
                        borderColor: "var(--color-border)",
                        boxShadow: "0px 0px 0px transparent",
                        backgroundColor: "var(--color-card)",
                    },
                    0,
                );

                text.forEach((node) => {
                    tl.to(
                        node,
                        { color: node.dataset.originalColor },
                        0,
                    );
                });
            },
            {
                defaults: { duration: DURATION, ease: EASE },
                onComplete: () => {
                    clearInlineProps(
                        el,
                        "borderColor,boxShadow,backgroundColor,x,y,transform",
                    );
                    clearInlineProps(text, "color");
                    text.forEach((node) => delete node.dataset.originalColor);
                },
            },
        );
    }, []);

    return { enter, exit };
}

export default useSectionHoverAnimation;
