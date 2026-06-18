import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProjectCard from './components/ProjectCard'
import DarkModeToggle from './components/DarkModeToggle'
import { useState, useEffect } from 'react'

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

  // 🔮 MAGICKÝ SCROLL-SPY: Sleduje, kde se uživatel zrovna nachází
  useEffect(() => {
    // Definujeme sekce, které chceme na stránce sledovat
    const sectionIds = ['about', 'projects', 'contact'];

    const observerOptions = {
      root: null, // Sleduje se výřez celého okna prohlížeče
      rootMargin: '-30% 0px -60% 0px', // Spustí se, když je sekce zhruba uprostřed obrazovky
      threshold: 0 // Stačí, když se objeví kousíček sekce
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        // Pokud sekce vstoupila do našeho sledovaného výřezu, přepni aktivní záložku
        if (entry.isIntersecting) {
          setActiveTab(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Přikážeme observeru, aby začal hlídat všechny naše sekce podle jejich ID
    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    // Rychlý úklid v paměti prohlížeče, když uživatel web zavře
    return () => observer.disconnect();
  }, []); // Prázdné pole znamená, že se toto sledování zapne pouze jednou při načtení webu

  return (
    <div className="min-h-screen bg-brand-bg text-brand-text flex flex-col px-4 transition-colors duration-300 scroll-smooth pt-24">      {/* Navbar necháme nahoře, zítra z něj uděláme fixní lištu */}
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
          className="min-h-[90vh] flex flex-col items-center justify-center w-full max-w-6xl mx-auto px-6 py-24 text-center border-t border-card-border relative"
        >
          <ProjectCard id="01" title="Redesign mobilní aplikace" description="Kompletní proces od výzkumení uživatelů až po pixel-perfect prototyp ve Figmě." />
          <ProjectCard id="02" title=" redesign webové stránky" description="Modernizace a optimalizace uživatelského rozhraní pro e-commerce platformu." />

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

      {/* 🔮 MODERNÍ PLOVOUCÍ GLASSMORPHIC TLAČÍTKO */}
      <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      {/* Distanční prvek na konec */}
      <div className="hidden md:block h-16"></div>
    </div>
  )
}

export default App