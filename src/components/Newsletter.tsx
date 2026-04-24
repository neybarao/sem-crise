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
    <section className="bg-off-white py-20 md:py-32 px-14">
      <div className="max-w-md mx-auto text-center">
        <h2 className="font-display font-semibold text-3xl md:text-4xl text-grafite mb-4 leading-tight">
          Fique por dentro
        </h2>
        <p className="text-base text-opacity-58 text-grafite mb-8 leading-relaxed">
          Receba insights e tendências sobre comunicação de crise direto na sua caixa de entrada.
        </p>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-3">
            <Input
              type="email"
              placeholder="seu@email.com"
              variant="light"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Button type="submit" variant="primary" className="w-full">
              Inscrever-se
            </Button>
          </form>
        ) : (
          <div className="bg-laranja bg-opacity-10 border border-laranja border-opacity-40 rounded-lg p-4 text-laranja text-sm">
            ✓ Obrigado! Verifique seu email de confirmação.
          </div>
        )}
      </div>
    </section>
  );
};
