import BottomCTA from '../components/BottomCTA';
import Navbar from '../components/Navbar';



function Hero() {
    return (
        <section className="bg-white text-black pt-32 pb-20 px-8 border-0 shadow-none">
            <div className="max-w-7xl mx-auto border-0 shadow-none">
                <h1 className="text-6xl md:text-[120px] leading-[0.9] tracking-tighter font-medium border-0 shadow-none font-display uppercase mb-16 max-w-6xl">
                    Building Meaningful <br className="hidden md:block" />
                    Digital Experiences.
                </h1>

                <div className="w-full aspect-[16/9] md:aspect-[21/9] overflow-hidden rounded-3xl border-0 shadow-none">
                    <img
                        src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80"
                        alt="Creative Studio Interior"
                        className="w-full h-full object-cover border-0 shadow-none"
                    />
                </div>
            </div>
        </section>
    );
}

function InformationAndMetrics() {
    const metrics = [
        {
            number: "70+",
            label: "Happy Clients",
            description: "Delivering results that keep clients coming back."
        },
        {
            number: "20M",
            label: "Clients Revenue",
            description: "Helping brands turn vision into measurable growth."
        },
        {
            number: "80K",
            label: "Total Growth",
            description: "Driving continuous success through smart strategy."
        },
        {
            number: "15+",
            label: "Years Experience",
            description: "A decade and a half of shipping excellence and design mastery."
        }
    ];

    return (
        <section className="bg-white text-black py-32 px-8 border-0 shadow-none">
            <div className="max-w-7xl mx-auto border-0 shadow-none">
                {/* Introduction Content */}
                <div className="flex flex-col md:flex-row gap-16 md:gap-32 mb-32 border-0 shadow-none">
                    <div className="md:w-1/4 border-0 shadow-none">
                        <h4 className="text-[10px] font-semibold tracking-[0.2em] text-gray-500 uppercase border-0 shadow-none">INFORMATION</h4>
                    </div>
                    <div className="md:w-3/4 border-0 shadow-none">
                        <h2 className="text-[64px] leading-[1.1] text-gray-900 font-medium tracking-tighter border-0 shadow-none font-display">
                            Grabfy is an independent creative agency with more than 15 years of experiences. Worked with brand like Nike, Uber, Meta and more...
                        </h2>
                    </div>
                </div>

                {/* Metrics Content */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 border-0 shadow-none">
                    {metrics.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-[12px] p-10 h-[400px] flex flex-col justify-between border border-[#ededed] shadow-none hover:border-gray-400 transition-colors duration-500"
                        >
                            <div className="border-0 shadow-none">
                                <h3 className="text-6xl font-bold tracking-tighter text-gray-900 mb-4 border-0 shadow-none">
                                    {item.number}
                                </h3>
                                <h4 className="text-xl font-bold text-gray-900 border-0 shadow-none">
                                    {item.label}
                                </h4>
                            </div>
                            <p className="text-sm text-gray-500 leading-relaxed max-w-[200px] font-medium border-0 shadow-none">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function Awards() {
    const awards = [
        { id: "(01)", name: "Webby Awards", nomination: "Creative Excellence", year: "2025" },
        { id: "(02)", name: "CSS Design Awards", nomination: "UI/UX Mastery", year: "2025" },
        { id: "(03)", name: "The FWA", nomination: "Brand Innovation", year: "2024" },
        { id: "(04)", name: "Red Dot Award", nomination: "Top Campaign", year: "2024" },
        { id: "(05)", name: "Innovation Award", nomination: "Agency of the Year", year: "2023" },
        { id: "(06)", name: "UI Design Award", nomination: "Best Visual Design", year: "2022" },
    ];

    return (
        <section className="bg-[#0a0a0a] text-white py-40 px-8 border-0 shadow-none">
            <div className="max-w-7xl mx-auto border-0 shadow-none">
                <div className="flex justify-between items-start mb-32 border-0 shadow-none">
                    <h2 className="text-[144px] font-medium tracking-tighter leading-[0.8] border-0 shadow-none font-display">
                        Awards
                    </h2>
                    <div className="flex items-center gap-2 border-0 shadow-none">
                        <div className="w-16 h-16 md:w-24 md:h-24 rounded-full border border-white flex items-center justify-center border-0 shadow-none">
                            <span className="text-xl md:text-3xl font-bold">C</span>
                        </div>
                        <span className="text-5xl md:text-8xl font-bold tracking-tighter leading-none border-0 shadow-none">25</span>
                    </div>
                </div>

                <div className="border-0 shadow-none">
                    {/* Table Header */}
                    <div className="grid grid-cols-12 border-b border-white/10 pb-6 mb-2 border-0 shadow-none">
                        <div className="col-span-1 border-0 shadow-none"></div>
                        <div className="col-span-5 text-[10px] tracking-[0.2em] text-gray-500 uppercase font-semibold border-0 shadow-none">Award</div>
                        <div className="col-span-4 text-[10px] tracking-[0.2em] text-gray-500 uppercase font-semibold border-0 shadow-none">Nomination</div>
                        <div className="col-span-2 border-0 shadow-none"></div>
                    </div>

                    {/* Table Body */}
                    {awards.map((award) => (
                        <div key={award.id} className="grid grid-cols-12 py-10 border-b border-white/10 items-baseline border-0 shadow-none group hover:bg-white/[0.02] transition-colors">
                            <div className="col-span-1 text-xs text-gray-500 font-medium border-0 shadow-none">
                                {award.id}
                            </div>
                            <div className="col-span-5 text-xl md:text-3xl font-medium tracking-tight border-0 shadow-none">
                                {award.name}
                            </div>
                            <div className="col-span-4 text-sm md:text-lg text-gray-400 font-medium border-0 shadow-none">
                                {award.nomination}
                            </div>
                            <div className="col-span-2 text-right text-lg md:text-2xl font-bold tracking-tighter border-0 shadow-none">
                                {award.year}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function Arsenal() {
    return (
        <section className="bg-[#111111] py-24 overflow-hidden border-y border-gray-800 shadow-none w-full">
            <div className="max-w-7xl mx-auto px-8 mb-16 text-center border-0 shadow-none">
                <h3 className="text-xs font-semibold tracking-[0.2em] text-gray-500 uppercase border-0 shadow-none">Powered by Industry Standards</h3>
            </div>

            <div className="relative flex overflow-hidden w-full border-0 shadow-none">
                <div className="flex whitespace-nowrap animate-marquee items-center border-0 shadow-none">
                    {/* First set */}
                    <span className="text-gray-400 text-3xl font-medium tracking-widest uppercase mx-12 shadow-none border-0">Figma</span>
                    <span className="text-gray-600 text-3xl mx-8 shadow-none border-0">•</span>
                    <span className="text-gray-400 text-3xl font-medium tracking-widest uppercase mx-12 shadow-none border-0">Framer</span>
                    <span className="text-gray-600 text-3xl mx-8 shadow-none border-0">•</span>
                    <span className="text-gray-400 text-3xl font-medium tracking-widest uppercase mx-12 shadow-none border-0">Webflow</span>
                    <span className="text-gray-600 text-3xl mx-8 shadow-none border-0">•</span>
                    <span className="text-gray-400 text-3xl font-medium tracking-widest uppercase mx-12 shadow-none border-0">Tailwind CSS</span>
                    <span className="text-gray-600 text-3xl mx-8 shadow-none border-0">•</span>
                    <span className="text-gray-400 text-3xl font-medium tracking-widest uppercase mx-12 shadow-none border-0">Relume</span>
                    <span className="text-gray-600 text-3xl ml-8 mr-12 shadow-none border-0">•</span>

                    {/* Copied set for seamless loop */}
                    <span className="text-gray-400 text-3xl font-medium tracking-widest uppercase mx-12 shadow-none border-0">Figma</span>
                    <span className="text-gray-600 text-3xl mx-8 shadow-none border-0">•</span>
                    <span className="text-gray-400 text-3xl font-medium tracking-widest uppercase mx-12 shadow-none border-0">Framer</span>
                    <span className="text-gray-600 text-3xl mx-8 shadow-none border-0">•</span>
                    <span className="text-gray-400 text-3xl font-medium tracking-widest uppercase mx-12 shadow-none border-0">Webflow</span>
                    <span className="text-gray-600 text-3xl mx-8 shadow-none border-0">•</span>
                    <span className="text-gray-400 text-3xl font-medium tracking-widest uppercase mx-12 shadow-none border-0">Tailwind CSS</span>
                    <span className="text-gray-600 text-3xl mx-8 shadow-none border-0">•</span>
                    <span className="text-gray-400 text-3xl font-medium tracking-widest uppercase mx-12 shadow-none border-0">Relume</span>
                    <span className="text-gray-600 text-3xl ml-8 mr-12 shadow-none border-0">•</span>
                </div>
            </div>
        </section>
    );
}

function WhyChooseUs() {
    return (
        <section className="bg-white py-32 px-8 border-0 shadow-none">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-16 max-w-7xl mx-auto border-0 shadow-none">
                <div className="md:col-span-5 h-fit sticky top-32 border-0 shadow-none">
                    <h4 className="text-xs font-semibold tracking-[0.2em] text-gray-500 uppercase mb-8 border-0 shadow-none">Why Us?</h4>
                    <h2 className="text-[64px] font-medium tracking-tighter text-gray-900 leading-[1.1] border-0 shadow-none font-display">
                        Your Launch and Growth Come First.
                    </h2>
                </div>
                <div className="md:col-span-7 flex flex-col border-0 shadow-none">
                    <div className="border-t border-gray-200 py-12 shadow-none">
                        <h3 className="text-2xl font-semibold mb-4 text-gray-900 tracking-tight border-0 shadow-none">Build-ready UX and UI</h3>
                        <p className="text-xl text-gray-600 leading-relaxed font-normal border-0 shadow-none">We design for real implementation with responsive layouts.</p>
                    </div>
                    <div className="border-t border-gray-200 py-12 shadow-none">
                        <h3 className="text-2xl font-semibold mb-4 text-gray-900 tracking-tight border-0 shadow-none">Pragmatic, metrics-first thinking</h3>
                        <p className="text-xl text-gray-600 leading-relaxed font-normal border-0 shadow-none">Every decision ties back to outcomes and conversion.</p>
                    </div>
                    <div className="border-t border-gray-200 py-12 shadow-none">
                        <h3 className="text-2xl font-semibold mb-4 text-gray-900 tracking-tight border-0 shadow-none">No black box process</h3>
                        <p className="text-xl text-gray-600 leading-relaxed font-normal border-0 shadow-none">Clear ownership, visible progress, daily updates.</p>
                    </div>
                    <div className="border-t border-b border-gray-200 py-12 shadow-none">
                        <h3 className="text-2xl font-semibold mb-4 text-gray-900 tracking-tight border-0 shadow-none">Direct collaboration</h3>
                        <p className="text-xl text-gray-600 leading-relaxed font-normal border-0 shadow-none">No layers in between. Work directly with the doers.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

function Team() {
    const team = [
        { name: 'DARRELL STEWARD', role: 'CONTENT STRATEGIST', image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=800&q=80' },
        { name: 'JACOB JONES', role: 'SOCIAL MEDIA MANAGER', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80' },
        null, // EMPTY SLOT
        { name: 'ARMAN NIUM', role: 'CREATIVE DIRECTOR', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&q=80' },
        { name: 'THERESA WEBB', role: 'MARKETING ANALYST', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&q=80' },
        { name: 'KATHRYN MURPHY', role: 'BRAND STRATEGIST', image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=800&q=80' },
        { name: 'ROBERT FOX', role: 'GRAPHIC DESIGNER', image: 'https://images.unsplash.com/photo-1463453091185-61582044d556?w=800&q=80' },
        null // EMPTY SLOT
    ];

    return (
        <section className="bg-white py-40 px-8 border-0 shadow-none">
            <div className="max-w-7xl mx-auto border-0 shadow-none">
                {/* Updated Header Section */}
                <div className="mb-32 border-0 shadow-none">
                    <div className="flex items-center gap-4 mb-8 border-0 shadow-none">
                        <span className="block w-2 h-2 bg-blue-600 rounded-full border-0 shadow-none"></span>
                        <h4 className="text-[10px] font-semibold tracking-[0.2em] text-gray-500 uppercase border-0 shadow-none">OUR SQUAD</h4>
                    </div>
                    <h2 className="text-[64px] font-medium tracking-tighter leading-[1.1] text-gray-900 mb-10 border-0 shadow-none max-w-4xl font-display">
                        The Minds Behind <br /> the Craft.
                    </h2>
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-0 shadow-none">
                        <p className="max-w-2xl text-2xl text-gray-400 font-medium leading-relaxed border-0 shadow-none">
                            A collective of senior designers and product thinkers dedicated to building valid foundations for the next generation of digital giants.
                        </p>
                        <a href="#" className="underline font-bold text-xs tracking-widest border-0 shadow-none whitespace-nowrap mb-2">JOIN US</a>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16 w-full border-0 shadow-none">
                    {team.map((member, index) => (
                        member ? (
                            <div key={member.name} className="flex flex-col border-0 shadow-none group">
                                <div className="aspect-[4/5] overflow-hidden rounded-none mb-6 border-0 shadow-none bg-gray-100">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700 shadow-none border-0"
                                    />
                                </div>
                                <h4 className="text-sm font-bold tracking-tight text-gray-900 border-0 shadow-none mb-1">{member.name}</h4>
                                <p className="text-[10px] tracking-[0.1em] text-gray-400 uppercase font-semibold border-0 shadow-none">{member.role}</p>
                            </div>
                        ) : (
                            <div key={`empty-${index}`} className="hidden lg:block border-0 shadow-none"></div>
                        )
                    ))}
                </div>
            </div>
        </section>
    );
}



export default function AboutUs() {
    return (
        <div className="min-h-screen font-sans antialiased text-gray-900 bg-white border-0 shadow-none">
            {/* Standard Global Navbar */}
            <Navbar />
            <main className="border-0 shadow-none">
                <Hero />
                <InformationAndMetrics />
                <Awards />
                <Arsenal />
                <WhyChooseUs />
                <Team />
                <BottomCTA />
            </main>
        </div>
    );
}
