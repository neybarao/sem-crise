'use client';

import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';

const navLinks = [
  { href: '#metodo', label: 'Método' },
  { href: '#produtos', label: 'Produtos' },
  { href: '#gratuitos', label: 'Gratuitos' },
  { href: '#newsletter', label: 'Newsletter' },
];

export const Nav: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 px-6 sm:px-12 md:px-20 py-5 md:py-6 transition-all duration-200 ${
        isScrolled ? 'bg-off-white bg-opacity-95 backdrop-blur-md border-b border-navy border-opacity-10' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" onClick={(e) => handleNavClick(e, '#hero')} className="flex-shrink-0">
          <Logo size="sm" variant={isScrolled ? 'dark' : 'light'} showText={true} />
        </a>

        {/* Links - Hidden on mobile */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`text-sm font-medium transition-colors duration-200 ${
                isScrolled
                  ? 'text-navy hover:text-laranja'
                  : 'text-off-white hover:text-laranja'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <a
          href="#newsletter"
          onClick={(e) => handleNavClick(e, '#newsletter')}
          className={`hidden sm:block px-6 py-2.5 rounded font-semibold transition-all duration-200 ${
            isScrolled
              ? 'bg-laranja text-off-white hover:bg-laranja-hover'
              : 'bg-laranja text-off-white hover:bg-laranja-hover'
          }`}
        >
          Começar
        </a>
      </div>
    </nav>
  );
};
