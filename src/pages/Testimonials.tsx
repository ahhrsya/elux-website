import { useState, useRef, useEffect } from 'react';
import { motion, LayoutGroup } from 'framer-motion';

interface Testimonial {
    id: string;
    speakerName: string;
    companyName: string;
    quote: string;
    videoUrl: string;
    thumbnail: string;
}

const testimonials: Testimonial[] = [
    {
        id: '1',
        speakerName: 'Jana Komarov',
        companyName: 'Concept Family',
        quote: "Elux transformed our entire workflow. The speed and precision they brought to our product development was something we hadn't seen with any other agency.",
        videoUrl: 'https://player.vimeo.com/external/494252666.sd.mp4?s=72ce12da43194090288eb1f86851b43952ecae68&profile_id=164&oauth_token_id=57447761',
        thumbnail: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=800',
    },
    {
        id: '2',
        speakerName: 'Torsten Kaldun',
        companyName: 'World of Pizza',
        quote: "The design language Elux created for us resonated perfectly with our enterprise clients. It bridged the gap between complex tech and human-centric UI.",
        videoUrl: 'https://player.vimeo.com/external/494252666.sd.mp4?s=72ce12da43194090288eb1f86851b43952ecae68&profile_id=164&oauth_token_id=57447761',
        thumbnail: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800',
    },
    {
        id: '3',
        speakerName: 'Sebastian Remus',
        companyName: 'Kaimug',
        quote: "Scaling our platform from 10k to 500k users required a robust UX strategy. Elux was there every step of the way, ensuring every transition was seamless.",
        videoUrl: 'https://player.vimeo.com/external/494252666.sd.mp4?s=72ce12da43194090288eb1f86851b43952ecae68&profile_id=164&oauth_token_id=57447761',
        thumbnail: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=800',
    },
];

