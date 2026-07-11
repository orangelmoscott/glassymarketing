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

const getTranslations = (slug, name, region) => {
  if (slug === 'inglaterra') {
    return {
      metaTitle: `Window Cleaning Business Management Software in ${name} | Glassy`,
      metaDesc: `Glassy is the #1 software for window cleaners in ${name}. Optimize routes across ${region}, automate invoicing, and manage your team from your mobile. 14-day free trial.`,
      login: 'Log in',
      freeTrial: 'Free trial',
      localSolution: `LOCAL SOLUTION IN ${name.toUpperCase()}`,
      heroTitle: `Window cleaning software in ${name}`,
      heroDesc: `If you run a cleaning business in ${name}, Glassy is the tool designed to help you invoice more and work less. Intelligent routing and professional management in your city.`,
      heroBtn: `Start free trial in ${name}`,
      rating: '4.9/5 local rating',
      savingsVal: '35%',
      savingsLabel: `Route savings in ${name}`,
      recoveredVal: '+12h',
      recoveredLabel: 'Recovered monthly',
      invoicingVal: '100%',
      invoicingLabel: 'Error-free invoicing',
      featuresTitle: 'Optimized for local window cleaners',
      featuresDesc: `Designed by and for cleaning businesses looking to professionalize their daily operations in ${name}.`,
      feat1Title: 'Intelligent Routing',
      feat1Desc: `Efficiently organize your workers through the streets of ${name}. Reduce times and costs.`,
      feat2Title: 'Pro Invoicing',
      feat2Desc: `Instantly generate professional PDF invoices. Adapted to local invoicing rules.`,
      feat3Title: 'Total Control',
      feat3Desc: `Your entire client database in ${name} secure and organized. Service history in one click.`,
      ctaTitle: `Take your business in ${name} to the next level`,
      ctaBtn: 'Try Glassy Free Now',
      ctaSub: 'No credit card required. Cancel anytime.',
      availableIn: 'Also available in',
      footerCopyright: `&copy; 2026 Glassy. Specialized software for window cleaners in ${name} and UK.`,
      logo: 'Glassy'
    };
  }

  if (slug === 'portugal') {
    return {
      metaTitle: `Software de Gestão para Empresas de Limpeza de Vidros em ${name} | Glassy`,
      metaDesc: `Glassy é o software nº1 para limpadores de vidros em ${name}. Otimize rotas por ${region}, automatize faturas e gira a sua equipa a partir do telemóvel. Teste gratuito de 14 dias.`,
      login: 'Iniciar sessão',
      freeTrial: 'Teste gratuito',
      localSolution: `SOLUÇÃO LOCAL EM ${name.toUpperCase()}`,
      heroTitle: `Software de limpeza de vidros em ${name}`,
      heroDesc: `Se tem uma empresa de limpeza em ${name}, o Glassy é a ferramenta desenhada para o ajudar a faturar mais e trabalhar menos. Rotas inteligentes e gestão profissional na sua cidade.`,
      heroBtn: `Iniciar teste gratuito em ${name}`,
      rating: '4.9/5 avaliação local',
      savingsVal: '35%',
      savingsLabel: `Poupança em rotas em ${name}`,
      recoveredVal: '+12h',
      recoveredLabel: 'Recuperadas mensalmente',
      invoicingVal: '100%',
      invoicingLabel: 'Faturação sem erros',
      featuresTitle: 'Otimizado para o limpador de vidros local',
      featuresDesc: `Desenhado por e para empresas de limpeza que procuram profissionalizar as suas operações diárias em ${name}.`,
      feat1Title: 'Rotas Inteligentes',
      feat1Desc: `Organize os seus operários pelas ruas de ${name} de forma eficiente. Reduza tempo e custos.`,
      feat2Title: 'Faturação Profissional',
      feat2Desc: `Gere faturas PDF profissionais instantaneamente. Adaptado à faturação local.`,
      feat3Title: 'Controlo Total',
      feat3Desc: `Toda a base de dados de clientes em ${name} segura e organizada. Histórico de serviços num clique.`,
      ctaTitle: `Leve a sua empresa em ${name} para o próximo nível`,
      ctaBtn: 'Experimente o Glassy Grátis Agora',
      ctaSub: 'Sem cartão de crédito. Cancele quando quiser.',
      availableIn: 'Também disponível em',
      footerCopyright: `&copy; 2026 Glassy. Software especializado para limpadores de vidros em ${name} e Portugal.`,
      logo: 'Glassy'
    };
  }

  // Por defecto Español
  return {
    metaTitle: `Software para Empresas de Limpieza de Cristales en ${name} | Glassy`,
    metaDesc: `Glassy es el software nº1 para cristaleros en ${name}. Optimiza rutas por ${region}, automatiza facturas y gestiona tu equipo desde el móvil. Prueba 14 días gratis.`,
    login: 'Iniciar sesión',
    freeTrial: 'Prueba gratis',
    localSolution: `SOLUÇÃO LOCAL EM ${name.toUpperCase()}`,
    localSolution: `SOLUCIÓN LOCAL EN ${name.toUpperCase()}`,
    heroTitle: `Software de limpieza de cristales en ${name}`,
    heroDesc: `Si tienes una empresa de limpieza en ${name}, Glassy es la herramienta diseñada para ayudarte a facturar más y trabajar menos. Rutas inteligentes y gestión profesional en tu ciudad.`,
    heroBtn: `Empezar prueba en ${name}`,
    rating: '4.9/5 valoración local',
    savingsVal: '35%',
    savingsLabel: `Ahorro en rutas en ${name}`,
    recoveredVal: '+12h',
    recoveredLabel: 'Recuperadas mensualmente',
    invoicingVal: '100%',
    invoicingLabel: 'Facturación sin errores',
    featuresTitle: 'Optimizado para el cristalero local',
    featuresDesc: `Diseñado por y para empresas de limpieza que buscan profesionalizar su operativa diaria en ${name}.`,
    feat1Title: 'Rutas Inteligentes',
    feat1Desc: `Organiza a tus operarios por las calles de ${name} de forma eficiente. Reduce tiempos y costes.`,
    feat2Title: 'Facturación Pro',
    feat2Desc: `Genera facturas PDF profesionales al instante. Adaptado a la fiscalidad española.`,
    feat3Title: 'Control Total',
    feat3Desc: `Toda la base de datos de tus clientes de ${name} segura y organizada. Historial de servicios en un clic.`,
    ctaTitle: `Lleva tu empresa en ${name} al siguiente nivel`,
    ctaBtn: 'Probar Glassy Gratis Ahora',
    ctaSub: 'Sin tarjeta de crédito. Cancela cuando quieras.',
    availableIn: 'También disponible en',
    footerCopyright: `&copy; 2026 Glassy. Software especializado para cristaleros en ${name} y España.`,
    logo: 'Glassy'
  };
};

