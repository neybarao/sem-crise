import React from 'react';

export const Metodo: React.FC = () => {
  return (
    <section className="method" id="metodo">
      <div className="container">
        <div className="method-grid">
          <div className="method-text">
            <p className="section-eyebrow">O Método Sem Crise</p>
            <h2 className="section-h2">Protocolo antes do pânico.</h2>
            <p style={{ marginTop: '20px' }}>
              Em crise, improvisar é o pior erro. Cada resposta precipitada aprofunda o estrago. O Método Sem Crise transforma o caos em protocolo — com ferramentas, frameworks e vocabulário técnico desenvolvidos a partir de casos reais.
            </p>
            <p>
              A marca é a protagonista. O porta-voz, o instrumento. Nós somos o bastidor que define o resultado.
            </p>
            <a href="#produtos" className="btn-primary" style={{ display: 'inline-flex', marginTop: '32px', fontSize: '14px', padding: '12px 26px' }}>
              Ver produtos e ferramentas
            </a>
          </div>
          <div className="method-steps">
            <div className="step">
              <span className="step-num">01</span>
              <div>
                <h3 className="step-title">Prevenção</h3>
                <p className="step-body">Diagnóstico de vulnerabilidade de imagem. Identificar os riscos antes que se tornem manchetes — e construir protocolos antes de precisar deles.</p>
              </div>
            </div>
            <div className="step">
              <span className="step-num">02</span>
              <div>
                <h3 className="step-title">Resposta</h3>
                <p className="step-body">As primeiras 24–72 horas são decisivas. Controle de narrativa, nota oficial, briefing de porta-voz e gestão de stakeholders com precisão cirúrgica.</p>
              </div>
            </div>
            <div className="step">
              <span className="step-num">03</span>
              <div>
                <h3 className="step-title">Recuperação</h3>
                <p className="step-body">Pós-crise não é silêncio — é reconstrução ativa. Monitoramento de reputação, ajuste de posicionamento e reativação da narrativa de valor.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
