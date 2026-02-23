import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play, Loader2, AlertCircle } from 'lucide-react';

// REPLACE WITH YOUR ACTUAL CHANNEL ID
const CHANNEL_ID = 'UCzSkrcNP11tRQXfmmRb8xDQ';

interface Video {
    id: string;
    title: string;
    thumbnail: string;
    views: string; // Not available in RSS, will use date or hide
    date: string;
    link: string;
}

const YouTubeSection: React.FC = () => {
    const [videos, setVideos] = useState<Video[]>([]);
    const [loading, setLoading] = useState(true);
    const [activeIndex, setActiveIndex] = useState(0);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchVideos = async () => {
            try {
                setLoading(true);
                let text = '';

                // 1. Try Local API (Works in Vercel Production)
                try {
                    console.log('Fetching from /api/youtube...');
                    const res = await fetch(`/api/youtube?channel_id=${CHANNEL_ID}`);
                    if (!res.ok) throw new Error(`API Error: ${res.status}`);
                    text = await res.text();
                } catch (apiErr) {
                    console.warn('Local API failed (expected in local dev without Vercel CLI), trying CORS proxy...', apiErr);

                    // 2. Try CORS Proxy (Works in Local Dev)
                    const proxyUrl = `https://corsproxy.io/?${encodeURIComponent(`https://www.youtube.com/feeds/videos.xml?channel_id=${CHANNEL_ID}`)}`;
                    const resProxy = await fetch(proxyUrl);
                    if (!resProxy.ok) throw new Error('CORS Proxy failed');
                    text = await resProxy.text();
                }

                const parser = new DOMParser();
                const xml = parser.parseFromString(text, 'text/xml');
                const entries = xml.querySelectorAll('entry');

                if (entries.length === 0) {
                    // Check if it's not actually XML or valid feed
                    if (!text.includes('<feed')) throw new Error('Invalid XML response');
                }

                const fetchedVideos: Video[] = Array.from(entries).slice(0, 5).map(entry => {
                    const mediaGroup = entry.querySelector('media\\:group, group');
                    const thumbnail = mediaGroup?.querySelector('media\\:thumbnail, thumbnail')?.getAttribute('url') || '';
                    return {
                        id: entry.querySelector('videoId')?.textContent || '',
                        title: entry.querySelector('title')?.textContent || '',
                        thumbnail: thumbnail,
                        views: 'Watch Now',
                        date: new Date(entry.querySelector('published')?.textContent || '').toLocaleDateString(),
                        link: entry.querySelector('link')?.getAttribute('href') || ''
                    };
                });

                if (fetchedVideos.length > 0) {
                    setVideos(fetchedVideos);
                    setActiveIndex(Math.floor(fetchedVideos.length / 2));
                    setError(null);
                } else {
                    setError("No videos found in the channel feed.");
                }

            } catch (error: any) {
                console.error('YouTube fetch error:', error);
                setError(error.message || 'Failed to load videos');

                // Fallback for visual confirmation if everything fails
                setVideos([
                    {
                        id: 'demo1',
                        title: "How to Master Physics Quickly (Demo)",
                        thumbnail: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=800&auto=format&fit=crop",
                        views: "Demo Video",
                        date: "Just now",
                        link: "#"
                    },
                    {
                        id: 'demo2',
                        title: "Calculus Made Easy (Demo)",
                        thumbnail: "https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=800&auto=format&fit=crop",
                        views: "Demo Video",
                        date: "Just now",
                        link: "#"
                    },
                    {
                        id: 'demo3',
                        title: "Study Hacks for Board Exams (Demo)",
                        thumbnail: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=800&auto=format&fit=crop",
                        views: "Demo Video",
                        date: "Just now",
                        link: "#"
                    }
                ]);
                setActiveIndex(1);
            } finally {
                setLoading(false);
            }
        };

        fetchVideos();
    }, []);

    const nextSlide = () => {
        if (videos.length === 0) return;
        setActiveIndex((prev) => (prev + 1) % videos.length);
    };

    const prevSlide = () => {
        if (videos.length === 0) return;
        setActiveIndex((prev) => (prev - 1 + videos.length) % videos.length);
    };

    if (loading) {
        return (
            <section className="py-24 bg-[#Fdfcf8] flex items-center justify-center min-h-[400px]">
                <Loader2 className="animate-spin text-[#124029]" size={48} />
            </section>
        );
    }

    // Calculate indices for visible items
    const getVisibleItems = () => {
        if (videos.length === 0) return { prev: -1, current: -1, next: -1 };
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
                    {error && (
                        <div className="mt-4 bg-red-50 text-red-800 px-4 py-2 rounded-lg inline-flex items-center gap-2 text-sm font-bold border border-red-200">
                            <AlertCircle size={16} />
                            {error} (Showing Demo Data)
                        </div>
                    )}
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
                        {videos.length > 0 ? (
                            <AnimatePresence mode='popLayout'>
                                {videos.map((video, index) => {
                                    let position = 0; // 0 = center, -1 = left, 1 = right, others hidden or far

                                    // Handle logic for fewer than 3 videos if needed, but assuming 3+ for carousel
                                    if (index === current) position = 0;
                                    else if (index === prev) position = -1;
                                    else if (index === next) position = 1;
                                    else return null;

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
                                                if (position === 0) window.open(video.link, '_blank');
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
                                                        <span>{video.date}</span>
                                                        <span>•</span>
                                                        <span>{video.views}</span>
                                                    </div>
                                                </div>
                                            )}
                                        </motion.div>
                                    );
                                })}
                            </AnimatePresence>
                        ) : (
                            <div className="text-gray-400">No videos found.</div>
                        )}
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
