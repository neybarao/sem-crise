'use client';

import React, { useState } from 'react';
import { Input } from './Input';
import { Button } from './Button';

export const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Integrate with MailerLite/Brevo API
    console.log('Newsletter signup:', email);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setEmail('');
    }, 3000);
  };

  return (
    <section id="newsletter" className="bg-off-white py-20 md:py-26 px-6 sm:px-14">
      <div className="max-w-lg mx-auto text-center">
        <p className="text-xs font-medium text-laranja uppercase mb-4 tracking-widest">
          Newsletter semanal
        </p>
        <h2 className="font-display font-semibold text-3xl sm:text-4xl md:text-5xl text-grafite mb-4 leading-tight">
          Uma crise analisada por semana.
        </h2>
        <p className="text-sm sm:text-base text-opacity-55 text-grafite mb-8 leading-relaxed">
          Toda terça de manhã: análise de um caso real do noticiário + um princípio operacional + uma ferramenta prática. Leitura de 5 minutos.
        </p>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 mb-3">
            <Input
              type="email"
              placeholder="seu@email.com.br"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 text-sm"
              required
            />
            <Button type="submit" variant="primary" size="sm" className="flex-shrink-0">
              Assinar
            </Button>
          </form>
        ) : (
          <div className="font-display font-italic text-laranja text-base mb-3">
            Confirmado. Até terça-feira.
          </div>
        )}
        <p className="text-xs text-opacity-35 text-grafite">
          Sem spam. Cada edição é um material que vale guardar.
        </p>
      </div>
    </section>
  );
};
