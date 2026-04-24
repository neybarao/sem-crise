import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: 'light' | 'dark';
  label?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ variant = 'light', label, className = '', ...props }, ref) => {
    const variantStyles = {
      light: 'bg-off-white border-grafite text-grafite placeholder:text-opacity-40',
      dark: 'bg-off-white border-off-white text-grafite placeholder:text-opacity-40',
    };

    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-medium text-grafite mb-2">
            {label}
          </label>
        )}
        <input
          ref={ref}
          className={`w-full rounded-full border px-6 py-2.5 text-sm transition-all duration-normal ease-smooth focus-visible:outline-none focus-visible:border-laranja focus-visible:ring-2 focus-visible:ring-laranja focus-visible:ring-opacity-50 ${variantStyles[variant]} ${className}`}
          {...props}
        />
      </div>
    );
  }
);

Input.displayName = 'Input';
