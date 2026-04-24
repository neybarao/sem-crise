'use client';

import React, { useState } from 'react';

export const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setEmail('');
    }, 3000);
  };

  return (
    <section id="newsletter" className="bg-navy py-24 md:py-32 px-6 sm:px-12 md:px-20">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-sm md:text-base font-semibold text-laranja mb-6 tracking-wide uppercase">
          Newsletter semanal
        </p>
        <h2 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl text-off-white mb-8 leading-tight">
          Uma crise analisada por semana.
        </h2>
        <p className="text-lg md:text-xl text-off-white text-opacity-70 leading-relaxed mb-12 font-light">
          Toda terça de manhã: análise de um caso real do noticiário + um princípio operacional + uma ferramenta prática. Leitura de 5 minutos.
        </p>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 mb-4 justify-center">
            <input
              type="email"
              placeholder="seu@email.com.br"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 max-w-sm px-6 py-4 rounded text-navy placeholder:text-navy placeholder:text-opacity-40 focus:outline-none focus:ring-2 focus:ring-laranja"
              required
            />
            <button
              type="submit"
              className="px-8 py-4 md:px-10 bg-laranja text-off-white font-semibold hover:bg-laranja-hover transition-colors duration-200 rounded whitespace-nowrap"
            >
              Assinar
            </button>
          </form>
        ) : (
          <div className="text-laranja font-semibold text-lg mb-4">
            ✓ Confirmado. Até terça-feira.
          </div>
        )}
        <p className="text-sm text-off-white text-opacity-50">
          Sem spam. Cada edição é um material que vale guardar.
        </p>
      </div>
    </section>
  );
};
