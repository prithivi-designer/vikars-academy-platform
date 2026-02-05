import React from 'react';
import Button from './Button';
import { Bot, Calendar, Users, Video } from 'lucide-react';

const AIWorkshop: React.FC = () => {
  return (
    <section id="workshops" className="py-20 bg-gradient-to-br from-[#124029] to-[#0A2316] text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          <div className="lg:w-1/2">
            <div className="inline-block px-4 py-1 bg-white/10 rounded-full text-sm font-medium mb-4 backdrop-blur-sm border border-white/20">
              🚀 For Curious Minds (Grades 5–12)
            </div>
            <h2 className="text-4xl font-bold mb-4">
              AI Workshops: Future-Ready Skills, Taught the Fun Way
            </h2>
            <p className="text-xl text-emerald-100 mb-8">
              No Coding Needed. Empower your child to create, write, and think with AI responsibly.
            </p>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                  <Bot size={18} />
                </div>
                <span>How ChatGPT works & using it for homework/writing</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                  <span className="text-lg">🎨</span>
                </div>
                <span>Image generation with tools like DALL·E and Canva AI</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                  <span className="text-lg">⚖️</span>
                </div>
                <span>AI ethics & creativity: What kids should know</span>
              </li>
            </ul>

            <Button variant="secondary" className="!text-[#124029] !border-white hover:!bg-emerald-50">
              Register for AI Workshop
            </Button>
            <p className="mt-3 text-sm text-emerald-200">Limited seats available!</p>
          </div>

          <div className="lg:w-1/2 w-full">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 border-b border-white/10 pb-4">Workshop Details</h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#124029]/40 flex items-center justify-center text-white border border-white/10">
                    <Calendar size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Next Session</p>
                    <p className="font-bold">August 24, 2025 (2-hour live)</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#124029]/40 flex items-center justify-center text-white border border-white/10">
                    <Users size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Age Group</p>
                    <p className="font-bold">10 to 17 years</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#124029]/40 flex items-center justify-center text-white border border-white/10">
                    <Video size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Format</p>
                    <p className="font-bold">Zoom / Google Meet (Live + Recording)</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-black/20 rounded-lg p-4 text-sm text-center border border-white/5">
                🎁 Bonus: Q&A with AI Experts | Certificate included
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AIWorkshop;