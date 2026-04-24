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
    <footer className="bg-dark-footer py-11 px-6 sm:px-14 border-t border-off-white border-opacity-5">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col xs:flex-row xs:items-center xs:justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Logo size="sm" variant="light" showText={true} />
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs text-opacity-35 text-off-white hover:text-opacity-70 transition-all duration-normal ease-smooth"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-xs text-opacity-20 text-off-white whitespace-nowrap">
            © 2026 Sem Crise. Assessoria de Comunicação de Crise.
          </div>
        </div>
      </div>
    </footer>
  );
};
