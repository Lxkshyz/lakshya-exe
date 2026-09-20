import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

function RollingNumber({ value, className = "" }) {
    const currentRef = useRef(null);
    const nextRef = useRef(null);
    const previousValue = useRef(null);
    const display = String(value);

    useLayoutEffect(() => {
        const current = currentRef.current;
        const next = nextRef.current;

        if (!current || !next) return;
        if (previousValue.current === display) return;

        current.textContent = previousValue.current;
        next.textContent = display;

        gsap.set(current, { yPercent: 0 });
        gsap.set(next, { yPercent: -100 });

        gsap.timeline({
                defaults: {
                    duration: 0.3,
                    ease: "power2.out",
                },
                onComplete: () => {
                    current.textContent = display;
                    gsap.set(current, { yPercent: 0 });
                    gsap.set(next, { yPercent: -100 });
                    next.textContent = "";
                },
            })
            .to(current, { yPercent: 100 })
            .to(next, { yPercent: 0 }, "<");

        previousValue.current = display;
    }, [display]);

    return (
        <span className={`clock-digit ${className}`} aria-hidden="true">
            <span className="clock-digit-sizer">{display}</span>
            <span ref={currentRef} className="clock-digit-face" />
            <span ref={nextRef} className="clock-digit-face" />
        </span>
    );
}

export default RollingNumber;
