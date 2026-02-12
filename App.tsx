import React from 'react';
import Navbar from './components/Navbar';
import ScrollSection from './components/ScrollSection';
import Hero from './components/Hero';
import Features from './components/Features';
import DemoBooking from './components/DemoBooking';
import Programs from './components/Programs';
import Journey from './components/Journey';
import AIWorkshop from './components/AIWorkshop';
import Marquee from './components/Marquee';
import LearningPacks from './components/LearningPacks';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import BlogSection from './components/BlogSection';
import YouTubeSection from './components/YouTubeSection';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen w-full bg-white selection:bg-[#124029] selection:text-white">

      {/* Global Background Layer */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Noise Texture (Darker Dots) */}
        <div
          className="absolute inset-0 z-0 opacity-60"
          style={{
            background: "#FFF8E9",
            backgroundImage: "radial-gradient(circle at 1px 1px, rgba(0, 0, 0, 0.35) 1px, transparent 0)",
            backgroundSize: "20px 20px",
          }}
        />

        {/* Liquid Gradient Orbs - Strictly #124029 Tones */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#124029]/5 rounded-full blur-[120px] mix-blend-multiply transform translate-x-1/2 -translate-y-1/2" />
        <div className="absolute top-[40%] -left-[200px] w-[600px] h-[600px] bg-[#124029]/5 rounded-full blur-[100px] mix-blend-multiply" />
      </div>

      {/* Content Layer */}
      <div className="relative z-10">
        <Navbar />

        <Hero />

        <ScrollSection>
          <Features />
        </ScrollSection>

        <ScrollSection delay={0.1}>
          <DemoBooking />
        </ScrollSection>

        <Programs />

        <ScrollSection>
          <Journey />
        </ScrollSection>

        <ScrollSection>
          <AIWorkshop />
        </ScrollSection>

        <ScrollSection direction='none'>
          <Marquee />
        </ScrollSection>

        <ScrollSection>
          <LearningPacks />
        </ScrollSection>

        <ScrollSection>
          <BlogSection />
        </ScrollSection>

        <ScrollSection>
          <YouTubeSection />
        </ScrollSection>

        <ScrollSection>
          <FAQ />
        </ScrollSection>

        <Footer />
        <WhatsAppButton />
      </div>
    </div>
  );
};

export default App;