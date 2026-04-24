import {
  Nav,
  Hero,
  Metodo,
  Produtos,
  Isca,
  Testimonial,
  Newsletter,
  Footer,
} from '@/src/components';

export default function Home() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Sem Crise',
    description: 'Assessoria estratégica de comunicação de crise',
    url: 'https://semcrise.com.br',
    logo: 'https://semcrise.com.br/logo.svg',
    sameAs: ['https://linkedin.com/company/sem-crise'],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Support',
      email: 'contato@semcrise.com.br',
    },
    areaServed: 'BR',
    serviceType: 'Crisis Communication Consulting',
  };

  const localBusinessData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Sem Crise',
    description: 'Assessoria de Comunicação de Crise',
    url: 'https://semcrise.com.br',
    image: 'https://semcrise.com.br/logo.svg',
    priceRange: '$$',
    serviceArea: {
      '@type': 'Country',
      name: 'BR',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessData) }}
      />
      <main className="overflow-hidden">
        <Nav />
        <Hero />
        <Metodo />
        <Produtos />
        <Isca />
        <Testimonial />
        <Newsletter />
        <Footer />
      </main>
    </>
  );
}
