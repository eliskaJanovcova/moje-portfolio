import fotka from '../assets/autoportrait/me2.png'

function Hero() {
    return (
        <section className="w-full max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-12 text-[#FFFFFF]">

            {/* LEVÁ STRANA: Texty a Tlačítko */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
                {/* Hlavní text: čistě bílá #FFFFFF */}
                <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-2 text-[#FFFFFF]">
                    ELIŠKA
                </h1>
                {/* Sekundární text: jemná modro-šedá #93A8AC */}
                <p className="text-2xl md:text-3xl text-[#93A8AC] font-light mb-8">
                    UX/UI Designer & Frontend Developer
                </p>

                {/* CTA Tlačítko: neonová #8CFF98 */}
                <button className="border-2 border-[#8CFF98] text-[#8CFF98] px-3 py-3 rounded-lg hover:bg-[#8CFF98] hover:text-[#1C2541] transition-all duration-300 font-medium cursor-pointer">
                    more
                </button>
            </div>

            {/* PRAVÁ STRANA: CSS Grid zaručí, že se záře a fotka od sebe netrhnou v žádném rozlišení */}
            <div className="relative grid grid-cols-1 grid-rows-1 justify-items-center items-center w-64 h-64 md:w-96 md:h-96 shrink-0">

                {/* 1. Zářící kruh: Leží ve stejné mřížce (col-start-1 row-start-1) na pozadí (z-0) */}
                <div className="col-start-1 row-start-1 w-[82%] h-[82%] rounded-full bg-[#1C2541] shadow-[0_0_50px_rgba(140,255,152,0.55)] z-0 pointer-events-none" />

                {/* 2. Fotka: Leží přesně na něm (col-start-1 row-start-1) ve vrstvě nad ním (z-10) */}
                <img
                    src={fotka}
                    alt="Eliška"
                    className="col-start-1 row-start-1 w-full h-full object-contain relative z-10"
                />

            </div>
        </section>
    )
}

export default Hero