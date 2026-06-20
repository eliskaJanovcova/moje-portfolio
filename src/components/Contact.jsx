import React, { useState } from 'react'; // 🌟 OPRAVA: Přidán chybějící import Reactu

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // 🚀 Tvůj přesný endpoint z Formspree
        const formspreeEndpoint = "https://formspree.io/f/maqgwnzo";

        try {
            const response = await fetch(formspreeEndpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                alert('Díky! Zpráva byla úspěšně odeslána na můj e-mail.');
                setFormData({ name: '', email: '', message: '' });
            } else {
                alert('Och, něco se pokazilo. Zkus to prosím znovu.');
            }
        } catch (error) {
            console.error('Chyba při komunikaci s API:', error);
            alert('Chyba sítě. Zkontroluj připojení k internetu.');
        }
    };

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

            <form
                onSubmit={handleSubmit}
                className="w-full max-w-md mx-auto flex flex-col gap-5 text-left mb-12"
            >
                {/* Pole pro Jméno */}
                <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-xs font-mono text-brand-secondary tracking-wide uppercase">Jméno</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-card-border bg-card-bg text-brand-text focus:outline-none focus:border-brand-primary transition-colors duration-200 text-sm"
                        placeholder="Jan Novák"
                    />
                </div>

                {/* Pole pro E-mail */}
                <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-xs font-mono text-brand-secondary tracking-wide uppercase">E-mail</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-card-border bg-card-bg text-brand-text focus:outline-none focus:border-brand-primary transition-colors duration-200 text-sm"
                        placeholder="jan.novak@example.com"
                    />
                </div>

                {/* Pole pro Zprávu */}
                <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="text-xs font-mono text-brand-secondary tracking-wide uppercase">Zpráva</label>
                    <textarea
                        id="message"
                        name="message"
                        required
                        rows="4"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-card-border bg-card-bg text-brand-text focus:outline-none focus:border-brand-primary transition-colors duration-200 text-sm resize-none"
                        placeholder="Tvůj text..."
                    />
                </div>

                {/* Odesílací tlačítko */}
                <button
                    type="submit"
                    className="mt-2 w-full border border-brand-primary text-brand-primary bg-brand-primary/5 px-6 py-3.5 rounded-lg hover:bg-brand-primary hover:text-brand-bg transition-all duration-300 font-medium tracking-wide shadow-[0_0_15px_rgba(140,255,152,0.1)] dark:shadow-[0_0_25px_rgba(140,255,152,0.15)] cursor-pointer text-center"
                >
                    Odeslat zprávu
                </button>
            </form>

            {/* Záložní přímý e-mail */}
            <a
                href="mailto:elissx99@gmail.com"
                className="text-xs font-mono text-brand-secondary hover:text-brand-primary transition-colors duration-200"
            >
                nebo napřímo na: elissx99@gmail.com
            </a>
        </section>
    );
}

export default Contact;