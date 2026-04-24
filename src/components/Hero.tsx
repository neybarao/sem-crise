import React from 'react';
import { Button } from './Button';

interface HeroStat {
  number: string;
  label: string;
}

const stats: HeroStat[] = [
  { number: '500+', label: 'Clientes atendidos' },
  { number: '20+', label: 'Anos de experiência' },
  { number: '24h', label: 'Resposta em crise' },
];

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative bg-navy pt-24 pb-16 md:pb-24 px-14 min-h-screen flex flex-col justify-center overflow-hidden"
    >
      {/* Decorative SVG motif */}
      <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-160 h-160 opacity-13 pointer-events-none">
        <svg
          viewBox="0 0 680 680"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <defs>
            <linearGradient
              id="heroGradient"
              x1="340"
              y1="0"
              x2="340"
              y2="680"
            >
              <stop offset="0%" stopColor="#EB3F00" />
              <stop offset="100%" stopColor="#EB3F00" stopOpacity="0" />
            </linearGradient>
          </defs>
          <circle cx="340" cy="340" r="340" fill="url(#heroGradient)" />
          <circle
            cx="340"
            cy="340"
            r="255"
            fill="none"
            stroke="url(#heroGradient)"
            strokeWidth="2"
          />
          <circle
            cx="340"
            cy="340"
            r="170"
            fill="none"
            stroke="url(#heroGradient)"
            strokeWidth="2"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-2xl">
        {/* Eyebrow */}
        <div className="text-xs font-medium letter-spacing-wide text-laranja uppercase mb-4 tracking-widest">
          Comunicação estratégica
        </div>

        {/* Heading */}
        <h1 className="font-display font-semibold text-4xl md:text-6xl lg:text-7xl text-off-white leading-tight mb-2 -tracking-wide">
          Transforme suas crises
        </h1>
        <h1 className="font-display font-semibold text-4xl md:text-6xl lg:text-7xl text-opacity-32 text-off-white leading-tight mb-8 -tracking-wide">
          em oportunidades
        </h1>

        {/* Subtitle */}
        <p className="text-base md:text-lg text-opacity-58 text-off-white leading-relaxed max-w-md mb-8">
          Assessoria especializada em comunicação de crise para empresas que querem proteger sua reputação e fortalecer a confiança de seus stakeholders.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-20">
          <Button variant="primary">Solicitar proposta</Button>
          <Button variant="ghost">Ver metodologia</Button>
        </div>
      </div>

      {/* Stats Strip */}
      <div className="relative z-10 grid grid-cols-3 gap-8 border-t border-opacity-7 border-off-white pt-8">
        {stats.map((stat, index) => (
          <div key={index} className="py-4">
            <div className="font-display font-semibold text-3xl md:text-4xl text-off-white mb-2">
              {stat.number}
            </div>
            <div className="text-xs md:text-sm text-opacity-40 text-off-white">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
