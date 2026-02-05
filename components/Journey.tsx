import React from 'react';
import { Heart, Zap, Shield, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import joyimg from '../src/Img/joy_img.jpeg';

const Journey: React.FC = () => {
  return (
    <section className="py-24 bg-[#05110B] text-white overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-[#124029] rounded-full blur-[120px] opacity-40" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-[#124029] rounded-full blur-[120px] opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-emerald-400 text-sm font-bold mb-6">
              <Sparkles size={14} /> The Vikar’s Way
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              More Than Just Tuition. <br />
              <span className="text-emerald-500">We Shape Journeys.</span>
            </h2>
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              At Vikar’s Academy, we don’t just teach lessons — we shape journeys.
              Every child learns differently. Some race ahead, some pause to explore, and some just need someone to believe in them.
            </p>
            <p className="text-gray-400 text-lg mb-10 leading-relaxed">
              Here, tutors aren’t just subject experts — they are mentors, motivators, and partners in growth. They celebrate every “aha!” moment and build the one thing exams can’t measure — confidence.
            </p>

            <div className="bg-[#124029]/20 rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold mb-6">The 3C Promise</h3>
              <div className="space-y-6">
                {[
                  { icon: Shield, title: "Confidence", text: "To believe in themselves and their ability to solve any problem." },
                  { icon: Zap, title: "Clarity", text: "To master every concept without rote memorization." },
                  { icon: Heart, title: "Character", text: "To thrive beyond exams with the skills and courage to learn." }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 * index, duration: 0.5 }}
                    className="flex items-start gap-4"
                  >
                    <div className="p-3 bg-[#124029] rounded-lg text-white">
                      <item.icon size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-white">{item.title}</h4>
                      <p className="text-gray-400 text-sm">{item.text}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <img src={joyimg} alt="Mentor and student" className="w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#05110B] via-transparent to-transparent flex items-end p-8">
                <p className="text-white font-medium italic">"It’s about giving your child the skills, courage, and joy of learning that last a lifetime."</p>
              </div>
            </div>
            {/* Decorative element */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="absolute -bottom-6 -right-6 bg-[#124029] text-white p-6 rounded-2xl font-bold text-xl shadow-lg max-w-[200px] border border-white/10"
            >
              Trusted by 5,000+ Parents
            </motion.div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Journey;