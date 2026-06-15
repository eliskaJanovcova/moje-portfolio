import Navbar from './components/Navbar'

function App() {
  return (
    <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center text-white px-4">
      <Navbar />
      <h1 className="text-5xl font-bold text-teal-400 mb-4">Moje UX/UI Portfolio</h1>
      <p className="text-slate-400 text-lg max-w-md text-center mb-6">Ahoj, jsem designérka a tohle je můj budoucí web.</p>
      <button className="bg-teal-500 hover:bg-teal-600 px-6 py-3 rounded-lg transition-colors">Zobrazit projekty</button>
    </div>
  )
}

export default App