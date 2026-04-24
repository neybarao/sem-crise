import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="hero" id="hero">
      <div className="hero-motif">
        <svg width="680" height="680" viewBox="0 0 680 680" fill="none">
          <defs>
            <linearGradient id="hg1" x1="340" y1="180" x2="340" y2="480" gradientUnits="userSpaceOnUse"><stop stopColor="#EB3F00"/><stop offset="1" stopColor="#EB3F00" stopOpacity="0"/></linearGradient>
            <linearGradient id="hg2" x1="340" y1="100" x2="340" y2="480" gradientUnits="userSpaceOnUse"><stop stopColor="#EB3F00"/><stop offset="1" stopColor="#EB3F00" stopOpacity="0"/></linearGradient>
            <linearGradient id="hg3" x1="340" y1="20" x2="340" y2="480" gradientUnits="userSpaceOnUse"><stop stopColor="#EB3F00"/><stop offset="1" stopColor="#EB3F00" stopOpacity="0"/></linearGradient>
            <linearGradient id="hg4" x1="340" y1="-40" x2="340" y2="480" gradientUnits="userSpaceOnUse"><stop stopColor="#EB3F00"/><stop offset="1" stopColor="#EB3F00" stopOpacity="0"/></linearGradient>
          </defs>
          <circle cx="340" cy="340" r="80"  stroke="url(#hg1)" strokeWidth="1.2"/>
          <circle cx="340" cy="340" r="140" stroke="url(#hg2)" strokeWidth="1.2"/>
          <circle cx="340" cy="340" r="210" stroke="url(#hg3)" strokeWidth="1.2"/>
          <circle cx="340" cy="340" r="290" stroke="url(#hg4)" strokeWidth="1.2"/>
          <circle cx="340" cy="340" r="18" fill="#EB3F00"/>
        </svg>
      </div>

      <div style={{ position: 'relative', maxWidth: '760px' }}>
        <p className="hero-eyebrow">Assessoria de Comunicação de Crise</p>
        <h1 className="hero-h1">
          A crise é inevitável.<br/>
          <span className="dim">O estrago, não.</span>
        </h1>
        <p className="hero-sub">
          Estratégia, velocidade e controle de narrativa para proteger sua imagem quando mais importa. Feito por quem já esteve na sala de guerra.
        </p>
        <div className="hero-btns">
          <a href="#gratuitos" className="btn-primary">Receber material gratuito</a>
          <a href="#metodo" className="btn-ghost">Conhecer o método</a>
        </div>
        <div className="hero-stats">
          <div>
            <div className="stat-num">+200</div>
            <div className="stat-label">Crises gerenciadas</div>
          </div>
          <div>
            <div className="stat-num">24h</div>
            <div className="stat-label">Disponibilidade total</div>
          </div>
          <div>
            <div className="stat-num">98%</div>
            <div className="stat-label">Reputações preservadas</div>
          </div>
        </div>
      </div>
    </section>
  );
};
