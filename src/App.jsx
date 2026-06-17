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
    <div className="min-h-screen bg-brand-bg text-brand-text flex flex-col justify-between px-4 transition-colors duration-300">
      <Navbar darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      {activeTab === 'about' && <Hero />}

      {activeTab === 'projects' && (
        <section className="w-full max-w-6xl mx-auto px-6 py-12 text-center">
          <h2 className="text-4xl font-bold mb-4">My projects</h2>
          <p className="text-brand-secondary">Here are some of my recent projects...</p>
        </section>
      )}

      {activeTab === 'contact' && (
        <section className="w-full max-w-6xl mx-auto px-6 py-12 text-center">
          <h2 className="text-4xl font-bold mb-4">My contact</h2>
          <p className="text-brand-secondary">Here are my contact details...</p>
        </section>
      )}      <div className="hidden md:block h-16"></div>
    </div>
  )
}

export default App