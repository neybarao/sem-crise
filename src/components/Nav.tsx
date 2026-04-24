'use client';

import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { Button } from './Button';

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
      className={`fixed top-0 left-0 right-0 z-100 h-17 px-14 py-4 flex items-center justify-between transition-all duration-normal ease-smooth ${
        isScrolled
          ? 'bg-navy bg-opacity-95 backdrop-blur-lg border-b border-opacity-8 border-off-white'
          : 'bg-transparent'
      }`}
    >
      {/* Logo */}
      <a href="#" className="flex items-center gap-2" onClick={(e) => handleNavClick(e, '#hero')}>
        <Logo size="md" variant={isScrolled ? 'light' : 'light'} showText={true} />
      </a>

      {/* Nav Links */}
      <div className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={(e) => handleNavClick(e, link.href)}
            className="text-sm text-opacity-65 text-off-white hover:text-opacity-100 transition-all duration-normal ease-smooth"
          >
            {link.label}
          </a>
        ))}
      </div>

      {/* CTA Button */}
      <a
        href="#newsletter"
        onClick={(e) => handleNavClick(e, '#newsletter')}
        className="hidden sm:block"
      >
        <Button variant="primary" size="sm">
          Começar agora
        </Button>
      </a>
    </nav>
  );
};
