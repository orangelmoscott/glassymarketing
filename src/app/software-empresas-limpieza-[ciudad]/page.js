import Link from 'next/link';
import { notFound } from 'next/navigation';
import { CheckCircle, ArrowRight, Zap, FileText, Shield, MapPin, Star, Globe } from 'lucide-react';

const APP_URL = 'https://app.glassy.es';

const locations = [
  { slug: 'madrid', name: 'Madrid', region: 'Comunidad de Madrid' },
  { slug: 'barcelona', name: 'Barcelona', region: 'Cataluña' },
  { slug: 'valencia', name: 'Valencia', region: 'Comunidad Valenciana' },
  { slug: 'sevilla', name: 'Sevilla', region: 'Andalucía' },
  { slug: 'zaragoza', name: 'Zaragoza', region: 'Aragón' },
  { slug: 'malaga', name: 'Málaga', region: 'Andalucía' },
  { slug: 'murcia', name: 'Murcia', region: 'Región de Murcia' },
  { slug: 'bilbao', name: 'Bilbao', region: 'País Vasco' },
  { slug: 'alicante', name: 'Alicante', region: 'Comunidad Valenciana' },
  { slug: 'cordoba', name: 'Córdoba', region: 'Andalucía' },
  { slug: 'valladolid', name: 'Valladolid', region: 'Castilla y León' },
  { slug: 'vigo', name: 'Vigo', region: 'Galicia' },
  { slug: 'gijon', name: 'Gijón', region: 'Asturias' },
  { slug: 'palma-de-mallorca', name: 'Palma de Mallorca', region: 'Islas Baleares' },
  { slug: 'las-palmas', name: 'Las Palmas', region: 'Canarias' },
  { slug: 'inglaterra', name: 'Inglaterra', region: 'Reino Unido' },
  { slug: 'italia', name: 'Italia', region: 'Europa' },
  { slug: 'francia', name: 'Francia', region: 'Europa' },
  { slug: 'portugal', name: 'Portugal', region: 'Europa' },
  { slug: 'alemania', name: 'Alemania', region: 'Europa' },
  { slug: 'holanda', name: 'Holanda', region: 'Europa' },
  { slug: 'suiza', name: 'Suiza', region: 'Europa' },
];

export async function generateStaticParams() {
  return locations.map((loc) => ({ ciudad: loc.slug }));
}

export async function generateMetadata({ params }) {
  const { ciudad } = await params;
  const loc = locations.find((l) => l.slug === ciudad);
  if (!loc) return {};

  return {
    title: `Software para Empresas de Limpieza de Cristales en ${loc.name} | Glassy`,
    description: `Glassy es el software nº1 para cristaleros en ${loc.name}. Optimiza rutas por ${loc.region}, automatiza facturas y gestiona tu equipo desde el móvil. Prueba 14 días gratis.`,
    alternates: { canonical: `https://glassy.es/software-empresas-limpieza-${loc.slug}` },
  };
}

