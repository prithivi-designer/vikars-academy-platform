import React from 'react';
import Button from './Button';

const Movement: React.FC = () => {
  return (
    <section className="bg-[#0D0D0D] py-20 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-800 border border-gray-800">
          {/* Grid Item 1: Large Text */}
          <div className="bg-[#0D0D0D] p-8 md:p-12 col-span-1 md:col-span-2 lg:col-span-2 row-span-2 flex flex-col justify-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Join The Global <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-600">KnowledgeFit™</span> <br />
              Movement
            </h2>
            <p className="text-gray-400 text-lg mb-6 leading-relaxed">
              Every child has a spark of genius waiting to be unlocked. We've seen that spark ignite in thousands of students, turning fear into confidence.
            </p>
            <p className="text-white font-bold text-lg">
              The best time to start was yesterday. <br />
              The next best time is now.
            </p>
          </div>

          {/* Grid Item: Image */}
          <div className="bg-[#0D0D0D] col-span-1 aspect-square relative overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1577896334696-90770ad1d46e?q=80&w=2070&auto=format&fit=crop" 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-70 group-hover:opacity-100" 
              alt="Student"
            />
          </div>

          {/* Grid Item: Image */}
          <div className="bg-[#0D0D0D] col-span-1 aspect-square relative overflow-hidden group">
             <img 
              src="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&w=2069&auto=format&fit=crop" 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-70 group-hover:opacity-100" 
              alt="Student"
            />
          </div>

          {/* Grid Item: CTA */}
          <div className="bg-[#124029] p-8 col-span-1 md:col-span-1 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-white transition-colors group">
            <h3 className="text-2xl font-bold text-white group-hover:text-black mb-2 group-hover:scale-105 transition-transform">Get Started</h3>
            <div className="w-8 h-8 rounded-full border-2 border-white group-hover:border-black flex items-center justify-center mt-2 group-hover:bg-black group-hover:text-white transition-colors text-white">
              →
            </div>
          </div>

          {/* Grid Item: Founder Info */}
          <div className="bg-[#0D0D0D] p-8 col-span-1 flex flex-col justify-center">
            <h3 className="text-xl font-bold text-white mb-4">Dr. Alex Rivera</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>• TutorFlow Founder</li>
              <li>• PhD Mathematics, MIT</li>
              <li>• 15K+ Students Taught</li>
              <li>• 20+ Years Experience</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Movement;