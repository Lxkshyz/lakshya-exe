import ThemeButton from "../ui/Button/ThemeButton.jsx";

function Header() {
    return (
        <header>
            <nav className="flex justify-between items-center lg: py-4">
                <div className="logo flex-1 flex items-center font-archiveblack">
                    <span className="text-text text-lg md:text-xl">LKSH</span><span className="text-pink">.</span>
                </div>
                <div className="flex justify-between items-center gap-1 md:gap-3">
                    <div className="flex items-center border-3 border-border rounded-full px-3 md:px-3.5 py-2">
                        <a href="/lakshya-exe/public" className="font-mono text-text text-[12px] md:text-md">WORK</a>
                    </div>
                    <div className="flex items-center border-3 border-border rounded-full px-3 md:px-3.5 py-2">
                        <a href="/lakshya-exe/public" className="font-mono text-text text-[12px] md:text-md">ABOUT</a>
                    </div>
                    <div className="flex items-center border-3 border-border rounded-full px-3 md:px-3.5 py-2">
                        <a href="/lakshya-exe/public" className="font-mono text-text text-[12px] md:text-md">CONTACT</a>
                    </div>

                    <ThemeButton />
                </div>
            </nav>
        </header>
    );
}
export default Header;