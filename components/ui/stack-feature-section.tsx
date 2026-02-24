
"use client";

import { Button } from "@/components/ui/button";
import {
    BookOpen, Calculator, GraduationCap, Microscope, Palette, Music, Globe, Atom, Brain, Laptop, Award, Scroll, Lightbulb, Pencil, Target
} from "lucide-react";
import logo from "@/src/vikars_logo_icon.png";

const iconConfigs = [
    { Icon: BookOpen, color: "#FF6B6B" },
    { Icon: Calculator, color: "#4ECDC4" },
    { Icon: GraduationCap, color: "#45B7D1" },
    { Icon: Microscope, color: "#FF8A65" },
    { Icon: Palette, color: "#FFD54F" },
    { Icon: Music, color: "#BA68C8" },
    { Icon: Globe, color: "#7986CB" },
    { Icon: Atom, color: "#4FC3F7" },
    { Icon: Brain, color: "#E57373" },
    { Icon: Laptop, color: "#81C784" },
    { Icon: Award, color: "#D4E157" },
    { Icon: Scroll, color: "#FFB74D" },
    { Icon: Lightbulb, color: "#FFF176" },
    { Icon: Pencil, color: "#A1887F" },
    { Icon: Target, color: "#90A4AE" },
];

export default function StackFeatureSection() {
    const orbitCount = 3;
    const orbitGap = 8; // rem between orbits
    const iconsPerOrbit = Math.ceil(iconConfigs.length / orbitCount);

    return (
        <section className="relative w-full py-20 flex flex-col md:flex-row items-center justify-between overflow-hidden bg-transparent">
            <div className="max-w-7xl mx-auto px-4 w-full flex flex-col md:flex-row items-center justify-between pointer-events-none">
                {/* Left side: Heading and Text */}
                <div className="w-full md:w-1/2 z-10 text-center md:text-left mb-12 md:mb-0 pointer-events-auto">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-[#124029] font-space tracking-tight">
                        Unlock Your Potential With Expert Mentorship
                    </h2>
                    <p className="text-[#124029]/70 text-lg mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed">
                        Join thousands of students achieving their academic dreams with Vikar's Academy personalized 1:1 tutoring.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
                        <Button
                            className="bg-[#124029] hover:bg-[#0d2e1e] text-white px-8 py-6 rounded-full text-lg w-full sm:w-auto h-auto"
                            onClick={() => {
                                const el = document.getElementById('demo-section');
                                if (el) el.scrollIntoView({ behavior: 'smooth' });
                            }}
                        >
                            Book a Free Demo
                        </Button>
                        <Button
                            variant="outline"
                            className="border-[#124029]/20 text-[#124029] hover:bg-[#124029]/5 px-8 py-6 rounded-full text-lg w-full sm:w-auto h-auto"
                            onClick={() => {
                                const el = document.getElementById('programs');
                                if (el) el.scrollIntoView({ behavior: 'smooth' });
                            }}
                        >
                            View Courses
                        </Button>
                    </div>
                </div>

                {/* Right side: Orbit animation */}
                <div className="relative w-full md:w-1/2 h-[18rem] md:h-[40rem] flex items-center justify-center md:justify-end overflow-visible mt-8 md:mt-0">
                    <div className="relative w-[20rem] h-[20rem] md:w-[50rem] md:h-[50rem] md:translate-x-[20%] flex items-center justify-center scale-[0.6] sm:scale-75 md:scale-100 origin-center">
                        {/* Center Circle */}
                        <div className="w-24 h-24 rounded-full bg-white shadow-xl flex items-center justify-center relative z-20 border border-gray-100 font-bold overflow-hidden">
                            <img src={logo} alt="Vikar's Academy" className="w-16 h-16 object-contain" onError={(e) => {
                                e.currentTarget.src = "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=200&auto=format&fit=crop";
                                e.currentTarget.style.borderRadius = "50%";
                            }} />
                        </div>

                        {/* Generate Orbits */}
                        {[...Array(orbitCount)].map((_, orbitIdx) => {
                            const size = `${12 + orbitGap * (orbitIdx + 1)}rem`; // equal spacing
                            const angleStep = (2 * Math.PI) / iconsPerOrbit;

                            return (
                                <div
                                    key={orbitIdx}
                                    className="absolute rounded-full border border-dashed border-[#124029]/20"
                                    style={{
                                        width: size,
                                        height: size,
                                        animation: `spin ${20 + orbitIdx * 10}s linear infinite`,
                                    }}
                                >
                                    {iconConfigs
                                        .slice(orbitIdx * iconsPerOrbit, orbitIdx * iconsPerOrbit + iconsPerOrbit)
                                        .map((cfg, iconIdx) => {
                                            const angle = iconIdx * angleStep;
                                            const x = 50 + 50 * Math.cos(angle);
                                            const y = 50 + 50 * Math.sin(angle);

                                            return (
                                                <div
                                                    key={iconIdx}
                                                    className="absolute bg-white rounded-full p-4 shadow-lg border-2 transition-transform hover:scale-110"
                                                    style={{
                                                        left: `${x}%`,
                                                        top: `${y}%`,
                                                        transform: "translate(-50%, -50%)",
                                                        borderColor: `${cfg.color}33`, // 20% opacity
                                                        backgroundColor: `${cfg.color}08`, // 非常淡的背景色
                                                    }}
                                                >
                                                    <div className="bg-white rounded-full p-0.5">
                                                        <cfg.Icon className="w-7 h-7" style={{ color: cfg.color }} />
                                                    </div>
                                                </div>
                                            );
                                        })}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Animation keyframes */}
            <style>{`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
        </section>
    );
}
