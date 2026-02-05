import React, { useState } from 'react';
import { FAQS } from '../constants';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-black mb-4"
          >
            Common Questions Parents Ask
          </motion.h2>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.4 }}
                className={`border rounded-xl transition-all duration-200 ${isOpen ? 'border-gray-900 bg-gray-50' : 'border-gray-200 bg-white/60 backdrop-blur-sm hover:border-gray-400'}`}
              >
                <button
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none cursor-pointer"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                >
                  <span className={`font-bold text-lg ${isOpen ? 'text-black' : 'text-gray-700'}`}>
                    {faq.question}
                  </span>
                  {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-0">
                        <p className="text-gray-600 leading-relaxed">
                          {faq.answer}
                        </p>
                        {faq.cta && (
                          <div className="mt-4 pt-4 border-t border-gray-200">
                            <span className="text-[#124029] font-bold text-sm cursor-pointer hover:underline">
                              👉 {faq.cta}
                            </span>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;