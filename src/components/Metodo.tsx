'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  slideInLeftVariants,
  slideInRightVariants,
  staggerContainerVariants,
  staggerItemVariants,
  buttonHoverVariants,
} from '@/src/lib/animations';
import { useScrollReveal } from '@/src/hooks';

export const Metodo: React.FC = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="method" id="metodo">
      <div className="container">
        <motion.div
          className="method-grid"
          ref={ref}
          variants={staggerContainerVariants}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
        >
          <motion.div className="method-text" variants={slideInLeftVariants}>
            <p className="section-eyebrow">O Método Sem Crise</p>
            <h2 className="section-h2">Protocolo antes do pânico.</h2>
            <p style={{ marginTop: '20px' }}>
              Em crise, improvisar é o pior erro. Cada resposta precipitada aprofunda o estrago. O Método Sem Crise transforma o caos em protocolo — com ferramentas, frameworks e vocabulário técnico desenvolvidos a partir de casos reais.
            </p>
            <p>
              A marca é a protagonista. O porta-voz, o instrumento. Nós somos o bastidor que define o resultado.
            </p>
            <motion.a
              href="#produtos"
              className="btn-primary"
              style={{ display: 'inline-flex', marginTop: '32px', fontSize: '14px', padding: '12px 26px' }}
              variants={buttonHoverVariants}
              initial="rest"
              whileHover="hover"
              whileTap="tap"
            >
              Ver produtos e ferramentas
            </motion.a>
          </motion.div>
          <motion.div className="method-steps" variants={slideInRightVariants}>
            <motion.div className="step" variants={staggerItemVariants}>
              <span className="step-num">01</span>
              <div>
                <h3 className="step-title">Prevenção</h3>
                <p className="step-body">Diagnóstico de vulnerabilidade de imagem. Identificar os riscos antes que se tornem manchetes — e construir protocolos antes de precisar deles.</p>
              </div>
            </motion.div>
            <motion.div className="step" variants={staggerItemVariants}>
              <span className="step-num">02</span>
              <div>
                <h3 className="step-title">Resposta</h3>
                <p className="step-body">As primeiras 24–72 horas são decisivas. Controle de narrativa, nota oficial, briefing de porta-voz e gestão de stakeholders com precisão cirúrgica.</p>
              </div>
            </motion.div>
            <motion.div className="step" variants={staggerItemVariants}>
              <span className="step-num">03</span>
              <div>
                <h3 className="step-title">Recuperação</h3>
                <p className="step-body">Pós-crise não é silêncio — é reconstrução ativa. Monitoramento de reputação, ajuste de posicionamento e reativação da narrativa de valor.</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
