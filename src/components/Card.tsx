'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  interactive?: boolean;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ children, interactive = false, className = '', ...props }, ref) => {
    return (
      <motion.div
        ref={ref as any}
        className={`rounded-lg bg-opacity-4 bg-off-white border border-opacity-8 border-off-white p-6 ${className}`}
        whileHover={
          interactive
            ? {
                y: -8,
              }
            : {}
        }
        transition={{ duration: 0.3 }}
        style={
          interactive
            ? {
                borderColor: 'rgba(15, 27, 45, 0.08)',
              }
            : undefined
        }
        {...(props as any)}
      >
        {children}
      </motion.div>
    );
  }
);

Card.displayName = 'Card';
