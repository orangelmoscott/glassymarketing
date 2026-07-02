import React from 'react';
import Link from 'next/link';
import { ArrowRight, FileText, CheckCircle, Sparkles, Shield, Award } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import FaqAccordion from '../../industrias/limpieza-cristales/FaqAccordion';

export const dynamic = 'force-static';

const APP_URL = 'https://app.glassy.es';

export const metadata = {
  title: 'Software de Presupuestos para Cristaleros | Glassy',
  description: 'Crea presupuestos de limpieza de cristales profesionales en segundos. Personaliza m², alturas y envía al instante por WhatsApp o email.',
  alternates: {
    canonical: 'https://glassy.es/funciones/presupuestos/',
  },
};

export default function PresupuestosPage() {
  const faqs = [
    {
      q: "¿Cómo se calculan las tarifas en los presupuestos de Glassy?",
      a: "Puedes configurar tus propias tarifas por metros cuadrados de cristal, por tipo de ventana (corredera, fija, escaparate) o añadir costes adicionales como altura o alquiler de elevadores."
    },
    {
      q: "¿Los clientes pueden firmar o aceptar el presupuesto online?",
      a: "Sí. Cuando envías el presupuesto por correo electrónico o WhatsApp, el cliente recibe un enlace donde puede revisarlo y firmarlo digitalmente de forma instantánea."
    },
    {
      q: "¿Es posible convertir un presupuesto aceptado en factura?",
      a: "Por supuesto. Una vez que el cliente acepta el presupuesto, puedes convertirlo en una orden de trabajo y luego en factura con un solo clic, sin escribir los datos de nuevo."
    }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://glassy.es/funciones/presupuestos/",
        "url": "https://glassy.es/funciones/presupuestos/",
        "name": "Software de Presupuestos para Cristaleros | Glassy",
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
            <Sparkles size={14} /> EFICIENCIA EN VENTAS
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight max-w-4xl mx-auto mb-8">
            Software de presupuestos para cristaleros
          </h1>
          <p className="text-xl text-[#425466] max-w-2xl mx-auto mb-12 font-medium">
            Elabora cotizaciones profesionales en segundos para servicios residenciales o comerciales. Cierra más ventas enviando las propuestas directamente por WhatsApp.
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
                Crea propuestas impecables y claras para tus clientes
              </h2>
              <p className="text-[#697386] leading-relaxed mb-6 font-medium">
                Se acabó calcular precios a mano en libretas o tener plantillas Word desordenadas. Con el software de presupuestos de Glassy, introduces las medidas, seleccionas el tipo de servicio (lavado estándar, limpieza de obra, desincrustación) y la plataforma genera un PDF elegante listo para enviar.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <CheckCircle size={18} className="text-emerald-500" />
                  <span className="text-sm font-bold text-[#425466]">Cálculo instantáneo por m² o unidad de vidrio.</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle size={18} className="text-emerald-500" />
                  <span className="text-sm font-bold text-[#425466]">Envío con un clic mediante enlace web dinámico.</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle size={18} className="text-emerald-500" />
                  <span className="text-sm font-bold text-[#425466]">Firma digital para aceptación en el acto.</span>
                </li>
              </ul>
            </div>
            {/* Visual Mockup */}
            <div className="bg-[#f6f9fc] border border-[#e3e8ee] rounded-[32px] p-8 md:p-12 shadow-inner">
              <div className="bg-white rounded-2xl p-6 border border-[#e3e8ee] shadow-lg">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-xs font-bold text-[#697386]">PRESUPUESTO #1084</span>
                  <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full">Borrador</span>
                </div>
                <div className="space-y-4 mb-6">
                  <div className="border-b border-[#f6f9fc] pb-3 flex justify-between text-sm">
                    <span className="font-semibold text-[#0a2540]">Limpieza cristales (Comercio)</span>
                    <span className="font-bold text-[#635bff]">120,00 €</span>
                  </div>
                  <div className="border-b border-[#f6f9fc] pb-3 flex justify-between text-sm">
                    <span className="font-semibold text-[#0a2540]">Dificultad por altura (Piso 2)</span>
                    <span className="font-bold text-[#635bff]">35,00 €</span>
                  </div>
                </div>
                <div className="flex justify-between items-center pt-2">
                  <span className="font-bold text-lg text-[#0a2540]">Total</span>
                  <span className="font-extrabold text-2xl text-[#635bff]">155,00 €</span>
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
            ¿Por qué es vital usar un software para tus cotizaciones?
          </h2>
          <p className="text-lg text-[#697386] leading-relaxed mb-6 font-medium">
            Los clientes comerciales y particulares valoran la velocidad y la formalidad. Al enviar un presupuesto profesional con desglose de precios al instante, aumentas tus probabilidades de cierre en un 35% en comparación con la competencia tradicional. Además, Reduces errores de cálculo humanos y mantienes un registro centralizado.
          </p>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-32 bg-white border-t border-[#e3e8ee]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-[#0a2540] mb-6">Preguntas frecuentes</h2>
            <p className="text-lg text-[#697386] font-medium">Resolvemos tus dudas sobre el módulo de presupuestos.</p>
          </div>
          <FaqAccordion faqs={faqs} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-[#0a2540] text-white text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-900/40 rounded-full blur-[160px] pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Comienza a presupuestar gratis hoy</h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto mb-12 font-medium">Prueba Glassy 14 días. Configura tus precios y envía tu primer presupuesto en minutos.</p>
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
