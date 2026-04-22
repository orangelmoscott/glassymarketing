'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { CheckCircle, ArrowRight, Zap, FileText, Shield, Layout, Users, BarChart3, Smartphone, Lock, Play, Star, ChevronRight, Globe, ZapIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const APP_URL = 'https://app.glassy.es';

const locations = [
  'madrid', 'barcelona', 'valencia', 'sevilla', 'zaragoza',
  'malaga', 'murcia', 'bilbao', 'alicante', 'cordoba',
  'valladolid', 'vigo', 'gijon', 'palma-de-mallorca', 'las-palmas',
  'inglaterra', 'italia', 'francia', 'portugal', 'alemania', 'holanda', 'suiza'
];

const plans = [
  {
    name: 'Autónomo',
    price: '29',
    desc: 'Esencial para profesionales independientes.',
    slug: 'basico',
    featured: false,
    features: [
      'Hasta 10 clientes',
      '1 cristalero activo',
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
      '5 cristaleros activos',
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
    featured: false,
    features: [
      'Clientes ilimitados',
      'Cristaleros ilimitados',
      'Logística avanzada',
      'API & Integraciones',
      'Soporte 24/7 prioritario',
      'White-label (próximamente)',
    ],
  },
];

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-indigo-100 selection:text-indigo-900 overflow-x-hidden">
      {/* ─── Navigation ─── */}
      <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        scrolled ? 'bg-white/80 backdrop-blur-xl border-b border-[#e3e8ee] py-3 shadow-sm' : 'bg-transparent py-6'
      }`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="w-10 h-10 rounded-xl bg-[#635bff] flex items-center justify-center shadow-lg shadow-indigo-100 group-hover:rotate-12 transition-transform duration-300">
                <img src="/favicon.png" alt="Glassy" className="w-6 h-6 brightness-0 invert" />
            </div>
            <span className="text-2xl font-bold text-[#0a2540] tracking-tight">Glassy</span>
          </div>
          
          <div className="hidden lg:flex items-center gap-10">
            <a href="#features" className="text-sm font-bold text-[#697386] hover:text-[#0a2540] transition-colors">Funcionalidades</a>
            <a href="#pricing" className="text-sm font-bold text-[#697386] hover:text-[#0a2540] transition-colors">Precios</a>
            <a href="#testimonials" className="text-sm font-bold text-[#697386] hover:text-[#0a2540] transition-colors">Testimonios</a>
          </div>

          <div className="flex items-center gap-4">
            <a href={`${APP_URL}/login`} className="hidden sm:block text-sm font-bold text-[#697386] hover:text-[#0a2540] transition-colors">Iniciar sesión</a>
            <a href={`${APP_URL}/register`}>
              <button className="bg-[#635bff] text-white px-6 py-2.5 rounded-lg font-bold text-sm hover:bg-[#4f46e5] transition-all shadow-lg shadow-indigo-100 active:scale-95">
                Empezar gratis
              </button>
            </a>
          </div>
        </div>
      </nav>

      {/* ─── Hero Section ─── */}
      <section className="relative pt-48 pb-32 lg:pt-64 lg:pb-48">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none overflow-hidden">
            <div className="absolute top-[-10%] right-[-10%] w-[800px] h-[800px] bg-indigo-50/50 rounded-full blur-[120px] animate-pulse" />
            <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-50/50 rounded-full blur-[100px]" />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-[#635bff] text-xs font-bold uppercase tracking-widest">
              <ZapIcon size={14} fill="currentColor" /> EL ESTÁNDAR PARA EMPRESAS DE LIMPIEZA
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.8 }}
            className="text-6xl md:text-8xl font-bold text-[#0a2540] tracking-tight leading-[0.95] mb-10 max-w-5xl mx-auto"
          >
            Escala tu negocio con <span className="text-[#635bff]">precisión quirúrgica</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-[#425466] max-w-2xl mx-auto leading-relaxed mb-12 font-medium"
          >
            Glassy es la plataforma que transforma empresas de limpieza en máquinas de facturar. Rutas optimizadas, facturación automática y control total en un solo clic.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row justify-center gap-5 mb-24"
          >
            <a href={`${APP_URL}/register`}>
              <button className="bg-[#0a2540] text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-[#1a3f6d] transition-all shadow-2xl active:scale-95 flex items-center gap-3">
                Probar gratis 14 días <ArrowRight size={20} />
              </button>
            </a>
            <button className="bg-white border border-[#e3e8ee] text-[#0a2540] px-10 py-5 rounded-2xl font-bold text-lg hover:bg-[#f6f9fc] transition-all flex items-center gap-3">
              <Play size={20} fill="currentColor" /> Ver Demo
            </button>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="flex flex-col items-center gap-6">
            <div className="flex -space-x-3">
                {[1,2,3,4,5].map(i => (
                    <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-indigo-100 flex items-center justify-center overflow-hidden">
                        <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="User" />
                    </div>
                ))}
            </div>
            <div className="space-y-1">
                <div className="flex text-amber-400 gap-0.5"><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /></div>
                <p className="text-sm font-bold text-[#697386]">Con la confianza de +500 empresas de limpieza en España</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── Dashboard Preview ─── */}
      <section className="pb-32 px-6">
          <motion.div initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1 }} className="container mx-auto max-w-6xl relative">
              <div className="bg-white rounded-[40px] border border-[#e3e8ee] shadow-[0_50px_100px_-20px_rgba(50,50,93,0.25),0_30px_60px_-30px_rgba(0,0,0,0.3)] overflow-hidden">
                  <div className="bg-[#fcfdfe] border-b border-[#e3e8ee] px-8 py-5 flex items-center justify-between">
                      <div className="flex gap-2">
                          <div className="w-3 h-3 rounded-full bg-[#ff5f56]" /><div className="w-3 h-3 rounded-full bg-[#ffbd2e]" /><div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                      </div>
                      <div className="bg-white border border-[#e3e8ee] rounded-lg px-4 py-1.5 text-[11px] font-bold text-[#697386]">app.glassy.es</div>
                      <div className="w-8 h-8 rounded-full bg-indigo-100" />
                  </div>
                  <div className="p-10 md:p-16 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                      <div className="space-y-8 text-left">
                          <h3 className="text-3xl font-bold text-[#0a2540]">Dashboard en tiempo real</h3>
                          <div className="space-y-4">
                              {[
                                  { icon: <Layout size={20} />, title: 'Logística Inteligente', color: 'text-indigo-600', bg: 'bg-indigo-50' },
                                  { icon: <BarChart3 size={20} />, title: 'Métricas de Crecimiento', color: 'text-emerald-600', bg: 'bg-emerald-50' },
                                  { icon: <Smartphone size={20} />, title: 'Gestión de Operarios', color: 'text-blue-600', bg: 'bg-blue-50' }
                              ].map((item, i) => (
                                  <div key={i} className="flex items-center gap-5 p-4 rounded-2xl border border-transparent hover:border-[#e3e8ee] transition-all">
                                      <div className={`w-12 h-12 ${item.bg} ${item.color} rounded-xl flex items-center justify-center`}>{item.icon}</div>
                                      <span className="font-bold text-[#0a2540]">{item.title}</span>
                                  </div>
                              ))}
                          </div>
                      </div>
                      <div className="relative">
                          <div className="bg-white p-6 rounded-3xl border border-[#e3e8ee] shadow-2xl space-y-6">
                              <div className="flex justify-between items-center"><span className="text-xs font-bold text-[#697386]">Ingresos hoy</span><span className="text-emerald-600 font-bold text-xs">+14%</span></div>
                              <div className="text-4xl font-bold text-[#0a2540]">2.840,50€</div>
                              <div className="h-24 flex items-end gap-1 px-1">{[40, 70, 45, 90, 65, 80, 100, 75].map((h, i) => (<div key={i} className="flex-1 bg-indigo-500 rounded-t-sm" style={{ height: `${h}%` }} />))}</div>
                          </div>
                      </div>
                  </div>
              </div>
          </motion.div>
      </section>

      {/* ─── Features Grid ─── */}
      <section id="features" className="py-32 bg-[#f6f9fc]">
        <div className="container mx-auto px-6 text-left">
          <div className="max-w-3xl mb-24">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0a2540] mb-6">Diseñado para la velocidad. Construido para el crecimiento.</h2>
            <p className="text-xl text-[#697386] font-medium italic">Olvídate de las hojas de cálculo. Glassy centraliza toda tu operativa.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              { icon: <Globe />, title: 'Rutas Multi-ciudad', desc: 'Gestiona equipos en diferentes provincias con facilidad.' },
              { icon: <FileText />, title: 'Facturación VeriFactu', desc: 'Adaptado a la normativa fiscal 2026. Facturas seguras.' },
              { icon: <Users />, title: 'Portal de Operario', desc: 'Tus empleados reportan firmas y fotos desde su móvil.' },
              { icon: <Zap />, title: 'Automatización Total', desc: 'Repite rutas del mes anterior en un solo clic.' },
              { icon: <Shield />, title: 'Historial Blindado', desc: 'Registros y firmas guardados para siempre con seguridad.' },
              { icon: <BarChart3 />, title: 'Análisis Financiero', desc: 'Conoce exactamente cuánto ganas por cada cliente.' },
            ].map((f, i) => (
              <div key={i} className="group cursor-default">
                <div className="w-14 h-14 bg-white shadow-xl shadow-indigo-100/20 rounded-2xl flex items-center justify-center text-[#635bff] mb-8">{f.icon}</div>
                <h3 className="text-xl font-bold text-[#0a2540] mb-4">{f.title}</h3>
                <p className="text-[#425466] leading-relaxed font-medium">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Pricing Section ─── */}
      <section id="pricing" className="py-40 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-bold text-[#0a2540] mb-6">Precios honestos</h2>
            <p className="text-xl text-[#697386] font-medium">Sin permanencia. Solo crecimiento.</p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto text-left">
            {plans.map((plan, i) => (
              <div key={i} className={`relative p-12 rounded-[40px] border transition-all duration-500 flex flex-col ${
                plan.featured ? 'bg-[#0a2540] border-[#0a2540] text-white shadow-2xl lg:-translate-y-6' : 'bg-white border-[#e3e8ee] hover:border-[#635bff]'
              }`}>
                {plan.featured && <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#635bff] text-white text-[10px] font-bold uppercase tracking-widest py-2 px-6 rounded-full">Más popular</div>}
                <div className="mb-10"><h3 className="text-2xl font-bold mb-3">{plan.name}</h3><p className={`text-sm font-medium ${plan.featured ? 'text-white/60' : 'text-[#697386]'}`}>{plan.desc}</p></div>
                <div className="flex items-baseline gap-2 mb-12"><span className="text-6xl font-bold tracking-tighter">{plan.price}€</span><span className={`text-lg font-bold ${plan.featured ? 'text-white/40' : 'text-[#697386]'}`}>/mes</span></div>
                <a href={`${APP_URL}/register?plan=${plan.slug}`} className={`block w-full text-center py-5 rounded-2xl font-bold text-base mb-12 transition-all active:scale-95 ${plan.featured ? 'bg-[#635bff] text-white hover:bg-[#4f46e5]' : 'bg-[#f6f9fc] text-[#0a2540] hover:bg-[#e3e8ee]'}`}>Empezar prueba gratis</a>
                <ul className="space-y-5 flex-1">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-4">
                      <CheckCircle size={16} className={plan.featured ? 'text-indigo-400' : 'text-emerald-500'} />
                      <span className={`text-sm font-bold ${plan.featured ? 'text-white/80' : 'text-[#425466]'}`}>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Ciudades SEO ─── */}
      <section className="py-20 px-6 border-t border-[#e3e8ee] bg-[#f6f9fc]">
        <div className="container mx-auto">
          <p className="text-xs font-bold text-[#697386] uppercase tracking-widest mb-8">Disponible en toda España y Europa</p>
          <div className="flex flex-wrap gap-3">
            {locations.map((loc) => (
              <Link key={loc} href={`/software-empresas-limpieza-${loc}`} className="text-sm font-bold text-[#697386] hover:text-[#635bff] bg-white border border-[#e3e8ee] px-4 py-2 rounded-full transition-all capitalize">
                {loc.replace(/-/g, ' ')}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Footer ─── */}
      <footer className="bg-white pt-32 pb-16 border-t border-[#e3e8ee]">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-16 mb-24 text-left">
            <div className="col-span-2">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-[#635bff] flex items-center justify-center text-white font-bold"><img src="/favicon.png" alt="G" className="w-6 h-6 brightness-0 invert" /></div>
                <span className="text-2xl font-bold text-[#0a2540]">Glassy</span>
              </div>
              <p className="text-xl font-medium text-[#425466] max-w-sm mb-8 leading-relaxed italic">Impulsando la nueva era de la limpieza profesional en España.</p>
            </div>
            <div className="space-y-6">
                <h4 className="font-bold text-[#0a2540] uppercase tracking-widest text-xs">Producto</h4>
                <div className="flex flex-col gap-4 text-[#697386] text-sm font-bold">
                    <a href="#features" className="hover:text-[#635bff]">Funcionalidades</a>
                    <a href="#pricing" className="hover:text-[#635bff]">Precios</a>
                    <a href={`${APP_URL}/register`} className="hover:text-[#635bff]">Registro</a>
                </div>
            </div>
            <div className="space-y-6">
                <h4 className="font-bold text-[#0a2540] uppercase tracking-widest text-xs">Legal</h4>
                <div className="flex flex-col gap-4 text-[#697386] text-sm font-bold">
                    <span>Privacidad</span><span>Términos</span><span>Cookies</span>
                </div>
            </div>
          </div>
          <div className="pt-12 border-t border-[#f6f9fc] flex justify-between items-center">
            <p className="text-xs font-bold text-[#aab7c4]">© 2026 Glassy SaaS. Desarrollado para cristaleros.</p>
            <div className="flex items-center gap-2"><Globe size={14} className="text-[#aab7c4]" /><span className="text-xs font-bold text-[#aab7c4]">España (ES)</span></div>
          </div>
        </div>
      </footer>
    </div>
  );
}
