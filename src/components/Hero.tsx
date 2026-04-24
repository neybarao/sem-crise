import React from 'react';
import { Button } from './Button';

interface HeroStat {
  number: string;
  label: string;
}

const stats: HeroStat[] = [
  { number: '+200', label: 'Crises gerenciadas' },
  { number: '24h', label: 'Disponibilidade total' },
  { number: '98%', label: 'Reputações preservadas' },
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
      <div className="relative z-10 max-w-3xl px-6 sm:px-0">
        {/* Eyebrow */}
        <p className="text-xs font-medium text-laranja uppercase mb-7 tracking-widest">
          Assessoria de Comunicação de Crise
        </p>

        {/* Heading */}
        <h1 className="font-display font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-off-white leading-tight mb-2 -tracking-wider">
          A crise é inevitável.
          <br />
          <span className="text-opacity-32">O estrago, não.</span>
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg md:text-xl text-opacity-58 text-off-white leading-relaxed max-w-xl my-7">
          Estratégia, velocidade e controle de narrativa para proteger sua imagem quando mais importa. Feito por quem já esteve na sala de guerra.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col xs:flex-row gap-3 mb-20">
          <a href="#gratuitos">
            <Button variant="primary" className="w-full xs:w-auto">
              Receber material gratuito
            </Button>
          </a>
          <a href="#metodo">
            <Button variant="ghost" className="w-full xs:w-auto">
              Conhecer o método
            </Button>
          </a>
        </div>
      </div>

      {/* Stats Strip */}
      <div className="relative z-10 grid grid-cols-3 gap-8 sm:gap-14 border-t border-opacity-7 border-off-white pt-9 px-6 sm:px-0">
        {stats.map((stat, index) => (
          <div key={index}>
            <div className="font-display font-semibold text-2xl sm:text-3xl text-off-white mb-1">
              {stat.number}
            </div>
            <div className="text-xs text-opacity-40 text-off-white leading-tight">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
