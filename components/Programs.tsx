"use client";
import React, { useState } from 'react';
import { PROGRAMS } from '../constants';
import { Check, Columns, Activity, FileText, Bookmark } from 'lucide-react';
import cbseImg from '../src/Img/cbse.png';
import icseImg from '../src/Img/icse.png';
import ibImg from '../src/Img/ib.png';
import stateBoardImg from '../src/Img/stateboard.png';

const icons = [Columns, Activity, FileText, Bookmark];

const Programs: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const images = [
    (cbseImg as any).src || cbseImg, // CBSE
    (icseImg as any).src || icseImg, // ICSE
    (ibImg as any).src || ibImg, // IB
    (stateBoardImg as any).src || stateBoardImg  // State Boards
  ];

  const activeProgram = PROGRAMS[activeTab];

  return (
    <section id="programs" className="py-20 md:py-28 bg-[#FAFAFC] relative">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-12 lg:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold text-gray-900 mb-6 tracking-tight font-space leading-tight">
            Comprehensive <span className="text-[#0f3825]">Programs and Benefits</span>
          </h2>
          <p className="text-gray-500 text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
            We pride ourselves on delivering a range of tailored curriculums designed to meet diverse academic needs and exceed expectations. From strategic exam preparation to holistic learning solutions.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-col sm:flex-row justify-between items-center border border-gray-100 bg-white rounded-2xl sm:rounded-full p-2 max-w-5xl mx-auto shadow-sm mb-12 lg:mb-16 gap-2 sm:gap-0">
          {PROGRAMS.map((program, idx) => {
            const Icon = icons[idx % icons.length];
            const isActive = activeTab === idx;
            return (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`w-full sm:w-auto flex-1 flex items-center justify-center gap-3 px-6 py-3.5 rounded-full font-semibold transition-all duration-300 ${isActive
                  ? 'bg-[#0f3825]/20 text-[#0f3825]'
                  : 'text-gray-500 hover:text-gray-800 hover:bg-gray-50'
                  }`}
              >
                <Icon size={18} className={isActive ? 'text-[#0f3825]' : 'text-gray-400'} />
                <span className="whitespace-nowrap text-sm md:text-base">{program.title}</span>
              </button>
            );
          })}
        </div>

        {/* Content Area */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">

          {/* Image Side */}
          <div className="w-full lg:w-[45%] lg:order-1">
            <div className="relative aspect-[4/3] w-full rounded-[2rem] overflow-hidden border-2 border-#0f3825">
              <img
                src={images[activeTab]}
                alt={activeProgram.title}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>

          {/* Text Side */}
          <div className="w-full lg:w-[55%] lg:order-2">
            <h3 className="text-2xl md:text-[32px] font-bold text-gray-900 mb-4 font-space leading-tight">
              {activeProgram.description}
            </h3>
            <p className="text-gray-500 text-base md:text-[17px] mb-8 leading-relaxed">
              It represents a vision-driven strategy where creative and ambitious educational ideas are leveraged alongside sophisticated digital learning tools. {activeProgram.highlight}.
            </p>

            <div className="space-y-6">
              {activeProgram.points.map((point, idx) => {
                const words = point.split(' ');
                const titlePart = words.slice(0, 2).join(' ');
                const descPart = words.slice(2).join(' ');

                return (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="mt-1 flex-shrink-0">
                      <div className="w-[22px] h-[22px] rounded-full border-[1.5px] border-#0f3825 flex items-center justify-center bg-transparent">
                        <Check size={12} className="text-#0f3825" strokeWidth={3} />
                      </div>
                    </div>
                    <div className="text-gray-500 leading-relaxed text-sm md:text-[15px]">
                      <span className="font-bold text-gray-900">{titlePart} : </span>
                      {descPart}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Programs;