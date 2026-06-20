import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Contact from './components/Contact'
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
      <main className="grow">
        {/* 1. SEKCE: HERO / ABOUT */}
        <Hero />

        {/* 2. SEKCE: PROJECTS – Výraznější linka s lehkým zářením v dark modu */}
        <Projects />

        {/* 3. SEKCE: CONTACT – Kontrastnější linka a akcentované tlačítko */}
        <Contact />

      </main>

      {/* 🔮 MODERNÍ PLOVOUCÍ GLASSMORPHIC TLAČÍTKO */}
      <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      {/* Distanční prvek na konec */}
      <div className="hidden md:block h-16"></div>
    </div>
  )
}

export default App