export default async function CityPage({ params }) {
  const { ciudad } = await params;
  const loc = locations.find((l) => l.slug === ciudad);
  if (!loc) notFound();

  const { name, region } = loc;

  return (
    <div className="min-h-screen bg-[#f6f9fc] font-sans selection:bg-indigo-100">
      {/* ─── Navigation ─── */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-[#e3e8ee]">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 bg-[#635bff] rounded-xl flex items-center justify-center shadow-lg shadow-indigo-100 group-hover:rotate-12 transition-transform">
                <img src="/favicon.png" alt="Glassy" className="w-6 h-6 brightness-0 invert" />
            </div>
            <span className="text-xl font-bold tracking-tight text-[#0a2540]">Glassy</span>
          </Link>
          <div className="flex items-center gap-6">
            <a href={`${APP_URL}/login`} className="text-sm font-bold text-[#697386] hover:text-[#0a2540] transition-colors">Iniciar sesión</a>
            <a href={`${APP_URL}/register`}>
                <button className="bg-[#635bff] text-white px-6 py-2.5 rounded-lg font-bold text-sm hover:bg-[#4f46e5] transition-all shadow-lg shadow-indigo-100">
                Prueba gratis
                </button>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-24 px-6 relative overflow-hidden text-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-gradient-to-b from-indigo-50/50 to-transparent pointer-events-none" />
        <div className="container mx-auto max-w-6xl relative z-10 flex flex-col items-center">
          <div className="mb-6">
            <span className="bg-indigo-50 text-[#635bff] px-4 py-1.5 rounded-full text-xs font-bold border border-indigo-100 flex items-center gap-2 uppercase tracking-widest">
              <MapPin size={14} /> SOLUCIÓN LOCAL EN {name.toUpperCase()}
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-[#0a2540] leading-[1.1] mb-8">
            Software de limpieza de cristales en <span className="text-[#635bff]">{name}</span>
          </h1>
          <p className="text-lg md:text-xl text-[#425466] max-w-2xl mb-12 font-medium leading-relaxed">
            Si tienes una empresa de limpieza en {name}, Glassy es la herramienta diseñada para ayudarte a facturar más y trabajar menos. Rutas inteligentes y gestión profesional en tu ciudad.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={`${APP_URL}/register`}>
                <button className="bg-[#0a2540] text-white px-8 py-4 rounded-xl font-bold flex items-center gap-3 hover:bg-[#1a3f6d] transition-all shadow-xl active:scale-95">
                Empezar prueba en {name} <ArrowRight size={20} />
                </button>
            </a>
            <div className="flex items-center gap-2 px-6 py-4">
                <div className="flex text-amber-400"><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /></div>
                <span className="text-sm font-bold text-[#697386]">4.9/5 valoración local</span>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-16 bg-white border-y border-[#e3e8ee]">
          <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
              <div className="space-y-2"><h4 className="text-4xl font-bold text-[#635bff]">35%</h4><p className="text-[#697386] font-bold text-sm uppercase tracking-wider">Ahorro en rutas en {name}</p></div>
              <div className="space-y-2"><h4 className="text-4xl font-bold text-[#635bff]">+12h</h4><p className="text-[#697386] font-bold text-sm uppercase tracking-wider">Recuperadas mensualmente</p></div>
              <div className="space-y-2"><h4 className="text-4xl font-bold text-[#635bff]">100%</h4><p className="text-[#697386] font-bold text-sm uppercase tracking-wider">Facturación sin errores</p></div>
          </div>
      </section>
      
      {/* Features */}
      <section className="py-32 px-6 text-left">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a2540] mb-4">Optimizado para el cristalero local</h2>
            <p className="text-[#697386] font-medium max-w-xl mx-auto italic">Diseñado por y para empresas de limpieza que buscan profesionalizar su operativa diaria en {name}.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-10 bg-white rounded-3xl border border-[#e3e8ee] hover:border-[#635bff] transition-all group">
                <div className="w-14 h-14 bg-indigo-50 text-[#635bff] rounded-2xl flex items-center justify-center mb-6"><Zap size={28} /></div>
                <h3 className="text-xl font-bold text-[#0a2540] mb-4">Rutas Inteligentes</h3>
                <p className="text-[#425466] leading-relaxed text-sm">Organiza a tus operarios por las calles de {name} de forma eficiente. Reduce tiempos y costes.</p>
            </div>
            <div className="p-10 bg-white rounded-3xl border border-[#e3e8ee] hover:border-[#635bff] transition-all group">
                <div className="w-14 h-14 bg-indigo-50 text-[#635bff] rounded-2xl flex items-center justify-center mb-6"><FileText size={28} /></div>
                <h3 className="text-xl font-bold text-[#0a2540] mb-4">Facturación Pro</h3>
                <p className="text-[#425466] leading-relaxed text-sm">Genera facturas PDF profesionales al instante. Adaptado a la fiscalidad española.</p>
            </div>
            <div className="p-10 bg-white rounded-3xl border border-[#e3e8ee] hover:border-[#635bff] transition-all group">
                <div className="w-14 h-14 bg-indigo-50 text-[#635bff] rounded-2xl flex items-center justify-center mb-6"><Shield size={28} /></div>
                <h3 className="text-xl font-bold text-[#0a2540] mb-4">Control Total</h3>
                <p className="text-[#425466] leading-relaxed text-sm">Toda la base de datos de tus clientes de {name} segura y organizada. Historial de servicios en un clic.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-[#0a2540] text-white text-center">
        <div className="container mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-8">Lleva tu empresa en {name} al siguiente nivel</h2>
            <a href={`${APP_URL}/register`}>
                <button className="bg-[#635bff] text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-[#4f46e5] transition-all shadow-2xl active:scale-95">
                    Probar Glassy Gratis Ahora
                </button>
            </a>
            <p className="mt-6 text-white/50 text-sm font-medium">Sin tarjeta de crédito. Cancela cuando quieras.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-[#e3e8ee] py-12 text-center">
         <div className="container mx-auto px-6">
            <div className="flex items-center justify-center gap-2 mb-6"><img src="/favicon.png" alt="Glassy" className="w-6 h-6" /><span className="font-bold text-[#0a2540]">Glassy</span></div>
            <p className="text-xs text-[#697386] font-bold uppercase tracking-widest mb-2">También disponible en</p>
            <div className="flex flex-wrap justify-center gap-2 mb-8">
                {locations.filter(l => l.slug !== ciudad).slice(0, 10).map(l => (
                    <Link key={l.slug} href={`/software-empresas-limpieza-${l.slug}`} className="text-[10px] font-bold text-[#697386] border border-[#e3e8ee] px-3 py-1 rounded-full hover:bg-[#f6f9fc] transition-all capitalize">{l.name}</Link>
                ))}
            </div>
            <p className="text-xs text-[#aab7c4] font-bold">&copy; 2026 Glassy. Software especializado para cristaleros en {name} y España.</p>
         </div>
      </footer>
    </div>
  );
}
