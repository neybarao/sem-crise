'use client';

import React, { useState } from 'react';

export const Isca: React.FC = () => {
  const [formVisible, setFormVisible] = useState(true);

  const handleIsca = (e: React.FormEvent) => {
    e.preventDefault();
    setFormVisible(false);
  };

  return (
    <section className="isca" id="gratuitos">
      <div className="isca-inner">
        <div>
          <p className="section-eyebrow">Materiais gratuitos</p>
          <h2 className="section-h2">Comece com o que você precisa agora.</h2>
          <p style={{ marginTop: '16px' }}>
            Quatro ferramentas prontas para usar — sem cadastro, sem enrolação. Porque bom assessor entrega antes de cobrar.
          </p>
          {formVisible ? (
            <form className="isca-form" onSubmit={handleIsca}>
              <input className="isca-input" type="email" placeholder="Seu melhor e-mail" required/>
              <button type="submit" className="btn-primary" style={{ flexShrink: 0, fontSize: '14px', padding: '12px 24px' }}>
                Quero os materiais
              </button>
            </form>
          ) : (
            <div id="isca-confirm" className="confirm-msg">
              Enviado. Confira sua caixa de entrada em instantes.
            </div>
          )}
          <p style={{ fontSize: '11px', color: 'rgba(12,12,10,0.35)', marginTop: '10px' }}>Sem spam. Cancelamento a qualquer momento.</p>
        </div>

        <div className="isca-items">
          <div className="isca-item">
            <div className="isca-item-icon">✓</div>
            <div>
              <div className="isca-item-title">10 sinais de que sua empresa está prestes a entrar em crise</div>
              <div className="isca-item-desc">Checklist de diagnóstico rápido — leitura de 3 minutos.</div>
            </div>
          </div>
          <div className="isca-item">
            <div className="isca-item-icon">✓</div>
            <div>
              <div className="isca-item-title">O que dizer nas primeiras 2 horas</div>
              <div className="isca-item-desc">Versão resumida do manual completo. Acionável imediatamente.</div>
            </div>
          </div>
          <div className="isca-item">
            <div className="isca-item-icon">✓</div>
            <div>
              <div className="isca-item-title">Nota oficial em branco com as 7 seções obrigatórias</div>
              <div className="isca-item-desc">Template editável em .docx. Funciona para qualquer tipo de crise.</div>
            </div>
          </div>
          <div className="isca-item">
            <div className="isca-item-icon">✓</div>
            <div>
              <div className="isca-item-title">Quiz: sua empresa está preparada?</div>
              <div className="isca-item-desc">Teste de 5 minutos com score de risco reputacional.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
