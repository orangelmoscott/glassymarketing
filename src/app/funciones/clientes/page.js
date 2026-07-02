import React from 'react';
import Link from 'next/link';
import { ArrowRight, Users, CheckCircle, Sparkles, FolderOpen, Mail } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import FaqAccordion from '../../industrias/limpieza-cristales/FaqAccordion';

export const dynamic = 'force-static';

const APP_URL = 'https://app.glassy.es';

export const metadata = {
  title: 'CRM para Empresas de Limpieza de Cristales | Glassy',
  description: 'Gestiona la información de tus clientes residenciales o comerciales. Historial de limpiezas, fichas de propiedad, contactos y más.',
  alternates: {
    canonical: 'https://glassy.es/funciones/clientes/',
  },
};

export default function ClientesPage() {
  const faqs = [
    {
      q: "¿Puedo importar mis clientes desde un archivo Excel?",
      a: "Sí. Ofrecemos una herramienta de importación rápida para que puedas cargar toda tu base de datos de clientes actual de golpe sin escribir una a una las fichas."
    },
    {
      q: "¿Cómo se gestionan las múltiples propiedades de un solo cliente?",
      a: "El CRM de Glassy está preparado para cuentas comerciales o franquicias. Puedes asignar múltiples direcciones físicas (propiedades) a un único cliente facturable."
    },
    {
      q: "¿Queda registrado qué operario realizó la limpieza en cada ficha?",
      a: "Sí. Cada trabajo completado se registra con fecha, operario asignado, firma digital del cliente y las fotos del resultado, creando un expediente histórico completo."
    }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://glassy.es/funciones/clientes/",
        "url": "https://glassy.es/funciones/clientes/",
        "name": "CRM para Empresas de Limpieza de Cristales | Glassy",
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
            <Sparkles size={14} /> RELACIÓN CON EL CLIENTE
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight max-w-4xl mx-auto mb-8">
            CRM para empresas de limpieza de cristales
          </h1>
          <p className="text-xl text-[#425466] max-w-2xl mx-auto mb-12 font-medium">
            Mantén organizada la información de tus clientes en un solo lugar. Conoce las especificaciones de cada cristal, el historial de visitas y los datos de contacto clave.
          </p>
          <a href={`${APP_URL}/register`}>
            <button className="bg-[#635bff] text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-[#0a2540] transition-all shadow-xl shadow-indigo-100 active:scale-95 flex items-center gap-3 mx-auto">
              Probar CRM gratis <ArrowRight size={20} />
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
                Control absoluto sobre las fichas y el historial de tus clientes
              </h2>
              <p className="text-[#697386] leading-relaxed mb-6 font-medium">
                No vuelvas a olvidar qué tarifas habías pactado con un cliente o cuándo fue la última vez que limpiaste sus oficinas. El CRM verticalizado de Glassy registra todos los presupuestos, facturas, asignaciones de operarios, notas de acceso (por ejemplo, dónde están las llaves o si necesitan escaleras) de manera visual y clara.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <CheckCircle size={18} className="text-emerald-500" />
                  <span className="text-sm font-bold text-[#425466]">Historial cronológico completo de trabajos realizados.</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle size={18} className="text-emerald-500" />
                  <span className="text-sm font-bold text-[#425466]">Notas de propiedad específicas para los operarios.</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle size={18} className="text-emerald-500" />
                  <span className="text-sm font-bold text-[#425466]">Gestión multi-propiedad para administradores de fincas.</span>
                </li>
              </ul>
            </div>
            {/* Visual Mockup */}
            <div className="bg-[#f6f9fc] border border-[#e3e8ee] rounded-[32px] p-8 md:p-12 shadow-inner">
              <div className="bg-white rounded-2xl p-6 border border-[#e3e8ee] shadow-lg text-sm">
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#f6f9fc]">
                  <div className="w-10 h-10 bg-indigo-50 text-[#635bff] rounded-full flex items-center justify-center font-bold">
                    CP
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0a2540]">Clínica Dental Pozuelo</h4>
                    <p className="text-xs text-[#697386]">info@clinicapozuelo.com</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="bg-[#f6f9fc] p-3 rounded-lg flex items-center justify-between">
                    <span className="font-semibold text-xs">Propiedad principal:</span>
                    <span className="text-xs font-bold text-[#0a2540]">Av. de Europa, 12, Pozuelo</span>
                  </div>
                  <div className="bg-[#f6f9fc] p-3 rounded-lg flex items-center justify-between">
                    <span className="font-semibold text-xs">Último lavado:</span>
                    <span className="text-xs font-bold text-emerald-600">Completado (28/06/2026)</span>
                  </div>
                  <div className="bg-[#f6f9fc] p-3 rounded-lg flex items-center justify-between">
                    <span className="font-semibold text-xs">Nota de operario:</span>
                    <span className="text-xs font-bold text-[#635bff]">Llevar pértiga de 6 metros</span>
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
            La retención de clientes es la clave para la rentabilidad de las empresas de limpieza. Al mantener un perfil de cliente organizado, puedes predecir cuándo necesitan la siguiente limpieza, recordar sus requisitos especiales y ofrecer un servicio impecable y personalizado que evite que busquen otras opciones.
          </p>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-32 bg-white border-t border-[#e3e8ee]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-[#0a2540] mb-6">Preguntas frecuentes</h2>
            <p className="text-lg text-[#697386] font-medium">Resolvemos tus dudas sobre el CRM de Glassy.</p>
          </div>
          <FaqAccordion faqs={faqs} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-[#0a2540] text-white text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-900/40 rounded-full blur-[160px] pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Digitaliza la base de datos de tu empresa</h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto mb-12 font-medium">Prueba la plataforma gratis durante 14 días. Importa tus clientes y pon orden hoy mismo.</p>
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
