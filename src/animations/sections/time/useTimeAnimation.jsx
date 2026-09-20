import { createHoverTweenController, clearInlineProps } from "../../core/hoverTween.js";
import { useRef, useCallback } from "react";

const DURATION = 0.28;
const EASE = "power2.out";

function useTimeAnimation() {
    const controllerRef = useRef(null);
    if (!controllerRef.current) {
        controllerRef.current = createHoverTweenController();
    }

    const enter = useCallback((e) => {
        const target = e.currentTarget.querySelectorAll('.clock-digit, .hoverTheme')
        controllerRef.current.run(target ,{
            duration: DURATION,
            ease: EASE,
            color: "#111111"
        })
    }, [])
    const exit = useCallback((e) => {
        const target = e.currentTarget.querySelectorAll('.clock-digit, .hoverTheme')
        controllerRef.current.runTimeline({} ,{
            defaults: {duration: DURATION, ease: EASE,},
            onComplete: () => {
                clearInlineProps(target ,"color")
            }
        })
    }, [])
    return {enter, exit}
}
export default useTimeAnimation;
