import React from 'react'

// 1. IMPORT OBRÁZKŮ (Uprav si názvy souborů podle toho, jak je máš v assets)
import figmaIcon from '../assets/logo/SVG/black.svg'
import photoshopIcon from '../assets/logo/SVG/black.svg'
import vscodeIcon from '../assets/logo/SVG/black.svg'
import reactIcon from '../assets/logo/SVG/black.svg'
import tailwindIcon from '../assets/logo/SVG/black.svg'

function Skills() {
    // 🎨 Přehledné pole s nástroji, kategoriemi a naimportovanými obrázky
    const tools = [
        { name: 'Figma', category: 'design', icon: figmaIcon },
        { name: 'Miro', category: 'design', icon: figmaIcon },
        { name: 'Adobe Photoshop', category: 'design', icon: photoshopIcon },
        { name: 'Adobe Illustrator', category: 'design', icon: photoshopIcon },
        { name: 'VS Code', category: 'dev', icon: vscodeIcon },
        { name: 'React', category: 'dev', icon: reactIcon },
        { name: 'Tailwind CSS', category: 'dev', icon: tailwindIcon }
    ]

    // 🔍 POMOCNÁ FUNKCE: Vygeneruje mřížku pro konkrétní přefiltrovanou kategorii
    const renderSkillGrid = (categoryName) => {
        return (
            /* 🎯 Tady se stala ta kouzla: Zapneme flex, flex-wrap pro zalamování a dokonale vycentrujeme přes justify-center */
            <div className="flex flex-wrap items-center justify-center gap-4 w-full">
                {tools
                    .filter((tool) => tool.category === categoryName)
                    .map((tool, index) => (
                        <div
                            key={index}
                            /* Přidali jsme w-40 pro stabilní šířku karet, aby měly v řadě stejný rozměr */
                            className="flex flex-col items-center justify-center p-6 w-40 h-40 rounded-xl border border-card-border bg-card-bg shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] transition-all duration-300 hover:scale-105 hover:border-brand-primary/40 group text-center"
                        >
                            {/* Obal pro PNG ikonu */}
                            <div className="w-12 h-12 rounded-lg bg-brand-bg flex items-center justify-center p-2.5 shrink-0 mb-3 shadow-md group-hover:bg-brand-primary/10 transition-colors duration-300">
                                <img
                                    src={tool.icon}
                                    alt={`${tool.name} logo`}
                                    className="w-full h-full object-contain mx-auto transition-transform duration-300 group-hover:scale-110"
                                />
                            </div>

                            <div>
                                <h4 className="font-semibold text-brand-text text-sm leading-tight">{tool.name}</h4>
                            </div>
                        </div>
                    ))}
            </div>
        )
    }

    return (
        <section
            id="skills"
            className="min-h-[80vh] flex flex-col items-center justify-center w-full max-w-6xl mx-auto px-6 py-24 border-t border-card-border relative"
        >
            {/* Sémantický index na pozadí */}
            <div className="absolute top-8 left-6 text-xs font-mono text-brand-secondary/70 dark:text-brand-primary/50 tracking-widest">
        // 03. TECH_STACK
            </div>

            <h2 className="text-4xl font-bold mb-4 tracking-tight text-brand-text text-center">Nástroje & Technologie</h2>
            <p className="text-brand-secondary max-w-md mx-auto text-sm mb-20 text-center">
                Tohle je moje digitální výbava, kterou denně používám k propojování designu s čistým kódem.
            </p>

            {/* 🏁 CENTROVANÝ VERTIKÁLNÍ LAYOUT: items-center a text-center udělají tu pravou symetrii */}
            <div className="flex flex-col gap-16 w-full max-w-4xl items-center text-center">

                {/* 01 KATEGORIE: UI/UX DESIGN */}
                <div className="flex flex-col gap-6 w-full items-center">
                    <div className="flex items-center justify-center gap-2 pb-2 border-b border-card-border w-full max-w-md">
                        <span className="text-xs font-mono text-brand-primary">01 /</span>
                        <h3 className="text-lg font-bold tracking-tight text-brand-text uppercase">UI/UX Design</h3>
                    </div>
                    {renderSkillGrid('design')}
                </div>

                {/* 02 KATEGORIE: FRONTEND DEVELOPMENT */}
                <div className="flex flex-col gap-6 w-full items-center">
                    <div className="flex items-center justify-center gap-2 pb-2 border-b border-card-border w-full max-w-md">
                        <span className="text-xs font-mono text-brand-primary">02 /</span>
                        <h3 className="text-lg font-bold tracking-tight text-brand-text uppercase">Development</h3>
                    </div>
                    {renderSkillGrid('dev')}
                </div>

            </div>
        </section>
    )
}

export default Skills