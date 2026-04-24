import type { Metadata } from 'next';
import { lora, geist, jetbrainsMono } from '@/src/lib/fonts';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://semcrise.com.br'),
  title: 'Sem Crise - Assessoria de Comunicação de Crise | Protocolo Antes do Pânico',
  description: 'Assessoria estratégica de comunicação de crise. Protocolo operacional, gestão de narrativa e resposta em 24-72h. Mais de 200 crises gerenciadas, 98% de reputações preservadas.',
  keywords: ['comunicação de crise', 'assessoria de crise', 'gestão de crise', 'relações públicas', 'comunicação estratégica', 'porta-voz', 'reputação corporativa'],
  authors: [{ name: 'Sem Crise' }],
  creator: 'Sem Crise',
  publisher: 'Sem Crise',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://semcrise.com.br/sem-crise/',
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://semcrise.com.br/sem-crise/',
    siteName: 'Sem Crise',
    title: 'Sem Crise - Assessoria de Comunicação de Crise',
    description: 'Estratégia, velocidade e controle de narrativa para proteger sua imagem quando mais importa.',
    images: [
      {
        url: 'https://semcrise.com.br/sem-crise/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Sem Crise - Assessoria de Comunicação de Crise',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sem Crise - Assessoria de Comunicação de Crise',
    description: 'Protocolo antes do pânico. Estratégia, velocidade e controle de narrativa.',
    images: ['https://semcrise.com.br/sem-crise/og-image.jpg'],
  },
  viewport: 'width=device-width, initial-scale=1',
  colorScheme: 'light dark',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-BR"
      suppressHydrationWarning
      className={`${lora.variable} ${geist.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#0F1B2D" />
        <link rel="icon" href="favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  );
}
