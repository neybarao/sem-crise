'use client';

import React, { useState } from 'react';

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
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setEmail('');
    }, 3000);
  };

  return (
    <section id="gratuitos" className="bg-navy py-24 md:py-32 px-6 sm:px-12 md:px-20">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
          {/* Form Section */}
          <div>
            <p className="text-sm md:text-base font-semibold text-laranja mb-6 tracking-wide uppercase">
              Materiais gratuitos
            </p>
            <h2 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl text-off-white mb-8 leading-tight">
              Comece com o que você precisa agora.
            </h2>
            <p className="text-lg md:text-xl text-off-white text-opacity-70 leading-relaxed mb-10 font-light max-w-md">
              Quatro ferramentas prontas para usar — sem cadastro, sem enrolação. Porque bom assessor entrega antes de cobrar.
            </p>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 mb-4">
                <input
                  type="email"
                  placeholder="Seu melhor e-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-6 py-4 rounded text-navy placeholder:text-navy placeholder:text-opacity-40 focus:outline-none focus:ring-2 focus:ring-laranja"
                  required
                />
                <button
                  type="submit"
                  className="px-8 py-4 md:px-10 bg-laranja text-off-white font-semibold hover:bg-laranja-hover transition-colors duration-200 rounded whitespace-nowrap"
                >
                  Quero os materiais
                </button>
              </form>
            ) : (
              <div className="text-laranja font-semibold text-lg mb-4">
                ✓ Enviado. Confira sua caixa de entrada em instantes.
              </div>
            )}
            <p className="text-sm text-off-white text-opacity-50">
              Sem spam. Cancelamento a qualquer momento.
            </p>
          </div>

          {/* Resources Grid */}
          <div className="grid grid-cols-1 gap-6">
            {resources.map((resource, index) => (
              <div key={index} className="border-l-2 border-laranja pl-6">
                <h3 className="font-semibold text-lg text-off-white mb-2">
                  {resource.title}
                </h3>
                <p className="text-off-white text-opacity-60 font-light">
                  {resource.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
