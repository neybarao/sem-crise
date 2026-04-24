import React from 'react';
import { Button } from './Button';

interface Step {
  number: string;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    number: '01',
    title: 'Diagnóstico',
    description: 'Análise profunda da situação de crise, identificando stakeholders impactados, riscos e oportunidades de comunicação.',
  },
  {
    number: '02',
    title: 'Estratégia',
    description: 'Desenvolvimento de plano de comunicação integrado, com mensagens-chave, timing e canais apropriados.',
  },
  {
    number: '03',
    title: 'Implementação',
    description: 'Execução coordenada da estratégia, gerenciamento de mídia e stakeholders, monitoramento contínuo.',
  },
];

export const Metodo: React.FC = () => {
  return (
    <section
      id="metodo"
      className="bg-off-white py-20 md:py-32 px-14"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
          <div>
            <h2 className="font-display font-semibold text-4xl md:text-5xl text-grafite mb-4 leading-tight">
              Nossa metodologia
            </h2>
            <p className="text-base md:text-lg text-opacity-58 text-grafite leading-relaxed mb-8">
              Um processo comprovado e eficaz para transformar crises em oportunidades de fortalecimento institucional.
            </p>
            <Button variant="primary">Saiba mais</Button>
          </div>

          {/* Steps */}
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`pb-8 ${
                  index < steps.length - 1
                    ? 'border-b border-opacity-7 border-grafite'
                    : ''
                }`}
              >
                <div className="text-xs font-semibold text-laranja uppercase tracking-widest mb-2">
                  {step.number}
                </div>
                <h3 className="font-display font-semibold text-lg md:text-xl text-grafite mb-3">
                  {step.title}
                </h3>
                <p className="text-sm md:text-base text-opacity-58 text-grafite leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
