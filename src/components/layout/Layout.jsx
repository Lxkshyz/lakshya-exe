import { useRef } from "react";
import useThemeLoadAnimation from "../../animations/core/ThemeLoadAnimation.jsx";

function Layout({ children }) {
    const scope = useRef(null);
    useThemeLoadAnimation(scope);

    return (
        <main
            ref={scope}
            className="grid grid-cols-12 text-text mt-4 mb-4 md:mt-6 md:mb-6 gap-3"
        >
            {children}
        </main>
    );
}

export default Layout;
