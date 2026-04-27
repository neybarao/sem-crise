'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  fadeInVariants,
  slideInUpVariants,
  staggerContainerVariants,
  staggerItemVariants,
  buttonHoverVariants,
} from '@/src/lib/animations';
import { useCounter } from '@/src/hooks';

export const Hero: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const countCrises = useCounter(200, 2500, true);
  const countPercentage = useCounter(98, 2500, true);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="hero" id="hero">
      <motion.div
        className="hero-motif"
        animate={{ x: mousePosition.x, y: mousePosition.y }}
        transition={{ type: 'spring', stiffness: 50, damping: 20 }}
      >
        <svg width="680" height="680" viewBox="0 0 680 680" fill="none">
          <defs>
            <linearGradient id="hg1" x1="340" y1="180" x2="340" y2="480" gradientUnits="userSpaceOnUse"><stop stopColor="#EB3F00" /><stop offset="1" stopColor="#EB3F00" stopOpacity="0" /></linearGradient>
            <linearGradient id="hg2" x1="340" y1="100" x2="340" y2="480" gradientUnits="userSpaceOnUse"><stop stopColor="#EB3F00" /><stop offset="1" stopColor="#EB3F00" stopOpacity="0" /></linearGradient>
            <linearGradient id="hg3" x1="340" y1="20" x2="340" y2="480" gradientUnits="userSpaceOnUse"><stop stopColor="#EB3F00" /><stop offset="1" stopColor="#EB3F00" stopOpacity="0" /></linearGradient>
            <linearGradient id="hg4" x1="340" y1="-40" x2="340" y2="480" gradientUnits="userSpaceOnUse"><stop stopColor="#EB3F00" /><stop offset="1" stopColor="#EB3F00" stopOpacity="0" /></linearGradient>
          </defs>
          <motion.circle
            cx="340"
            cy="340"
            r="80"
            stroke="url(#hg1)"
            strokeWidth="1.2"
            initial={{ opacity: 0, r: 40 }}
            animate={{ opacity: 1, r: 80 }}
            transition={{ duration: 1, delay: 0.2 }}
          />
          <motion.circle
            cx="340"
            cy="340"
            r="140"
            stroke="url(#hg2)"
            strokeWidth="1.2"
            initial={{ opacity: 0, r: 100 }}
            animate={{ opacity: 1, r: 140 }}
            transition={{ duration: 1, delay: 0.4 }}
          />
          <motion.circle
            cx="340"
            cy="340"
            r="210"
            stroke="url(#hg3)"
            strokeWidth="1.2"
            initial={{ opacity: 0, r: 170 }}
            animate={{ opacity: 1, r: 210 }}
            transition={{ duration: 1, delay: 0.6 }}
          />
          <motion.circle
            cx="340"
            cy="340"
            r="290"
            stroke="url(#hg4)"
            strokeWidth="1.2"
            initial={{ opacity: 0, r: 250 }}
            animate={{ opacity: 1, r: 290 }}
            transition={{ duration: 1, delay: 0.8 }}
          />
          <motion.circle
            cx="340"
            cy="340"
            r="18"
            fill="#EB3F00"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
          />
        </svg>
      </motion.div>

      <motion.div
        style={{ position: 'relative', maxWidth: '760px' }}
        variants={staggerContainerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.p className="hero-eyebrow" variants={fadeInVariants}>
          Assessoria de Comunicação de Crise
        </motion.p>
        <motion.h1 className="hero-h1" variants={slideInUpVariants}>
          A crise é inevitável.<br />
          <span className="orange"><i>O estrago, não.</i></span>
        </motion.h1>
        <motion.p className="hero-sub" variants={slideInUpVariants}>
          Estratégia, velocidade e controle de narrativa para proteger sua imagem quando mais importa. Feito por quem já esteve na sala de guerra.
        </motion.p>
        <motion.div className="hero-btns" variants={staggerItemVariants}>
          <motion.a
            href="#gratuitos"
            className="btn-primary"
            variants={buttonHoverVariants}
            initial="rest"
            whileHover="hover"
            whileTap="tap"
          >
            Receber material gratuito
          </motion.a>
          <motion.a
            href="#metodo"
            className="btn-ghost"
            variants={buttonHoverVariants}
            initial="rest"
            whileHover="hover"
            whileTap="tap"
          >
            Conhecer o método
          </motion.a>
        </motion.div>
        <motion.div className="hero-stats" variants={staggerContainerVariants}>
          <motion.div variants={staggerItemVariants}>
            <div className="stat-num">+{countCrises}</div>
            <div className="stat-label">Crises gerenciadas</div>
          </motion.div>
          <motion.div variants={staggerItemVariants}>
            <div className="stat-num">24h</div>
            <div className="stat-label">Disponibilidade total</div>
          </motion.div>
          <motion.div variants={staggerItemVariants}>
            <div className="stat-num">{countPercentage}%</div>
            <div className="stat-label">Reputações preservadas</div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};
