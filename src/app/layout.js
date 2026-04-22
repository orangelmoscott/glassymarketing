import './globals.css';

export const metadata = {
  title: 'Glassy | Software de Gestión para Empresas de Limpieza de Cristales',
  description: 'El software número 1 para cristaleros. Optimiza tus rutas, automatiza la facturación y gestiona a tus trabajadores desde una única app. Prueba gratuita.',
  keywords: 'software limpieza cristales, app cristaleros, rutas de limpieza, facturación limpieza, gestión de rutas',
  metadataBase: new URL('https://glassy.es'),
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
  openGraph: {
    title: 'Glassy | Software para Empresas de Limpieza de Cristales',
    description: 'Ahorra horas organizando rutas y facturando. Software especializado para cristaleros.',
    url: 'https://glassy.es',
    siteName: 'Glassy',
    locale: 'es_ES',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Glassy | Software para Cristaleros',
    description: 'Optimiza tus rutas y automatiza tus facturas. Especializado para limpieza de cristales.',
    images: ['/og-image.png'],
  },
  alternates: {
    canonical: 'https://glassy.es',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({ children }) {
  const orgSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Glassy',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, iOS, Android',
    description: 'Software de gestión para empresas de limpieza de cristales',
    url: 'https://glassy.es',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'EUR',
      description: 'Prueba gratuita disponible',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      ratingCount: '127',
    },
  };

  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
