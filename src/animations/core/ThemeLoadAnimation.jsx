import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function useThemeLoadAnimation(scope) {
    useGSAP(
        () => {
            gsap.from(".section-box", {
                opacity: 0,
                x: -5,
                duration: 1,
                stagger: {
                    each: 0.12,
                    from: "start",
                },
                ease: "power2.out",
            });
        },
        [scope]
    );
}

export default useThemeLoadAnimation;