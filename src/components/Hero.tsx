import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="bg-off-white min-h-screen flex flex-col justify-center px-6 sm:px-12 md:px-20 py-24 md:py-32">
      <div className="max-w-4xl">
        {/* Eyebrow */}
        <p className="text-sm md:text-base font-semibold text-laranja mb-6 tracking-wide uppercase">
          Assessoria de Crise
        </p>

        {/* Main Headline - Ultra Bold */}
        <h1 className="font-display font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-navy leading-tight mb-8 md:mb-10">
          A crise é<br className="hidden sm:block" />
          inevitável.
        </h1>

        {/* Subheading - Lighter */}
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-navy text-opacity-40 font-light mb-8 md:mb-12 leading-snug">
          O estrago, não.
        </h2>

        {/* Description */}
        <p className="text-lg md:text-xl text-navy text-opacity-70 leading-relaxed mb-12 md:mb-16 max-w-2xl font-light">
          Estratégia, velocidade e controle de narrativa para proteger sua imagem quando mais importa. Feito por quem já esteve na sala de guerra.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="#gratuitos">
            <button className="px-8 py-4 md:px-10 md:py-5 bg-laranja text-off-white font-semibold hover:bg-laranja-hover transition-colors duration-200 rounded">
              Receber materiais gratuitos
            </button>
          </a>
          <a href="#metodo">
            <button className="px-8 py-4 md:px-10 md:py-5 border-2 border-navy text-navy font-semibold hover:bg-navy hover:text-off-white transition-colors duration-200 rounded">
              Conhecer o método
            </button>
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 md:gap-16 mt-20 md:mt-24 pt-12 md:pt-16 border-t border-navy border-opacity-10">
          <div>
            <div className="text-4xl md:text-5xl font-bold text-laranja mb-2">+200</div>
            <p className="text-sm text-navy text-opacity-60">Crises gerenciadas</p>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-bold text-laranja mb-2">24h</div>
            <p className="text-sm text-navy text-opacity-60">Disponibilidade total</p>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-bold text-laranja mb-2">98%</div>
            <p className="text-sm text-navy text-opacity-60">Reputações preservadas</p>
          </div>
        </div>
      </div>
    </section>
  );
};
