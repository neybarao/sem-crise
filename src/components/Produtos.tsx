import React from 'react';

export const Produtos: React.FC = () => {
  return (
    <section className="products" id="produtos">
      <div className="container">
        <p className="section-eyebrow">Produtos</p>
        <h2 className="section-h2">Ferramentas para cada fase.</h2>
        <p className="products-sub">Da prevenção à recuperação — materiais operacionais desenvolvidos por especialistas, acionáveis em 24–72 horas.</p>

        <div className="products-grid">
          {/* Entrada */}
          <div className="product-card">
            <span className="product-tag tag-entry">Entrada</span>
            <h3 className="product-title">Manual das Primeiras 24 Horas</h3>
            <p className="product-body">O que fazer hora a hora, quem acionar, o que nunca dizer. Inclui checklist imprimível e template de nota oficial em branco.</p>
            <div className="product-price">R$ 47 <span>e-book + checklist</span></div>
          </div>
          <div className="product-card">
            <span className="product-tag tag-entry">Entrada</span>
            <h3 className="product-title">50 Frases Proibidas do Porta-Voz</h3>
            <p className="product-body">As frases que destroem uma crise pela metade — e como reformular cada uma. Formato e-book curto com áudio narrado.</p>
            <div className="product-price">R$ 27 <span>e-book + áudio</span></div>
          </div>
          <div className="product-card">
            <span className="product-tag tag-entry">Entrada</span>
            <h3 className="product-title">Diagnóstico de Vulnerabilidade</h3>
            <p className="product-body">60 perguntas que sua empresa responde e recebe um score de risco reputacional. Formato questionário autoaplicável.</p>
            <div className="product-price">R$ 67 <span>PDF editável</span></div>
          </div>

          {/* Intermediário */}
          <div className="product-card">
            <span className="product-tag tag-mid">Essencial</span>
            <h3 className="product-title">Protocolo Sem Crise</h3>
            <p className="product-body">Manual operacional completo + 15 templates editáveis. Árvore de decisão, matriz de stakeholders, scripts de coletiva, plano de comunicação interna.</p>
            <div className="product-price">R$ 297 <span>manual + templates</span></div>
          </div>
          <div className="product-card">
            <span className="product-tag tag-mid">Essencial</span>
            <h3 className="product-title">Biblioteca de Notas Oficiais</h3>
            <p className="product-body">40+ modelos editáveis cobrindo os cenários mais comuns: acidente de trabalho, vazamento de dados, demissão em massa, denúncia de assédio e mais.</p>
            <div className="product-price">R$ 197 <span>40+ modelos .docx</span></div>
          </div>
          <div className="product-card">
            <span className="product-tag tag-mid">Essencial</span>
            <h3 className="product-title">Gestão de Crise em Redes Sociais</h3>
            <p className="product-body">Como classificar uma polêmica, quando responder e quando ignorar, como lidar com perfis hostis. Banco de respostas-padrão incluído.</p>
            <div className="product-price">R$ 247 <span>manual + banco de respostas</span></div>
          </div>

          {/* Premium */}
          <div className="product-card">
            <span className="product-tag tag-prem">Premium</span>
            <h3 className="product-title">Plano Sob Medida</h3>
            <p className="product-body">Você preenche um questionário detalhado e recebe um plano de gestão de crise personalizado para sua empresa em até 7 dias úteis.</p>
            <div className="product-price">R$ 1.497 <span>entrega em 7 dias</span></div>
          </div>
          <div className="product-card" style={{ gridColumn: 'span 2' }}>
            <span className="product-tag tag-prem">Premium</span>
            <h3 className="product-title">Clube Sem Crise</h3>
            <p className="product-body" style={{ maxWidth: '600px' }}>Comunidade fechada para assessores e profissionais de comunicação. 2 materiais novos por mês + análise de caso recente do noticiário + acesso ao arquivo completo.</p>
            <div style={{ display: 'flex', gap: '24px', alignItems: 'baseline', marginTop: '8px' }}>
              <div className="product-price">R$ 97 <span>/ mês</span></div>
              <div style={{ fontSize: '13px', color: 'rgba(244,241,234,0.4)' }}>ou R$ 897 / ano</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
