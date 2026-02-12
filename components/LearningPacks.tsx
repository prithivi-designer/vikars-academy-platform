import React from 'react';
import { ArrowRight, Zap, BookOpen, Clock } from 'lucide-react';
import mathBookImg from '../src/Img/math_book.png';
import scienceBookImg from '../src/Img/science_book.png';
import codingBookImg from '../src/Img/coding_book.png';

const LearningPacks: React.FC = () => {
  const packs = [
    {
      title: "Math Mastery",
      grade: "Grade 5–10",
      price: "$29/mo",
      bgClass: "bg-[#F2F9F6]",
      icon: Zap,
      image: mathBookImg,
      buttonHover: "hover:ring-[#124029]/20"
    },
    {
      title: "Science Explorer",
      grade: "Grade 5–10",
      price: "$29/mo",
      bgClass: "bg-[#E7F3EF]",
      icon: BookOpen,
      image: scienceBookImg,
      buttonHover: "hover:ring-[#124029]/20"
    },
    {
      title: "Logic & Code",
      grade: "Grade 3–8",
      price: "$39/mo",
      bgClass: "bg-[#F2F9F6]",
      icon: Clock,
      image: codingBookImg,
      buttonHover: "hover:ring-[#124029]/20"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#124029] font-space tracking-tight">
            Popular Learning Packs
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packs.map((pack, idx) => (
            <div
              key={idx}
              className={`${pack.bgClass} rounded-[2.5rem] p-8 transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl border border-transparent hover:border-[#124029]/10`}
            >
              {/* Header: Icon & Grade */}
              <div className="flex justify-between items-start mb-8">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm">
                  <pack.icon className="text-[#124029]" size={24} strokeWidth={2.5} />
                </div>
                <div className="bg-white px-4 py-2 rounded-full shadow-sm text-sm font-bold text-gray-700">
                  {pack.grade}
                </div>
              </div>

              {/* Main Image Area */}
              <div className="relative aspect-[4/3] mb-8 flex items-center justify-center">
                <div className="absolute inset-0 bg-white/40 rounded-full blur-3xl transform scale-75"></div>
                <img
                  src={pack.image}
                  alt={pack.title}
                  className="w-full h-full object-contain drop-shadow-2xl transform hover:scale-105 transition-transform duration-500 grayscale-[10%]"
                />
              </div>

              {/* Content */}
              <div>
                <h3 className="text-2xl font-bold text-[#124029] mb-8 font-space">{pack.title}</h3>

                <button disabled className={`w-full bg-[#124029]/80 py-4 rounded-full font-bold text-white shadow-lg flex items-center justify-center gap-2 group transition-all duration-300 opacity-75 cursor-not-allowed hover:bg-[#124029]/80`}>
                  Coming Soon
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearningPacks;