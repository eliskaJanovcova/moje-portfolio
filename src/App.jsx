import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { useState } from 'react'


function App() {

  // 💡 Stav i funkce musí žít UVNITŘ komponenty
      const [darkMode, setDarkMode] = useState(false);
  
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
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Hero />
      <div className="hidden md:block h-16"></div>
    </div>
  )
}

export default App