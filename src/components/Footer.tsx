'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Logo } from './Logo';
import { staggerContainerVariants, staggerItemVariants, fadeInVariants } from '@/src/lib/animations';
import { useScrollReveal } from '@/src/hooks';

export const Footer: React.FC = () => {
  const { ref, isVisible } = useScrollReveal();

  const footerLinks = [
    { label: 'Método', href: '#metodo' },
    { label: 'Produtos', href: '#produtos' },
    { label: 'Gratuitos', href: '#gratuitos' },
    { label: 'Newsletter', href: '#newsletter' },
  ];

  return (
    <footer className="footer" ref={ref}>
      <motion.div
        className="footer-inner"
        variants={staggerContainerVariants}
        initial="hidden"
        animate={isVisible ? 'visible' : 'hidden'}
      >
        <motion.div className="footer-logo-wrapper" variants={fadeInVariants}>
          <Logo size="md" />
        </motion.div>
        <motion.div className="footer-links" variants={staggerContainerVariants}>
          {footerLinks.map((link) => (
            <motion.a
              key={link.href}
              href={link.href}
              className="footer-link"
              variants={staggerItemVariants}
              whileHover={{ color: '#EB3F00' }}
              transition={{ duration: 0.2 }}
            >
              {link.label}
            </motion.a>
          ))}
        </motion.div>
        <motion.span className="footer-copy" variants={fadeInVariants}>
          © 2026 Sem Crise. Assessoria de Comunicação de Crise.
        </motion.span>
      </motion.div>
    </footer>
  );
};
