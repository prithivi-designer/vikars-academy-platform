import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'dark';
  fullWidth?: boolean;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  fullWidth = false, 
  children, 
  className = '',
  ...props 
}) => {
  // Added rounded-full for round buttons
  // Added hover:scale-105 active:scale-95 and shadow effects for animation
  const baseStyles = "inline-flex items-center justify-center px-8 py-3 text-base font-bold transition-all duration-300 border-2 focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-full hover:scale-105 active:scale-95 hover:shadow-xl relative overflow-hidden group";
  
  const variants = {
    primary: "bg-[#124029] border-[#124029] text-white hover:bg-[#1a5c3a] hover:border-[#1a5c3a] shadow-lg shadow-[#124029]/20",
    secondary: "bg-white text-[#124029] border-white hover:bg-gray-50",
    outline: "bg-transparent text-white border-white hover:bg-white hover:text-[#124029]",
    dark: "bg-[#0D0D0D] border-[#0D0D0D] text-white hover:bg-[#222]"
  };

  const widthStyle = fullWidth ? "w-full" : "w-auto";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${widthStyle} ${className}`}
      {...props}
    >
      {/* Optional shine effect container */}
      <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent z-0" />
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </button>
  );
};

export default Button;