export async function generateStaticParams() {
  return locations.map((loc) => ({ slug: `software-empresas-limpieza-${loc.slug}` }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  if (!slug || !slug.startsWith('software-empresas-limpieza-')) {
    return {};
  }
  const ciudad = slug.replace('software-empresas-limpieza-', '');
  const loc = locations.find((l) => l.slug === ciudad);
  if (!loc) return {};

  const t = getTranslations(loc.slug, loc.name, loc.region);

  return {
    title: t.metaTitle,
    description: t.metaDesc,
    alternates: { canonical: `https://glassy.es/software-empresas-limpieza-${loc.slug}` },
  };
}

export default async function CityPage({ params }) {
  const { slug } = await params;
  if (!slug || !slug.startsWith('software-empresas-limpieza-')) {
    notFound();
  }
  const ciudad = slug.replace('software-empresas-limpieza-', '');
  const loc = locations.find((l) => l.slug === ciudad);
  if (!loc) notFound();

  const t = getTranslations(loc.slug, loc.name, loc.region);

  return (
    <div className="min-h-screen bg-[#f6f9fc] font-sans selection:bg-indigo-100">
      {/* ─── Navigation ─── */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-[#e3e8ee]">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 bg-[#635bff] rounded-xl flex items-center justify-center shadow-lg shadow-indigo-100 group-hover:rotate-12 transition-transform">
                <img src="/favicon.png" alt="Glassy" className="w-6 h-6 brightness-0 invert" />
            </div>
            <span className="text-xl font-bold tracking-tight text-[#0a2540]">{t.logo}</span>
          </Link>
          <div className="flex items-center gap-6">
            <a href={`${APP_URL}/login`} className="text-sm font-bold text-[#697386] hover:text-[#0a2540] transition-colors">{t.login}</a>
            <a href={`${APP_URL}/register`}>
                <button className="bg-[#635bff] text-white px-6 py-2.5 rounded-lg font-bold text-sm hover:bg-[#4f46e5] transition-all shadow-lg shadow-indigo-100">
                {t.freeTrial}
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
              <MapPin size={14} /> {t.localSolution}
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-[#0a2540] leading-[1.1] mb-8">
            {t.heroTitle}
          </h1>
          <p className="text-lg md:text-xl text-[#425466] max-w-2xl mb-12 font-medium leading-relaxed">
            {t.heroDesc}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={`${APP_URL}/register`}>
                <button className="bg-[#0a2540] text-white px-8 py-4 rounded-xl font-bold flex items-center gap-3 hover:bg-[#1a3f6d] transition-all shadow-xl active:scale-95">
                {t.heroBtn} <ArrowRight size={20} />
                </button>
            </a>
            <div className="flex items-center gap-2 px-6 py-4">
                <div className="flex text-amber-400"><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /></div>
                <span className="text-sm font-bold text-[#697386]">{t.rating}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-16 bg-white border-y border-[#e3e8ee]">
          <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
              <div className="space-y-2"><h4 className="text-4xl font-bold text-[#635bff]">{t.savingsVal}</h4><p className="text-[#697386] font-bold text-sm uppercase tracking-wider">{t.savingsLabel}</p></div>
              <div className="space-y-2"><h4 className="text-4xl font-bold text-[#635bff]">{t.recoveredVal}</h4><p className="text-[#697386] font-bold text-sm uppercase tracking-wider">{t.recoveredLabel}</p></div>
              <div className="space-y-2"><h4 className="text-4xl font-bold text-[#635bff]">{t.invoicingVal}</h4><p className="text-[#697386] font-bold text-sm uppercase tracking-wider">{t.invoicingLabel}</p></div>
          </div>
      </section>
      
      {/* Features */}
      <section className="py-32 px-6 text-left">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a2540] mb-4">{t.featuresTitle}</h2>
            <p className="text-[#697386] font-medium max-w-xl mx-auto italic">{t.featuresDesc}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-10 bg-white rounded-3xl border border-[#e3e8ee] hover:border-[#635bff] transition-all group">
                <div className="w-14 h-14 bg-indigo-50 text-[#635bff] rounded-2xl flex items-center justify-center mb-6"><Zap size={28} /></div>
                <h3 className="text-xl font-bold text-[#0a2540] mb-4">{t.feat1Title}</h3>
                <p className="text-[#425466] leading-relaxed text-sm">{t.feat1Desc}</p>
            </div>
            <div className="p-10 bg-white rounded-3xl border border-[#e3e8ee] hover:border-[#635bff] transition-all group">
                <div className="w-14 h-14 bg-indigo-50 text-[#635bff] rounded-2xl flex items-center justify-center mb-6"><FileText size={28} /></div>
                <h3 className="text-xl font-bold text-[#0a2540] mb-4">{t.feat2Title}</h3>
                <p className="text-[#425466] leading-relaxed text-sm">{t.feat2Desc}</p>
            </div>
            <div className="p-10 bg-white rounded-3xl border border-[#e3e8ee] hover:border-[#635bff] transition-all group">
                <div className="w-14 h-14 bg-indigo-50 text-[#635bff] rounded-2xl flex items-center justify-center mb-6"><Shield size={28} /></div>
                <h3 className="text-xl font-bold text-[#0a2540] mb-4">{t.feat3Title}</h3>
                <p className="text-[#425466] leading-relaxed text-sm">{t.feat3Desc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-[#0a2540] text-white text-center">
        <div className="container mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-8">{t.ctaTitle}</h2>
            <a href={`${APP_URL}/register`}>
                <button className="bg-[#635bff] text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-[#4f46e5] transition-all shadow-2xl active:scale-95">
                    {t.ctaBtn}
                </button>
            </a>
            <p className="mt-6 text-white/50 text-sm font-medium">{t.ctaSub}</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-[#e3e8ee] py-12 text-center">
         <div className="container mx-auto px-6">
            <div className="flex items-center justify-center gap-2 mb-6"><img src="/favicon.png" alt="Glassy" className="w-6 h-6" /><span className="font-bold text-[#0a2540]">{t.logo}</span></div>
            <p className="text-xs text-[#697386] font-bold uppercase tracking-widest mb-2">{t.availableIn}</p>
            <div className="flex flex-wrap justify-center gap-2 mb-8">
                {locations.filter(l => l.slug !== ciudad).slice(0, 10).map(l => (
                    <Link key={l.slug} href={`/software-empresas-limpieza-${l.slug}`} className="text-[10px] font-bold text-[#697386] border border-[#e3e8ee] px-3 py-1 rounded-full hover:bg-[#f6f9fc] transition-all capitalize">{l.name}</Link>
                ))}
            </div>
            <p className="text-xs text-[#aab7c4] font-bold" dangerouslySetInnerHTML={{ __html: t.footerCopyright }} />
         </div>
      </footer>
    </div>
  );
}
