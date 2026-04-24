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
  return (
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
  );
}
