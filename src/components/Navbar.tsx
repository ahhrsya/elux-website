import { useState, useRef, useEffect } from 'react';

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

const industriesMenu = {
    TECHNOLOGY: [
        'SaaS Platforms',
        'AI & Machine Learning',
        'Blockchain & Web3',
        'Cloud Infrastructure',
        'Developer Tools',
    ],
    FINANCE: [
        'Fintech & Payments',
        'Banking & Insurance',
        'Crypto & DeFi',
        'Investment Platforms',
        'Regulatory Compliance',
    ],
    LIFESTYLE: [
        'Health & Wellness',
        'E-Commerce & Retail',
        'EdTech & Learning',
        'Travel & Hospitality',
        'Media & Entertainment',
    ],
};

export default function Navbar() {
    const [activeMenu, setActiveMenu] = useState<'services' | 'industries' | null>(null);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [mobileAccordion, setMobileAccordion] = useState<string | null>(null);
    const navRef = useRef<HTMLElement>(null);
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const handleMenuEnter = (menu: 'services' | 'industries') => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        setActiveMenu(menu);
    };

    const handleMenuLeave = () => {
        timeoutRef.current = setTimeout(() => {
            setActiveMenu(null);
        }, 150);
    };

    const handlePanelEnter = () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };

    const handlePanelLeave = () => {
        timeoutRef.current = setTimeout(() => {
            setActiveMenu(null);
        }, 150);
    };

    useEffect(() => {
        return () => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
        };
    }, []);

    const renderMegaMenu = (items: Record<string, string[]>) => (
        <div
            className={`fixed left-0 right-0 top-[72px] z-40 transition-all duration-300 ease-out ${activeMenu
                ? 'opacity-100 translate-y-0 pointer-events-auto'
                : 'opacity-0 -translate-y-2 pointer-events-none'
                }`}
            onMouseEnter={handlePanelEnter}
            onMouseLeave={handlePanelLeave}
        >
            {/* Backdrop */}
            <div className="absolute inset-0 top-0 h-screen bg-black/40 -z-10" onClick={() => setActiveMenu(null)} />

            {/* Panel */}
            <div className="bg-[#111111] border-t border-white/10 backdrop-blur-xl">
                <div className="max-w-7xl mx-auto px-8 py-12">
                    <div className="grid grid-cols-3 gap-12">
                        {Object.entries(items).map(([category, links]) => (
                            <div key={category}>
                                <h4 className="text-xs font-semibold tracking-[0.2em] text-gray-500 uppercase mb-6">
                                    {category}
                                </h4>
                                <ul className="space-y-3">
                                    {links.map((link) => (
                                        <li key={link}>
                                            <a
                                                href="#services"
                                                className="text-[15px] text-gray-300 hover:text-[#2563EB] transition-colors duration-200 block py-1"
                                                onClick={() => setActiveMenu(null)}
                                            >
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
        </div>
    );

    return (
        <>
            <nav
                ref={navRef}
                className="fixed top-0 left-0 right-0 z-50 px-8 py-5 bg-black/80 backdrop-blur-md border-b border-white/5"
            >
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    {/* Logo */}
                    <a href="#home" className="text-white text-xl font-bold tracking-tight">
                        eluxspace
                    </a>

                    {/* Desktop Nav Links */}
                    <div className="hidden lg:flex items-center gap-8">
                        <a href="#about" className="text-[13px] text-gray-300 uppercase tracking-[0.15em] font-medium hover:text-white transition-colors duration-200">
                            About
                        </a>
                        <div
                            className="relative"
                            onMouseEnter={() => handleMenuEnter('services')}
                            onMouseLeave={handleMenuLeave}
                        >
                            <button className={`text-[13px] uppercase tracking-[0.15em] font-medium transition-colors duration-200 flex items-center gap-1.5 ${activeMenu === 'services' ? 'text-white' : 'text-gray-300 hover:text-white'}`}>
                                Services
                                <svg className={`w-3 h-3 transition-transform duration-200 ${activeMenu === 'services' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                        </div>
                        <div
                            className="relative"
                            onMouseEnter={() => handleMenuEnter('industries')}
                            onMouseLeave={handleMenuLeave}
                        >
                            <button className={`text-[13px] uppercase tracking-[0.15em] font-medium transition-colors duration-200 flex items-center gap-1.5 ${activeMenu === 'industries' ? 'text-white' : 'text-gray-300 hover:text-white'}`}>
                                Industries
                                <svg className={`w-3 h-3 transition-transform duration-200 ${activeMenu === 'industries' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                        </div>
                        <a href="#case-studies" className="text-[13px] text-gray-300 uppercase tracking-[0.15em] font-medium hover:text-white transition-colors duration-200">
                            Case Studies
                        </a>
                        <a href="#home" className="text-[13px] text-gray-300 uppercase tracking-[0.15em] font-medium hover:text-white transition-colors duration-200">
                            Contact
                        </a>
                    </div>

                    {/* CTA + Hamburger */}
                    <div className="flex items-center gap-4">
                        <a
                            href="#"
                            className="hidden lg:inline-flex items-center gap-2 bg-[#2563EB] text-white text-sm font-semibold px-6 py-2.5 rounded-full hover:bg-[#1d4ed8] transition-colors duration-200"
                        >
                            Book Discovery Call
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a>

                        {/* Hamburger */}
                        <button
                            className="lg:hidden text-white p-2"
                            onClick={() => setMobileOpen(!mobileOpen)}
                        >
                            <div className="w-6 flex flex-col gap-1.5">
                                <span className={`block h-[2px] bg-white transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-[5px]' : ''}`} />
                                <span className={`block h-[2px] bg-white transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
                                <span className={`block h-[2px] bg-white transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-[5px]' : ''}`} />
                            </div>
                        </button>
                    </div>
                </div>
            </nav>

            {/* Desktop Mega Menus */}
            <div className="hidden lg:block">
                {activeMenu === 'services' && renderMegaMenu(servicesMenu)}
                {activeMenu === 'industries' && renderMegaMenu(industriesMenu)}
            </div>

            {/* Mobile Slide-out Panel */}
            <div
                className={`fixed inset-0 z-40 lg:hidden transition-opacity duration-300 ${mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                    }`}
            >
                <div className="absolute inset-0 bg-black/60" onClick={() => setMobileOpen(false)} />
                <div
                    className={`absolute right-0 top-0 h-full w-[85%] max-w-sm bg-[#0a0a0a] border-l border-white/10 transform transition-transform duration-300 ease-out overflow-y-auto ${mobileOpen ? 'translate-x-0' : 'translate-x-full'
                        }`}
                >
                    <div className="pt-24 px-6 pb-8">
                        <a href="#about" onClick={() => setMobileOpen(false)} className="block text-gray-300 text-lg font-medium py-4 border-b border-white/5 hover:text-white transition-colors">
                            About
                        </a>

                        {/* Services Accordion */}
                        <div className="border-b border-white/5">
                            <button
                                className="flex items-center justify-between w-full text-gray-300 text-lg font-medium py-4 hover:text-white transition-colors"
                                onClick={() => setMobileAccordion(mobileAccordion === 'services' ? null : 'services')}
                            >
                                Services
                                <svg className={`w-4 h-4 transition-transform duration-200 ${mobileAccordion === 'services' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            <div className={`overflow-hidden transition-all duration-300 ${mobileAccordion === 'services' ? 'max-h-[800px] pb-4' : 'max-h-0'}`}>
                                {Object.entries(servicesMenu).map(([category, links]) => (
                                    <div key={category} className="mb-4">
                                        <h5 className="text-xs tracking-[0.15em] text-gray-500 uppercase mb-2 px-4">{category}</h5>
                                        {links.map((link) => (
                                            <a key={link} href="#services" onClick={() => setMobileOpen(false)} className="block text-sm text-gray-400 hover:text-[#2563EB] py-1.5 px-4 transition-colors">
                                                {link}
                                            </a>
                                        ))}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Industries Accordion */}
                        <div className="border-b border-white/5">
                            <button
                                className="flex items-center justify-between w-full text-gray-300 text-lg font-medium py-4 hover:text-white transition-colors"
                                onClick={() => setMobileAccordion(mobileAccordion === 'industries' ? null : 'industries')}
                            >
                                Industries
                                <svg className={`w-4 h-4 transition-transform duration-200 ${mobileAccordion === 'industries' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            <div className={`overflow-hidden transition-all duration-300 ${mobileAccordion === 'industries' ? 'max-h-[800px] pb-4' : 'max-h-0'}`}>
                                {Object.entries(industriesMenu).map(([category, links]) => (
                                    <div key={category} className="mb-4">
                                        <h5 className="text-xs tracking-[0.15em] text-gray-500 uppercase mb-2 px-4">{category}</h5>
                                        {links.map((link) => (
                                            <a key={link} href="#" className="block text-sm text-gray-400 hover:text-[#2563EB] py-1.5 px-4 transition-colors">
                                                {link}
                                            </a>
                                        ))}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <a href="#case-studies" onClick={() => setMobileOpen(false)} className="block text-gray-300 text-lg font-medium py-4 border-b border-white/5 hover:text-white transition-colors">
                            Case Studies
                        </a>
                        <a href="#home" onClick={() => setMobileOpen(false)} className="block text-gray-300 text-lg font-medium py-4 border-b border-white/5 hover:text-white transition-colors">
                            Contact
                        </a>

                        <a
                            href="#"
                            className="mt-8 flex items-center justify-center gap-2 bg-[#2563EB] text-white text-sm font-semibold px-6 py-3 rounded-full hover:bg-[#1d4ed8] transition-colors w-full"
                        >
                            Book Discovery Call
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}
