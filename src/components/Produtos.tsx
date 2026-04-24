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

const tagColors = {
  entrada: { bg: 'bg-mostarda bg-opacity-15', text: 'text-mostarda' },
  essencial: { bg: 'bg-laranja bg-opacity-15', text: 'text-laranja' },
  premium: { bg: 'bg-off-white bg-opacity-10', text: 'text-off-white text-opacity-70' },
};

const tagLabels = {
  entrada: 'Entrada',
  essencial: 'Essencial',
  premium: 'Premium',
};

export const Produtos: React.FC = () => {
  return (
    <section id="produtos" className="bg-navy py-20 md:py-26 px-6 sm:px-14">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-14 md:mb-16">
          <p className="text-xs font-medium text-laranja uppercase mb-4 tracking-widest">
            Produtos
          </p>
          <h2 className="font-display font-semibold text-3xl sm:text-4xl md:text-5xl text-off-white mb-4">
            Ferramentas para cada fase.
          </h2>
          <p className="text-base text-opacity-50 text-off-white max-w-2xl">
            Da prevenção à recuperação — materiais operacionais desenvolvidos por especialistas, acionáveis em 24–72 horas.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((product) => (
            <div
              key={product.id}
              className={`bg-off-white bg-opacity-4 border border-off-white border-opacity-8 rounded-lg p-7 sm:p-6 hover:bg-opacity-8 hover:border-laranja hover:border-opacity-40 transition-all duration-normal ease-smooth ${
                product.id === '8' ? 'sm:col-span-2 lg:col-span-2' : ''
              }`}
            >
              {/* Tag */}
              <div
                className={`inline-flex items-center font-xs font-medium letter-spacing-wide text-opacity-100 uppercase px-3 py-1 rounded-full mb-4 tracking-widest ${
                  tagColors[product.tag].bg
                } ${tagColors[product.tag].text}`}
              >
                {tagLabels[product.tag]}
              </div>

              {/* Title */}
              <h3 className="font-display font-semibold text-base sm:text-lg text-off-white mb-3">
                {product.title}
              </h3>

              {/* Description */}
              <p className="text-xs sm:text-sm text-off-white text-opacity-50 mb-5 leading-relaxed">
                {product.description}
              </p>

              {/* Price */}
              <div className={product.id === '8' ? 'sm:flex sm:gap-6 sm:items-baseline sm:mt-3' : ''}>
                <div>
                  <div className="font-display font-semibold text-xl sm:text-2xl text-off-white">
                    {product.price}
                  </div>
                  <div className="text-xs text-off-white text-opacity-40 mt-1">
                    {product.priceNote}
                  </div>
                </div>
                {product.yearlyPrice && (
                  <div className="text-xs text-off-white text-opacity-40 mt-2 sm:mt-0">
                    ou {product.yearlyPrice}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
