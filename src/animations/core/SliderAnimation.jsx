import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

function useSliderAnimation(sliderRef, open, onClosed) {
    useLayoutEffect(() => {
        const el = sliderRef.current;
        if (!el) return;

        gsap.killTweensOf(el);

        if (open) {
            gsap.fromTo(
                el,
                { yPercent: 100 },
                {
                    yPercent: 0,
                    duration: 0.45,
                    ease: "power3.out",
                    overwrite: true,
                },
            );
            return;
        }

        gsap.to(el, {
            yPercent: 100,
            duration: 0.35,
            ease: "power3.in",
            overwrite: true,
            onComplete: onClosed,
        });
    }, [open, sliderRef, onClosed]);
}

export default useSliderAnimation;
