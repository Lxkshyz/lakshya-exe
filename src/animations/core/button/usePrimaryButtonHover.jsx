import {useCallback, useRef} from "react";
import {createHoverTweenController} from "../hoverTween.js";

const DURATION = 0.3;
const EASE = "power2.out";

function usePrimaryButtonHover() {
    const controllerRef = useRef(null);

    if (!controllerRef.current) {
        controllerRef.current = createHoverTweenController();
    }
    return useCallback((e) => {
        const el = e.currentTarget;

        controllerRef.current.runTimeline(
            (tl) => {
                tl.to(el, {
                    scale: 0.97,
                });

                tl.to(el, {
                    scale: 1,
                });
            },
            {
                defaults: {
                    duration: DURATION,
                    ease: EASE,
                },
            }
        );
    }, []);
}

export default usePrimaryButtonHover;