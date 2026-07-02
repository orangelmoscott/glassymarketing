import MarketingClient from './components/MarketingClient';

export const dynamic = 'force-static';

export const metadata = {
  title: 'Glassy | Software de Gestión para Empresas de Limpieza de Cristales',
  description: 'El software número 1 para cristaleros. Optimiza tus rutas, automatiza la facturación y gestiona a tus trabajadores desde una única app. Prueba gratuita.',
  alternates: {
    canonical: 'https://glassy.es',
  },
};

export default function Page() {
  return <MarketingClient />;
}
