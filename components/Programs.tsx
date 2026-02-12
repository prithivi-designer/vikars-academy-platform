import React, { useLayoutEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PROGRAMS } from '../constants';
import { CheckCircle, BookOpen, GraduationCap, Target, Sparkles } from 'lucide-react';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const Programs: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const [activeId, setActiveId] = useState("01");

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Scroll Spy Logic for Sticky Nav
      const programBlocks = gsap.utils.toArray<HTMLElement>('.program-block');
      programBlocks.forEach((block) => {
        ScrollTrigger.create({
          trigger: block,
          start: "top 55%",
          end: "bottom 55%",
          onEnter: () => setActiveId(block.id),
          onEnterBack: () => setActiveId(block.id),
        });
      });

      // Staggered content entry for each block
      programBlocks.forEach((block) => {
        const visual = block.querySelector('.program-visual');
        const content = block.querySelector('.program-content');

        const triggerConfig = {
          trigger: block,
          start: "top 95%",
          toggleActions: "play none none none"
        };

        if (visual && content) {
          gsap.fromTo(visual,
            { scale: 0.98, autoAlpha: 0 },
            {
              scale: 1,
              autoAlpha: 1,
              duration: 0.5,
              ease: "power2.out",
              scrollTrigger: triggerConfig
            }
          );
          gsap.fromTo(content,
            { y: 20, autoAlpha: 0 },
            {
              y: 0,
              autoAlpha: 1,
              duration: 0.5,
              ease: "power2.out",
              scrollTrigger: triggerConfig
            }
          );
        }
      });

    }, containerRef);
    return () => ctx.revert();
  }, []);

  const renderVisual = (idx: number) => {
    const visualThemes = [
      // Theme 1: CBSE - NCERT Textbooks Stack
      (
        <div className="w-full h-full bg-gradient-to-br from-green-50 via-white to-emerald-50 relative overflow-hidden flex items-center justify-center">
          {/* Notebook paper lines pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_31px,#10b981_31px,#10b981_32px,transparent_32px)] opacity-10"></div>

          {/* NCERT-style textbooks */}
          <div className="relative z-10 flex flex-col gap-2 items-center">
            {/* Mathematics textbook */}
            <div className="w-56 h-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg shadow-xl border-2 border-blue-800 flex items-center px-5 transform -rotate-2 hover:rotate-0 transition-all duration-500 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-yellow-400"></div>
              <div className="text-white font-bold text-sm">MATHEMATICS</div>
              <div className="ml-auto text-white/80 text-xs font-mono">CLASS X</div>
            </div>

            {/* Science textbook */}
            <div className="w-56 h-16 bg-gradient-to-r from-green-600 to-green-700 rounded-lg shadow-xl border-2 border-green-800 flex items-center px-5 transform rotate-1 hover:rotate-0 transition-all duration-500 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-yellow-400"></div>
              <div className="text-white font-bold text-sm">SCIENCE</div>
              <div className="ml-auto text-white/80 text-xs font-mono">CLASS X</div>
            </div>

            {/* Social Science textbook */}
            <div className="w-56 h-16 bg-gradient-to-r from-red-600 to-red-700 rounded-lg shadow-xl border-2 border-red-800 flex items-center px-5 transform -rotate-1 hover:rotate-0 transition-all duration-500 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-yellow-400"></div>
              <div className="text-white font-bold text-sm">SOCIAL SCIENCE</div>
              <div className="ml-auto text-white/80 text-xs font-mono">CLASS X</div>
            </div>
          </div>

          {/* NCERT logo-inspired element */}
          <div className="absolute bottom-4 right-4 w-12 h-12 bg-[#124029] rounded-full flex items-center justify-center opacity-20">
            <BookOpen size={24} className="text-white" />
          </div>
        </div>
      ),

      // Theme 2: ICSE - Creative Writing & Literature
      (
        <div className="w-full h-full bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden flex items-center justify-center">
          {/* Elegant paper texture */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.05)_0%,transparent_50%)]"></div>

          {/* Fountain pen writing */}
          <div className="relative z-10">
            {/* Notebook page */}
            <div className="w-64 h-48 bg-white rounded-lg shadow-2xl border-l-4 border-blue-600 p-6 relative transform hover:scale-105 transition-transform duration-500">
              {/* Ruled lines */}
              <div className="absolute inset-x-6 top-6 space-y-3">
                <div className="h-px bg-blue-200"></div>
                <div className="h-px bg-blue-200"></div>
                <div className="h-px bg-blue-200"></div>
                <div className="h-px bg-blue-200"></div>
                <div className="h-px bg-blue-200"></div>
              </div>

              {/* Handwriting simulation */}
              <div className="relative space-y-2.5 pt-1">
                <div className="h-1 w-40 bg-gradient-to-r from-blue-600 to-transparent rounded-full opacity-70"></div>
                <div className="h-1 w-44 bg-gradient-to-r from-indigo-600 to-transparent rounded-full opacity-70"></div>
                <div className="h-1 w-36 bg-gradient-to-r from-purple-600 to-transparent rounded-full opacity-70"></div>
                <div className="h-1 w-48 bg-gradient-to-r from-blue-700 to-transparent rounded-full opacity-70"></div>
              </div>

              {/* Fountain pen */}
              <div className="absolute -bottom-2 -right-2 w-24 h-8 bg-gradient-to-r from-amber-700 to-amber-900 rounded-full shadow-lg transform rotate-45"></div>
              <div className="absolute bottom-2 right-2 w-6 h-6 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full shadow-md"></div>
            </div>
          </div>

          {/* Literature symbols */}
          <div className="absolute top-6 left-6 text-indigo-300 text-6xl font-serif opacity-20">"</div>
          <div className="absolute bottom-6 right-6 text-purple-300 text-6xl font-serif opacity-20">"</div>
        </div>
      ),

      // Theme 3: IB - Global & Inquiry-Based Learning
      (
        <div className="w-full h-full bg-gradient-to-br from-yellow-50 via-orange-50 to-amber-50 relative overflow-hidden flex items-center justify-center">
          {/* World map pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-1/4 left-1/4 w-32 h-24 border-2 border-[#124029] rounded-[40%]"></div>
            <div className="absolute top-1/3 right-1/4 w-28 h-20 border-2 border-[#124029] rounded-[45%]"></div>
          </div>

          {/* Globe with IB elements */}
          <div className="relative z-10">
            {/* Outer orbit rings */}
            <div className="w-56 h-56 rounded-full border-2 border-orange-200 flex items-center justify-center relative animate-[spin_30s_linear_infinite]">
              <div className="absolute top-0 w-3 h-3 bg-orange-400 rounded-full shadow-lg"></div>
              <div className="absolute bottom-0 w-3 h-3 bg-yellow-400 rounded-full shadow-lg"></div>

              {/* Middle ring */}
              <div className="w-44 h-44 rounded-full border-2 border-yellow-300 flex items-center justify-center relative animate-[spin_20s_linear_infinite_reverse]">
                <div className="absolute left-0 w-2.5 h-2.5 bg-amber-500 rounded-full"></div>
                <div className="absolute right-0 w-2.5 h-2.5 bg-orange-500 rounded-full"></div>

                {/* Core globe */}
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#124029] to-emerald-700 flex items-center justify-center shadow-2xl relative overflow-hidden">
                  {/* Continents suggestion */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(255,255,255,0.15)_0%,transparent_40%)]"></div>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(255,255,255,0.1)_0%,transparent_35%)]"></div>

                  {/* IB hexagon symbol */}
                  <div className="w-16 h-16 flex items-center justify-center">
                    <svg viewBox="0 0 100 100" className="w-full h-full text-white/90">
                      <polygon points="50,10 90,30 90,70 50,90 10,70 10,30" fill="none" stroke="currentColor" strokeWidth="3" />
                      <circle cx="50" cy="50" r="8" fill="currentColor" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Inquiry symbols */}
          <div className="absolute top-8 right-8 w-10 h-10 rounded-full bg-yellow-200 flex items-center justify-center shadow-lg">
            <span className="text-[#124029] font-bold text-xl">?</span>
          </div>
        </div>
      ),

      // Theme 4: State Boards - Regional Diversity & India Map
      (
        <div className="w-full h-full bg-[#FAFAFA] relative overflow-hidden flex items-center justify-center">
          {/* Background decorative elements */}
          <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-40"></div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-green-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-50"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 opacity-50"></div>

          {/* Floating Cards Container */}
          <div className="relative z-10 w-full h-full flex items-center justify-center perspective-1000">

            {/* Card 1: Karnataka - Back Left */}
            <div className="absolute w-48 h-32 bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 flex flex-col items-center justify-center p-4 transform -translate-x-16 -translate-y-4 -rotate-6 transition-all duration-500 hover:-translate-y-6 hover:-rotate-3 z-10 group">
              <div className="w-8 h-8 rounded-full bg-yellow-100 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <span className="text-yellow-600 font-bold text-xs">KA</span>
              </div>
              <div className="w-24 h-2 bg-gray-100 rounded-full mb-2"></div>
              <div className="w-16 h-2 bg-gray-100 rounded-full"></div>
            </div>

            {/* Card 2: Tamil Nadu - Back Right */}
            <div className="absolute w-48 h-32 bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 flex flex-col items-center justify-center p-4 transform translate-x-16 -translate-y-8 rotate-6 transition-all duration-500 hover:-translate-y-10 hover:rotate-3 z-0 group">
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <span className="text-blue-600 font-bold text-xs">TN</span>
              </div>
              <div className="w-24 h-2 bg-gray-100 rounded-full mb-2"></div>
              <div className="w-16 h-2 bg-gray-100 rounded-full"></div>
            </div>

            {/* Card 3: Maharashtra - Front Center */}
            <div className="absolute w-52 h-36 bg-white rounded-2xl shadow-[0_20px_50px_rgb(0,0,0,0.1)] border border-gray-50 flex flex-col items-center justify-center p-6 transform translate-y-4 z-20 transition-all duration-500 hover:translate-y-2 group">
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-orange-400 via-white to-green-400 opacity-50 rounded-t-2xl"></div>
              <div className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <span className="text-orange-600 font-bold text-sm">MH</span>
              </div>
              <div className="space-y-2 w-full flex flex-col items-center">
                <div className="w-28 h-2.5 bg-gray-100 rounded-full"></div>
                <div className="w-20 h-2.5 bg-gray-100 rounded-full"></div>
              </div>
              <div className="mt-4 px-3 py-1 bg-green-50 rounded-full border border-green-100">
                <span className="text-[10px] font-bold text-green-700 tracking-wider">STATE BOARD</span>
              </div>
            </div>

          </div>
        </div>
      ),
    ];

    return visualThemes[idx] || visualThemes[0];
  };

  const programsWithIds = PROGRAMS.map((program, idx) => ({
    ...program,
    id: `0${idx + 1}`,
  }));

  return (
    <section id="programs" ref={containerRef} className="py-24 md:py-32 bg-white relative">
      {/* Grid Overlay */}
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_right,#E5F3ED_1px,transparent_1px),linear-gradient(to_bottom,#E5F3ED_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

      <div className="max-w-[1400px] mx-auto px-6 flex flex-col lg:flex-row gap-12 lg:gap-24 relative z-10">

        {/* Left Column - Sticky Navigation */}
        <div className="lg:w-[33.33%] flex-shrink-0 hidden lg:block">
          <div className="sticky top-0 pt-24 max-h-screen overflow-auto">
            <div className="mb-12">
              <span className="inline-block px-3 py-1 bg-[#F2F9F6] rounded-full text-xs font-bold uppercase tracking-widest text-[#124029] mb-6">
                Our Programs
              </span>
              <p className="font-space text-2xl font-medium leading-tight text-[#124029] pr-8">
                Tailored curriculums that ensure clarity, confidence, and top results for every student.
              </p>
            </div>

            <nav className="space-y-1">
              {programsWithIds.map((program) => (
                <a
                  key={program.id}
                  href={`#${program.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById(program.id)?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className={`group flex items-center justify-between py-4 border-b border-gray-100 transition-colors duration-300 ${activeId === program.id ? 'text-[#124029]' : 'text-gray-400 hover:text-gray-600'}`}
                >
                  <span className={`font-space text-lg transition-all duration-300 ${activeId === program.id ? 'font-bold pl-2' : 'font-medium'}`}>
                    <span className={`mr-4 text-sm font-mono transition-opacity duration-300 ${activeId === program.id ? 'opacity-100 text-[#124029]' : 'opacity-50'}`}>{program.id}</span>
                    {program.title}
                  </span>
                  <span className={`transform transition-all duration-300 ${activeId === program.id ? 'opacity-100 translate-x-0 text-[#124029]' : 'opacity-0 -translate-x-4'}`}>
                    →
                  </span>
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Right Column - Scrollable Content */}
        <div className="lg:flex-1">
          {/* Mobile Title */}
          <div className="lg:hidden mb-16">
            <span className="inline-block px-3 py-1 bg-[#F2F9F6] rounded-full text-xs font-bold uppercase tracking-widest text-[#124029] mb-6">
              Our Programs
            </span>
            <h2 className="font-space text-4xl font-bold leading-tight text-[#124029]">
              Tailored curriculums that ensure clarity, confidence, and top results for every student.
            </h2>
          </div>

          <div className="space-y-32">
            {programsWithIds.map((program, idx) => (
              <div key={program.id} id={program.id} className="program-block scroll-mt-32 group">

                {/* Visual Block */}
                <div className="program-visual w-full aspect-[16/9] md:aspect-[2/1] rounded-[2rem] overflow-hidden mb-10 shadow-sm border border-gray-100 group-hover:shadow-xl transition-shadow duration-500">
                  {renderVisual(idx)}
                </div>

                {/* Content Block */}
                <div className="program-content max-w-2xl">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="font-mono text-[#124029] font-bold text-sm tracking-wider">{program.id}</span>
                    <span className="w-px h-4 bg-gray-300"></span>
                    <span className="text-xs font-bold uppercase tracking-widest text-gray-500">{program.description}</span>
                  </div>

                  <h3 className="font-space text-3xl md:text-5xl font-bold text-[#124029] mb-6">{program.title}</h3>

                  {/* Program Points */}
                  <div className="space-y-4 mb-8">
                    {program.points.map((point, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="mt-1 p-1 rounded-full bg-[#124029] text-white flex-shrink-0">
                          <CheckCircle size={14} className="text-white" strokeWidth={3} />
                        </div>
                        <span className="text-lg md:text-xl text-gray-700 leading-relaxed">{point}</span>
                      </div>
                    ))}
                  </div>

                  {/* Highlight Badge */}
                  <div className="inline-flex items-center gap-2 px-6 py-3 bg-[#F2F9F6] rounded-full border border-[#124029]/10 shadow-sm">
                    <span>🔥</span>
                    <span className="font-bold text-[#124029]">{program.highlight}</span>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Programs;