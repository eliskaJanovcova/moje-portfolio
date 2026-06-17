import logoLight from '../assets/logo/SVG/black.svg'
import logoDark from '../assets/logo/SVG/green.svg'

function Navbar({ darkMode, toggleDarkMode, activeTab, setActiveTab }) {

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
                <p
                    onClick={() => setActiveTab('projects')}
                    className={`transition-colors cursor-pointer ${activeTab === 'projects' ? 'text-brand-primary' : 'text-brand-secondary hover:text-brand-primary'}`}
                >
                    Projects
                </p>

                <p
                    onClick={() => setActiveTab('about')}
                    className={`transition-colors cursor-pointer ${activeTab === 'about' ? 'text-brand-primary' : 'text-brand-secondary hover:text-brand-primary'}`}
                >
                    About
                </p>

                <p
                    onClick={() => setActiveTab('contact')}
                    className={`transition-colors cursor-pointer ${activeTab === 'contact' ? 'text-brand-primary' : 'text-brand-secondary hover:text-brand-primary'}`}
                >
                    Contact
                </p>
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