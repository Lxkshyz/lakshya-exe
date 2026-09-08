export default function NavigationItems({ children }) {
    return (
        <div className="flex justify-between items-center gap-2">
            <div className="flex items-center border-3 border-border rounded-full px-3.5 py-2">
                <a href="/" className="font-mono text-text text-xs">WORK</a>
            </div>
            <div className="flex items-center border-3 border-border rounded-full px-3.5 py-2">
                <a href="/" className="font-mono text-text text-xs">ABOUT</a>
            </div>
            <div className="flex items-center border-3 border-border rounded-full px-3 py-2">
                <a href="/" className="font-mono text-text text-xs">CONTACT</a>
            </div>
        </div>
    )
}