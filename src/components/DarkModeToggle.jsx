import React from 'react'
import darkModeImg from '../assets/dark_mode1.svg'
import lightModeImg from '../assets/light_mode1.svg'

function DarkModeToggle({ darkMode, toggleDarkMode }) {
  return (
    <button 
      onClick={toggleDarkMode}
      // Zde dynamicky měníme barvy podle stavu darkMode
      className={`fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full border flex items-center justify-center text-xl shadow-lg cursor-pointer transition-all duration-300 hover:scale-110 active:scale-95 backdrop-blur-md
        ${darkMode 
          ? 'bg-slate-800 border-slate-700 hover:bg-slate-700 text-white' 
          : 'bg-white border-slate-200 hover:bg-slate-50 text-slate-800'
        }`}
    >
      {darkMode ? (
        <img 
          src={lightModeImg} 
          alt="Sun" 
          className="w-5 h-5 object-contain invert dark:invert-0" 
        />
      ) : (
        <img 
          src={darkModeImg} 
          alt="Moon" 
          className="w-5 h-5 object-contain" 
        />
      )}
    </button>
  )
}

export default DarkModeToggle