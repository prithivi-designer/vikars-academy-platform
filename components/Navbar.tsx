import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Button from './Button';

import logoIcon from '../src/vikars_logo_icon.png';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Updated colors to #124029
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <img src={logoIcon} alt="Vikar's Academy Logo" className="h-12 w-auto" />
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {['Offerings', 'Programs', 'Workshops', 'Reviews'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium hover:underline underline-offset-4 decoration-2 text-[#124029]"
              >
                {item}
              </a>
            ))}
            <Button
              onClick={() => document.getElementById('demo-section')?.scrollIntoView({ behavior: 'smooth' })}
              variant="primary"
              className="!bg-[#124029] hover:!bg-[#1a5c3a] !py-2 !px-6 text-sm"
            >
              Book Free Demo
            </Button>
          </div>

          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-[#124029]"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 right-0 border-b border-gray-200 shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col">
            {['Offerings', 'Programs', 'Workshops', 'Reviews'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="block px-3 py-2 text-base font-medium text-[#124029] hover:bg-gray-50">
                {item}
              </a>
            ))}
            <div className="pt-4 border-t border-gray-200 mt-4 px-3 space-y-3">
              <Button
                onClick={() => {
                  document.getElementById('demo-section')?.scrollIntoView({ behavior: 'smooth' });
                  setIsOpen(false);
                }}
                variant="primary"
                fullWidth
                className="!bg-[#124029] hover:!bg-[#1a5c3a]"
              >
                Book Free Demo
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;