export default function Testimonials() {
    const [activeIndex1, setActiveIndex1] = useState(0);
    const [activeIndex2, setActiveIndex2] = useState(1);
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    const nextTestimonial1 = (e?: React.MouseEvent) => {
        if (e) e.stopPropagation();
        setIsPlaying(false);
        setActiveIndex1((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial1 = (e?: React.MouseEvent) => {
        if (e) e.stopPropagation();
        setIsPlaying(false);
        setActiveIndex1((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const nextTestimonial2 = () => setActiveIndex2((prev) => (prev + 1) % 3);
    const prevTestimonial2 = () => setActiveIndex2((prev) => (prev - 1 + 3) % 3);

    const togglePlay = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    useEffect(() => {
        setIsPlaying(false);
    }, [activeIndex1]);

    return (
        <main className="bg-[#F9FAFB] overflow-x-hidden">
            {/* Testimonial 1 Section */}
            <section className="pt-32 pb-24 px-4 md:px-8">
                <div className="max-w-7xl mx-auto">
                    {/* Header Section */}
                    <div className="text-center mb-16">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="flex items-center justify-center gap-2 mb-4"
                        >
                            <svg className="w-5 h-5 text-[#2563EB]" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                            </svg>
                            <p className="text-xs font-bold tracking-[0.2em] text-[#2563EB] uppercase">
                                Testimonial 1
                            </p>
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-5xl lg:text-7xl font-display font-medium text-gray-900 leading-tight"
                        >
                            Why our customers love Elux
                        </motion.h2>
                    </div>

                    {/* Horizontal Accordion Section */}
                    <div className="relative mb-12">
                        <LayoutGroup>
                            <div className="flex flex-col md:flex-row gap-4 h-auto md:h-[600px] items-stretch">
                                {testimonials.map((item, index) => {
                                    const isActive = activeIndex1 === index;
                                    return (
                                        <motion.div
                                            key={item.id}
                                            layout
                                            onClick={() => setActiveIndex1(index)}
                                            className={`relative cursor-pointer transition-all duration-700 ease-[0.23, 1, 0.32, 1] ${isActive
                                                ? 'flex-[5] md:flex-[8]'
                                                : 'flex-[1] md:flex-[1]'
                                                }`}
                                        >
                                            <motion.div
                                                layout
                                                className="relative h-[400px] md:h-full rounded-2xl overflow-hidden group shadow-lg"
                                            >
                                                <motion.img
                                                    layout
                                                    src={item.thumbnail}
                                                    alt={item.speakerName}
                                                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${isActive && isPlaying ? 'opacity-0' : 'opacity-100'}`}
                                                />
                                                {isActive ? (
                                                    <div className="absolute inset-0 bg-transparent flex">
                                                        <div className="relative flex-1 h-full bg-black/5">
                                                            <video
                                                                ref={videoRef}
                                                                src={item.videoUrl}
                                                                className="w-full h-full object-cover"
                                                                playsInline
                                                                loop
                                                            />
                                                            {!isPlaying && (
                                                                <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
                                                                    <motion.button
                                                                        whileHover={{ scale: 1.1 }}
                                                                        whileTap={{ scale: 0.9 }}
                                                                        onClick={togglePlay}
                                                                        className="w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-2xl"
                                                                    >
                                                                        <svg className="w-8 h-8 text-[#2563EB] fill-current ml-1" viewBox="0 0 24 24">
                                                                            <path d="M8 5v14l11-7z" />
                                                                        </svg>
                                                                    </motion.button>
                                                                </div>
                                                            )}
                                                            {isPlaying && (
                                                                <div className="absolute inset-0 cursor-pointer" onClick={togglePlay} />
                                                            )}
                                                        </div>
                                                    </div>
                                                ) : (
                                                    <div className="absolute inset-0 bg-black/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                                        <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                                                            <svg className="w-5 h-5 text-white fill-current" viewBox="0 0 24 24">
                                                                <path d="M8 5v14l11-7z" />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                )}
                                            </motion.div>
                                            <motion.div layout className="mt-4 overflow-hidden">
                                                <p className={`font-bold text-gray-900 transition-all ${isActive ? 'text-lg' : 'text-sm'}`}>
                                                    {item.speakerName}
                                                </p>
                                                <p className="text-gray-500 text-xs md:text-sm whitespace-nowrap">
                                                    {item.companyName}
                                                </p>
                                            </motion.div>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </LayoutGroup>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex justify-center gap-4 mb-16">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={prevTestimonial1}
                            className="w-14 h-14 rounded-full border border-gray-200 flex items-center justify-center text-gray-900 hover:border-[#2563EB]/40 hover:text-[#2563EB] transition-all bg-white shadow-sm"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={nextTestimonial1}
                            className="w-14 h-14 rounded-full border border-gray-200 flex items-center justify-center text-gray-900 hover:border-[#2563EB]/40 hover:text-[#2563EB] transition-all bg-white shadow-sm"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </motion.button>
                    </div>

                    {/* Static Cards Testimonial 1 */}
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                name: "Udy Joe",
                                avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=200",
                                rating: 5,
                                text: "For those who need AI and multi-functional chatbots, definitely add this to your collection. Although it only works in Browser, you can still capture screens from other applications.",
                            },
                            {
                                name: "Hianto Mateus",
                                avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=200",
                                rating: 5,
                                text: "The improvement in my productivity, I won't even comment on. The features are enough for all my needs. Thank you for existing! I highly recommend Elux to everyone.",
                            },
                            {
                                name: "Miyamoto Musashi",
                                avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200",
                                rating: 5,
                                text: "BIG thanks to Elux! I'm incredibly helped by its super duper many features. Cool, it's All in 1. This is perfectly well built and constantly updating.",
                            }
                        ].map((card, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col gap-4"
                            >
                                <div className="flex items-center gap-3">
                                    <img src={card.avatar} alt={card.name} className="w-10 h-10 rounded-full object-cover" />
                                    <span className="font-bold text-gray-900 uppercase text-sm tracking-tight">{card.name}</span>
                                </div>
                                <div className="flex gap-0.5">
                                    {[...Array(card.rating)].map((_, idx) => (
                                        <svg key={idx} className="w-5 h-5 text-orange-400 fill-current" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                                <p className="text-gray-600 text-[15px] leading-relaxed">
                                    {card.text}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonial 2 Section - Dark Replica */}
            <section className="bg-[#0A0A0A] pt-32 pb-48 px-4 md:px-8 overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-[10px] font-bold tracking-[0.4em] text-[#2563EB] uppercase mb-6"
                        >
                            Testimonial 2
                        </motion.p>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-5xl lg:text-7xl font-display font-medium text-white leading-tight"
                        >
                            Founders Who've Scaled With Us
                        </motion.h2>
                    </div>

                    {/* Carousel */}
                    <div className="relative flex justify-center items-center h-[400px] md:h-[500px] mb-8">
                        <div className="relative w-full flex justify-center items-center">
                            {[
                                {
                                    id: 'c1',
                                    name: 'Cory Gill',
                                    role: 'COO of Alialearn',
                                    location: 'United States',
                                    thumb: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=1200'
                                },
                                {
                                    id: 'c2',
                                    name: 'Karlin Walker',
                                    role: 'CEO of Lightrow',
                                    location: 'United States',
                                    thumb: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1200'
                                },
                                {
                                    id: 'c3',
                                    name: 'Sarah Chen',
                                    role: 'Founder of Velo',
                                    location: 'Canada',
                                    thumb: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=1200'
                                }
                            ].map((item, i) => {
                                const displayIndex = (i - activeIndex2 + 3) % 3;
                                let x = 0;
                                let scale = 0.8;
                                let opacity = 0.3;
                                let zIndex = 0;

                                if (displayIndex === 0) { // Left
                                    x = -550;
                                    zIndex = 10;
                                } else if (displayIndex === 1) { // Center
                                    x = 0;
                                    scale = 1.05;
                                    opacity = 1;
                                    zIndex = 30;
                                } else if (displayIndex === 2) { // Right
                                    x = 550;
                                    zIndex = 10;
                                }

                                return (
                                    <motion.div
                                        key={item.id}
                                        initial={false}
                                        animate={{ x, scale, opacity, zIndex }}
                                        transition={{ type: "spring", stiffness: 200, damping: 25 }}
                                        onClick={() => {
                                            if (displayIndex === 0) prevTestimonial2();
                                            if (displayIndex === 2) nextTestimonial2();
                                        }}
                                        className="absolute w-[80%] md:w-[750px] aspect-[16/9.5] rounded-2xl overflow-hidden cursor-pointer shadow-2xl bg-[#1A1A1A] border border-white/5"
                                    >
                                        <img src={item.thumb} alt={item.name} className="w-full h-full object-cover" />
                                        {displayIndex === 1 && (
                                            <>
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                                                <div className="absolute top-6 left-8 flex items-center gap-2">
                                                    <div className="w-7 h-7 rounded-full bg-[#2563EB] flex items-center justify-center p-1">
                                                        <svg className="w-full h-full text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                                        </svg>
                                                    </div>
                                                    <span className="text-white font-bold text-xs tracking-widest">eluxspace</span>
                                                </div>
                                                <div className="absolute inset-0 flex items-center justify-center">
                                                    <div className="w-16 h-11 bg-red-600 rounded-lg flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                                                        <svg className="w-6 h-6 text-white fill-current" viewBox="0 0 24 24">
                                                            <path d="M8 5v14l11-7z" />
                                                        </svg>
                                                    </div>
                                                </div>
                                                <div className="absolute bottom-8 left-8 flex border-l-2 border-white pl-5">
                                                    <div>
                                                        <h3 className="text-2xl font-bold text-white mb-0.5">{item.name}</h3>
                                                        <p className="text-white/80 text-base font-medium">{item.role}</p>
                                                        <p className="text-white/60 text-xs mt-0.5">{item.location}</p>
                                                    </div>
                                                </div>
                                                <div className="absolute bottom-8 right-8 text-white/40 text-[10px] font-medium italic">
                                                    Courtesy of Elux Space
                                                </div>
                                                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
                                                    {[0, 1, 2].map((dot) => (
                                                        <div key={dot} className={`w-1.5 h-1.5 rounded-full transition-all ${dot === activeIndex2 % 3 ? 'bg-white w-3.5' : 'bg-white/30'}`} />
                                                    ))}
                                                </div>
                                            </>
                                        )}
                                        {displayIndex !== 1 && (
                                            <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-8">
                                                <p className="text-white/40 text-[10px] font-medium italic">Courtesy of Elux Space</p>
                                                <h4 className="text-white text-lg font-bold mt-1">{item.name}</h4>
                                            </div>
                                        )}
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Blue Navigation Buttons */}
                    <div className="flex justify-center gap-4 mb-12">
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={prevTestimonial2}
                            className="w-11 h-11 rounded-full bg-[#2563EB] flex items-center justify-center text-white shadow-lg"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={nextTestimonial2}
                            className="w-11 h-11 rounded-full bg-[#2563EB] flex items-center justify-center text-white shadow-lg"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </motion.button>
                    </div>

                    {/* Integrated Static Cards Testimonial 2 (Dark) */}
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            {
                                name: "Udy Joe",
                                avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=200",
                                rating: 5,
                                text: "For those who need AI and multi-functional chatbots, definitely add this to your collection. Truly versatile and useful tool for productivity!",
                            },
                            {
                                name: "Hianto Mateus",
                                avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=200",
                                rating: 5,
                                text: "The improvement in my productivity, I won't even comment on. The features are enough for all my needs. Thank you for existing!",
                            },
                            {
                                name: "Miyamoto Musashi",
                                avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200",
                                rating: 5,
                                text: "BIG thanks to Elux! I'm incredibly helped by its super duper many features. Cool, it's All in 1. Most impressive agency I've used.",
                            }
                        ].map((card, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-[#141414] p-8 rounded-[2rem] border border-white/5 flex flex-col gap-5"
                            >
                                <div className="flex items-center gap-4">
                                    <img src={card.avatar} alt={card.name} className="w-12 h-12 rounded-full object-cover" />
                                    <div className="flex flex-col">
                                        <span className="font-bold text-white text-sm tracking-wide uppercase">{card.name}</span>
                                        <div className="flex gap-0.5 mt-1">
                                            {[...Array(card.rating)].map((_, idx) => (
                                                <svg key={idx} className="w-3.5 h-3.5 text-orange-400 fill-current" viewBox="0 0 20 20">
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <p className="text-white/60 text-[15px] leading-relaxed italic">
                                    "{card.text}"
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <style dangerouslySetInnerHTML={{
                __html: `
                .scrollbar-hide::-webkit-scrollbar { display: none; }
                .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
            `}} />
        </main>
    );
}
