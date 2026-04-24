import React from 'react';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-logo-wrapper">
          <Logo size="md" />
        </div>
        <div className="footer-links">
          <a href="#metodo" className="footer-link">Método</a>
          <a href="#produtos" className="footer-link">Produtos</a>
          <a href="#gratuitos" className="footer-link">Gratuitos</a>
          <a href="#newsletter" className="footer-link">Newsletter</a>
        </div>
        <span className="footer-copy">© 2026 Sem Crise. Assessoria de Comunicação de Crise.</span>
      </div>
    </footer>
  );
};
