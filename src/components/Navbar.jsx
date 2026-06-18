import logoLight from '../assets/logo/SVG/black.svg'
import logoDark from '../assets/logo/SVG/green.svg'

function Navbar({ darkMode, toggleDarkMode, activeTab, setActiveTab }) {

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 w-full bg-brand-bg/70 backdrop-blur-md border-b border-slate-800/20 px-6 py-4 flex justify-between items-center text-brand-text transition-colors duration-300">            {/* LOGO */}
            <div className="flex items-center">
                <img src={darkMode ? logoDark : logoLight}
                    alt="E.J. Logo"
                    className="h-14 w-auto object-contain cursor-pointer" />
            </div>

            {/* ODKAZY A TLAČÍTKO */}
            <div className="flex items-center gap-6 font-medium">
                
                <a
                    href="#about"
                    onClick={() => setActiveTab('about')}
                    className={`transition-colors cursor-pointer ${activeTab === 'about' ? 'text-brand-primary' : 'text-brand-secondary hover:text-brand-primary'}`}
                >
                    About
                </a>

                <a
                    href="#projects"
                    onClick={() => setActiveTab('projects')}
                    className={`transition-colors cursor-pointer ${activeTab === 'projects' ? 'text-brand-primary' : 'text-brand-secondary hover:text-brand-primary'}`}
                >
                    Projects
                </a>


                <a
                    href="#contact"
                    onClick={() => setActiveTab('contact')}
                    className={`transition-colors cursor-pointer ${activeTab === 'contact' ? 'text-brand-primary' : 'text-brand-secondary hover:text-brand-primary'}`}
                >
                    Contact
                </a>

            </div>
        </nav>
    )
}

export default Navbar