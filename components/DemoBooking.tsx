import React from 'react';
import { Gift } from 'lucide-react';
import megphoneimg from '../src/Img/megaphone.webp';

const DemoBooking: React.FC = () => {
  return (
    <section className="py-20 bg-[#0F3825] relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left Column: Content */}
          <div className="relative">
            <div className="mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-400/10 border border-emerald-400/20 text-emerald-200 text-xs font-bold uppercase tracking-wider mb-6 shadow-sm backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                Live 1:1 Session
              </div>

              <h2 className="text-4xl md:text-6xl font-bold text-white font-space leading-[1.1] tracking-tight mb-6 drop-shadow-sm">
                Book Your Free <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F3EAD8] via-orange-100 to-[#F3EAD8]">
                  Online Demo Class
                </span>
              </h2>

              <p className="text-lg md:text-xl text-emerald-100/90 font-medium max-w-md leading-relaxed border-l-4 border-orange-400 pl-4 py-1">
                See the difference in just <span className="text-white font-bold border-b-2 border-orange-400/30">30 minutes</span>.
              </p>
            </div>

            <div className="relative mt-8 pl-4">
              {/* 3D Megaphone Icon */}
              <div className="absolute -top-16 -left-8 md:-left-12 z-20 w-32 h-32 md:w-40 md:h-40 animate-[bounce_3s_infinite]">
                <img
                  src={megphoneimg}
                  alt="Megaphone"
                  className="w-full h-full object-contain drop-shadow-2xl transform -rotate-12"
                />
              </div>

              {/* Chat Bubble Card */}
              <div className="bg-[#F3EAD8] rounded-[2rem] rounded-tl-none p-8 md:p-10 shadow-2xl relative z-10 border-4 border-[#F3EAD8]/50">
                <h1 className="text-5xl md:text-6xl font-extrabold text-[#0F3825] mb-3 font-space tracking-tight">
                  Hurry!
                </h1>
                <p className="text-[#0F3825] text-lg md:text-xl font-bold leading-snug">
                  Limited demo slots available today! <br />
                  Trusted by 5,000+ parents.
                </p>
              </div>
            </div>

            <div className="mt-8 flex items-start gap-3 text-emerald-100 text-sm md:text-base font-medium max-w-lg bg-white/5 p-4 rounded-xl border border-white/10 backdrop-blur-sm">
              <Gift className="flex-shrink-0 text-orange-400 mt-0.5" />
              <p><span className="text-orange-400 font-bold">Bonus:</span> Get a free detailed learning report + customised study plan after your trial.</p>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="w-full max-w-lg mx-auto lg:ml-auto">
            <form className="space-y-5">
              <div>
                <label className="block text-white text-sm font-medium mb-2 pl-1">Name</label>
                <input
                  type="text"
                  className="w-full h-12 px-4 rounded-xl bg-white border-none focus:ring-4 focus:ring-emerald-500/30 outline-none text-gray-900 placeholder-gray-400 transition-shadow"
                />
              </div>

              <div>
                <label className="block text-white text-sm font-medium mb-2 pl-1">Email ID</label>
                <input
                  type="email"
                  className="w-full h-12 px-4 rounded-xl bg-white border-none focus:ring-4 focus:ring-emerald-500/30 outline-none text-gray-900 placeholder-gray-400 transition-shadow"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-white text-sm font-medium mb-2 pl-1">Board</label>
                  <div className="relative">
                    <select className="w-full h-12 px-4 rounded-xl bg-white border-none focus:ring-4 focus:ring-emerald-500/30 outline-none text-gray-900 appearance-none cursor-pointer">
                      <option value="" disabled selected></option>
                      <option value="cbse">CBSE</option>
                      <option value="icse">ICSE</option>
                      <option value="ib">IB</option>
                      <option value="state">State</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                      <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                    </div>
                  </div>
                </div>
                <div>
                  <label className="block text-white text-sm font-medium mb-2 pl-1">Location</label>
                  <input
                    type="text"
                    className="w-full h-12 px-4 rounded-xl bg-white border-none focus:ring-4 focus:ring-emerald-500/30 outline-none text-gray-900 transition-shadow"
                  />
                </div>
              </div>

              <div>
                <label className="block text-white text-sm font-medium mb-2 pl-1">Phone No</label>
                <div className="flex relative">
                  <span className="absolute left-0 top-0 bottom-0 w-16 flex items-center justify-center text-gray-500 font-medium border-r border-gray-100 z-10">
                    +91
                  </span>
                  <input
                    type="tel"
                    className="w-full h-12 pl-20 pr-4 rounded-xl bg-white border-none focus:ring-4 focus:ring-emerald-500/30 outline-none text-gray-900 transition-shadow"
                  />
                </div>
              </div>

              <button
                type="button"
                className="w-full py-4 bg-[#F3EAD8] hover:bg-[#ebdcc0] text-[#0F3825] font-bold rounded-xl text-lg shadow-[0_4px_14px_0_rgba(243,234,216,0.3)] hover:shadow-[0_6px_20px_rgba(243,234,216,0.4)] hover:-translate-y-0.5 active:translate-y-0 transition-all mt-6 uppercase tracking-wider"
              >
                Verify Number
              </button>

              <p className="text-center text-emerald-200/60 text-xs mt-4">
                By clicking verify, you agree to our Terms & Privacy Policy
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoBooking;