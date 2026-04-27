'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  fadeInVariants,
  slideInUpVariants,
  staggerContainerVariants,
  staggerItemVariants,
  buttonHoverVariants,
} from '@/src/lib/animations';
import { useScrollReveal } from '@/src/hooks';

export const Newsletter: React.FC = () => {
  const [formVisible, setFormVisible] = useState(true);
  const { ref, isVisible } = useScrollReveal();

  const handleNewsletter = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormVisible(false);
  };

  return (
    <section className="newsletter" id="newsletter">
      <motion.div
        className="newsletter-inner"
        ref={ref}
        variants={staggerContainerVariants}
        initial="hidden"
        animate={isVisible ? 'visible' : 'hidden'}
      >
        <motion.p className="section-eyebrow" variants={fadeInVariants}>
          Newsletter semanal
        </motion.p>
        <motion.h2 className="section-h2" variants={slideInUpVariants}>
          Uma crise analisada por semana.
        </motion.h2>
        <motion.p variants={slideInUpVariants}>
          Toda terça de manhã: análise de um caso real do noticiário + um princípio operacional + uma ferramenta prática. Leitura de 5 minutos.
        </motion.p>
        <motion.div suppressHydrationWarning variants={staggerItemVariants}>
          <AnimatePresence mode="wait">
            {formVisible ? (
              <motion.form
                key="form"
                className="newsletter-form"
                onSubmit={handleNewsletter}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <input className="newsletter-input" type="email" placeholder="seu@email.com.br" required/>
                <motion.button
                  type="submit"
                  className="btn-primary"
                  style={{ flexShrink: 0, fontSize: '14px', padding: '13px 26px' }}
                  variants={buttonHoverVariants}
                  initial="rest"
                  whileHover="hover"
                  whileTap="tap"
                >
                  Assinar
                </motion.button>
              </motion.form>
            ) : (
              <motion.div
                key="confirm"
                id="nl-confirm"
                className="confirm-msg"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                Confirmado. Até terça-feira.
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
        <motion.p
          className="newsletter-note"
          variants={fadeInVariants}
          transition={{ delay: 0.3 }}
        >
          Sem spam. Cada edição é um material que vale guardar.
        </motion.p>
      </motion.div>
    </section>
  );
};
