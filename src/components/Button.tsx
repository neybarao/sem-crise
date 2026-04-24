import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', className = '', ...props }, ref) => {
    const baseStyles = 'font-medium rounded-full transition-all duration-normal ease-smooth active:scale-97 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-laranja';

    const variantStyles = {
      primary: 'bg-laranja text-off-white hover:bg-laranja-hover disabled:opacity-50 disabled:cursor-not-allowed',
      ghost: 'border border-opacity-18 border-off-white text-off-white hover:border-opacity-65 hover:text-off-white disabled:opacity-50 disabled:cursor-not-allowed',
    };

    const sizeStyles = {
      sm: 'px-4 py-2 text-xs',
      md: 'px-6 py-2.5 text-sm font-medium',
      lg: 'px-8 py-3 text-base font-medium',
    };

    return (
      <button
        ref={ref}
        className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';
