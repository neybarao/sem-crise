import React from 'react';

export const Testimonial: React.FC = () => {
  return (
    <section
      id="sobre"
      className="bg-navy py-20 md:py-32 px-14"
    >
      <div className="max-w-2xl mx-auto text-center">
        <blockquote className="font-display italic text-2xl md:text-4xl text-off-white leading-relaxed mb-8">
          &ldquo;A Sem Crise não apenas nos ajudou a gerenciar a crise, mas transformou
          como nossa empresa se comunica com o mercado. Mais confiante, mais preparada.&rdquo;
        </blockquote>
        <cite className="text-sm font-medium text-opacity-40 text-off-white uppercase tracking-wide not-italic">
          &mdash; CEO, Empresa Fortune 500
        </cite>
      </div>
    </section>
  );
};
