'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  fadeInVariants,
  slideInUpVariants,
  staggerContainerVariants,
  staggerItemVariants,
  hoverLiftVariants,
} from '@/src/lib/animations';
import { useScrollReveal } from '@/src/hooks';

export const Produtos: React.FC = () => {
  const { ref, isVisible } = useScrollReveal();

  const products = [
    {
      tag: 'Entrada',
      tagClass: 'tag-entry',
      title: 'Manual das Primeiras 24 Horas',
      body: 'O que fazer hora a hora, quem acionar, o que nunca dizer. Inclui checklist imprimível e template de nota oficial em branco.',
      price: 'R$ 47',
      details: 'e-book + checklist',
    },
    {
      tag: 'Entrada',
      tagClass: 'tag-entry',
      title: '50 Frases Proibidas do Porta-Voz',
      body: 'As frases que destroem uma crise pela metade — e como reformular cada uma. Formato e-book curto com áudio narrado.',
      price: 'R$ 27',
      details: 'e-book + áudio',
    },
    {
      tag: 'Entrada',
      tagClass: 'tag-entry',
      title: 'Diagnóstico de Vulnerabilidade',
      body: '60 perguntas que sua empresa responde e recebe um score de risco reputacional. Formato questionário autoaplicável.',
      price: 'R$ 67',
      details: 'PDF editável',
    },
    {
      tag: 'Essencial',
      tagClass: 'tag-mid',
      title: 'Protocolo Sem Crise',
      body: 'Manual operacional completo + 15 templates editáveis. Árvore de decisão, matriz de stakeholders, scripts de coletiva, plano de comunicação interna.',
      price: 'R$ 297',
      details: 'manual + templates',
    },
    {
      tag: 'Essencial',
      tagClass: 'tag-mid',
      title: 'Biblioteca de Notas Oficiais',
      body: '40+ modelos editáveis cobrindo os cenários mais comuns: acidente de trabalho, vazamento de dados, demissão em massa, denúncia de assédio e mais.',
      price: 'R$ 197',
      details: '40+ modelos .docx',
    },
    {
      tag: 'Essencial',
      tagClass: 'tag-mid',
      title: 'Gestão de Crise em Redes Sociais',
      body: 'Como classificar uma polêmica, quando responder e quando ignorar, como lidar com perfis hostis. Banco de respostas-padrão incluído.',
      price: 'R$ 247',
      details: 'manual + banco de respostas',
    },
    {
      tag: 'Premium',
      tagClass: 'tag-prem',
      title: 'Plano Sob Medida',
      body: 'Você preenche um questionário detalhado e recebe um plano de gestão de crise personalizado para sua empresa em até 7 dias úteis.',
      price: 'R$ 1.497',
      details: 'entrega em 7 dias',
    },
    {
      tag: 'Premium',
      tagClass: 'tag-prem',
      title: 'Clube Sem Crise',
      body: 'Comunidade fechada para assessores e profissionais de comunicação. 2 materiais novos por mês + análise de caso recente do noticiário + acesso ao arquivo completo.',
      price: 'R$ 97',
      details: '/ mês',
      secondary: 'ou R$ 897 / ano',
      span: 2,
    },
  ];

  return (
    <section className="products" id="produtos">
      <div className="container">
        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          ref={ref}
        >
          <motion.p className="section-eyebrow" variants={fadeInVariants}>
            Produtos
          </motion.p>
          <motion.h2 className="section-h2" variants={slideInUpVariants}>
            Ferramentas para cada fase.
          </motion.h2>
          <motion.p className="products-sub" variants={slideInUpVariants}>
            Da prevenção à recuperação — materiais operacionais desenvolvidos por especialistas, acionáveis em 24–72 horas.
          </motion.p>
        </motion.div>

        <motion.div
          className="products-grid"
          variants={staggerContainerVariants}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
        >
          {products.map((product, index) => (
            <motion.div
              key={index}
              className="product-card"
              style={{ gridColumn: product.span ? `span ${product.span}` : undefined }}
              variants={staggerItemVariants}
              initial="rest"
              whileHover="hover"
              custom={hoverLiftVariants}
            >
              <motion.div variants={hoverLiftVariants} initial="rest" whileHover="hover">
                <span className={`product-tag ${product.tagClass}`}>{product.tag}</span>
                <h3 className="product-title">{product.title}</h3>
                <p className="product-body">{product.body}</p>
                <div className="product-price">
                  {product.price} <span>{product.details}</span>
                </div>
                {product.secondary && (
                  <div style={{ fontSize: '13px', color: 'rgba(244,241,234,0.4)', marginTop: '8px' }}>
                    {product.secondary}
                  </div>
                )}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
