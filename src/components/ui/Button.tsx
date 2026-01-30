import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick
}: ButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center font-bold rounded-full transition-all duration-200';

  const variantClasses = {
    primary: 'bg-[#5454D4] text-white hover:bg-[#4343B8] hover:-translate-y-0.5',
    secondary: 'bg-transparent text-[#161C2D] hover:bg-black/5',
    outline: 'bg-transparent text-[#5454D4] border-2 border-[#5454D4] hover:bg-[#5454D4] hover:text-white'
  };

  const sizeClasses = {
    sm: 'px-5 py-2.5 text-sm',
    md: 'px-8 py-4 text-[15px]',
    lg: 'px-10 py-5 text-base'
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
