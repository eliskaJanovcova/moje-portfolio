import logo from '../assets/logo/SVG/white.svg'

function Navbar() {
    return (
        <nav className="w-full max-w-6xl mx-auto px-6 py-4 flex justify-between items-center text-white">
            <div className="flex items-center">
                <img src={logo} alt="E.J. Logo" className="h-8 w-auto object-contain cursor-pointer" />
            </div>

            <div className="flex gap-6 font-medium">
                <p className="hover:text-[#8CFF98] transition-colors cursor-pointer text-slate-400">Projects</p>
                <p className="text-[#8CFF98] cursor-pointer">About</p>
                <p className="hover:text-[#8CFF98] transition-colors cursor-pointer text-slate-400">Contact</p>
            </div>
        </nav>
    )
}

export default Navbar