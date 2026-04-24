import React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  interactive?: boolean;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ children, interactive = false, className = '', ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={`rounded-lg bg-opacity-4 bg-off-white border border-opacity-8 border-off-white p-6 transition-all duration-normal ease-smooth ${interactive ? 'hover:border-opacity-40 hover:border-laranja hover:-translate-y-1' : ''} ${className}`}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';
