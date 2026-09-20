import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import useSliderAnimation from "../../animations/core/SliderAnimation.jsx";
import useSectionHoverAnimation from "../../animations/core/useSectionHoverAnimation.jsx";

function Slider({ open, onClose, children }) {
    const sliderRef = useRef(null);
    const [mounted, setMounted] = useState(open);

    const { enter, exit } =
        useSectionHoverAnimation("var(--color-orange)");

    useEffect(() => {
        if (open) {
            setMounted(true);
        }
    }, [open]);

    useEffect(() => {
        if (!mounted) return;

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = previousOverflow;
        };
    }, [mounted]);

    const handleClosed = () => {
        setMounted(false);
    };

    useSliderAnimation(sliderRef, open, handleClosed);

    if (!mounted) return null;

    return createPortal(
        <>
            <button
                type="button"
                aria-label="Close slider"
                onClick={onClose}
                className="hoverColor fixed inset-0 z-40 cursor-default bg-black/40"
            />

            <div
                ref={sliderRef}
                className="
                    fixed bottom-0 left-0 z-50
                    h-[70vh] w-screen
                    overflow-hidden
                    rounded-t-4xl
                    border-4 border-b-0 border-border
                    bg-orange
                "
            >
                <div className="h-full overflow-y-auto overscroll-contain p-8">
                    {children}
                </div>
            </div>
        </>,
        document.body
    );
}

export default Slider;