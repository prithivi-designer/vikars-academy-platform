import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Youtube, ArrowRight } from 'lucide-react';
import Button from './Button';
import StackFeatureSection from '@/components/ui/stack-feature-section';

import fullLogo from '../src/vikars_full_logo.png';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200 pt-16 pb-8">
      <div className="w-full">
        <StackFeatureSection />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <img src={fullLogo} alt="Vikar's Academy" className="h-20 mb-6" />
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Empowering students with personalized education that builds confidence and character. We believe every child deserves a mentor who believes in them.
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/profile.php?id=61576582391137" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full hover:bg-[#124029] hover:text-white transition-all"><Facebook size={18} /></a>
              <a href="https://www.instagram.com/vikarsacademy/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full hover:bg-[#124029] hover:text-white transition-all"><Instagram size={18} /></a>
              <a href="https://www.linkedin.com/company/vikar-s-academy/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full hover:bg-[#124029] hover:text-white transition-all"><Linkedin size={18} /></a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-[#124029] text-sm uppercase mb-6 tracking-widest">Company</h3>
            <ul className="space-y-4 text-sm font-medium text-gray-600">
              <li><a href="#" className="hover:text-[#124029]">About Us</a></li>
              <li><a href="#" className="hover:text-[#124029]">Careers</a></li>
              <li><a href="#" className="hover:text-[#124029]">Blog</a></li>
              <li><a href="#" className="hover:text-[#124029]">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-[#124029] text-sm uppercase mb-6 tracking-widest">Programs</h3>
            <ul className="space-y-4 text-sm font-medium text-gray-600">
              <li><a href="#" className="hover:text-[#124029]">CBSE Tuition</a></li>
              <li><a href="#" className="hover:text-[#124029]">ICSE Tuition</a></li>
              <li><a href="#" className="hover:text-[#124029]">IB Diploma</a></li>
              <li><a href="#" className="hover:text-[#124029]">NEET Prep</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-[#124029] text-sm uppercase mb-6 tracking-widest">Contact</h3>
            <ul className="space-y-4 text-sm font-medium text-gray-600">
              <li>Support: +91 9141120380</li>
              <li>Email: vikarsacademy@gmail.com</li>
              <li><a href="https://wa.me/919141120380" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-[#124029] hover:underline">Chat on WhatsApp <ArrowRight size={14} className="ml-1" /></a></li>
            </ul>
          </div>

        </div>

        <div className="border-t border-gray-200 pt-8 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Vikar's Academy. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;