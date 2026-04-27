'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { fadeInVariants, scaleInVariants } from '@/src/lib/animations';
import { useScrollReveal } from '@/src/hooks';

export const Testimonial: React.FC = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="testimonial" ref={ref}>
      <motion.blockquote
        initial="hidden"
        animate={isVisible ? 'visible' : 'hidden'}
        variants={scaleInVariants}
      >
        &ldquo;Tínhamos 4 horas para responder. A Sem Crise estruturou a estratégia em 40 minutos. Sem eles, a cobertura teria sido catastrófica.&rdquo;
      </motion.blockquote>
      <motion.cite
        initial="hidden"
        animate={isVisible ? 'visible' : 'hidden'}
        variants={fadeInVariants}
        transition={{ delay: 0.3 }}
      >
        Diretora de Comunicação — empresa do setor financeiro
      </motion.cite>
    </section>
  );
};
