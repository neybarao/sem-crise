import React from 'react';

export const Testimonial: React.FC = () => {
  return (
    <section className="bg-off-white py-24 md:py-32 px-6 sm:px-12 md:px-20">
      <div className="max-w-3xl mx-auto text-center">
        <blockquote className="font-display text-3xl sm:text-4xl md:text-5xl text-navy leading-tight mb-10 italic font-light">
          &ldquo;Tínhamos 4 horas para responder. A Sem Crise estruturou a estratégia em 40 minutos. Sem eles, a cobertura teria sido catastrófica.&rdquo;
        </blockquote>
        <cite className="text-base text-navy text-opacity-60 font-semibold uppercase tracking-widest not-italic">
          Diretora de Comunicação — empresa do setor financeiro
        </cite>
      </div>
    </section>
  );
};
