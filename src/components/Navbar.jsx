import logoLight from '../assets/logo/SVG/black.svg'

import logoDark from '../assets/logo/SVG/green.svg'

function Navbar({ darkMode, toggleDarkMode }) {

    return (
        <nav className="w-full max-w-6xl mx-auto px-6 py-4 flex justify-between items-center text-brand-text">
            {/* LOGO */}
            <div className="flex items-center">
                <img src={darkMode ? logoDark : logoLight} 
        alt="E.J. Logo" 
        className="h-14 w-auto object-contain cursor-pointer" />
            </div>

            {/* ODKAZY A TLAČÍTKO */}
            <div className="flex items-center gap-6 font-medium">
                <p className="hover:text-brand-primary transition-colors cursor-pointer text-brand-secondary">Projects</p>
                <p className="text-brand-primary cursor-pointer">About</p>
                <p className="hover:text-brand-primary transition-colors cursor-pointer text-brand-secondary">Contact</p>

                {/* ☀️/🌙 Přepínač, který jsme přidaly do menu */}
                <button
                    onClick={toggleDarkMode}
                    className="ml-2 px-3 py-1.5 rounded-md bg-brand-primary text-brand-bg text-sm font-bold transition-all cursor-pointer hover:scale-105 active:scale-95"
                >
                    {darkMode ? '☀️Light' : '🌙 Dark'}
                </button>
            </div>
        </nav>
    )
}

export default Navbar