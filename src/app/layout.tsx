import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Église La Compassion — Amour · Sainteté · Puissance · Équilibre',
  description:
    "Église La Compassion — Une communauté chrétienne qui répand l'Évangile de Jésus-Christ avec un message d'amour, de sainteté, de puissance et d'équilibre.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
