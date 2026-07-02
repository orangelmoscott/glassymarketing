import React from 'react';
import Link from 'next/link';
import { CheckCircle, ArrowRight, Zap, FileText, Shield, MapPin, Star, Sparkles, Map, Smartphone, BarChart3, ChevronRight } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import FaqAccordion from './FaqAccordion';

export const dynamic = 'force-static';

const APP_URL = 'https://app.glassy.es';

export const metadata = {
  title: 'Software para Limpieza de Cristales | Presupuestos, Rutas, Facturación | Glassy',
  description: 'Organiza tu empresa de limpieza de cristales con Glassy. Crea presupuestos, optimiza rutas, gestiona clientes y factura con VeriFactu desde un solo lugar.',
  alternates: {
    canonical: 'https://glassy.es/industrias/limpieza-cristales/',
  },
};

export default function LimpiezaCristalesPage() {
  const faqs = [
    {
      q: "¿Qué es un software para limpieza de cristales?",
      a: "Un software para limpieza de cristales es una plataforma que ayuda a los cristaleros a organizar su negocio: gestionar clientes, crear presupuestos, planificar rutas, facturar y cobrar desde un solo lugar."
    },
    {
      q: "¿Glassy funciona como app móvil para mi negocio de limpieza de cristales?",
      a: "Sí, Glassy es completamente accesible desde el móvil. Incluye una app específica para operarios en campo donde reciben rutas, toman fotos y firman digitalmente."
    },
    {
      q: "¿Puedo planificar rutas mientras estoy en la calle con Glassy?",
      a: "Sí, Glassy permite crear y modificar rutas desde la app móvil. Puedes añadir trabajos sobre la marcha y el sistema optimiza la ruta automáticamente."
    },
    {
      q: "¿Qué soporte incluye mi suscripción a Glassy?",
      a: "El soporte por email está incluido en todos los planes. El plan Business incluye soporte prioritario 24/7."
    },
    {
      q: "¿Tiene Glassy integraciones con otras herramientas?",
      a: "Glassy ofrece API e integraciones en el plan Business. Actualmente en desarrollo más integraciones con herramientas de contabilidad y gestión empresarial."
    },
    {
      q: "¿Glassy funciona para empresas de limpieza de cristales en toda España?",
      a: "Sí, Glassy está diseñado para cristaleros de toda España, con facturación adaptada a la normativa española (VeriFactu) y precios en euros."
    }
  ];

  const schemas = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://glassy.es/industrias/limpieza-cristales/",
        "url": "https://glassy.es/industrias/limpieza-cristales/",
        "name": "Software para Limpieza de Cristales | Glassy",
        "inLanguage": "es",
        "isPartOf": { "@id": "https://glassy.es/#website" },
        "datePublished": "2026-07-02",
        "dateModified": "2026-07-02"
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
      },
      {
        "@type": "SoftwareApplication",
        "name": "Glassy",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Web, iOS, Android",
        "description": "Software de gestión para empresas de limpieza de cristales",
        "url": "https://glassy.es",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "EUR",
          "description": "Prueba gratuita disponible"
        }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-[#f6f9fc] font-['Figtree'] text-[#0a2540] overflow-x-hidden selection:bg-indigo-100 selection:text-indigo-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />

      <Header />

      {/* Hero Section */}
      <section className="relative pt-48 pb-32 lg:pt-64 lg:pb-48 bg-white">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none overflow-hidden">
          <div className="absolute top-[-10%] right-[-10%] w-[800px] h-[800px] bg-indigo-50/50 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-50/50 rounded-full blur-[100px]" />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-[#635bff] text-xs font-bold uppercase tracking-widest">
              <Sparkles size={14} fill="currentColor" /> SOLUCIÓN VERTICAL PARA CRISTALEROS
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-[#0a2540] tracking-tight max-w-5xl mx-auto mb-10 leading-[1.05]">
            Software para <span className="text-[#635bff]">Limpieza de Cristales</span>
          </h1>

          <p className="text-xl md:text-2xl text-[#425466] max-w-3xl mx-auto mb-16 leading-relaxed font-medium">
            Organiza tu negocio de cristalero. Diseña presupuestos profesionales, optimiza rutas por zonas, coordina operarios y factura bajo la ley VeriFactu en España.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a href={`${APP_URL}/register`}>
              <button className="bg-[#635bff] text-white px-10 py-6 rounded-2xl font-bold text-lg hover:bg-[#0a2540] transition-all shadow-xl shadow-indigo-100 active:scale-95 flex items-center gap-3">
                Probar gratis 14 días <ArrowRight size={20} />
              </button>
            </a>
            <a href="#features-industry">
              <button className="bg-white text-[#0a2540] border border-[#e3e8ee] px-10 py-6 rounded-2xl font-bold text-lg hover:bg-[#f6f9fc] transition-all active:scale-95">
                Ver características
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-12 bg-[#f6f9fc] border-y border-[#e3e8ee]">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm font-bold text-[#697386] uppercase tracking-widest mb-6">Empresas de limpieza en España confían en Glassy</p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
            <span className="font-extrabold text-xl md:text-2xl tracking-tight text-[#0a2540]">ORM Cristales</span>
            <span className="font-extrabold text-xl md:text-2xl tracking-tight text-[#0a2540]">LimpiaVidrio Pro</span>
            <span className="font-extrabold text-xl md:text-2xl tracking-tight text-[#0a2540]">VidriosMadrid</span>
            <span className="font-extrabold text-xl md:text-2xl tracking-tight text-[#0a2540]">GlassClear</span>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features-industry" className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-24 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0a2540] mb-6">Todo lo que necesitas para tu negocio de limpieza de cristales</h2>
            <p className="text-xl text-[#697386] font-medium leading-relaxed">Olvídate del papel, los excels y las rutas desorganizadas. Controla tu negocio desde la oficina o la calle.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="bg-[#f6f9fc] p-10 rounded-3xl border border-[#e3e8ee] hover:border-[#635bff] transition-all group">
              <div className="w-14 h-14 bg-white text-[#635bff] rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform">
                <FileText size={24} />
              </div>
              <h3 className="text-xl font-bold text-[#0a2540] mb-4">Presupuestos profesionales</h3>
              <p className="text-[#697386] leading-relaxed font-medium">Crea presupuestos en segundos con partidas personalizadas de m² de cristal, alturas y tipos de vidrios. Envíalos por email o WhatsApp directamente.</p>
            </div>

            <div className="bg-[#f6f9fc] p-10 rounded-3xl border border-[#e3e8ee] hover:border-[#635bff] transition-all group">
              <div className="w-14 h-14 bg-white text-[#635bff] rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform">
                <Map size={24} />
              </div>
              <h3 className="text-xl font-bold text-[#0a2540] mb-4">Programación de rutas</h3>
              <p className="text-[#697386] leading-relaxed font-medium">Arrastra y organiza tus trabajos en un calendario visual integrado. Optimiza los trayectos diarios de tus vehículos para reducir tiempos de traslado.</p>
            </div>

            <div className="bg-[#f6f9fc] p-10 rounded-3xl border border-[#e3e8ee] hover:border-[#635bff] transition-all group">
              <div className="w-14 h-14 bg-white text-[#635bff] rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform">
                <Smartphone size={24} />
              </div>
              <h3 className="text-xl font-bold text-[#0a2540] mb-4">App para operarios</h3>
              <p className="text-[#697386] leading-relaxed font-medium">Tus cristaleros ven su ruta asignada en su móvil, pueden adjuntar fotos de antes y después, y solicitar la firma digital del cliente final al terminar.</p>
            </div>

            <div className="bg-[#f6f9fc] p-10 rounded-3xl border border-[#e3e8ee] hover:border-[#635bff] transition-all group">
              <div className="w-14 h-14 bg-white text-[#635bff] rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform">
                <Zap size={24} />
              </div>
              <h3 className="text-xl font-bold text-[#0a2540] mb-4">Facturación VeriFactu</h3>
              <p className="text-[#697386] leading-relaxed font-medium">Genera facturas legales a partir de presupuestos aceptados con un solo clic. Adaptado por completo al reglamento español de Hacienda para 2026.</p>
            </div>

            <div className="bg-[#f6f9fc] p-10 rounded-3xl border border-[#e3e8ee] hover:border-[#635bff] transition-all group">
              <div className="w-14 h-14 bg-white text-[#635bff] rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform">
                <BarChart3 size={24} />
              </div>
              <h3 className="text-xl font-bold text-[#0a2540] mb-4">Dashboard financiero</h3>
              <p className="text-[#697386] leading-relaxed font-medium">Visualiza las métricas clave de tu negocio. Analiza qué clientes o zonas de limpieza son más rentables y mantén control de los gastos del equipo.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Introducción / Explicación del Software */}
      <section className="py-24 bg-[#f6f9fc] border-t border-[#e3e8ee]">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0a2540] mb-8 text-center">¿Qué es un software para limpieza de cristales?</h2>
          <p className="text-[#697386] leading-relaxed text-lg mb-6">
            Es una herramienta digital de gestión de servicios diseñada para optimizar los procesos específicos de las empresas de lavado de vidrios y cristales. A diferencia de un CRM genérico, un software especializado como Glassy entiende que tus operarios se desplazan continuamente y que requieres programar visitas recurrentes (mensuales, quincenales, etc.) para mantener el brillo en los locales de tus clientes.
          </p>
          <p className="text-[#697386] leading-relaxed text-lg">
            Con Glassy puedes calcular rutas geográficas óptimas para tu flota, permitiéndote ahorrar hasta un 25% en gastos de combustible, coordinar equipos en tiempo real mediante notificaciones push y enviar facturas instantáneas conformes a Hacienda.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-[#0a2540] mb-6">Preguntas frecuentes</h2>
            <p className="text-lg text-[#697386] font-medium">Resolvemos tus dudas sobre el software para cristaleros.</p>
          </div>
          <FaqAccordion faqs={faqs} />
        </div>
      </section>

      {/* Recursos Gratuitos */}
      <section className="py-32 bg-[#f6f9fc] border-t border-[#e3e8ee]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-[#0a2540] mb-6">Recursos gratuitos para cristaleros</h2>
            <p className="text-lg text-[#697386] font-medium">Descarga material y guías útiles para profesionalizar tu negocio.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-2xl border border-[#e3e8ee] hover:shadow-lg transition-all text-center">
              <h3 className="font-bold text-[#0a2540] text-lg mb-3">Plantilla de Presupuesto</h3>
              <p className="text-[#697386] text-sm mb-6 leading-relaxed">Modelo profesional en PDF/Excel adaptado específicamente para servicios de limpieza de vidrios.</p>
              <a href="#" className="text-[#635bff] text-sm font-bold hover:underline flex justify-center items-center gap-1">
                Descargar plantilla <ArrowRight size={14} />
              </a>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-[#e3e8ee] hover:shadow-lg transition-all text-center">
              <h3 className="font-bold text-[#0a2540] text-lg mb-3">Guía de Precios 2026</h3>
              <p className="text-[#697386] text-sm mb-6 leading-relaxed">Descubre cuánto y cómo cobrar por la limpieza de cristales según altura, m² y nivel de dificultad.</p>
              <Link href="/blog/precios-limpieza-cristales-como-cobrar" className="text-[#635bff] text-sm font-bold hover:underline flex justify-center items-center gap-1">
                Leer guía <ArrowRight size={14} />
              </Link>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-[#e3e8ee] hover:shadow-lg transition-all text-center">
              <h3 className="font-bold text-[#0a2540] text-lg mb-3">Guion de Ventas (Canvassing)</h3>
              <p className="text-[#697386] text-sm mb-6 leading-relaxed">El guion comercial definitivo para captar comercios y oficinas a puerta fría de manera efectiva.</p>
              <Link href="/blog/guion-ventas-canvassing-cristaleros" className="text-[#635bff] text-sm font-bold hover:underline flex justify-center items-center gap-1">
                Leer guion <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-32 bg-[#0a2540] text-white text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-900/40 rounded-full blur-[160px] pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Lleva tu negocio al siguiente nivel</h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto mb-12 font-medium">Empieza tu prueba gratuita de 14 días. No requiere tarjeta y puedes cancelar cuando quieras.</p>
          <a href={`${APP_URL}/register`}>
            <button className="bg-[#635bff] text-white px-10 py-6 rounded-2xl font-bold text-lg hover:bg-indigo-500 transition-all shadow-xl shadow-indigo-600/20 active:scale-95">
              Registrar mi empresa en Glassy
            </button>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
