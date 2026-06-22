import React from 'react'

function Skills() {
  // 🎨 Pole s našimi nástroji – můžeš si sem kdykoliv připsat další
  const tools = [
    { name: 'Figma', category: 'UI/UX Design' },
    { name: 'Adobe Photoshop', category: 'Graphic Design' },
    { name: 'VS Code', category: 'Development' },
    { name: 'React', category: 'Development' },
    { name: 'Tailwind CSS', category: 'UI Styling' },
  ]

  return (
    <section
      id="skills"
      className="min-h-[60vh] flex flex-col items-center justify-center w-full max-w-6xl mx-auto px-6 py-24 text-center border-t border-card-border relative"
    >
      {/* Sémantický kód na pozadí sekce */}
      <div className="absolute top-8 left-6 text-xs font-mono text-brand-secondary/70 dark:text-brand-primary/50 tracking-widest">
        // 02. TECH_STACK
      </div>

      <h2 className="text-4xl font-bold mb-4 tracking-tight text-brand-text">Nástroje & Technologie</h2>
      <p className="text-brand-secondary max-w-md mx-auto text-sm mb-12">
        Tohle je moje digitální výbava, kterou denně používám k propojování designu s čistým kódem.
      </p>

      {/* Moderní responzivní mřížka pro nástroje */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 w-full max-w-4xl">
        {tools.map((tool, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-6 rounded-xl border border-card-border bg-card-bg shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] transition-all duration-300 hover:scale-105 hover:border-brand-primary/40 group"
          >
            {/* Tady v budoucnu můžeme přidat samostatné SVG ikony log */}
            <div className="w-10 h-10 rounded-lg bg-brand-bg flex items-center justify-center font-bold text-xl text-brand-primary mb-3 shadow-md group-hover:bg-brand-primary group-hover:text-brand-bg transition-colors duration-300">
              {tool.name[0]}
            </div>
            
            <h3 className="font-semibold text-brand-text text-base">{tool.name}</h3>
            <span className="text-xs text-brand-secondary mt-1">{tool.category}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills