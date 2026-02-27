import { useState } from 'react';

// Common Types for Reusability
export interface ServiceDetailProps {
    stageCategory?: string;
    serviceTitle?: string;
    description?: string;
    longDescription?: {
        header: string;
        paragraphs: string[];
    };
    deliverables?: {
        title: string;
        span: 1 | 2;
        imagePlaceholder?: boolean;
        description?: string;
    }[];
    processSteps?: {
        number: string;
        title: string;
        description: string;
    }[];
    featuredProofImage?: string;
}

const servicesMenu = {
    SEED: [
        'MVP UX and UI Design',
        'Clickable Prototype',
        'Launch Ready Landing Page',
        'No-Code MVP Build',
        'Pitch and Demo Readiness',
    ],
    GROWTH: [
        'UX Audit and Priorities',
        'Brand and Visual Enhancement',
        'Product Redesign',
        'Dashboard and Data UX',
        'Team Extension by Expert',
    ],
    SCALE: [
        'UX Audit',
        'Product Redesign',
        'Team Extension',
        'Dashboard and Data UX',
        'Website Redesign',
    ],
};

function GlobalNavbar() {
    const [activeMenu, setActiveMenu] = useState<string | null>(null);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 px-8 py-4 bg-black/80 backdrop-blur-md border-b border-gray-900 shadow-none transition-colors duration-300">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <a href="#" className="text-white text-xl font-bold tracking-tight border-0 shadow-none">eluxspace</a>

                <div className="hidden lg:flex items-center gap-8 shadow-none border-0">
                    <a href="#" className="text-[13px] text-gray-300 uppercase tracking-widest font-medium hover:text-white transition-colors border-0 shadow-none">About</a>

                    <div
                        className="relative py-2 shadow-none border-0"
                        onMouseEnter={() => setActiveMenu('services')}
                        onMouseLeave={() => setActiveMenu(null)}
                    >
                        <button className={`text-[13px] uppercase tracking-widest font-medium transition-colors flex items-center gap-1 shadow-none border-0 ${activeMenu === 'services' ? 'text-white' : 'text-gray-300 hover:text-white'}`}>
                            Services
                        </button>
                    </div>

                    <a href="#" className="text-[13px] text-gray-300 uppercase tracking-widest font-medium hover:text-white transition-colors border-0 shadow-none">Industries</a>
                    <a href="#" className="text-[13px] text-gray-300 uppercase tracking-widest font-medium hover:text-white transition-colors border-0 shadow-none">Case Studies</a>
                    <a href="#" className="text-[13px] text-gray-300 uppercase tracking-widest font-medium hover:text-white transition-colors border-0 shadow-none">Contact</a>
                </div>

                <button className="bg-blue-600 text-white text-sm font-medium rounded-full px-6 py-2 shadow-none hover:scale-105 transition-transform flex items-center justify-center border-0">
                    Book Discovery Call
                </button>
            </div>

            {/* Mega Menu */}
            <div
                className={`absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-none transition-all duration-300 ease-in-out ${activeMenu === 'services' ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-2 invisible'}`}
                onMouseEnter={() => setActiveMenu('services')}
                onMouseLeave={() => setActiveMenu(null)}
            >
                <div className="max-w-7xl mx-auto px-8 py-12 shadow-none border-0">
                    <div className="grid grid-cols-3 gap-12 shadow-none border-0">
                        {Object.entries(servicesMenu).map(([category, links]) => (
                            <div key={category} className="shadow-none border-0">
                                <h4 className="text-xs font-semibold tracking-[0.2em] text-gray-500 uppercase mb-6 border-0 shadow-none">{category}</h4>
                                <ul className="space-y-3 shadow-none border-0">
                                    {links.map(link => (
                                        <li key={link} className="shadow-none border-0">
                                            <a href="#" className="text-[15px] text-gray-900 shadow-none border-0 hover:text-[#2563EB] transition-colors block py-1">
                                                {link}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
}

// 2. DYNAMIC HERO (Black Section)
function DynamicHero({ stageCategory, serviceTitle, description }: Pick<ServiceDetailProps, 'stageCategory' | 'serviceTitle' | 'description'>) {
    return (
        <section className="min-h-[90vh] bg-[#0a0a0a] text-white flex flex-col justify-center px-8 border-0 shadow-none">
            <div className="max-w-7xl mx-auto w-full pt-20 border-0 shadow-none">
                <p className="text-blue-500 text-sm tracking-widest uppercase font-semibold mb-6 border-0 shadow-none">
                    {stageCategory}
                </p>
                <h1 className="text-[72px] leading-none tracking-tighter border-0 shadow-none font-display">
                    {serviceTitle}
                </h1>
                <p className="text-gray-400 text-2xl max-w-3xl mt-8 font-medium leading-relaxed border-0 shadow-none">
                    {description}
                </p>
            </div>
        </section>
    );
}

// 3. THE CONTEXT / WHY YOU NEED THIS (White Section - Sticky Scroll)
function TheContext({ longDescription }: Pick<ServiceDetailProps, 'longDescription'>) {
    if (!longDescription) return null;
    return (
        <section className="bg-white py-32 px-8 text-black border-0 shadow-none">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-16 max-w-7xl mx-auto border-0 shadow-none">
                <div className="md:col-span-5 h-fit sticky top-32 border-0 shadow-none">
                    <h2 className="text-[64px] font-medium tracking-tighter text-gray-900 leading-tight border-0 shadow-none font-display">
                        {longDescription.header}
                    </h2>
                </div>
                <div className="md:col-span-7 flex flex-col border-0 shadow-none">
                    {longDescription.paragraphs.map((paragraph, index) => (
                        <div key={index} className="border-t border-gray-200 py-8 shadow-none">
                            <p className="text-xl text-gray-600 leading-relaxed font-normal border-0 shadow-none">
                                {paragraph}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// 4. DELIVERABLES (Light Gray Section - Bento Grid)
function Deliverables({ deliverables }: Pick<ServiceDetailProps, 'deliverables'>) {
    if (!deliverables) return null;
    return (
        <section className="bg-[#F9FAFB] py-32 px-8 border-0 shadow-none">
            <div className="max-w-7xl mx-auto border-0 shadow-none">
                <h2 className="text-3xl font-medium tracking-tighter text-gray-900 mb-16 border-0 shadow-none">What You Get</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 shadow-none border-0">
                    {deliverables.map((item, index) => (
                        <div key={index} className={`bg-white border border-gray-200 rounded-3xl p-10 shadow-none flex flex-col ${item.span === 2 ? 'md:col-span-2' : 'md:col-span-1'}`}>
                            <h3 className="text-2xl font-semibold text-gray-900 mb-6 tracking-tight border-0 shadow-none">{item.title}</h3>
                            {item.description && <p className="text-gray-600 leading-relaxed mb-6 border-0 shadow-none">{item.description}</p>}
                            {item.imagePlaceholder && (
                                <div className="mt-auto border-0 shadow-none">
                                    <div className="bg-gray-100 rounded-2xl w-full aspect-video border-0 shadow-none"></div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// 5. THE PRAGMATIC PROCESS (White Section)
function PragmaticProcess({ processSteps }: Pick<ServiceDetailProps, 'processSteps'>) {
    if (!processSteps) return null;
    return (
        <section className="bg-white py-32 px-8 border-0 shadow-none">
            <div className="max-w-4xl mx-auto border-0 shadow-none">
                <h2 className="text-[64px] font-medium tracking-tighter text-gray-900 text-center mb-16 border-0 shadow-none font-display">How We Ship It.</h2>
                <div className="flex flex-col border-0 shadow-none">
                    {processSteps.map((step, index) => (
                        <div key={index} className="border-t border-gray-200 py-12 flex flex-col md:flex-row gap-8 shadow-none">
                            <span className="text-6xl font-semibold text-gray-300 tracking-tighter border-0 shadow-none w-24 flex-shrink-0">{step.number}.</span>
                            <div className="border-0 shadow-none">
                                <h3 className="text-3xl font-semibold text-gray-900 tracking-tight mb-4 border-0 shadow-none">{step.title}</h3>
                                <p className="text-xl text-gray-600 leading-relaxed border-0 shadow-none">{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// 6. FEATURED PROOF (Black Section)
function FeaturedProof({ featuredProofImage }: Pick<ServiceDetailProps, 'featuredProofImage'>) {
    return (
        <section className="bg-[#0a0a0a] py-32 px-8 flex flex-col items-center border-0 shadow-none">
            <div className="max-w-7xl mx-auto w-full border-0 shadow-none">
                <h2 className="text-4xl text-white font-medium tracking-tighter text-center mb-16 border-0 shadow-none">Proof of Pragmatism.</h2>
                <div className="w-full border-0 shadow-none overflow-hidden rounded-3xl">
                    <img
                        src={featuredProofImage || "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"}
                        alt="Featured Proof Dashboard"
                        className="w-full h-auto aspect-video object-cover border-0 rounded-3xl shadow-none filter grayscale hover:grayscale-0 transition-all duration-700"
                    />
                </div>
            </div>
        </section>
    );
}

// 7. MASSIVE CTA (Black Section)
function MassiveCTA() {
    return (
        <section className="bg-[#0a0a0a] text-white pb-40 pt-16 px-8 flex flex-col items-center justify-center text-center border-t border-gray-900 shadow-none font-display">
            <h2 className="text-[72px] tracking-tighter font-medium leading-none mb-12 border-0 shadow-none">
                Ready to ship your MVP?
            </h2>
            <button className="bg-blue-600 text-white rounded-full px-10 py-5 text-xl font-medium shadow-none hover:bg-blue-700 transition-colors border-0">
                Book Discovery Call
            </button>
        </section>
    );
}

export default function ServiceDetail({
    stageCategory = "SEED STAGE",
    serviceTitle = "MVP UX & UI Design.",
    description = "Core flows and screens users actually need, ready for development. We design the surfaces that signal credibility fast.",
    longDescription = {
        header: "Validate Fast. Ship a Credible MVP in 7 Days.",
        paragraphs: [
            "Pragmatic, metrics-first thinking means removing all friction. We do not do endless user research or moodboards when you just need fundamental flows in place to prove your core value hypothesis.",
            "Our process gives you a high-fidelity interface that looks totally legit from day one, giving your team exactly what they need to code and launch without second-guessing every padding value."
        ]
    },
    deliverables = [
        { title: "User Flows & Architecture", span: 2, imagePlaceholder: true },
        { title: "High-Fidelity UI", span: 1 },
        { title: "Interactive Prototype", span: 1 },
        { title: "Developer Handoff", span: 2, description: "Ready for Framer, Webflow, or custom React codebases." }
    ],
    processSteps = [
        { number: "01", title: "Audit & Core Flows", description: "Mapping out the absolute necessities for your launch." },
        { number: "02", title: "High-Fidelity Design", description: "Applying a premium visual language to stand out." },
        { number: "03", title: "Motion & Prototyping", description: "Linking it all together so it feels real." },
        { number: "04", title: "Dev-Ready Handoff", description: "Delivering precise specs with no guesswork left behind." }
    ],
    featuredProofImage = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
}: ServiceDetailProps) {
    return (
        <div className="font-sans antialiased bg-white border-0 shadow-none">
            <GlobalNavbar />
            <main className="border-0 shadow-none">
                <DynamicHero
                    stageCategory={stageCategory}
                    serviceTitle={serviceTitle}
                    description={description}
                />
                <TheContext longDescription={longDescription} />
                <Deliverables deliverables={deliverables} />
                <PragmaticProcess processSteps={processSteps} />
                <FeaturedProof featuredProofImage={featuredProofImage} />
                <MassiveCTA />
            </main>
        </div>
    );
}
