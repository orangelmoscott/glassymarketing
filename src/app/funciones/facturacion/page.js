import React from 'react';
import Link from 'next/link';
import { ArrowRight, FileText, CheckCircle, Sparkles, Shield, Receipt } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import FaqAccordion from '../../industrias/limpieza-cristales/FaqAccordion';

export const dynamic = 'force-static';

const APP_URL = 'https://app.glassy.es';

export const metadata = {
  title: 'Facturación VeriFactu para Cristaleros | Glassy',
  description: 'Genera facturas legales conforme al sistema VeriFactu y la ley antifraude en España. Totalmente adaptado para empresas de limpieza.',
  alternates: {
    canonical: 'https://glassy.es/funciones/facturacion/',
  },
};

export default function FacturacionPage() {
  const faqs = [
    {
      q: "¿Qué es el sistema VeriFactu?",
      a: "Es la normativa de Hacienda en España que exige enviar los registros de facturación de forma automatizada y encadenada en tiempo real para evitar fraudes fiscales. Glassy está totalmente adaptado a este reglamento."
    },
    {
      q: "¿Puedo facturar servicios de limpieza de cristales recurrentes de forma masiva?",
      a: "Sí. Si tienes clientes a los que les limpias las ventanas cada mes, puedes facturarlos a todos juntos con un solo clic a final de mes, automatizando el envío por correo electrónico."
    },
    {
      q: "¿Se integra Glassy con Stripe para cobros con tarjeta?",
      a: "Sí, puedes habilitar los cobros automáticos mediante Stripe. El cliente recibe la factura por email con un enlace seguro para realizar el pago con tarjeta o transferencia."
    }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://glassy.es/funciones/facturacion/",
        "url": "https://glassy.es/funciones/facturacion/",
        "name": "Facturación VeriFactu para Cristaleros | Glassy",
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
            <Sparkles size={14} /> SEGURIDAD Y LEY
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight max-w-4xl mx-auto mb-8">
            Facturación VeriFactu para cristaleros
          </h1>
          <p className="text-xl text-[#425466] max-w-2xl mx-auto mb-12 font-medium">
            Factura sin preocupaciones y de manera legal. Glassy genera facturas en segundos adaptadas a las normativas de Hacienda en España para 2026.
          </p>
          <a href={`${APP_URL}/register`}>
            <button className="bg-[#635bff] text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-[#0a2540] transition-all shadow-xl shadow-indigo-100 active:scale-95 flex items-center gap-3 mx-auto">
              Probar facturación gratis <ArrowRight size={20} />
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
                Facturas emitidas y cobradas en el menor tiempo
              </h2>
              <p className="text-[#697386] leading-relaxed mb-6 font-medium">
                Conectar tus servicios realizados con tu facturación nunca fue tan fácil. Cuando tus cristaleros terminen una visita, la plataforma genera de manera automática el borrador de la factura. Evita retrasos a fin de mes y mantén un control absoluto de tus cobros vencidos o pendientes.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <CheckCircle size={18} className="text-emerald-500" />
                  <span className="text-sm font-bold text-[#425466]">Totalmente adaptado a VeriFactu y la ley Antifraude.</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle size={18} className="text-emerald-500" />
                  <span className="text-sm font-bold text-[#425466]">Cobros rápidos mediante enlaces seguros con tarjeta.</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle size={18} className="text-emerald-500" />
                  <span className="text-sm font-bold text-[#425466]">Facturación recurrente masiva para abonos mensuales.</span>
                </li>
              </ul>
            </div>
            {/* Visual Mockup */}
            <div className="bg-[#f6f9fc] border border-[#e3e8ee] rounded-[32px] p-8 md:p-12 shadow-inner">
              <div className="bg-white rounded-2xl p-6 border border-[#e3e8ee] shadow-lg">
                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-center gap-2 text-[#0a2540]">
                    <Receipt size={18} />
                    <span className="text-sm font-bold">FACTURA F-2026-004</span>
                  </div>
                  <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full">Enviada</span>
                </div>
                <div className="space-y-3 text-xs mb-6">
                  <div className="flex justify-between text-[#697386]">
                    <span>Fecha Emisión:</span>
                    <span className="font-bold">02/07/2026</span>
                  </div>
                  <div className="flex justify-between text-[#697386]">
                    <span>Cliente:</span>
                    <span className="font-bold">Comercio Paseo del Prado</span>
                  </div>
                </div>
                <div className="border-t border-[#f6f9fc] pt-4 flex justify-between items-center">
                  <span className="font-bold text-[#0a2540]">Base imponible:</span>
                  <span className="font-semibold text-sm">80,00 €</span>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <span className="font-bold text-[#0a2540]">IVA 21%:</span>
                  <span className="font-semibold text-sm">16,80 €</span>
                </div>
                <div className="flex justify-between items-center mt-3 pt-3 border-t border-[#f6f9fc]">
                  <span className="font-bold text-lg text-[#0a2540]">Total Facturado</span>
                  <span className="font-extrabold text-2xl text-[#635bff]">96,80 €</span>
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
            Por qué es importante para tu negocio
          </h2>
          <p className="text-lg text-[#697386] leading-relaxed mb-6 font-medium">
            A partir de 2026, Hacienda aplicará normativas rigurosas con multas severas a los negocios que no utilicen sistemas de facturación homologados (VeriFactu). Glassy te da la tranquilidad de que cada factura emitida cumple al 100% con los requisitos legales en España, automatizando el encadenamiento de registros.
          </p>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-32 bg-white border-t border-[#e3e8ee]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-[#0a2540] mb-6">Preguntas frecuentes</h2>
            <p className="text-lg text-[#697386] font-medium">Resolvemos tus dudas sobre facturación.</p>
          </div>
          <FaqAccordion faqs={faqs} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-[#0a2540] text-white text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-900/40 rounded-full blur-[160px] pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Consigue la tranquilidad fiscal con Glassy</h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto mb-12 font-medium">Prueba la plataforma gratis durante 14 días. Genera facturas profesionales sin fallos.</p>
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
