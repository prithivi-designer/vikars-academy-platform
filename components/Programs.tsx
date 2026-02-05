import React, { useState } from 'react';
import { PROGRAMS } from '../constants';
import { CheckCircle, ArrowRight, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Programs: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Using strictly monochrome palette based on #124029
  // We can vary the collapsed color slightly for visual distinction or keep it uniform
  const getSolidColor = (idx: number) => {
    // Return the primary brand color for all, or very slight variations
    return 'bg-[#124029]';
  };

  const getLightColor = (idx: number) => {
     return 'bg-[#F2F9F6]'; // Very light green tint
  }

  const getTextColor = (idx: number) => {
    return 'text-[#124029]';
  }

  return (
    <section id="programs" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#124029] mb-6 font-space">
            Programs Designed for Every Student
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto font-medium">
             Tailored curriculums that ensure clarity, confidence, and top results. 
             Select a program to see details.
          </p>
        </div>

        {/* Desktop: Horizontal Accordion (Large Screens) */}
        <div className="hidden lg:flex h-[600px] gap-3">
          {PROGRAMS.map((program, idx) => {
            const isActive = activeIndex === idx;
            const solidColor = getSolidColor(idx);
            const lightColor = getLightColor(idx);
            const textColor = getTextColor(idx);

            return (
              <motion.div
                key={idx}
                layout
                onClick={() => setActiveIndex(idx)}
                className={`relative rounded-[2rem] overflow-hidden cursor-pointer transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] ${isActive ? 'flex-[4]' : 'flex-[0.5] hover:flex-[0.6]'}`}
              >
                {/* Expanded Content */}
                <div className={`absolute inset-0 w-full h-full ${lightColor} flex flex-col justify-between p-10 opacity-0 transition-opacity duration-300 delay-100 ${isActive ? 'opacity-100 z-10' : 'z-0'}`}>
                   <div>
                      <div className={`inline-block px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-widest mb-6 bg-white border border-[#124029]/10 shadow-sm ${textColor}`}>
                        {program.description}
                      </div>
                      <h3 className="text-5xl font-bold text-[#124029] mb-8 font-space leading-[1.1]">
                        {program.title}
                      </h3>
                      <div className="space-y-5 mb-8">
                        {program.points.map((point, i) => (
                           <motion.div 
                             key={i} 
                             initial={{ opacity: 0, x: -20 }}
                             animate={{ opacity: isActive ? 1 : 0, x: isActive ? 0 : -20 }}
                             transition={{ delay: 0.2 + (i * 0.1) }}
                             className="flex items-start gap-4"
                           >
                              <div className={`mt-1 p-1 rounded-full ${solidColor} text-white`}>
                                 <CheckCircle size={14} className="text-white" strokeWidth={3} />
                              </div>
                              <span className="text-xl text-gray-800 font-medium leading-relaxed">{point}</span>
                           </motion.div>
                        ))}
                      </div>
                   </div>
                   
                   <div className="flex items-center justify-between mt-auto">
                      <div className="bg-white px-6 py-4 rounded-2xl shadow-lg shadow-[#124029]/5 border border-[#124029]/5 font-bold text-gray-900 text-lg flex items-center gap-2">
                        <span>🔥</span> {program.highlight}
                      </div>
                      <div className={`w-16 h-16 rounded-full ${solidColor} flex items-center justify-center text-white shadow-xl group hover:scale-110 transition-transform`}>
                        <ArrowUpRight size={32} />
                      </div>
                   </div>
                </div>

                {/* Collapsed Content (Strip) - Visible when NOT active */}
                <div className={`absolute inset-0 w-full h-full ${solidColor} flex flex-col items-center justify-between py-10 transition-opacity duration-300 ${isActive ? 'opacity-0 -z-10' : 'opacity-100 z-10'}`}>
                   <span className="text-white/30 font-space text-2xl font-bold">0{idx + 1}</span>
                   
                   {/* Vertical Text */}
                   <div className="h-full flex items-center justify-center">
                      <div className="-rotate-90 whitespace-nowrap text-white text-3xl font-bold tracking-widest uppercase font-space">
                         {program.title}
                      </div>
                   </div>
                   
                   <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white backdrop-blur-sm">
                      <ArrowRight size={20} />
                   </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile: Vertical Accordion (Small Screens) */}
        <div className="flex lg:hidden flex-col gap-4">
           {PROGRAMS.map((program, idx) => {
             const isActive = activeIndex === idx;
             const solidColor = getSolidColor(idx);
             const lightColor = getLightColor(idx);
             const textColor = getTextColor(idx);
             
             return (
               <div 
                 key={idx} 
                 onClick={() => setActiveIndex(isActive ? -1 : idx)}
                 className={`rounded-3xl overflow-hidden transition-all duration-300 ${isActive ? '' : solidColor}`}
               >
                 {/* Collapsed Header */}
                 {!isActive && (
                    <div className="p-6 flex items-center justify-between text-white cursor-pointer">
                       <h3 className="text-2xl font-bold font-space tracking-wide">{program.title}</h3>
                       <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                         <ArrowRight size={20} />
                       </div>
                    </div>
                 )}

                 {/* Expanded Body */}
                 {isActive && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className={`${lightColor} border-2 border-[#124029]/10`}
                    >
                       <div className={`p-6 ${solidColor} text-white flex items-center justify-between`}>
                          <h3 className="text-3xl font-bold font-space">{program.title}</h3>
                          <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                            <ArrowUpRight size={20} />
                          </div>
                       </div>
                       
                       <div className="p-6">
                         <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-6 bg-white border border-black/5 ${textColor}`}>
                            {program.description}
                         </div>
                         
                         <ul className="space-y-4 mb-8">
                           {program.points.map((point, i) => (
                             <li key={i} className="flex items-start gap-3">
                               <CheckCircle size={20} className={`mt-0.5 flex-shrink-0 ${textColor}`} />
                               <span className="text-gray-800 font-medium text-lg">{point}</span>
                             </li>
                           ))}
                         </ul>
                         
                         <div className="bg-white p-4 rounded-xl border border-black/5 text-sm font-bold text-center shadow-sm">
                           🔥 {program.highlight}
                         </div>
                       </div>
                    </motion.div>
                 )}
               </div>
             )
           })}
        </div>

      </div>
    </section>
  );
};

export default Programs;