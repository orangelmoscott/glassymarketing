import React from 'react';
import Link from 'next/link';
import { ArrowRight, Smartphone, CheckCircle, Sparkles, Navigation, Camera, Edit } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import FaqAccordion from '../../industrias/limpieza-cristales/FaqAccordion';

export const dynamic = 'force-static';

const APP_URL = 'https://app.glassy.es';

export const metadata = {
  title: 'App para Operarios de Limpieza de Cristales | Glassy',
  description: 'Proporciona una aplicación móvil a tus cristaleros en campo. Reciben su ruta optimizada, adjuntan fotos de los trabajos y firman en el móvil.',
  alternates: {
    canonical: 'https://glassy.es/funciones/operarios/',
  },
};

export default function OperariosPage() {
  const faqs = [
    {
      q: "¿La aplicación de operarios funciona sin conexión a Internet?",
      a: "Sí. La app permite a los operarios ver la ruta cargada previamente y registrar las firmas y fotos del trabajo incluso si están en sótanos o zonas sin cobertura. Los datos se sincronizan al recuperar la conexión."
    },
    {
      q: "¿Tienen los operarios acceso a los datos de facturación de la empresa?",
      a: "No. Glassy tiene un sistema de roles y permisos. El rol 'operario/cristalero' solo permite visualizar la ruta diaria asignada, notas de trabajo, firmas y subir fotos. No pueden ver datos contables ni financieros."
    },
    {
      q: "¿La app de operarios está disponible en Android e iOS?",
      a: "Sí. Los operarios pueden acceder a través de la aplicación móvil compatible con dispositivos Android y iPhone."
    }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://glassy.es/funciones/operarios/",
        "url": "https://glassy.es/funciones/operarios/",
        "name": "App para Operarios de Limpieza de Cristales | Glassy",
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
            <Sparkles size={14} /> EQUIPO EN CAMPO
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight max-w-4xl mx-auto mb-8">
            App móvil para operarios de limpieza
          </h1>
          <p className="text-xl text-[#425466] max-w-2xl mx-auto mb-12 font-medium">
            Conecta la oficina con el equipo de calle. Tus cristaleros reciben rutas de trabajo, instrucciones especiales, adjuntan firmas de entrega y fotos de antes/después.
          </p>
          <a href={`${APP_URL}/register`}>
            <button className="bg-[#635bff] text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-[#0a2540] transition-all shadow-xl shadow-indigo-100 active:scale-95 flex items-center gap-3 mx-auto">
              Empezar gratis <ArrowRight size={20} />
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
                El trabajo coordinado de tus operarios al instante
              </h2>
              <p className="text-[#697386] leading-relaxed mb-6 font-medium">
                Elimina las hojas de trabajo impresas que se pierden o se ensucian con el agua. Tus operarios acceden desde su teléfono móvil a su panel de Glassy. Desde allí pueden ver el orden de los edificios a limpiar, navegar con el GPS, subir fotos del estado de los vidrios y confirmar el trabajo con la firma del cliente en la pantalla.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <CheckCircle size={18} className="text-emerald-500" />
                  <span className="text-sm font-bold text-[#425466]">Indicación del recorrido del operario paso a paso.</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle size={18} className="text-emerald-500" />
                  <span className="text-sm font-bold text-[#425466]">Captura de fotos para justificar el resultado del lavado.</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle size={18} className="text-emerald-500" />
                  <span className="text-sm font-bold text-[#425466]">Control de firmas digitales sin usar papel.</span>
                </li>
              </ul>
            </div>
            {/* Visual Mockup */}
            <div className="bg-[#f6f9fc] border border-[#e3e8ee] rounded-[32px] p-8 md:p-12 shadow-inner flex justify-center">
              <div className="bg-white rounded-3xl border border-[#e3e8ee] w-64 h-[420px] shadow-2xl p-4 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-center pb-3 border-b border-[#f6f9fc] mb-4">
                    <span className="text-[10px] font-bold text-[#697386]">TRABAJO EN CURSO</span>
                    <span className="w-2.5 h-2.5 bg-indigo-500 rounded-full animate-pulse"></span>
                  </div>
                  <h4 className="font-bold text-xs text-[#0a2540] mb-1">Local Comercial Gran Vía</h4>
                  <p className="text-[10px] text-[#697386] mb-4">Limpieza cristales y marcos</p>
                  <div className="space-y-2">
                    <button className="w-full py-2 bg-[#f6f9fc] text-[10px] text-[#635bff] border border-[#e3e8ee] rounded-lg font-bold flex items-center justify-center gap-1">
                      <Camera size={12} /> Adjuntar Foto
                    </button>
                    <button className="w-full py-2 bg-[#f6f9fc] text-[10px] text-[#635bff] border border-[#e3e8ee] rounded-lg font-bold flex items-center justify-center gap-1">
                      <Edit size={12} /> Solicitar Firma
                    </button>
                  </div>
                </div>
                <button className="w-full py-3 bg-[#635bff] text-white text-xs rounded-xl font-bold">
                  Completar Trabajo
                </button>
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
            Tener pruebas fotográficas y firmas digitales de tus servicios te protege frente a reclamaciones de clientes y agiliza el cobro. Además, mejora drásticamente el control sobre tus operarios en la calle, asegurándote de que los trabajos se completan en la hora acordada y con los estándares de calidad que definas.
          </p>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-32 bg-white border-t border-[#e3e8ee]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-[#0a2540] mb-6">Preguntas frecuentes</h2>
            <p className="text-lg text-[#697386] font-medium">Resolvemos tus dudas sobre la app de operarios.</p>
          </div>
          <FaqAccordion faqs={faqs} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-[#0a2540] text-white text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-900/40 rounded-full blur-[160px] pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Equipa a tu equipo con lo mejor</h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto mb-12 font-medium">Prueba la plataforma gratis durante 14 días. Empieza a coordinar a tus operarios digitalmente.</p>
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
