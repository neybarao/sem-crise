import React from 'react';

interface Product {
  id: string;
  tag: 'entrada' | 'essencial' | 'premium';
  title: string;
  description: string;
  price: string;
  priceNote?: string;
  yearlyPrice?: string;
}

const products: Product[] = [
  {
    id: '1',
    tag: 'entrada',
    title: 'Manual das Primeiras 24 Horas',
    description: 'O que fazer hora a hora, quem acionar, o que nunca dizer. Inclui checklist imprimível e template de nota oficial em branco.',
    price: 'R$ 47',
    priceNote: 'e-book + checklist',
  },
  {
    id: '2',
    tag: 'entrada',
    title: '50 Frases Proibidas do Porta-Voz',
    description: 'As frases que destroem uma crise pela metade — e como reformular cada uma. Formato e-book curto com áudio narrado.',
    price: 'R$ 27',
    priceNote: 'e-book + áudio',
  },
  {
    id: '3',
    tag: 'entrada',
    title: 'Diagnóstico de Vulnerabilidade',
    description: '60 perguntas que sua empresa responde e recebe um score de risco reputacional. Formato questionário autoaplicável.',
    price: 'R$ 67',
    priceNote: 'PDF editável',
  },
  {
    id: '4',
    tag: 'essencial',
    title: 'Protocolo Sem Crise',
    description: 'Manual operacional completo + 15 templates editáveis. Árvore de decisão, matriz de stakeholders, scripts de coletiva, plano de comunicação interna.',
    price: 'R$ 297',
    priceNote: 'manual + templates',
  },
  {
    id: '5',
    tag: 'essencial',
    title: 'Biblioteca de Notas Oficiais',
    description: '40+ modelos editáveis cobrindo os cenários mais comuns: acidente de trabalho, vazamento de dados, demissão em massa, denúncia de assédio e mais.',
    price: 'R$ 197',
    priceNote: '40+ modelos .docx',
  },
  {
    id: '6',
    tag: 'essencial',
    title: 'Gestão de Crise em Redes Sociais',
    description: 'Como classificar uma polêmica, quando responder e quando ignorar, como lidar com perfis hostis. Banco de respostas-padrão incluído.',
    price: 'R$ 247',
    priceNote: 'manual + banco de respostas',
  },
  {
    id: '7',
    tag: 'premium',
    title: 'Plano Sob Medida',
    description: 'Você preenche um questionário detalhado e recebe um plano de gestão de crise personalizado para sua empresa em até 7 dias úteis.',
    price: 'R$ 1.497',
    priceNote: 'entrega em 7 dias',
  },
  {
    id: '8',
    tag: 'premium',
    title: 'Clube Sem Crise',
    description: 'Comunidade fechada para assessores e profissionais de comunicação. 2 materiais novos por mês + análise de caso recente do noticiário + acesso ao arquivo completo.',
    price: 'R$ 97',
    priceNote: '/ mês',
    yearlyPrice: 'R$ 897 / ano',
  },
];

const tagConfig = {
  entrada: { bg: '#EEE8DE', text: '#0C0C0A', label: 'Entrada' },
  essencial: { bg: '#EB3F00', text: '#F4F1EA', label: 'Essencial' },
  premium: { bg: '#0F1B2D', text: '#EB3F00', label: 'Premium' },
};

export const Produtos: React.FC = () => {
  return (
    <section id="produtos" className="bg-off-white py-24 md:py-32 px-6 sm:px-12 md:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 md:mb-24">
          <p className="text-sm md:text-base font-semibold text-laranja mb-6 tracking-wide uppercase">
            Produtos
          </p>
          <h2 className="font-display font-bold text-5xl sm:text-6xl md:text-7xl text-navy mb-8 leading-tight max-w-3xl">
            Ferramentas para cada fase.
          </h2>
          <p className="text-lg md:text-xl text-navy text-opacity-70 leading-relaxed font-light max-w-2xl">
            Da prevenção à recuperação — materiais operacionais desenvolvidos por especialistas, acionáveis em 24–72 horas.
          </p>
        </div>

        {/* Products Grid - Minimalist Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products.map((product) => {
            const config = tagConfig[product.tag];
            return (
              <div
                key={product.id}
                className={`p-8 md:p-10 rounded-sm border border-navy border-opacity-10 hover:border-opacity-20 transition-all duration-200 cursor-pointer group ${
                  product.id === '8' ? 'lg:col-span-2' : ''
                }`}
                style={{
                  backgroundColor: product.tag === 'entrada' ? '#F8F6F1' : product.tag === 'essencial' ? '#FFF5F0' : '#F0F4F8',
                }}
              >
                {/* Tag */}
                <div
                  className="inline-block px-3 py-1.5 rounded text-xs font-semibold mb-6 tracking-wide uppercase"
                  style={{
                    backgroundColor: config.bg,
                    color: config.text,
                  }}
                >
                  {config.label}
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold text-navy mb-4 font-display group-hover:text-laranja transition-colors duration-200">
                  {product.title}
                </h3>

                {/* Description */}
                <p className="text-base text-navy text-opacity-70 mb-8 leading-relaxed font-light">
                  {product.description}
                </p>

                {/* Price */}
                <div className={product.id === '8' ? 'md:flex md:gap-8' : ''}>
                  <div>
                    <div className="text-3xl md:text-4xl font-bold text-laranja font-display">
                      {product.price}
                    </div>
                    <div className="text-sm text-navy text-opacity-50 mt-2">
                      {product.priceNote}
                    </div>
                  </div>
                  {product.yearlyPrice && (
                    <div className="text-sm text-navy text-opacity-50 mt-4 md:mt-0 md:flex md:items-end">
                      ou {product.yearlyPrice}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
