import React from 'react';
import Link from 'next/link';
import { ArrowRight, Map, CheckCircle, Sparkles, Navigation, Clock } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import FaqAccordion from '../../industrias/limpieza-cristales/FaqAccordion';

export const dynamic = 'force-static';

const APP_URL = 'https://app.glassy.es';

export const metadata = {
  title: 'Optimización de Rutas para Limpieza de Cristales | Glassy',
  description: 'Planifica y optimiza las rutas geográficas de tus cristaleros. Ahorra hasta un 25% en tiempo de trayecto y combustible.',
  alternates: {
    canonical: 'https://glassy.es/funciones/rutas/',
  },
};

export default function RutasPage() {
  const faqs = [
    {
      q: "¿Cómo funciona la optimización de rutas?",
      a: "El algoritmo integrado calcula de forma inteligente el mejor orden para las paradas del día, basándose en la ubicación de cada cliente y evitando desvíos innecesarios."
    },
    {
      q: "¿Los operarios ven las rutas en tiempo real?",
      a: "Sí, a través de la aplicación de operarios en su móvil. Tienen un listado interactivo y acceso a las aplicaciones de mapas (como Google Maps o Waze) para iniciar la navegación."
    },
    {
      q: "¿Se pueden añadir paradas imprevistas sobre la marcha?",
      a: "Sí, puedes asignar un servicio urgente a un operario desde el panel central. El operario recibirá una notificación y su lista de ruta se actualizará automáticamente."
    }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://glassy.es/funciones/rutas/",
        "url": "https://glassy.es/funciones/rutas/",
        "name": "Optimización de Rutas para Limpieza de Cristales | Glassy",
        "isPartOf": { "@id": "https://glassy.es/#website" }
      },
      {
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
          "@type": "Question",
          "name": faq.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.a
          }
        }))
      }
    ]
  };

  return (
    <div className="min-h-screen bg-[#f6f9fc] font-['Figtree'] text-[#0a2540] overflow-x-hidden selection:bg-indigo-100 selection:text-indigo-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <Header />

      {/* Hero Section */}
      <section className="relative pt-48 pb-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-[#635bff] text-xs font-bold uppercase tracking-widest mb-6">
            <Sparkles size={14} /> LOGÍSTICA INTELIGENTE
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight max-w-4xl mx-auto mb-8">
            Optimización de rutas para limpieza de cristales
          </h1>
          <p className="text-xl text-[#425466] max-w-2xl mx-auto mb-12 font-medium">
            Planifica el día de tus operarios minimizando los trayectos. Ahorra tiempo, reduce el gasto en gasolina y atiende más clientes por jornada.
          </p>
          <a href={`${APP_URL}/register`}>
            <button className="bg-[#635bff] text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-[#0a2540] transition-all shadow-xl shadow-indigo-100 active:scale-95 flex items-center gap-3 mx-auto">
              Empezar a optimizar <ArrowRight size={20} />
            </button>
          </a>
        </div>
      </section>

      {/* Main Benefit */}
      <section className="py-24 bg-white border-t border-[#e3e8ee]">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0a2540] mb-6 leading-tight">
                Reduce las distancias y multiplica la productividad
              </h2>
              <p className="text-[#697386] leading-relaxed mb-6 font-medium">
                Planificar las rutas a mano es una tarea lenta y poco eficiente. Glassy mapea las direcciones de tus clientes y diseña las rutas diarias automáticamente. Tus operarios sabrán exactamente a dónde ir a continuación sin perderse en el tráfico de la ciudad.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <CheckCircle size={18} className="text-emerald-500" />
                  <span className="text-sm font-bold text-[#425466]">Cálculo geográfico inteligente sobre mapas.</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle size={18} className="text-emerald-500" />
                  <span className="text-sm font-bold text-[#425466]">Calendario y asignación visual mediante arrastrar y soltar.</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle size={18} className="text-emerald-500" />
                  <span className="text-sm font-bold text-[#425466]">Reducción estimada del 20-25% en consumo de combustible.</span>
                </li>
              </ul>
            </div>
            {/* Visual Mockup */}
            <div className="bg-[#f6f9fc] border border-[#e3e8ee] rounded-[32px] p-8 md:p-12 shadow-inner">
              <div className="bg-white rounded-2xl p-6 border border-[#e3e8ee] shadow-lg relative overflow-hidden">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-xs font-bold text-[#697386]">RUTA DIARIA - OPERARIO A</span>
                  <span className="bg-indigo-100 text-indigo-800 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                    <Clock size={12} /> 6,2 km totales
                  </span>
                </div>
                <div className="space-y-4">
                  <div className="flex gap-4 items-center">
                    <span className="w-8 h-8 rounded-full bg-[#635bff] text-white flex items-center justify-center font-bold text-xs">1</span>
                    <div>
                      <h4 className="text-sm font-bold text-[#0a2540]">ORM Cristales (9:00)</h4>
                      <p className="text-xs text-[#697386]">Calle de Alcalá, 120</p>
                    </div>
                  </div>
                  <div className="w-0.5 h-6 bg-[#635bff]/30 ml-4"></div>
                  <div className="flex gap-4 items-center">
                    <span className="w-8 h-8 rounded-full bg-[#635bff] text-white flex items-center justify-center font-bold text-xs">2</span>
                    <div>
                      <h4 className="text-sm font-bold text-[#0a2540]">Restaurante Brasería (11:30)</h4>
                      <p className="text-xs text-[#697386]">Calle de Serrano, 45</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why it Matters */}
      <section className="py-24 bg-[#f6f9fc] border-t border-[#e3e8ee]">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0a2540] mb-8">
            ¿Por qué es importante para tu negocio?
          </h2>
          <p className="text-lg text-[#697386] leading-relaxed mb-6 font-medium">
            Cada kilómetro que tus cristaleros conducen sin estar lavando ventanas es dinero perdido. Al optimizar las trayectorias diarias, puedes añadir entre uno y dos servicios extra por operario al día. Eso significa aumentar tus ingresos mensuales sin necesidad de contratar más personal.
          </p>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-32 bg-white border-t border-[#e3e8ee]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-[#0a2540] mb-6">Preguntas frecuentes</h2>
            <p className="text-lg text-[#697386] font-medium">Resolvemos tus dudas sobre el módulo de rutas.</p>
          </div>
          <FaqAccordion faqs={faqs} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-[#0a2540] text-white text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-900/40 rounded-full blur-[160px] pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Comienza a organizar rutas con Glassy</h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto mb-12 font-medium">Prueba la plataforma gratis durante 14 días. Sube tus clientes y descubre la diferencia.</p>
          <a href={`${APP_URL}/register`}>
            <button className="bg-[#635bff] text-white px-10 py-6 rounded-2xl font-bold text-lg hover:bg-indigo-500 transition-all shadow-xl shadow-indigo-600/20 active:scale-95">
              Probar gratis
            </button>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
