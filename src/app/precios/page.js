import React from 'react';
import Link from 'next/link';
import { CheckCircle, Globe, HelpCircle } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FaqAccordion from '../industrias/limpieza-cristales/FaqAccordion';

export const dynamic = 'force-static';

const APP_URL = 'https://app.glassy.es';

export const metadata = {
  title: 'Planes y Precios Escalables | Glassy',
  description: 'Encuentra el plan perfecto para digitalizar tu negocio de limpieza de cristales. Desde autónomos hasta empresas en crecimiento. Empieza gratis.',
  alternates: {
    canonical: 'https://glassy.es/precios/',
  },
};

export default function PreciosPage() {
  const plans = [
    {
      name: 'Autónomo',
      price: '29',
      desc: 'Esencial para profesionales independientes.',
      slug: 'starter',
      features: [
        'Hasta 10 clientes',
        '1 operario activo',
        'Rutas inteligentes',
        'Facturación básica',
        'Soporte por email',
      ],
    },
    {
      name: 'Pro',
      price: '49',
      desc: 'Potencia tu pequeña empresa.',
      slug: 'pro',
      featured: true,
      features: [
        'Hasta 100 clientes',
        '5 operarios activos',
        'Optimización de rutas',
        'Firma digital y fotos',
        'Dashboard financiero',
        'Facturación automatizada',
      ],
    },
    {
      name: 'Business',
      price: '99',
      desc: 'Escalabilidad sin límites.',
      slug: 'business',
      features: [
        'Clientes ilimitados',
        'Operarios ilimitados',
        'Logística avanzada',
        'API & Integraciones',
        'Soporte 24/7 prioritario',
        'White-label (próximamente)',
      ],
    },
  ];

  const faqs = [
    {
      q: "¿Hay algún compromiso de permanencia?",
      a: "No, la suscripción de Glassy es mensual o anual y puedes cancelarla en cualquier momento desde tu panel de configuración sin penalizaciones."
    },
    {
      q: "¿Cómo funciona la prueba gratuita de 14 días?",
      a: "Tienes acceso completo a todas las funcionalidades del plan que elijas durante 14 días. No se requiere tarjeta de crédito para registrarte."
    },
    {
      q: "¿Qué ocurre si supero el límite de clientes de mi plan?",
      a: "El sistema te avisará con anticipación y te ofrecerá la opción de actualizar tu suscripción al siguiente nivel. Nunca bloquearemos tu cuenta de forma imprevista."
    },
    {
      q: "¿Es segura la información de facturación y cobro?",
      a: "Completamente. Toda la pasarela de pago recurrente se gestiona a través de Stripe, que cuenta con certificación PCI-DSS nivel 1 (el estándar de seguridad bancaria más alto del mercado)."
    }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Glassy",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web, iOS, Android",
    "description": "Software de gestión para empresas de limpieza de cristales",
    "url": "https://glassy.es",
    "offers": plans.map(p => ({
      "@type": "Offer",
      "name": p.name,
      "price": p.price,
      "priceCurrency": "EUR",
      "priceValidUntil": "2026-12-31",
      "description": p.desc
    }))
  };

  return (
    <div className="min-h-screen bg-[#f6f9fc] font-['Figtree'] text-[#0a2540] overflow-x-hidden selection:bg-indigo-100 selection:text-indigo-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <Header />

      {/* Pricing Header */}
      <section className="relative pt-48 pb-16 bg-white text-center">
        <div className="container mx-auto px-6 relative z-10">
          <h1 className="text-5xl md:text-7xl font-extrabold text-[#0a2540] tracking-tight mb-6">
            Planes escalables para tu negocio
          </h1>
          <p className="text-xl text-[#697386] font-medium max-w-2xl mx-auto">
            Empieza con la prueba gratuita de 14 días. Escoge el plan que mejor se adapte al tamaño de tu empresa y paga solo por lo que necesitas.
          </p>
        </div>
      </section>

      {/* Pricing Cards Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, i) => (
              <div key={i} className={`p-12 rounded-[40px] border transition-all duration-500 flex flex-col ${
                plan.featured 
                ? 'bg-[#0a2540] border-[#0a2540] text-white shadow-2xl lg:-translate-y-6' 
                : 'bg-[#f6f9fc] border-[#e3e8ee] hover:border-[#635bff]'
              }`}>
                <div className="mb-10">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-2xl font-bold">{plan.name}</h3>
                    {plan.featured && (
                      <span className="bg-[#635bff] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                        Recomendado
                      </span>
                    )}
                  </div>
                  <p className={`text-sm font-medium ${plan.featured ? 'text-white/60' : 'text-[#697386]'}`}>{plan.desc}</p>
                </div>
                
                <div className="flex items-baseline gap-2 mb-12">
                  <span className="text-6xl font-bold tracking-tighter">{plan.price}€</span>
                  <span className={`text-lg font-bold ${plan.featured ? 'text-white/40' : 'text-[#697386]'}`}>/mes</span>
                </div>

                <a 
                  href={`${APP_URL}/register?plan=${plan.slug}`} 
                  className={`block w-full text-center py-5 rounded-2xl font-bold text-base mb-12 transition-all active:scale-95 ${
                    plan.featured ? 'bg-[#635bff] text-white shadow-xl shadow-indigo-600/20 hover:bg-indigo-500' : 'bg-white text-[#0a2540] border border-[#e3e8ee] hover:bg-[#f6f9fc]'
                  }`}
                >
                  Probar ahora gratis
                </a>

                <ul className="space-y-5 flex-1">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-4">
                      <CheckCircle size={18} className={plan.featured ? 'text-[#635bff]' : 'text-emerald-500'} />
                      <span className={`text-sm font-bold ${plan.featured ? 'text-white/80' : 'text-[#425466]'}`}>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 bg-[#f6f9fc] border-t border-[#e3e8ee]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-[#0a2540] mb-6">Preguntas frecuentes sobre precios</h2>
            <p className="text-lg text-[#697386] font-medium">Todo lo que necesitas saber sobre las suscripciones y facturación.</p>
          </div>
          <FaqAccordion faqs={faqs} />
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-32 bg-[#0a2540] text-white text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-900/40 rounded-full blur-[160px] pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Comienza a brillar con Glassy</h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto mb-12 font-medium">Únete a cientos de cristaleros en España que ya digitalizan sus negocios con nosotros.</p>
          <a href={`${APP_URL}/register`}>
            <button className="bg-[#635bff] text-white px-10 py-6 rounded-2xl font-bold text-lg hover:bg-indigo-500 transition-all shadow-xl shadow-indigo-600/20 active:scale-95">
              Crear cuenta gratuita
            </button>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
