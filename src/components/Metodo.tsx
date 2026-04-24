import React from 'react';

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
    <section id="metodo" className="bg-navy py-24 md:py-32 px-6 sm:px-12 md:px-20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16 md:mb-24">
          <p className="text-sm md:text-base font-semibold text-laranja mb-6 tracking-wide uppercase">
            O Método Sem Crise
          </p>
          <h2 className="font-display font-bold text-5xl sm:text-6xl md:text-7xl text-off-white mb-8 leading-tight max-w-3xl">
            Protocolo antes do pânico.
          </h2>
          <div className="prose prose-invert max-w-2xl">
            <p className="text-lg md:text-xl text-off-white text-opacity-70 leading-relaxed font-light mb-4">
              Em crise, improvisar é o pior erro. Cada resposta precipitada aprofunda o estrago. O Método Sem Crise transforma o caos em protocolo — com ferramentas, frameworks e vocabulário técnico desenvolvidos a partir de casos reais.
            </p>
            <p className="text-lg md:text-xl text-off-white text-opacity-70 leading-relaxed font-light">
              A marca é a protagonista. O porta-voz, o instrumento. Nós somos o bastidor que define o resultado.
            </p>
          </div>
        </div>

        {/* Steps - Minimalist Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col">
              {/* Number */}
              <div className="text-6xl md:text-7xl font-bold text-laranja text-opacity-20 mb-6 font-display">
                {step.number}
              </div>

              {/* Title */}
              <h3 className="text-2xl md:text-3xl font-bold text-off-white mb-4 font-display">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-base md:text-lg text-off-white text-opacity-60 leading-relaxed font-light">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
