import type { Metadata } from 'next';
import { lora, geist, jetbrainsMono } from '@/src/lib/fonts';
import './globals.css';

export const metadata: Metadata = {
  title: 'Sem Crise - Assessoria de Comunicação de Crise',
  description: 'Soluções estratégicas para gerenciamento de crise e comunicação institucional.',
  keywords: ['comunicação', 'crise', 'assessoria', 'estratégia'],
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://semcrise.com.br',
    title: 'Sem Crise - Assessoria de Comunicação de Crise',
    description: 'Soluções estratégicas para gerenciamento de crise e comunicação institucional.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-BR"
      className={`${lora.variable} ${geist.variable} ${jetbrainsMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
