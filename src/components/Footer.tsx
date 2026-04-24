import React from 'react';
import { Logo } from './Logo';

const footerLinks = [
  { label: 'Método', href: '#metodo' },
  { label: 'Serviços', href: '#produtos' },
  { label: 'Recursos', href: '#gratuitos' },
  { label: 'Privacidade', href: '#' },
  { label: 'Contato', href: 'mailto:contato@semcrise.com.br' },
];

export const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-footer py-12 px-14">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <Logo size="md" variant="light" showText={true} />

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs text-opacity-40 text-off-white hover:text-opacity-65 transition-all duration-normal ease-smooth"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-xs text-opacity-40 text-off-white">
            © {new Date().getFullYear()} Sem Crise. Todos os direitos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
};
