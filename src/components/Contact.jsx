function Contact() {

    return (
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
    )
}

export default Contact