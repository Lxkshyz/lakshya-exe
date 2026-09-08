import ThemeButton from "./ThemeButton.jsx";
import NavigationItems from "./NavigationItems.jsx";
export default function Navigation() {
    return (
        <header className="px-2.5 py-4">
            <nav className="flex justify-between items-center">
                <div className="logo flex-1 flex items-center font-archiveblack">
                    <span className="text-text text-xl">LKSH</span><span className="text-[#FF3CAC]">.</span>
                </div>
                <NavigationItems />
                <ThemeButton />
            </nav>
        </header>
    )
}