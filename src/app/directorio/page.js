import Header from '../components/Header';
import Footer from '../components/Footer';
import DirectorioClient from '../components/DirectorioClient';

export const dynamic = 'force-static';

export const metadata = {
  title: 'Directorio de Empresas de Limpieza de Cristales y Servicios | Glassy',
  description: 'Encuentra y contrata empresas de limpieza de cristales y servicios generales cerca de ti. Profesionales verificados que utilizan la tecnología de Glassy.',
  keywords: 'directorio empresas limpieza, buscar cristalero, limpieza cristales cerca de mi, marketplace servicios de limpieza',
  alternates: {
    canonical: 'https://glassy.es/directorio/',
  },
};

export default function DirectorioPage() {
  return (
    <div className="min-h-screen bg-[#f6f9fc] flex flex-col font-['Figtree'] selection:bg-indigo-100 selection:text-indigo-900">
      <Header />
      <main className="flex-grow pt-24">
        <DirectorioClient />
      </main>
      <Footer />
    </div>
  );
}
