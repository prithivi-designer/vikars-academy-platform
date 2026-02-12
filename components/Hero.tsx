import React from 'react';
import { ArrowRight, Star, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import Button from './Button';
import heroImg from '../src/Img/hero_img.jpg';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-white flex items-center overflow-hidden pt-20 lg:pt-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left Content */}
          <div className="text-left py-10">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-5xl lg:text-7xl font-bold text-[#124029] leading-[1.1] mb-6 tracking-tight font-space"
            >
              Learning that feels like <br className="hidden lg:block" />
              <span className="text-emerald-700">MAGIC</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="text-xl text-gray-600 mb-10 leading-relaxed max-w-lg"
            >
              One child. One expert. 100% focus. Personalized 1-on-1 Online tuition that builds clarity,
              confidence, and results parents can trust.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <Button variant="primary" className="!bg-[#124029] !border-[#124029] hover:!bg-[#1a5c3a] !px-10 !py-4 !text-lg !rounded-lg shadow-[#124029]/30 shadow-xl cursor-pointer">
                Start your journey
                <ArrowRight size={20} className="ml-2" />
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              className="pt-8 border-t border-gray-100"
            >
              <p className="text-sm font-bold text-gray-500 mb-4 uppercase tracking-widest">Trusted by 300K+ families worldwide</p>
            </motion.div>
          </div>

          {/* Right Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="relative lg:h-[800px] flex items-center justify-center py-10 lg:py-0"
          >
            {/* New Main Image (Replacing Green Shape & Old Image) */}
            <div className="relative z-10 w-full max-w-[600px]">
              <img
                src={heroImg}
                alt="Student Learning"
                className="w-full rounded-[2.5rem] shadow-2xl object-cover"
              />

              {/* Floating UI Cards - Repositioned relative to new image */}

              {/* Card 1: Satisfaction */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8, ease: "easeOut" }}
                className="absolute -left-6 bottom-24 lg:bottom-32 lg:-left-20 bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white/40 max-w-[240px] sm:max-w-[280px] hidden md:block animate-[bounce_5s_infinite]"
              >
                <p className="text-sm font-bold text-gray-600 mb-3">How much did you improve?</p>

                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-xs font-bold mb-1">
                      <span className="text-[#124029]">Math Score</span>
                      <span className="text-[#124029]">95%</span>
                    </div>
                    <div className="h-2 w-full bg-emerald-50 rounded-full overflow-hidden">
                      <div className="h-full w-[95%] bg-[#124029] rounded-full"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs font-bold mb-1">
                      <span className="text-emerald-700">Science Score</span>
                      <span className="text-emerald-700">92%</span>
                    </div>
                    <div className="h-2 w-full bg-emerald-50 rounded-full overflow-hidden">
                      <div className="h-full w-[92%] bg-emerald-600 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Card 2: Student Goal */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.0, ease: "easeOut" }}
                className="absolute -right-6 -bottom-12 lg:-bottom-16 lg:-right-10 bg-white/90 backdrop-blur-md p-5 rounded-2xl rounded-tr-none shadow-xl border border-white/40 max-w-[240px] sm:max-w-[260px] hidden md:block"
              >
                <div className="flex items-center gap-2 mb-2 text-[#124029]">
                  <Star size={16} fill="currentColor" />
                  <span className="text-xs font-bold uppercase">Student Goal</span>
                </div>
                <div className="bg-gray-100 rounded-lg p-3 text-sm text-gray-700 font-medium leading-snug">
                  "I want to master Calculus before my finals next month."
                </div>
                <div className="flex justify-end mt-2">
                  <div className="bg-[#124029] text-white text-xs px-2 py-1 rounded-md flex items-center gap-1 font-bold">
                    <CheckCircle size={12} /> Achieved
                  </div>
                </div>
              </motion.div>

            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;