function Layout({children}) {
    return (
        <main className="grid grid-cols-12 text-text mt-4 mb-4 md:mt-6 md:mb-6 gap-3">
            {children}
        </main>
    )
}
export default Layout;