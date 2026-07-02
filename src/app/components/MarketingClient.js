'use client';

import { 
  CheckCircle, ArrowRight, Zap, FileText, Shield, 
  Smartphone, BarChart3, ChevronRight, Sparkles, Map
} from 'lucide-react';
import { motion } from 'framer-motion';
import Header from './Header';
import Footer from './Footer';

const APP_URL = 'https://app.glassy.es';

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

export default function MarketingClient() {
  return (
    <div className="min-h-screen bg-[#f6f9fc] font-['Figtree'] text-[#0a2540] overflow-x-hidden selection:bg-indigo-100 selection:text-indigo-900">
      
      {/* ─── Navigation ─── */}
      <Header />

      {/* ─── Hero Section ─── */}
      <section className="relative pt-48 pb-32 lg:pt-64 lg:pb-48 bg-white">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none overflow-hidden">
            <div className="absolute top-[-10%] right-[-10%] w-[800px] h-[800px] bg-indigo-50/50 rounded-full blur-[120px]" />
            <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-50/50 rounded-full blur-[100px]" />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-[#635bff] text-xs font-bold uppercase tracking-widest">
              <Sparkles size={14} fill="currentColor" /> EL ESTÁNDAR PARA CRISTALEROS PROFESIONALES
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-[#0a2540] tracking-tight max-w-5xl mx-auto mb-10 leading-[1.05]"
          >
            El software definitivo para <span className="text-[#635bff]">cristaleros</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-[#425466] max-w-3xl mx-auto mb-16 leading-relaxed font-medium"
          >
            Optimiza tus rutas diarias, automatiza presupuestos y facturación, y gestiona a tu equipo de limpieza de cristales en tiempo real.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <a href={`${APP_URL}/register`}>
              <button className="bg-[#635bff] text-white px-10 py-6 rounded-2xl font-bold text-lg hover:bg-[#0a2540] transition-all shadow-xl shadow-indigo-100 active:scale-95 flex items-center gap-3">
                Probar gratis 14 días <ArrowRight size={20} />
              </button>
            </a>
            <a href="#features">
              <button className="bg-white text-[#0a2540] border border-[#e3e8ee] px-10 py-6 rounded-2xl font-bold text-lg hover:bg-[#f6f9fc] transition-all active:scale-95">
                Ver funcionalidades
              </button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* ─── Features ─── */}
      <section id="features" className="py-32 bg-[#f6f9fc]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-24 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0a2540] mb-6">Todo lo que necesitas para dominar tu mercado</h2>
            <p className="text-xl text-[#697386] font-medium leading-relaxed italic">Construido específicamente para las necesidades reales de los cristaleros en España.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              { icon: <Map />, title: 'Logística de Precisión', desc: 'Optimiza tus rutas diarias para ahorrar combustible y tiempo.', link: '/funciones/rutas' },
              { icon: <FileText />, title: 'Facturas VeriFactu', desc: 'Genera facturas legales en segundos, listas para Hacienda 2026.', link: '/funciones/facturacion' },
              { icon: <Smartphone />, title: 'App para Operarios', desc: 'Tus cristaleros reciben su ruta, reportan firmas y fotos al instante.', link: '/funciones/operarios' },
              { icon: <Zap />, title: 'Automatización Inteligente', desc: 'Reprograma servicios recurrentes de forma automática.', link: '/funciones/presupuestos' },
              { icon: <Shield />, title: 'Seguridad Total', desc: 'Tus datos están protegidos y disponibles las 24 horas del día.', link: '/funciones/clientes' },
              { icon: <BarChart3 />, title: 'Métricas de Negocio', desc: 'Conoce tu rentabilidad real por cliente y operario.', link: '/funciones/clientes' },
            ].map((f, i) => (
              <a href={f.link} key={i} className="bg-white p-10 rounded-3xl border border-[#e3e8ee] hover:border-[#635bff] transition-all hover:shadow-xl hover:shadow-indigo-100/20 group text-left block">
                <div className="w-14 h-14 bg-indigo-50 text-[#635bff] rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  {f.icon}
                </div>
                <h3 className="text-xl font-bold text-[#0a2540] mb-4">{f.title}</h3>
                <p className="text-[#697386] leading-relaxed font-medium mb-4">{f.desc}</p>
                <span className="text-sm font-bold text-[#635bff] flex items-center gap-1 group-hover:gap-2 transition-all">
                  Saber más <ChevronRight size={14} />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Pricing ─── */}
      <section id="pricing" className="py-40 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-bold text-[#0a2540] mb-6">Planes escalables</h2>
            <p className="text-xl text-[#697386] font-medium">Empieza gratis y paga solo cuando crezcas.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, i) => (
              <div key={i} className={`p-12 rounded-[40px] border transition-all duration-500 flex flex-col ${
                plan.featured 
                ? 'bg-[#0a2540] border-[#0a2540] text-white shadow-2xl lg:-translate-y-6' 
                : 'bg-[#f6f9fc] border-[#e3e8ee] hover:border-[#635bff]'
              }`}>
                <div className="mb-10">
                    <h3 className="text-2xl font-bold mb-3">{plan.name}</h3>
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

      {/* ─── Footer ─── */}
      <Footer />
    </div>
  );
}
