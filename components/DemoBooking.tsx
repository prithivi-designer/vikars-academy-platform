import React from 'react';
import { Gift } from 'lucide-react';
import megphoneimg from '../src/Img/megaphone.webp';

const DemoBooking: React.FC = () => {
  return (
    <section id="demo-section" className="py-20 bg-[#0F3825] relative overflow-hidden">
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
          <div className="w-full max-w-lg mx-auto lg:ml-auto bg-#0F3825 p-2 rounded-2xl shadow-xl">
            <iframe
              src="https://tally.so/embed/GxrbYk?alignLeft=1&hideTitle=1&dynamicHeight=1&transparentBackground=1"
              loading="lazy"
              width="100%"
              height="600"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              title="Demo Booking Form"
              className="w-full"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoBooking;