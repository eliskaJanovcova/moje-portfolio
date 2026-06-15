import Navbar from './components/Navbar'
import Hero from './components/Hero'

function App() {
  return (
    <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-between text-white px-4">
      <Navbar />
      <Hero />
      <div className="hidden md:block h-16"></div>
    </div>
  )
}

export default App