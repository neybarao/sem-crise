'use client';

import React, { useState } from 'react';
import { Input } from './Input';
import { Button } from './Button';

interface Resource {
  icon: string;
  title: string;
  description: string;
}

const resources: Resource[] = [
  {
    icon: '📋',
    title: 'Guia de Crise',
    description: 'Passo a passo para agir nos primeiros 24 horas de uma crise.',
  },
  {
    icon: '🎯',
    title: 'Checklist de Preparação',
    description: 'Preparar sua empresa antes de qualquer problema surgir.',
  },
  {
    icon: '📊',
    title: 'Template de Comunicado',
    description: 'Modelo pronto para comunicados à imprensa e stakeholders.',
  },
  {
    icon: '🎓',
    title: 'Webinar Gratuito',
    description: 'Sessão ao vivo com especialistas em comunicação de crise.',
  },
];

export const Isca: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Integrate with MailerLite/Brevo API
    console.log('Email submitted:', email);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setEmail('');
    }, 3000);
  };

  return (
    <section
      id="gratuitos"
      className="bg-creme py-20 md:py-32 px-14"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Form */}
          <div>
            <h2 className="font-display font-semibold text-4xl md:text-5xl text-grafite mb-4 leading-tight">
              Recursos gratuitos
            </h2>
            <p className="text-base md:text-lg text-opacity-58 text-grafite leading-relaxed mb-8">
              Baixe nossos guias e ferramentas para começar a se preparar ainda hoje.
            </p>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  type="email"
                  placeholder="seu@email.com"
                  variant="light"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <Button type="submit" variant="primary" className="w-full md:w-auto">
                  Acessar recursos
                </Button>
              </form>
            ) : (
              <div className="bg-laranja bg-opacity-10 border border-laranja border-opacity-40 rounded-lg p-4 text-laranja">
                ✓ Verifique seu email para acessar os recursos!
              </div>
            )}
          </div>

          {/* Resources Grid */}
          <div className="grid grid-cols-2 gap-4">
            {resources.map((resource, index) => (
              <div
                key={index}
                className="bg-off-white rounded-md p-6 hover:shadow-md transition-shadow duration-normal ease-smooth"
              >
                <div className="text-3xl mb-3">{resource.icon}</div>
                <h3 className="font-display font-semibold text-base text-grafite mb-2">
                  {resource.title}
                </h3>
                <p className="text-xs text-opacity-58 text-grafite leading-relaxed">
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
