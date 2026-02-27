export default function BottomCTA() {
    return (
        <section className="relative bg-[#0a0a0a] py-32 lg:py-40 overflow-hidden">
            {/* Subtle background glow */}
            <div className="absolute inset-0 pointer-events-none">
                <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10 blur-[150px]"
                    style={{
                        background: 'radial-gradient(circle, #2563EB 0%, transparent 70%)',
                    }}
                />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto px-8 text-center">
                <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1]">
                    Ready to ship<br />your MVP<span className="text-[#2563EB]">?</span>
                </h2>
                <p className="text-gray-400 text-lg sm:text-xl mt-6 max-w-lg mx-auto">
                    Let's turn your idea into a product users love — designed to ship, built to raise.
                </p>
                <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a
                        href="#"
                        className="inline-flex items-center gap-2 bg-[#2563EB] text-white text-base font-semibold px-8 py-4 rounded-full hover:bg-[#1d4ed8] hover:scale-105 transition-all duration-200 shadow-lg shadow-[#2563EB]/20"
                    >
                        Let's Talk
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                    <a
                        href="#"
                        className="inline-flex items-center gap-2 text-gray-400 text-base font-medium px-8 py-4 rounded-full border border-white/10 hover:border-white/30 hover:text-white transition-all duration-200"
                    >
                        View Case Studies
                    </a>
                </div>
            </div>

            {/* Bottom edge line */}
            <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </section>
    );
}
