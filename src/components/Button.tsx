'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', className = '', ...props }, ref) => {
    const baseStyles = 'font-medium rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-laranja';

    const variantStyles = {
      primary: 'bg-laranja text-off-white disabled:opacity-50 disabled:cursor-not-allowed',
      ghost: 'border border-opacity-18 border-off-white text-off-white disabled:opacity-50 disabled:cursor-not-allowed',
    };

    const sizeStyles = {
      sm: 'px-4 py-2 text-xs',
      md: 'px-6 py-2.5 text-sm font-medium',
      lg: 'px-8 py-3 text-base font-medium',
    };

    return (
      <motion.button
        ref={ref as any}
        className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: 'spring', stiffness: 400, damping: 10 }}
        {...(props as any)}
      />
    );
  }
);

Button.displayName = 'Button';
