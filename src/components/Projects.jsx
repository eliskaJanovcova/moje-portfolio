import React from 'react'
import ProjectCard from './ProjectCard' // Importujeme kartu, protože ji tu používáme

function Projects() {
    return (
        <section
            id="projects"
            className="min-h-[90vh] flex flex-col items-center justify-center w-full max-w-6xl mx-auto px-6 py-24 text-center border-t border-card-border relative"
        >
            {/* Index sekce na pozadí */}
            <div className="absolute top-8 left-6 text-xs font-mono text-brand-secondary/70 dark:text-brand-primary/50 tracking-widest">
        // 01. SELECTED_WORKS
            </div>

            <h2 className="text-4xl font-bold mb-4 tracking-tight text-brand-text">Moje Případové Studie</h2>
            <p className="text-brand-secondary max-w-md mx-auto text-sm mb-6">Tady brzy vyroste přehled mých UX/UI projektů.</p>

            {/* Seznam tvých znovupoužitelných karet s props */}
            <ProjectCard
                id="01"
                title="Redesign mobilní aplikace"
                description="Kompletní proces od výzkumení uživatelů až po pixel-perfect prototyp ve Figmě."
            />
            <ProjectCard
                id="02"
                title="Redesign webové stránky"
                description="Modernizace a optimalizace uživatelského rozhraní pro e-commerce platformu."
            />
        </section>
    )
}

export default Projects