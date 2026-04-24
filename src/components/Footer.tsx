import React from 'react';
import { Logo } from './Logo';

const footerLinks = [
  { label: 'Método', href: '#metodo' },
  { label: 'Produtos', href: '#produtos' },
  { label: 'Gratuitos', href: '#gratuitos' },
  { label: 'Newsletter', href: '#newsletter' },
];

export const Footer: React.FC = () => {
  return (
    <footer className="bg-navy px-6 sm:px-12 md:px-20 py-12 border-t border-off-white border-opacity-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
          {/* Logo */}
          <Logo size="sm" variant="light" showText={true} />

          {/* Links */}
          <div className="flex flex-wrap gap-8 md:gap-12">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-off-white text-opacity-60 hover:text-opacity-100 transition-opacity duration-200 font-light"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-xs text-off-white text-opacity-40 font-light">
            © 2026 Sem Crise
          </div>
        </div>
      </div>
    </footer>
  );
};
