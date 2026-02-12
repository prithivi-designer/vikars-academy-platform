
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';

const videos = [
    {
        id: 1,
        title: "How to Master Physics Quickly",
        thumbnail: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=800&auto=format&fit=crop",
        views: "12K views",
        duration: "10:24"
    },
    {
        id: 2,
        title: "Calculus Made Easy",
        thumbnail: "https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=800&auto=format&fit=crop",
        views: "45K views",
        duration: "15:30"
    },
    {
        id: 3,
        title: "Study Hacks for Board Exams",
        thumbnail: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=800&auto=format&fit=crop",
        views: "89K views",
        duration: "08:15"
    },
    {
        id: 4,
        title: "Understanding Chemical Reactions",
        thumbnail: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=800&auto=format&fit=crop",
        views: "21K views",
        duration: "12:45"
    },
    {
        id: 5,
        title: "The Future of AI in Education",
        thumbnail: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop",
        views: "34K views",
        duration: "18:20"
    }
];

const YouTubeSection: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(2); // Start with middle item

    const nextSlide = () => {
        setActiveIndex((prev) => (prev + 1) % videos.length);
    };

    const prevSlide = () => {
        setActiveIndex((prev) => (prev - 1 + videos.length) % videos.length);
    };

    // Calculate indices for visible items
    const getVisibleItems = () => {
        const prev = (activeIndex - 1 + videos.length) % videos.length;
        const next = (activeIndex + 1) % videos.length;
        return { prev, current: activeIndex, next };
    };

    const { prev, current, next } = getVisibleItems();

    return (
        <section className="py-24 bg-[#Fdfcf8] relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-50 via-transparent to-transparent opacity-50" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-[#124029] mb-4 font-space">
                        Latest from YouTube
                    </h2>
                    <p className="text-[#124029]/70 text-lg max-w-2xl mx-auto">
                        Watch our expert tutors break down complex topics into simple, bite-sized lessons.
                    </p>
                </div>

                <div className="relative h-[400px] flex items-center justify-center">
                    {/* Previous Button */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-4 md:left-12 z-30 p-3 rounded-full bg-white shadow-lg text-[#124029] hover:bg-[#124029] hover:text-white transition-all duration-300"
                    >
                        <ChevronLeft size={24} />
                    </button>

                    {/* Next Button */}
                    <button
                        onClick={nextSlide}
                        className="absolute right-4 md:right-12 z-30 p-3 rounded-full bg-white shadow-lg text-[#124029] hover:bg-[#124029] hover:text-white transition-all duration-300"
                    >
                        <ChevronRight size={24} />
                    </button>

                    <div className="relative w-full max-w-5xl h-full flex items-center justify-center perspective-1000">
                        <AnimatePresence mode='popLayout'>
                            {videos.map((video, index) => {
                                let position = 0; // 0 = center, -1 = left, 1 = right, others hidden or far
                                if (index === current) position = 0;
                                else if (index === prev) position = -1;
                                else if (index === next) position = 1;
                                else return null; // Don't render others for this simple 3-item view

                                return (
                                    <motion.div
                                        key={video.id}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{
                                            opacity: position === 0 ? 1 : 0.5,
                                            scale: position === 0 ? 1 : 0.85,
                                            x: position === 0 ? 0 : position === -1 ? '-60%' : '60%',
                                            zIndex: position === 0 ? 20 : 10,
                                            rotateY: position === 0 ? 0 : position === -1 ? 15 : -15
                                        }}
                                        transition={{ duration: 0.5, ease: "easeInOut" }}
                                        className="absolute w-[60%] md:w-[45%] aspect-video rounded-2xl shadow-2xl overflow-hidden bg-black cursor-pointer group"
                                        onClick={() => {
                                            if (position === -1) prevSlide();
                                            if (position === 1) nextSlide();
                                        }}
                                    >
                                        <img
                                            src={video.thumbnail}
                                            alt={video.title}
                                            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                                        />

                                        {/* Play Button Overlay */}
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className={`w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center transition-transform duration-300 ${position === 0 ? 'scale-100 group-hover:scale-110' : 'scale-75'}`}>
                                                <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center pl-1 shadow-lg">
                                                    <Play fill="white" className="text-white w-6 h-6" />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Info Overlay (Only visible on active) */}
                                        {position === 0 && (
                                            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white">
                                                <h3 className="text-xl font-bold mb-1 line-clamp-1">{video.title}</h3>
                                                <div className="flex text-sm opacity-80 gap-3">
                                                    <span>{video.views}</span>
                                                    <span>•</span>
                                                    <span>{video.duration}</span>
                                                </div>
                                            </div>
                                        )}
                                    </motion.div>
                                );
                            })}
                        </AnimatePresence>
                    </div>
                </div>

                {/* Dots Indicator */}
                <div className="flex justify-center gap-2 mt-8">
                    {videos.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setActiveIndex(idx)}
                            className={`h-2 rounded-full transition-all duration-300 ${idx === activeIndex ? 'w-8 bg-[#124029]' : 'w-2 bg-[#124029]/20'
                                }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default YouTubeSection;
