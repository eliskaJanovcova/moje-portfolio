import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { useState } from 'react'


function App() {

  // 💡 Stav i funkce musí žít UVNITŘ komponenty
  const [darkMode, setDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState('about');

  const toggleDarkMode = () => {
    const nextMode = !darkMode;
    setDarkMode(nextMode);

    if (nextMode) {
      // Přidáme dark do obou hlavních elementů
      document.documentElement.classList.add('dark');
      document.body.classList.add('dark');
    } else {
      // Odebereme dark z obou hlavních elementů
      document.documentElement.classList.remove('dark');
      document.body.classList.remove('dark');
    }
  };

  return (
    <div className="min-h-screen bg-brand-bg text-brand-text flex flex-col px-4 transition-colors duration-300">
      {/* Navbar necháme nahoře, zítra z něj uděláme fixní lištu */}
      <Navbar
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {/* 🛠️ Nová One-Page struktura: Všechny sekce jsou pod sebou a mají své ID */}
      <main className="flex-grow">
        {/* 1. SEKCE: HERO / ABOUT */}
        <section id="about" className="min-h-[90vh] flex items-center justify-center py-12">
          <Hero />
        </section>

        {/* 2. SEKCE: PROJECTS – Výraznější linka s lehkým zářením v dark modu */}
        <section
          id="projects"
          className="min-h-[90vh] flex flex-col items-center justify-center w-full max-w-6xl mx-auto px-6 py-24 text-center border-t border-slate-700/40 dark:border-brand-primary/20 relative"
        >
          {/* Výraznější sémantický kód na pozadí */}
          <div className="absolute top-8 left-6 text-xs font-mono text-brand-secondary/70 dark:text-brand-primary/50 tracking-widest">
      // 01. SELECTED_WORKS
          </div>

          <h2 className="text-4xl font-bold mb-4 tracking-tight">Moje Případové Studie</h2>
          <p className="text-brand-secondary max-w-md mx-auto text-sm">Tady brzy vyroste přehled mých UX/UI projektů.</p>

          {/* 🛠️ Kontrastnější karta projektu s jemným podsvícením */}
          <div className="mt-12 p-8 bg-slate-900/60 dark:bg-slate-950/70 rounded-xl border border-slate-700/50 dark:border-slate-800/80 cursor-pointer hover:border-brand-primary/80 dark:hover:border-brand-primary transition-all duration-300 w-full max-w-2xl text-left hover:scale-[1.01] shadow-md dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_10px_30px_rgba(0,0,0,0.3)] group">
            <p className="text-xs text-brand-primary font-mono mb-2 tracking-wider">CASE STUDY #01</p>
            <h3 className="text-xl font-bold text-brand-text group-hover:text-brand-primary transition-colors">Redesign mobilní aplikace</h3>
            <p className="text-sm text-brand-secondary mt-2">Kompletní proces od výzkumení uživatelů až po pixel-perfect prototyp ve Figmě.</p>
            <p className="text-xs text-brand-primary mt-6 font-medium flex items-center gap-1 group-hover:translate-x-1 transition-transform">
              Zjistit více <span className="text-xs">→</span>
            </p>
          </div>
        </section>

        {/* 3. SEKCE: CONTACT – Kontrastnější linka a akcentované tlačítko */}
        <section
          id="contact"
          className="min-h-[85vh] flex flex-col items-center justify-center w-full max-w-6xl mx-auto px-6 py-24 text-center border-t border-slate-700/40 dark:border-brand-primary/20 relative"
        >
          <div className="absolute top-8 left-6 text-xs font-mono text-brand-secondary/70 dark:text-brand-primary/50 tracking-widest">
      // 02. CONNECT
          </div>

          <h2 className="text-4xl font-bold mb-4 tracking-tight">Napiš mi</h2>
          <p className="text-brand-secondary max-w-md mx-auto text-sm mb-8">
            Máš zájem o spolupráci nebo chceš jen pokecat o designu? Moje schránka je otevřená.
          </p>

          <a
            href="mailto:eliska@email.cz"
            className="border border-brand-primary/50 text-brand-primary bg-brand-primary/5 px-8 py-4 rounded-lg hover:bg-brand-primary hover:text-brand-bg transition-all duration-300 font-medium tracking-wide shadow-[0_0_15px_rgba(140,255,152,0.1)] dark:shadow-[0_0_25px_rgba(140,255,152,0.15)]"
          >
            eliska@email.cz
          </a>
        </section>
      </main>

      {/* Distanční prvek na konec */}
      <div className="hidden md:block h-16"></div>
    </div>
  )
}

export default App