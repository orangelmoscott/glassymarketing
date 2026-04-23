'use client';

import { useState, useEffect } from 'react';
import { 
  CheckCircle, ArrowRight, Zap, FileText, Shield, 
  Layout, Users, BarChart3, Smartphone, Lock, 
  Play, Star, ChevronRight, Globe, Menu, X, Bell,
  Sparkles, Search, Map
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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

export default function MarketingPage() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#f6f9fc] font-['Figtree'] text-[#0a2540] overflow-x-hidden selection:bg-indigo-100 selection:text-indigo-900">
      
      {/* ─── Navigation ─── */}
      <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        scrolled ? 'bg-white/80 backdrop-blur-xl border-b border-[#e3e8ee] py-3 shadow-sm' : 'bg-transparent py-6'
      }`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="w-10 h-10 rounded-xl bg-[#635bff] flex items-center justify-center shadow-lg shadow-indigo-100 group-hover:rotate-12 transition-transform duration-300">
              <span className="text-white font-bold text-xl tracking-tighter">G</span>
            </div>
            <span className="text-2xl font-bold text-[#0a2540] tracking-tight">Glassy</span>
          </div>
          
          <div className="hidden lg:flex items-center gap-10">
            <a href="#features" className="text-sm font-bold text-[#697386] hover:text-[#0a2540] transition-colors">Funcionalidades</a>
            <a href="#pricing" className="text-sm font-bold text-[#697386] hover:text-[#0a2540] transition-colors">Precios</a>
            <a href="#about" className="text-sm font-bold text-[#697386] hover:text-[#0a2540] transition-colors">Sobre nosotros</a>
          </div>

          <div className="flex items-center gap-4">
            <a href={`${APP_URL}/login`} className="hidden sm:block text-sm font-bold text-[#697386] hover:text-[#0a2540] transition-colors">Iniciar sesión</a>
            <a href={`${APP_URL}/register`}>
              <button className="bg-[#635bff] text-white px-6 py-2.5 rounded-lg font-bold text-sm hover:bg-[#0a2540] transition-all shadow-lg shadow-indigo-100 active:scale-95">
                Empezar gratis
              </button>
            </a>
            <button onClick={() => setMobileMenu(true)} className="lg:hidden p-2 text-[#697386]">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenu && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 z-[200] bg-white p-8 flex flex-col"
          >
            <div className="flex justify-between items-center mb-12">
              <span className="text-2xl font-bold text-[#0a2540]">Glassy</span>
              <button onClick={() => setMobileMenu(false)} className="p-2 bg-[#f6f9fc] rounded-lg">
                <X size={24} />
              </button>
            </div>
            <div className="flex flex-col gap-8">
              <a href="#features" onClick={() => setMobileMenu(false)} className="text-2xl font-bold text-[#0a2540]">Funcionalidades</a>
              <a href="#pricing" onClick={() => setMobileMenu(false)} className="text-2xl font-bold text-[#0a2540]">Precios</a>
              <a href={`${APP_URL}/login`} className="text-2xl font-bold text-[#697386]">Iniciar sesión</a>
              <a href={`${APP_URL}/register`}>
                <button className="w-full bg-[#635bff] text-white py-4 rounded-xl font-bold text-lg">Empezar gratis</button>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

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
            className="text-6xl md:text-8xl font-bold text-[#0a2540] tracking-tight leading-[0.95] mb-10 max-w-5xl mx-auto"
          >
            Gestiona tu empresa de limpieza con <span className="text-[#635bff]">fluidez total</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xl md:text-2xl text-[#425466] max-w-2xl mx-auto leading-relaxed mb-12 font-medium"
          >
            Rutas optimizadas, firmas digitales y facturación VeriFactu. Todo lo que tu negocio necesita para escalar sin límites.
          </motion.p>

          <div className="flex flex-col sm:flex-row justify-center gap-5 mb-24">
            <a href={`${APP_URL}/register`}>
              <button className="bg-[#0a2540] text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-[#635bff] transition-all shadow-2xl active:scale-95 flex items-center gap-3">
                Probar gratis <ArrowRight size={20} />
              </button>
            </a>
            <button className="bg-white border border-[#e3e8ee] text-[#0a2540] px-10 py-5 rounded-2xl font-bold text-lg hover:bg-[#f6f9fc] transition-all flex items-center gap-3">
              <Play size={20} fill="currentColor" /> Ver Demo
            </button>
          </div>
        </div>
      </section>

      {/* ─── Product Preview (Dashboard Style) ─── */}
      <section className="pb-32 px-6 bg-white">
          <motion.div 
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="container mx-auto max-w-6xl relative"
          >
              <div className="bg-[#f6f9fc] rounded-[40px] border border-[#e3e8ee] shadow-[0_50px_100px_-20px_rgba(50,50,93,0.25)] overflow-hidden flex flex-col lg:flex-row">
                  {/* Fake Sidebar */}
                  <div className="w-full lg:w-64 bg-white border-r border-[#e3e8ee] p-6 hidden lg:flex flex-col gap-6">
                      <div className="flex items-center gap-2 mb-4">
                          <div className="w-8 h-8 bg-[#635bff] rounded-lg flex items-center justify-center">
                              <span className="text-white font-bold text-sm">G</span>
                          </div>
                          <span className="font-bold text-[#0a2540]">Glassy App</span>
                      </div>
                      {[
                        { icon: Layout, label: 'Panel' },
                        { icon: Users, label: 'Clientes', active: true },
                        { icon: Calendar, label: 'Rutas' },
                        { icon: BarChart3, label: 'Stats' }
                      ].map((item, i) => (
                        <div key={i} className={`flex items-center gap-3 p-3 rounded-xl font-bold text-sm ${item.active ? 'bg-indigo-50 text-[#635bff]' : 'text-[#697386]'}`}>
                          <item.icon size={18} /> {item.label}
                        </div>
                      ))}
                  </div>

                  {/* Fake Main Content */}
                  <div className="flex-1 flex flex-col">
                      <div className="h-16 bg-white border-b border-[#e3e8ee] px-8 flex items-center justify-between">
                          <div className="flex items-center gap-3 px-4 py-2 bg-[#f6f9fc] rounded-lg text-[#aab7c4] w-64 text-xs font-bold">
                              <Search size={14} /> Buscar...
                          </div>
                          <div className="flex items-center gap-4">
                              <Bell size={18} className="text-[#697386]" />
                              <div className="w-8 h-8 rounded-lg bg-indigo-50 border border-indigo-100" />
                          </div>
                      </div>
                      <div className="p-8 md:p-12 space-y-8">
                          <div className="flex justify-between items-end">
                            <div>
                              <h3 className="text-2xl font-bold text-[#0a2540]">Gestión de Clientes</h3>
                              <p className="text-xs text-[#697386] font-bold mt-1 uppercase tracking-wider">Dashboard de Control</p>
                            </div>
                            <button className="bg-[#635bff] text-white px-4 py-2 rounded-lg text-xs font-bold shadow-lg shadow-indigo-100">+ Nuevo Cliente</button>
                          </div>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              {[1, 2].map((i) => (
                                <div key={i} className="bg-white p-6 rounded-2xl border border-[#e3e8ee] shadow-sm space-y-4 hover:shadow-md transition-shadow">
                                    <div className="flex justify-between items-start">
                                      <div className="w-12 h-12 bg-indigo-50 text-[#635bff] rounded-xl flex items-center justify-center">
                                        <Users size={24} />
                                      </div>
                                      <span className="bg-emerald-50 text-emerald-600 px-2 py-1 rounded-full text-[10px] font-bold uppercase border border-emerald-100">Activo</span>
                                    </div>
                                    <div>
                                      <p className="font-bold text-[#0a2540]">Empresa de Ejemplo {i}</p>
                                      <p className="text-xs text-[#697386] font-medium">Calle Mayor 12, Madrid</p>
                                    </div>
                                    <div className="pt-4 border-t border-[#f6f9fc] flex justify-between items-center">
                                      <span className="text-xs font-bold text-[#635bff]">Próxima ruta: Mañana</span>
                                      <ChevronRight size={16} className="text-[#e3e8ee]" />
                                    </div>
                                </div>
                              ))}
                          </div>
                      </div>
                  </div>
              </div>
          </motion.div>
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
              { icon: <Map />, title: 'Logística de Precisión', desc: 'Optimiza tus rutas diarias para ahorrar combustible y tiempo.' },
              { icon: <FileText />, title: 'Facturas VeriFactu', desc: 'Genera facturas legales en segundos, listas para Hacienda 2026.' },
              { icon: <Smartphone />, title: 'App para Operarios', desc: 'Tus cristaleros reciben su ruta, reportan firmas y fotos al instante.' },
              { icon: <Zap />, title: 'Automatización Inteligente', desc: 'Reprograma servicios recurrentes de forma automática.' },
              { icon: <Shield />, title: 'Seguridad Total', desc: 'Tus datos están protegidos y disponibles las 24 horas del día.' },
              { icon: <BarChart3 />, title: 'Métricas de Negocio', desc: 'Conoce tu rentabilidad real por cliente y operario.' },
            ].map((f, i) => (
              <div key={i} className="bg-white p-10 rounded-3xl border border-[#e3e8ee] hover:border-[#635bff] transition-all hover:shadow-xl hover:shadow-indigo-100/20 group">
                <div className="w-14 h-14 bg-indigo-50 text-[#635bff] rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  {f.icon}
                </div>
                <h3 className="text-xl font-bold text-[#0a2540] mb-4">{f.title}</h3>
                <p className="text-[#697386] leading-relaxed font-medium">{f.desc}</p>
              </div>
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
      <footer className="bg-[#0a2540] text-white pt-32 pb-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-16 mb-24">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-[#635bff] flex items-center justify-center text-white font-bold">G</div>
                <span className="text-2xl font-bold text-white tracking-tight">Glassy</span>
              </div>
              <p className="text-xl font-medium text-white/60 max-w-sm mb-8 leading-relaxed italic">
                Acelerando la digitalización de las empresas de servicios en España.
              </p>
              <div className="flex gap-6">
                {['LinkedIn', 'Twitter', 'Instagram'].map(social => (
                  <span key={social} className="text-sm font-bold text-white/40 hover:text-white cursor-pointer transition-colors">{social}</span>
                ))}
              </div>
            </div>
            
            <div className="space-y-6">
                <h4 className="font-bold uppercase tracking-widest text-xs text-white/40">Producto</h4>
                <div className="flex flex-col gap-4 text-white/60 text-sm font-bold">
                    <a href="#features" className="hover:text-white">Funcionalidades</a>
                    <a href="#pricing" className="hover:text-white">Precios</a>
                    <a href={`${APP_URL}/register`} className="hover:text-white">Registro</a>
                </div>
            </div>

            <div className="space-y-6">
                <h4 className="font-bold uppercase tracking-widest text-xs text-white/40">Legal</h4>
                <div className="flex flex-col gap-4 text-white/60 text-sm font-bold">
                    <span className="hover:text-white cursor-pointer">Privacidad</span>
                    <span className="hover:text-white cursor-pointer">Términos</span>
                    <span className="hover:text-white cursor-pointer">Cookies</span>
                </div>
            </div>
          </div>
          
          <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-xs font-bold text-white/40">© 2026 Glassy SaaS. Desarrollado para la excelencia.</p>
            <div className="flex items-center gap-2 text-white/40">
                <Globe size={14} />
                <span className="text-xs font-bold">España (ES)</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
