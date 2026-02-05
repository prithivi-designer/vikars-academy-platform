import React from 'react';
import { motion } from 'framer-motion';
import { TESTIMONIALS } from '../constants';
import { Star } from 'lucide-react';

const Marquee: React.FC = () => {
  return (
    <div className="bg-[#111] py-20 overflow-hidden relative border-y border-gray-800">
      <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-[#111] to-transparent z-10" />
      <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-[#111] to-transparent z-10" />
      
      <div className="mb-12 text-center relative z-10 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Trusted by Parents, <span className="text-emerald-400">Loved by Students</span>
        </h2>
      </div>

      <div className="flex">
        <motion.div 
          className="flex gap-6 px-6"
          animate={{ x: "-50%" }}
          transition={{ 
            duration: 40, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          style={{ width: "max-content" }}
        >
          {[...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS].map((item, idx) => (
            <div 
              key={`${item.id}-${idx}`}
              className="w-[300px] md:w-[350px] bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-xl flex-shrink-0 hover:bg-white/10 transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-emerald-400 text-emerald-400" />
                ))}
              </div>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6 line-clamp-4">
                "{item.content}"
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-10 h-10 rounded-full bg-gray-700 overflow-hidden">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="text-white font-bold text-sm flex items-center gap-2">
                    {item.name}
                    <span className="text-xs">{item.flag}</span>
                  </div>
                  <div className="text-gray-500 text-xs uppercase">{item.role}</div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Marquee;