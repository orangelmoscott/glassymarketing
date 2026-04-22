'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const APP_URL = 'https://app.glassy.es';

const locations = [
  'madrid', 'barcelona', 'valencia', 'sevilla', 'zaragoza',
  'malaga', 'murcia', 'bilbao', 'alicante', 'cordoba',
  'valladolid', 'vigo', 'gijon', 'palma-de-mallorca', 'las-palmas',
  'inglaterra', 'italia', 'francia', 'portugal', 'alemania', 'holanda', 'suiza'
];

const plans = [
  {
    name: 'Plan Básico',
    price: '29',
    desc: 'Para cristaleros independientes.',
    slug: 'basico',
    featured: false,
    features: [
      'Hasta 40 clientes',
      '1 cristalero activo',
      'Rutas con mapa y optimización',
      'Facturación incluida',
      'Soporte por email',
    ],
  },
  {
    name: 'Plan Pro',
    price: '49',
    desc: 'Para pequeñas empresas en crecimiento.',
    slug: 'pro',
    featured: true,
    features: [
      'Hasta 150 clientes',
      '5 cristaleros activos',
      'Rutas con mapa y optimización',
      '5 rutas diarias',
      'Dashboard profesional de rendimiento',
      'Módulo de facturación avanzada',
    ],
  },
  {
    name: 'Plan Business',
    price: '99',
    desc: 'Para empresas consolidadas.',
    slug: 'business',
    featured: false,
    features: [
      'Clientes ilimitados',
      'Cristaleros ilimitados',
      'Mapa logístico avanzado',
      'Facturación y dashboard adicional',
      'Dashboard de inteligencia de negocio',
      'Soporte prioritario y acceso total',
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
    <>
      {/* ─── NAV ─── */}
      <nav className={scrolled ? 'scrolled' : ''}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
          <div style={{
            width: 32, height: 32, borderRadius: 8,
            background: 'linear-gradient(135deg, #635bff, #4f46e5)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: 'white', fontWeight: 800, fontSize: '1rem',
            boxShadow: '0 4px 12px rgba(99,91,255,0.4)',
          }}>G</div>
          <span style={{ fontWeight: 800, fontSize: '1.1rem', color: 'var(--stripe-dark)', letterSpacing: '-0.02em' }}>Glassy</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <a href="#caracteristicas" className="btn-ghost" style={{ border: 'none', background: 'none', fontSize: '0.875rem' }}>Características</a>
          <a href="#precios" className="btn-ghost" style={{ border: 'none', background: 'none', fontSize: '0.875rem' }}>Precios</a>
          <a href={`${APP_URL}/login`} className="btn-ghost">Iniciar sesión</a>
          <a href={`${APP_URL}/register`} className="btn-primary">Prueba gratis →</a>
        </div>
      </nav>

      {/* ─── HERO ─── */}
      <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '5rem', position: 'relative', background: 'linear-gradient(180deg, #f8f8ff 0%, white 100%)' }}>
        {/* Blobs decorativos */}
        <div className="hero-bg">
          <div className="hero-blob" style={{ width: 600, height: 600, top: '-10%', right: '-15%', background: 'radial-gradient(circle, rgba(99,91,255,0.15), transparent 70%)' }} />
          <div className="hero-blob" style={{ width: 400, height: 400, bottom: '0%', left: '-10%', background: 'radial-gradient(circle, rgba(0,212,255,0.12), transparent 70%)' }} />
        </div>

        <div className="container" style={{ position: 'relative', textAlign: 'center' }}>
          <div className="animate-fade-up">
            <span className="badge">Software especializado para cristaleros</span>
          </div>

          <h1 className="text-display-xl animate-fade-up delay-100" style={{ marginTop: '1.5rem', maxWidth: 840, margin: '1.5rem auto 0' }}>
            Haz crecer tu negocio de limpieza{' '}
            <span className="text-gradient">sin perder el control</span>
          </h1>

          <p className="animate-fade-up delay-200" style={{
            marginTop: '1.5rem', maxWidth: 540, margin: '1.5rem auto 0',
            fontSize: '1.125rem', color: 'var(--stripe-muted)', lineHeight: 1.75,
          }}>
            Rutas optimizadas, facturas automáticas y gestión de equipo — todo en una sola
            herramienta diseñada específicamente para empresas de limpieza de cristales.
          </p>

          <div className="animate-fade-up delay-300" style={{ marginTop: '2.5rem', display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={`${APP_URL}/register?plan=basico`} className="btn-primary" style={{ fontSize: '1rem', padding: '0.875rem 2rem' }}>
              Empieza gratis 14 días →
            </a>
            <a href="#caracteristicas" className="btn-ghost" style={{ fontSize: '1rem', padding: '0.875rem 1.5rem' }}>
              Ver cómo funciona
            </a>
          </div>

          <p className="animate-fade-up delay-400" style={{ marginTop: '1rem', fontSize: '0.8rem', color: '#a0aec0' }}>
            Sin tarjeta de crédito · Cancela cuando quieras
          </p>

          {/* Mock dashboard */}
          <div className="animate-fade-up delay-500" style={{ marginTop: '4rem' }}>
            <div className="animate-float" style={{
              background: 'white',
              border: '1px solid var(--stripe-border)',
              borderRadius: 20,
              padding: '1.5rem',
              maxWidth: 700, margin: '0 auto',
              boxShadow: '0 24px 80px rgba(10,37,64,0.12)',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem', paddingBottom: '1rem', borderBottom: '1px solid var(--stripe-border)' }}>
                <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#ff5f57' }} />
                <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#febc2e' }} />
                <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#28c840' }} />
                <span style={{ marginLeft: '0.5rem', fontSize: '0.7rem', color: 'var(--stripe-muted)', fontFamily: 'monospace' }}>app.glassy.es/dashboard</span>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1rem' }}>
                {[
                  { label: 'Rutas hoy', value: '12', delta: '+3 vs ayer', color: '#22c55e' },
                  { label: 'Clientes activos', value: '148', delta: '+12 este mes', color: '#635bff' },
                  { label: 'Facturado', value: '8.400€', delta: '+18% vs mes ant.', color: '#0073e6' },
                ].map((s) => (
                  <div key={s.label} style={{ padding: '1rem', borderRadius: 12, background: 'var(--stripe-light)', border: '1px solid var(--stripe-border)', textAlign: 'left' }}>
                    <p style={{ fontSize: '0.7rem', color: 'var(--stripe-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600 }}>{s.label}</p>
                    <p style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--stripe-dark)', marginTop: '0.25rem', letterSpacing: '-0.02em' }}>{s.value}</p>
                    <p style={{ fontSize: '0.7rem', color: s.color, fontWeight: 600, marginTop: '0.25rem' }}>↑ {s.delta}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── LOGOS / TRUST ─── */}
      <section style={{ padding: '2.5rem 2rem', borderTop: '1px solid var(--stripe-border)', borderBottom: '1px solid var(--stripe-border)', background: 'var(--stripe-light)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <p style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--stripe-muted)', fontWeight: 600 }}>
            Resultados medidos en empresas reales de limpieza
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '2rem', marginTop: '2rem' }}>
            {[
              { n: '+35%', l: 'Más servicios al día' },
              { n: '10h', l: 'Ahorradas a la semana' },
              { n: '0€', l: 'En errores de facturación' },
              { n: '4.9★', l: 'Valoración media' },
            ].map((s) => (
              <div key={s.n}>
                <p style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--stripe-purple)', letterSpacing: '-0.02em' }}>{s.n}</p>
                <p style={{ fontSize: '0.875rem', color: 'var(--stripe-muted)', marginTop: '0.25rem', fontWeight: 500 }}>{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PROBLEMA / SOLUCIÓN ─── */}
      <section>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}>
            <div>
              <span className="badge">El problema</span>
              <h2 className="text-display-lg" style={{ marginTop: '1rem' }}>
                Gestionar rutas en papel o Excel te está costando dinero
              </h2>
              <p style={{ marginTop: '1.25rem', color: 'var(--stripe-muted)', lineHeight: 1.8, fontSize: '1.05rem' }}>
                Cada hora perdida reorganizando rutas a mano, llamando a trabajadores para confirmar
                direcciones o revisando facturas en Excel es dinero que se escapa.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {[
                { p: '3h/semana reorganizando rutas', s: '20 min con Glassy' },
                { p: 'Facturas enviadas con errores', s: 'Facturación automática' },
                { p: 'WhatsApp como herramienta de gestión', s: 'Panel centralizado en tiempo real' },
              ].map((item) => (
                <div key={item.p} className="card" style={{ padding: '1.25rem 1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
                  <span style={{ color: '#a0aec0', fontSize: '0.9rem', textDecoration: 'line-through' }}>{item.p}</span>
                  <span style={{ color: 'var(--stripe-purple)', fontSize: '0.875rem', fontWeight: 700, whiteSpace: 'nowrap' }}>→ {item.s}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── CARACTERÍSTICAS ─── */}
      <section id="caracteristicas" style={{ background: 'var(--stripe-light)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span className="badge">Características</span>
            <h2 className="text-display-lg" style={{ marginTop: '1rem', maxWidth: 560, margin: '1rem auto 0' }}>
              Todo lo que tu empresa necesita
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1.5rem' }}>
            {[
              { icon: '🗺️', title: 'Rutas Optimizadas', desc: 'El sistema calcula automáticamente el recorrido más eficiente. Menos gasolina, más servicios al día.' },
              { icon: '🧾', title: 'Facturación Automática', desc: 'Genera facturas legales en un clic. Compatible con normativa española y europea.' },
              { icon: '👥', title: 'Gestión de Equipo', desc: 'Asigna rutas a cada trabajador y ve el estado en tiempo real sin necesidad de llamadas.' },
              { icon: '📊', title: 'Dashboard en Tiempo Real', desc: 'Ve cuánto has facturado, qué clientes necesitan atención y cómo rinde tu equipo.' },
              { icon: '📱', title: 'App para Operarios', desc: 'Tus cristaleros ven sus rutas del día en el móvil. Sin WhatsApp, sin confusiones.' },
              { icon: '🔒', title: 'Seguridad Multi-tenant', desc: 'Datos aislados y cifrados por empresa. Cumplimiento RGPD europeo incluido.' },
            ].map((f) => (
              <div key={f.title} className="card" style={{ padding: '1.75rem' }}>
                <div className="icon-box">{f.icon}</div>
                <h3 style={{ fontWeight: 700, fontSize: '1.05rem', color: 'var(--stripe-dark)', marginBottom: '0.5rem' }}>{f.title}</h3>
                <p style={{ color: 'var(--stripe-muted)', fontSize: '0.875rem', lineHeight: 1.7 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PRECIOS ─── */}
      <section id="precios">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span className="badge">Precios</span>
            <h2 className="text-display-lg" style={{ marginTop: '1rem' }}>Simple. Sin sorpresas.</h2>
            <p style={{ color: 'var(--stripe-muted)', marginTop: '0.75rem' }}>14 días de prueba gratuita en todos los planes</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1.5rem', maxWidth: 980, margin: '0 auto' }}>
            {plans.map((plan) => (
              <div key={plan.name} className={plan.featured ? 'card-featured' : 'card'} style={{ padding: '2rem', position: 'relative' }}>
                {plan.featured && (
                  <div style={{ position: 'absolute', top: '-13px', left: '50%', transform: 'translateX(-50%)', whiteSpace: 'nowrap' }}>
                    <span style={{ background: 'var(--stripe-purple)', color: 'white', fontSize: '0.7rem', fontWeight: 700, padding: '0.3rem 0.875rem', borderRadius: 100, letterSpacing: '0.06em', textTransform: 'uppercase' }}>Más popular</span>
                  </div>
                )}
                <h3 style={{ fontWeight: 700, fontSize: '1.1rem', color: plan.featured ? 'white' : 'var(--stripe-dark)', marginBottom: '0.375rem' }}>{plan.name}</h3>
                <p style={{ fontSize: '0.85rem', color: plan.featured ? 'rgba(255,255,255,0.6)' : 'var(--stripe-muted)', marginBottom: '1.25rem' }}>{plan.desc}</p>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.25rem', marginBottom: '1.5rem' }}>
                  <span style={{ fontSize: '2.75rem', fontWeight: 800, color: plan.featured ? 'white' : 'var(--stripe-dark)', letterSpacing: '-0.03em' }}>{plan.price}€</span>
                  <span style={{ fontSize: '0.875rem', color: plan.featured ? 'rgba(255,255,255,0.5)' : 'var(--stripe-muted)' }}>/mes</span>
                </div>
                <a href={`${APP_URL}/register?plan=${plan.slug}`} style={{
                  display: 'block', textAlign: 'center', padding: '0.75rem',
                  borderRadius: 8, fontWeight: 700, fontSize: '0.9rem',
                  textDecoration: 'none', marginBottom: '1.5rem', transition: 'all 0.15s',
                  ...(plan.featured
                    ? { background: 'white', color: 'var(--stripe-purple)' }
                    : { background: 'var(--stripe-purple)', color: 'white' }),
                }}>
                  Empezar gratis
                </a>
                <hr style={{ border: 'none', height: 1, background: plan.featured ? 'rgba(255,255,255,0.12)' : 'var(--stripe-border)', marginBottom: '1.25rem' }} />
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
                  {plan.features.map((f) => (
                    <li key={f} className={`check-item${plan.featured ? ' featured' : ''}`}>
                      <span className={`check-icon${plan.featured ? ' featured' : ''}`}>✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section id="faq" style={{ background: 'var(--stripe-light)' }}>
        <div className="container" style={{ maxWidth: 720 }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="badge">FAQ</span>
            <h2 className="text-display-md" style={{ marginTop: '1rem' }}>Preguntas frecuentes</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {[
              { q: '¿Necesito conocimientos técnicos?', a: 'No. Si sabes usar WhatsApp, sabes usar Glassy. La configuración inicial dura menos de 10 minutos.' },
              { q: '¿Puedo importar mis clientes actuales?', a: 'Sí. Puedes subir un Excel o CSV con tus clientes y Glassy los importa automáticamente.' },
              { q: '¿Cómo funciona el periodo de prueba?', a: 'Tienes 14 días con todas las funcionalidades sin límites. No pedimos tarjeta de crédito hasta que decidas continuar.' },
              { q: '¿Puedo usarlo desde el móvil?', a: 'Sí. Está optimizado para móvil. Tus operarios ven sus rutas del día sin instalar nada.' },
              { q: '¿Mis datos están seguros?', a: 'Absolutamente. Datos cifrados, aislados por empresa. Cumplimos con el RGPD europeo.' },
            ].map((faq, i) => (
              <details key={i} className="card" style={{ padding: '1.25rem 1.5rem', cursor: 'pointer' }}>
                <summary style={{ fontWeight: 600, fontSize: '0.95rem', color: 'var(--stripe-dark)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  {faq.q}
                  <span style={{ color: 'var(--stripe-purple)', flexShrink: 0, marginLeft: '1rem', fontSize: '1.1rem' }}>+</span>
                </summary>
                <p style={{ marginTop: '0.875rem', color: 'var(--stripe-muted)', fontSize: '0.9rem', lineHeight: 1.7 }}>{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA FINAL ─── */}
      <section style={{ background: 'linear-gradient(135deg, var(--stripe-dark) 0%, #1a3a5c 100%)', color: 'white' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: 640 }}>
          <h2 style={{ fontSize: 'clamp(1.75rem,4vw,2.75rem)', fontWeight: 800, letterSpacing: '-0.025em', lineHeight: 1.1 }}>
            Empieza a digitalizar tu empresa hoy
          </h2>
          <p style={{ marginTop: '1rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.75, fontSize: '1.05rem' }}>
            14 días gratis, sin tarjeta de crédito. Cancela cuando quieras.
          </p>
          <a href={`${APP_URL}/register`} style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            marginTop: '2rem', background: 'white', color: 'var(--stripe-purple)',
            fontWeight: 700, fontSize: '1rem', padding: '0.875rem 2rem',
            borderRadius: 8, textDecoration: 'none',
            transition: 'all 0.2s', boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
          }}>
            Crear mi cuenta gratis →
          </a>
        </div>
      </section>

      {/* ─── CIUDADES (SEO) ─── */}
      <section style={{ padding: '3rem 2rem', borderTop: '1px solid var(--stripe-border)' }}>
        <div className="container">
          <p style={{ fontSize: '0.72rem', color: '#a0aec0', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600, marginBottom: '1rem' }}>
            Disponible en toda España y Europa
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {locations.map((loc) => (
              <Link key={loc} href={`/software-empresas-limpieza-${loc}`} style={{
                fontSize: '0.78rem', padding: '0.3rem 0.75rem', borderRadius: 100,
                background: 'var(--stripe-light)', border: '1px solid var(--stripe-border)',
                color: 'var(--stripe-muted)', textDecoration: 'none', textTransform: 'capitalize',
                transition: 'all 0.15s',
              }}>
                {loc.replace(/-/g, ' ')}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer style={{ borderTop: '1px solid var(--stripe-border)', padding: '1.75rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <div style={{ width: 26, height: 26, borderRadius: 6, background: 'linear-gradient(135deg, #635bff, #4f46e5)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 800, fontSize: '0.8rem' }}>G</div>
          <span style={{ fontWeight: 700, color: 'var(--stripe-muted)', fontSize: '0.9rem' }}>Glassy © 2026</span>
        </div>
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          {['Privacidad', 'Términos', 'Contacto'].map((l) => (
            <span key={l} style={{ fontSize: '0.8rem', color: '#a0aec0', cursor: 'pointer' }}>{l}</span>
          ))}
        </div>
      </footer>

      {/* Schema FAQ */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org', '@type': 'FAQPage',
        mainEntity: [
          { '@type': 'Question', name: '¿Necesito conocimientos técnicos para usar Glassy?', acceptedAnswer: { '@type': 'Answer', text: 'No. Si sabes usar WhatsApp, sabes usar Glassy.' } },
          { '@type': 'Question', name: '¿Cómo funciona el periodo de prueba?', acceptedAnswer: { '@type': 'Answer', text: '14 días con todas las funcionalidades. Sin tarjeta de crédito.' } },
        ],
      })}} />
    </>
  );
}
