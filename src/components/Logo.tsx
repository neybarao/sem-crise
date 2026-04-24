import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'light' | 'dark';
  showText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ size = 'md', variant = 'dark', showText = false }) => {
  const sizes = {
    sm: 'w-6 h-6',
    md: 'w-7 h-7',
    lg: 'w-8 h-8',
  };

  const textColor = variant === 'light' ? '#0C0C0A' : '#F4F1EA';
  const accentColor = '#EB3F00';

  return (
    <div className="flex items-center gap-2">
      <svg
        className={`${sizes[size]} flex-shrink-0`}
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id={`gradient-${variant}`} x1="14" y1="0" x2="14" y2="28">
            <stop offset="0%" stopColor={accentColor} />
            <stop offset="100%" stopColor={accentColor} stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Outer circle */}
        <circle cx="14" cy="14" r="14" fill={`url(#gradient-${variant})`} opacity="0.25" />

        {/* Middle circle */}
        <circle cx="14" cy="14" r="10.5" fill="none" stroke={`url(#gradient-${variant})`} strokeWidth="1" opacity="0.4" />

        {/* Inner circle */}
        <circle cx="14" cy="14" r="7" fill="none" stroke={`url(#gradient-${variant})`} strokeWidth="1" opacity="0.6" />

        {/* Center dot */}
        <circle cx="14" cy="14" r="2" fill={accentColor} />
      </svg>

      {showText && (
        <span
          className="font-display font-semibold text-lg"
          style={{ color: textColor }}
        >
          Sem Crise
        </span>
      )}
    </div>
  );
};

export default Logo;
