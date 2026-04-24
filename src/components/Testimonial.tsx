import React from 'react';

export const Testimonial: React.FC = () => {
  return (
    <section
      id="sobre"
      className="bg-navy py-20 md:py-32 px-14"
    >
      <div className="max-w-2xl mx-auto text-center px-6 sm:px-0">
        <blockquote className="font-display italic text-xl sm:text-2xl md:text-3xl text-off-white leading-snug mb-7">
          &ldquo;Tínhamos 4 horas para responder. A Sem Crise estruturou a estratégia em 40 minutos. Sem eles, a cobertura teria sido catastrófica.&rdquo;
        </blockquote>
        <cite className="text-xs font-medium text-opacity-40 text-off-white uppercase tracking-widest not-italic">
          Diretora de Comunicação — empresa do setor financeiro
        </cite>
      </div>
    </section>
  );
};
