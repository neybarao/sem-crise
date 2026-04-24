'use client';

import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';

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
    <nav className={`nav ${isScrolled ? 'scrolled' : ''}`}>
      <a href="#hero" className="nav-logo" onClick={(e) => handleNavClick(e, '#hero')}>
        <Logo size="sm" />
      </a>
      <div className="nav-links">
        <a href="#metodo" className="nav-link" onClick={(e) => handleNavClick(e, '#metodo')}>Método</a>
        <a href="#produtos" className="nav-link" onClick={(e) => handleNavClick(e, '#produtos')}>Produtos</a>
        <a href="#gratuitos" className="nav-link" onClick={(e) => handleNavClick(e, '#gratuitos')}>Gratuitos</a>
        <a href="#newsletter" className="nav-link" onClick={(e) => handleNavClick(e, '#newsletter')}>Newsletter</a>
        <a href="#newsletter" className="nav-cta" onClick={(e) => handleNavClick(e, '#newsletter')}>Começar agora</a>
      </div>
    </nav>
  );
};
