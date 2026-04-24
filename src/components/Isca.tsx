'use client';

import React, { useState } from 'react';
import { Input } from './Input';
import { Button } from './Button';

interface Resource {
  title: string;
  description: string;
}

const resources: Resource[] = [
  {
    title: '10 sinais de que sua empresa está prestes a entrar em crise',
    description: 'Checklist de diagnóstico rápido — leitura de 3 minutos.',
  },
  {
    title: 'O que dizer nas primeiras 2 horas',
    description: 'Versão resumida do manual completo. Acionável imediatamente.',
  },
  {
    title: 'Nota oficial em branco com as 7 seções obrigatórias',
    description: 'Template editável em .docx. Funciona para qualquer tipo de crise.',
  },
  {
    title: 'Quiz: sua empresa está preparada?',
    description: 'Teste de 5 minutos com score de risco reputacional.',
  },
];

export const Isca: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setEmail('');
    }, 3000);
  };

  return (
    <section id="gratuitos" className="bg-creme py-20 md:py-26 px-6 sm:px-14">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Form Section */}
          <div>
            <p className="text-xs font-medium text-laranja uppercase mb-4 tracking-widest">
              Materiais gratuitos
            </p>
            <h2 className="font-display font-semibold text-3xl sm:text-4xl md:text-5xl text-grafite mb-4 leading-tight max-w-xs">
              Comece com o que você precisa agora.
            </h2>
            <p className="text-sm sm:text-base text-opacity-60 text-grafite leading-relaxed mb-8 max-w-sm">
              Quatro ferramentas prontas para usar — sem cadastro, sem enrolação. Porque bom assessor entrega antes de cobrar.
            </p>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 mb-3">
                <Input
                  type="email"
                  placeholder="Seu melhor e-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 text-sm"
                  required
                />
                <Button type="submit" variant="primary" size="sm" className="flex-shrink-0">
                  Quero os materiais
                </Button>
              </form>
            ) : (
              <div className="text-laranja font-display font-italic text-base mb-3">
                Enviado. Confira sua caixa de entrada em instantes.
              </div>
            )}
            <p className="text-xs text-opacity-35 text-grafite">
              Sem spam. Cancelamento a qualquer momento.
            </p>
          </div>

          {/* Resources Grid */}
          <div className="flex flex-col gap-3">
            {resources.map((resource, index) => (
              <div
                key={index}
                className="bg-off-white rounded-md p-4 sm:p-4 shadow-sm"
              >
                <div className="flex gap-3">
                  <div className="text-laranja font-semibold flex-shrink-0">✓</div>
                  <div>
                    <h3 className="font-semibold text-xs sm:text-sm text-grafite mb-1">
                      {resource.title}
                    </h3>
                    <p className="text-xs text-opacity-50 text-grafite leading-snug">
                      {resource.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
