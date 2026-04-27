'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  staggerContainerVariants,
  staggerItemVariants,
  buttonHoverVariants,
} from '@/src/lib/animations';
import { useScrollReveal } from '@/src/hooks';

export const Isca: React.FC = () => {
  const [formVisible, setFormVisible] = useState(true);
  const { ref, isVisible } = useScrollReveal();

  const handleIsca = (e: React.FormEvent) => {
    e.preventDefault();
    setFormVisible(false);
  };

  const iscaItems = [
    {
      title: '10 sinais de que sua empresa está prestes a entrar em crise',
      desc: 'Checklist de diagnóstico rápido — leitura de 3 minutos.',
    },
    {
      title: 'O que dizer nas primeiras 2 horas',
      desc: 'Versão resumida do manual completo. Acionável imediatamente.',
    },
    {
      title: 'Nota oficial em branco com as 7 seções obrigatórias',
      desc: 'Template editável em .docx. Funciona para qualquer tipo de crise.',
    },
    {
      title: 'Quiz: sua empresa está preparada?',
      desc: 'Teste de 5 minutos com score de risco reputacional.',
    },
  ];

  return (
    <section className="isca" id="gratuitos">
      <motion.div
        className="isca-inner"
        ref={ref}
        variants={staggerContainerVariants}
        initial="hidden"
        animate={isVisible ? 'visible' : 'hidden'}
      >
        <motion.div variants={staggerItemVariants}>
          <p className="section-eyebrow">Materiais gratuitos</p>
          <h2 className="section-h2">Comece com o que você precisa agora.</h2>
          <p style={{ marginTop: '16px' }}>
            Quatro ferramentas prontas para usar — sem cadastro, sem enrolação. Porque bom assessor entrega antes de cobrar.
          </p>
          <div suppressHydrationWarning>
            <AnimatePresence mode="wait">
              {formVisible ? (
                <motion.form
                  key="form"
                  className="isca-form"
                  onSubmit={handleIsca}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <input className="isca-input" type="email" placeholder="Seu melhor e-mail" required/>
                  <motion.button
                    type="submit"
                    className="btn-primary"
                    style={{ flexShrink: 0, fontSize: '14px', padding: '12px 24px' }}
                    variants={buttonHoverVariants}
                    initial="rest"
                    whileHover="hover"
                    whileTap="tap"
                  >
                    Quero os materiais
                  </motion.button>
                </motion.form>
              ) : (
                <motion.div
                  key="confirm"
                  id="isca-confirm"
                  className="confirm-msg"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  Enviado. Confira sua caixa de entrada em instantes.
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <p style={{ fontSize: '11px', color: 'rgba(12,12,10,0.35)', marginTop: '10px' }}>Sem spam. Cancelamento a qualquer momento.</p>
        </motion.div>

        <motion.div
          className="isca-items"
          variants={staggerContainerVariants}
        >
          {iscaItems.map((item, index) => (
            <motion.div key={index} className="isca-item" variants={staggerItemVariants}>
              <motion.div
                className="isca-item-icon"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.1 + index * 0.1, type: 'spring', stiffness: 100 }}
              >
                ✓
              </motion.div>
              <div>
                <h3 className="isca-item-title">{item.title}</h3>
                <p className="isca-item-desc">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};
