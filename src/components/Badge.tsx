import React from 'react';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'entrada' | 'essencial' | 'premium';
  children: React.ReactNode;
}

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ variant = 'premium', className = '', children, ...props }, ref) => {
    const variantStyles = {
      entrada: 'bg-mostarda text-grafite',
      essencial: 'bg-laranja text-off-white',
      premium: 'bg-opacity-8 bg-off-white text-off-white',
    };

    return (
      <span
        ref={ref}
        className={`inline-block rounded-full px-3 py-1 text-xs font-medium ${variantStyles[variant]} ${className}`}
        {...props}
      >
        {children}
      </span>
    );
  }
);

Badge.displayName = 'Badge';
