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
    title: 'Prevenção',
    description: 'Diagnóstico de vulnerabilidade de imagem. Identificar os riscos antes que se tornem manchetes — e construir protocolos antes de precisar deles.',
  },
  {
    number: '02',
    title: 'Resposta',
    description: 'As primeiras 24–72 horas são decisivas. Controle de narrativa, nota oficial, briefing de porta-voz e gestão de stakeholders com precisão cirúrgica.',
  },
  {
    number: '03',
    title: 'Recuperação',
    description: 'Pós-crise não é silêncio — é reconstrução ativa. Monitoramento de reputação, ajuste de posicionamento e reativação da narrativa de valor.',
  },
];

export const Metodo: React.FC = () => {
  return (
    <section
      id="metodo"
      className="bg-off-white py-20 md:py-32 px-14"
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-0">
        {/* Header */}
        <div className="grid md:grid-cols-2 gap-16 items-start mb-0">
          <div>
            <p className="text-xs font-medium text-laranja uppercase mb-4 tracking-widest">
              O Método Sem Crise
            </p>
            <h2 className="font-display font-semibold text-3xl sm:text-4xl md:text-5xl text-grafite mb-5 leading-tight max-w-xs">
              Protocolo antes do pânico.
            </h2>
            <p className="text-sm sm:text-base text-opacity-62 text-grafite leading-relaxed mb-4 max-w-sm">
              Em crise, improvisar é o pior erro. Cada resposta precipitada aprofunda o estrago. O Método Sem Crise transforma o caos em protocolo — com ferramentas, frameworks e vocabulário técnico desenvolvidos a partir de casos reais.
            </p>
            <p className="text-sm sm:text-base text-opacity-62 text-grafite leading-relaxed mb-8 max-w-sm">
              A marca é a protagonista. O porta-voz, o instrumento. Nós somos o bastidor que define o resultado.
            </p>
            <a href="#produtos">
              <Button variant="primary" className="text-sm py-3 px-6">
                Ver produtos e ferramentas
              </Button>
            </a>
          </div>

          {/* Steps */}
          <div className="space-y-0">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex gap-6 py-7 border-b border-opacity-7 border-grafite first:border-t"
              >
                <div className="text-sm font-semibold text-laranja flex-shrink-0 pt-0.5 min-w-8">
                  {step.number}
                </div>
                <div>
                  <h3 className="font-display font-semibold text-base sm:text-lg text-grafite mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-opacity-58 text-grafite leading-snug">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
