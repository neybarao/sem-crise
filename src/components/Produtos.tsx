import React from 'react';
import { Card } from './Card';
import { Badge } from './Badge';
import { Button } from './Button';

interface Product {
  id: string;
  tag: 'entrada' | 'essencial' | 'premium';
  title: string;
  description: string;
  price: string;
  features: string[];
}

const products: Product[] = [
  {
    id: '1',
    tag: 'entrada',
    title: 'Consultoria Básica',
    description: 'Ideal para pequenas empresas que precisam de orientação inicial.',
    price: 'R$ 2.990',
    features: [
      'Diagnóstico de crise',
      'Plano de comunicação (3 meses)',
      'Suporte via email',
    ],
  },
  {
    id: '2',
    tag: 'essencial',
    title: 'Consultoria Completa',
    description: 'Solução abrangente para empresas em transição ou em crise.',
    price: 'R$ 7.990',
    features: [
      'Tudo do plano Básico',
      'Suporte 24/7',
      'Monitoramento de mídia',
      'Assessoria de imprensa',
    ],
  },
  {
    id: '3',
    tag: 'entrada',
    title: 'Auditoria Reputacional',
    description: 'Análise profunda da sua posição no mercado e redes sociais.',
    price: 'R$ 4.990',
    features: [
      'Análise de stakeholders',
      'Auditoria de mídia',
      'Relatório executivo',
      'Recomendações estratégicas',
    ],
  },
  {
    id: '4',
    tag: 'premium',
    title: 'Clube Sem Crise',
    description: 'Acesso ilimitado à expertise da nossa equipe durante 12 meses. Suporte contínuo, consultoria estratégica, treinamento de porta-vozes, e gerenciamento de crises.',
    price: 'A combinar',
    features: [
      'Acesso 24/7 à equipe',
      'Treinamento de porta-vozes',
      'Monitoramento contínuo',
      'Planos customizados',
    ],
  },
];

export const Produtos: React.FC = () => {
  return (
    <section
      id="produtos"
      className="bg-navy py-20 md:py-32 px-14"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-display font-semibold text-4xl md:text-5xl text-off-white mb-4 leading-tight">
            Nossos serviços
          </h2>
          <p className="text-base md:text-lg text-opacity-58 text-off-white max-w-2xl mx-auto">
            Soluções escaláveis para todos os tamanhos de empresa, desde diagnóstico até gerenciamento contínuo.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-3 gap-4">
          {products.map((product) => (
            <Card
              key={product.id}
              interactive
              className={`flex flex-col ${product.id === '4' ? 'md:col-span-2' : ''}`}
            >
              <Badge variant={product.tag} className="mb-4">
                {product.tag.charAt(0).toUpperCase() + product.tag.slice(1)}
              </Badge>

              <h3 className="font-display font-semibold text-lg text-off-white mb-2">
                {product.title}
              </h3>

              <p className="text-sm text-opacity-50 text-off-white mb-6 flex-grow">
                {product.description}
              </p>

              <ul className="space-y-2 mb-8">
                {product.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="text-xs text-opacity-50 text-off-white flex items-start gap-2"
                  >
                    <span className="mt-1.5">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="flex items-end justify-between">
                <div>
                  <div className="font-display font-semibold text-2xl text-off-white">
                    {product.price}
                  </div>
                </div>
                <Button variant="primary" size="sm">
                  Consultar
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
