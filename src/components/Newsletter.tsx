'use client';

import React, { useState } from 'react';

export const Newsletter: React.FC = () => {
  const [formVisible, setFormVisible] = useState(true);

  const handleNewsletter = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormVisible(false);
  };

  return (
    <section className="newsletter" id="newsletter">
      <div className="newsletter-inner">
        <p className="section-eyebrow">Newsletter semanal</p>
        <h2 className="section-h2">Uma crise analisada por semana.</h2>
        <p>Toda terça de manhã: análise de um caso real do noticiário + um princípio operacional + uma ferramenta prática. Leitura de 5 minutos.</p>
        <div suppressHydrationWarning>
          {formVisible ? (
            <form className="newsletter-form" onSubmit={handleNewsletter}>
              <input className="newsletter-input" type="email" placeholder="seu@email.com.br" required/>
              <button type="submit" className="btn-primary" style={{ flexShrink: 0, fontSize: '14px', padding: '13px 26px' }}>Assinar</button>
            </form>
          ) : (
            <div id="nl-confirm" className="confirm-msg">
              Confirmado. Até terça-feira.
            </div>
          )}
        </div>
        <p className="newsletter-note">Sem spam. Cada edição é um material que vale guardar.</p>
      </div>
    </section>
  );
};
