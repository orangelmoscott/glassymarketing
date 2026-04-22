'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const APP_URL = 'https://app.glassy.es';

// Datos: ciudades y países para el SEO programático
const locations = [
  'madrid', 'barcelona', 'valencia', 'sevilla', 'zaragoza',
  'malaga', 'murcia', 'bilbao', 'alicante', 'cordoba',
  'valladolid', 'vigo', 'gijon', 'palma-de-mallorca', 'las-palmas',
  'inglaterra', 'italia', 'francia', 'portugal', 'alemania', 'holanda', 'suiza'
];

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* ─── NAV ─── */}
      <nav className={scrolled ? 'scrolled' : ''}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div style={{ 
            width: 36, height: 36, borderRadius: 10,
            background: 'linear-gradient(135deg, var(--water-dark), var(--water-deep))',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '1.1rem', fontFamily: 'var(--font-display)', color: 'white',
            fontWeight: 'bold', boxShadow: '0 4px 12px rgba(58,155,189,0.4)'
          }}>G</div>
          <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', color: 'var(--paper)' }}>Glassy</span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <a href="#caracteristicas" className="btn-ghost" style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}>
            Características
          </a>
          <a href="#precios" className="btn-ghost" style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}>
            Precios
          </a>
          <a href={`${APP_URL}/login`} className="btn-ghost" style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}>
            Iniciar sesión
          </a>
          <a href={`${APP_URL}/register`} className="btn-primary" style={{ padding: '0.625rem 1.25rem' }}>
            Prueba gratis →
          </a>
        </div>
      </nav>

      {/* ─── HERO ─── */}
      <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
        {/* Background orbs */}
        <div style={{
          position: 'absolute', top: '15%', right: '-10%',
          width: 600, height: 600, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(58,155,189,0.12) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', bottom: '10%', left: '-15%',
          width: 500, height: 500, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(26,106,138,0.18) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <div className="container" style={{ position: 'relative', paddingTop: '8rem' }}>
          <div className="animate-fade-up">
            <span className="badge">Software especializado para cristaleros</span>
          </div>

          <h1 className="text-display-xl animate-fade-up delay-100" style={{ marginTop: '1.5rem', maxWidth: '900px' }}>
            Haz crecer tu negocio de limpieza{' '}
            <em style={{ color: 'var(--water)', fontStyle: 'italic' }}>sin perder el control</em>
          </h1>

          <p className="animate-fade-up delay-200" style={{
            marginTop: '1.5rem', maxWidth: '560px',
            fontSize: '1.125rem', color: 'rgba(245,243,239,0.65)', lineHeight: 1.7
          }}>
            Rutas optimizadas, facturas automáticas y gestión de equipo — todo en una sola herramienta
            diseñada específicamente para empresas de limpieza de cristales.
          </p>

          <div className="animate-fade-up delay-300" style={{ 
            marginTop: '2.5rem', display: 'flex', gap: '1rem', 
            flexWrap: 'wrap', alignItems: 'center' 
          }}>
            <a href={`${APP_URL}/register?plan=basico`} className="btn-primary" style={{ fontSize: '1rem', padding: '1rem 2rem' }}>
              Empieza gratis 14 días →
            </a>
            <a href="#caracteristicas" className="btn-ghost">
              Ver cómo funciona
            </a>
          </div>

          <p className="animate-fade-up delay-400" style={{ 
            marginTop: '1.25rem', fontSize: '0.8rem', 
            color: 'rgba(245,243,239,0.35)', letterSpacing: '0.05em' 
          }}>
            Sin tarjeta de crédito · Cancela cuando quieras
          </p>

          {/* Hero visual: Mock UI card */}
          <div className="animate-fade-up delay-500" style={{ marginTop: '4rem' }}>
            <div className="card-glass animate-float" style={{ 
              padding: '2rem', maxWidth: 640, 
              background: 'rgba(168, 213, 226, 0.06)',
              border: '1px solid rgba(168, 213, 226, 0.15)',
              borderRadius: 24
            }}>
              {/* Mock dashboard header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
                <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#ff5f57' }} />
                <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#febc2e' }} />
                <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#28c840' }} />
                <span style={{ marginLeft: '0.75rem', fontSize: '0.75rem', color: 'rgba(245,243,239,0.4)', fontFamily: 'monospace' }}>
                  glassy.es/app/dashboard
                </span>
              </div>
              {/* Mock stats */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
                {[
                  { label: 'Rutas hoy', value: '12', delta: '+3' },
                  { label: 'Clientes activos', value: '148', delta: '+12' },
                  { label: 'Facturado este mes', value: '8.400€', delta: '+18%' },
                ].map((s) => (
                  <div key={s.label} style={{ 
                    padding: '1rem', borderRadius: 12, 
                    background: 'rgba(168,213,226,0.06)',
                    border: '1px solid rgba(168,213,226,0.1)'
                  }}>
                    <p style={{ fontSize: '0.7rem', color: 'rgba(245,243,239,0.4)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{s.label}</p>
                    <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', color: 'var(--paper)', marginTop: '0.25rem' }}>{s.value}</p>
                    <p style={{ fontSize: '0.7rem', color: 'var(--water)', marginTop: '0.25rem' }}>{s.delta} este mes</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PROBLEMA / SOLUCIÓN ─── */}
      <section style={{ background: 'rgba(168,213,226,0.03)', borderTop: '1px solid var(--glass-border)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}>
            <div>
              <div className="divider" style={{ marginBottom: '1.5rem' }} />
              <h2 className="text-display-lg">
                Gestionar rutas en papel o Excel te está costando dinero
              </h2>
              <p style={{ marginTop: '1.25rem', color: 'rgba(245,243,239,0.6)', lineHeight: 1.8 }}>
                Cada hora perdida reorganizando rutas a mano, llamando a trabajadores para confirmar direcciones
                o revisando facturas en Excel es dinero que se escapa. Glassy automatiza todo eso.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                { problem: '3h/semana reorganizando rutas', solution: '20 min con Glassy' },
                { problem: 'Facturas enviadas con errores', solution: 'Facturación automática perfecta' },
                { problem: 'WhatsApp como herramienta de gestión', solution: 'Panel centralizado en tiempo real' },
              ].map((item) => (
                <div key={item.problem} className="card-glass" style={{ padding: '1.25rem 1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
                  <span style={{ color: 'rgba(245,243,239,0.45)', fontSize: '0.9rem', textDecoration: 'line-through' }}>{item.problem}</span>
                  <span style={{ color: 'var(--water)', fontSize: '0.9rem', fontWeight: 600, whiteSpace: 'nowrap' }}>→ {item.solution}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── CARACTERÍSTICAS ─── */}
      <section id="caracteristicas">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span className="badge">Características</span>
            <h2 className="text-display-lg" style={{ marginTop: '1rem', maxWidth: 600, margin: '1rem auto 0' }}>
              Todo lo que tu empresa necesita, nada más
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
            {[
              {
                n: '01',
                icon: '🗺️',
                title: 'Rutas Optimizadas',
                desc: 'El sistema calcula automáticamente el recorrido más eficiente entre clientes. Menos gasolina, más servicios al día.',
              },
              {
                n: '02',
                icon: '🧾',
                title: 'Facturación Automática',
                desc: 'Genera facturas legales en un clic una vez completado el servicio. Compatible con normativa española.',
              },
              {
                n: '03',
                icon: '👥',
                title: 'Gestión de Equipo',
                desc: 'Asigna rutas a cada trabajador, ve el estado en tiempo real y gestiona los partes sin llamadas.',
              },
              {
                n: '04',
                icon: '📊',
                title: 'Dashboard en Tiempo Real',
                desc: 'Ve cuánto has facturado este mes, qué clientes necesitan atención y cómo rinde tu equipo.',
              },
              {
                n: '05',
                icon: '📱',
                title: 'App para Operarios',
                desc: 'Tus cristaleros ven sus rutas del día en el móvil. Sin WhatsApp, sin llamadas, sin confusiones.',
              },
              {
                n: '06',
                icon: '🔒',
                title: 'Seguridad Multi-tenant',
                desc: 'Cada empresa tiene sus datos completamente aislados y cifrados. Cumplimiento RGPD incluido.',
              },
            ].map((f) => (
              <div key={f.n} className="card-glass" style={{ padding: '2rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                  <span style={{ fontSize: '2rem' }}>{f.icon}</span>
                  <span className="feature-number">{f.n}</span>
                </div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', marginBottom: '0.75rem' }}>{f.title}</h3>
                <p style={{ color: 'rgba(245,243,239,0.55)', fontSize: '0.9rem', lineHeight: 1.7 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ESTADÍSTICAS / SOCIAL PROOF (GEO) ─── */}
      <section style={{ background: 'rgba(168,213,226,0.04)', borderTop: '1px solid var(--glass-border)', borderBottom: '1px solid var(--glass-border)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <p style={{ fontSize: '0.75rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(245,243,239,0.35)', marginBottom: '3rem' }}>
            Resultados medidos en empresas reales de limpieza
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem' }}>
            {[
              { n: '+35%', label: 'Más servicios al día', sub: 'gracias a la optimización de rutas' },
              { n: '10h', label: 'Ahorradas a la semana', sub: 'en gestión administrativa' },
              { n: '0€', label: 'En errores de facturación', sub: 'con la emisión automática' },
              { n: '4.9★', label: 'Valoración media', sub: 'de empresas activas en Glassy' },
            ].map((s) => (
              <div key={s.n}>
                <p style={{ fontFamily: 'var(--font-display)', fontSize: '3rem', color: 'var(--water)' }}>{s.n}</p>
                <p style={{ fontWeight: 600, marginTop: '0.25rem' }}>{s.label}</p>
                <p style={{ fontSize: '0.8rem', color: 'rgba(245,243,239,0.4)', marginTop: '0.25rem' }}>{s.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PRECIOS ─── */}
      <section id="precios">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span className="badge">Precios</span>
            <h2 className="text-display-lg" style={{ marginTop: '1rem' }}>
              Simple. Sin sorpresas.
            </h2>
            <p style={{ color: 'rgba(245,243,239,0.5)', marginTop: '0.75rem' }}>14 días de prueba gratuita en todos los planes</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', maxWidth: 960, margin: '0 auto' }}>
            {[
              {
                name: 'Autónomo', price: '29', period: '/mes',
                highlight: false,
                features: ['1 usuario', 'Hasta 50 clientes', 'Rutas básicas', 'Facturación automática'],
              },
              {
                name: 'Empresa', price: '69', period: '/mes',
                highlight: true,
                features: ['Hasta 5 usuarios', 'Clientes ilimitados', 'Rutas optimizadas', 'Facturación avanzada', 'Dashboard en tiempo real'],
              },
              {
                name: 'Business', price: '149', period: '/mes',
                highlight: false,
                features: ['Usuarios ilimitados', 'Clientes ilimitados', 'Rutas optimizadas + mapa', 'API & integraciones', 'Soporte prioritario'],
              },
            ].map((plan) => (
              <div key={plan.name} className={plan.highlight ? '' : 'card-glass'} style={{
                padding: '2rem',
                borderRadius: 20,
                position: 'relative',
                ...(plan.highlight ? {
                  background: 'linear-gradient(135deg, var(--water-deep), var(--water-dark))',
                  boxShadow: '0 24px 64px rgba(58,155,189,0.3)',
                } : {}),
              }}>
                {plan.highlight && (
                  <div style={{ position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)' }}>
                    <span className="badge" style={{ background: 'var(--ink)', color: 'var(--water)' }}>Más popular</span>
                  </div>
                )}
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', marginBottom: '0.5rem' }}>{plan.name}</h3>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.25rem', margin: '1.25rem 0' }}>
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: '3rem' }}>{plan.price}€</span>
                  <span style={{ color: plan.highlight ? 'rgba(245,243,239,0.7)' : 'rgba(245,243,239,0.45)', fontSize: '0.9rem' }}>{plan.period}</span>
                </div>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '1.75rem' }}>
                  {plan.features.map((f) => (
                    <li key={f} style={{ fontSize: '0.875rem', color: plan.highlight ? 'rgba(245,243,239,0.85)' : 'rgba(245,243,239,0.6)', display: 'flex', gap: '0.5rem' }}>
                      <span style={{ color: plan.highlight ? 'var(--ink)' : 'var(--water)' }}>✓</span> {f}
                    </li>
                  ))}
                </ul>
                <a href={`${APP_URL}/register?plan=${plan.name.toLowerCase()}`}
                  style={{
                    display: 'block', textAlign: 'center', padding: '0.875rem',
                    borderRadius: 100, fontWeight: 600, fontSize: '0.9rem',
                    textDecoration: 'none', transition: 'all 0.2s ease',
                    ...(plan.highlight ? {
                      background: 'var(--ink)', color: 'var(--paper)',
                    } : {
                      background: 'rgba(168,213,226,0.1)', color: 'var(--water)',
                      border: '1px solid var(--glass-border)',
                    }),
                  }}
                >
                  Empezar gratis
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ (Schema Markup via seo-geo skill) ─── */}
      <section id="faq">
        <div className="container" style={{ maxWidth: 720 }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="badge">Preguntas frecuentes</span>
            <h2 className="text-display-md" style={{ marginTop: '1rem' }}>Resolvemos tus dudas</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {[
              { q: '¿Necesito conocimientos técnicos para usar Glassy?', a: 'No. Glassy está diseñado para empresas de limpieza, no para informáticos. Si sabes usar WhatsApp, sabes usar Glassy. La configuración inicial dura menos de 10 minutos.' },
              { q: '¿Puedo importar mis clientes actuales?', a: 'Sí. Puedes subir un archivo Excel o CSV con tus clientes y Glassy los importa automáticamente. También puedes añadirlos uno a uno desde el móvil.' },
              { q: '¿Cómo funciona el periodo de prueba?', a: 'Tienes 14 días para probar Glassy con todas las funcionalidades sin límites. No pedimos tarjeta de crédito hasta que decidas continuar.' },
              { q: '¿Puedo usarlo desde el móvil?', a: 'Sí. La versión web está optimizada para móvil. Tus operarios pueden ver sus rutas del día sin necesidad de instalar nada.' },
              { q: '¿Mis datos están seguros?', a: 'Absolutamente. Cada empresa tiene sus datos completamente aislados y cifrados. Cumplimos con el RGPD europeo y nunca compartimos tus datos con terceros.' },
            ].map((faq, i) => (
              <details key={i} className="card-glass" style={{ padding: '1.25rem 1.5rem', cursor: 'pointer' }}>
                <summary style={{ fontWeight: 600, fontSize: '0.95rem', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  {faq.q}
                  <span style={{ color: 'var(--water)', marginLeft: '1rem', flexShrink: 0 }}>+</span>
                </summary>
                <p style={{ marginTop: '1rem', color: 'rgba(245,243,239,0.6)', fontSize: '0.9rem', lineHeight: 1.7 }}>{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA FINAL ─── */}
      <section style={{ background: 'rgba(168,213,226,0.05)', borderTop: '1px solid var(--glass-border)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div style={{
            display: 'inline-block', padding: '3rem', borderRadius: 24,
            background: 'linear-gradient(135deg, rgba(58,155,189,0.15), rgba(26,106,138,0.1))',
            border: '1px solid var(--glass-border)',
            maxWidth: 640, margin: '0 auto',
          }}>
            <h2 className="text-display-md">
              Empieza a digitalizar tu empresa hoy
            </h2>
            <p style={{ color: 'rgba(245,243,239,0.55)', marginTop: '1rem', lineHeight: 1.7 }}>
              Únete a cientos de cristaleros que ya ahorran horas cada semana con Glassy.
              14 días gratis, sin tarjeta de crédito.
            </p>
            <a href={`${APP_URL}/register`} className="btn-primary" style={{ marginTop: '2rem', display: 'inline-flex', fontSize: '1rem', padding: '1rem 2.5rem' }}>
              Crear mi cuenta gratis →
            </a>
          </div>
        </div>
      </section>

      {/* ─── CIUDADES / SEO Programático (Links internos) ─── */}
      <section style={{ paddingTop: '3rem', paddingBottom: '3rem', borderTop: '1px solid var(--glass-border)' }}>
        <div className="container">
          <p style={{ fontSize: '0.75rem', color: 'rgba(245,243,239,0.25)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.25rem' }}>
            Disponible en toda España y Europa
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {locations.map((loc) => (
              <Link key={loc}
                href={`/software-empresas-limpieza-${loc}`}
                style={{
                  fontSize: '0.78rem', padding: '0.35rem 0.875rem',
                  borderRadius: 100, background: 'rgba(168,213,226,0.06)',
                  border: '1px solid rgba(168,213,226,0.12)',
                  color: 'rgba(245,243,239,0.45)',
                  textDecoration: 'none', transition: 'all 0.2s',
                  textTransform: 'capitalize',
                }}
              >
                {loc.replace(/-/g, ' ')}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer style={{ 
        borderTop: '1px solid var(--glass-border)', 
        padding: '2.5rem 1.5rem',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        flexWrap: 'wrap', gap: '1rem',
        maxWidth: 1200, margin: '0 auto',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
          <div style={{
            width: 28, height: 28, borderRadius: 7,
            background: 'linear-gradient(135deg, var(--water-dark), var(--water-deep))',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '0.875rem', fontFamily: 'var(--font-display)', color: 'white', fontWeight: 'bold'
          }}>G</div>
          <span style={{ fontFamily: 'var(--font-display)', color: 'rgba(245,243,239,0.6)', fontSize: '0.9rem' }}>Glassy © 2026</span>
        </div>
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          {['Política de Privacidad', 'Términos de Uso', 'Contacto'].map((l) => (
            <span key={l} style={{ fontSize: '0.8rem', color: 'rgba(245,243,239,0.3)', cursor: 'pointer' }}>{l}</span>
          ))}
        </div>
      </footer>

      {/* ─── Schema FAQ JSON-LD ─── */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          { '@type': 'Question', name: '¿Necesito conocimientos técnicos para usar Glassy?', acceptedAnswer: { '@type': 'Answer', text: 'No. Glassy está diseñado para empresas de limpieza. Si sabes usar WhatsApp, sabes usar Glassy. La configuración inicial dura menos de 10 minutos.' } },
          { '@type': 'Question', name: '¿Puedo importar mis clientes actuales?', acceptedAnswer: { '@type': 'Answer', text: 'Sí. Puedes subir un archivo Excel o CSV con tus clientes y Glassy los importa automáticamente.' } },
          { '@type': 'Question', name: '¿Cómo funciona el periodo de prueba?', acceptedAnswer: { '@type': 'Answer', text: 'Tienes 14 días para probar Glassy con todas las funcionalidades sin límites. No pedimos tarjeta de crédito hasta que decidas continuar.' } },
          { '@type': 'Question', name: '¿Mis datos están seguros?', acceptedAnswer: { '@type': 'Answer', text: 'Absolutamente. Cada empresa tiene sus datos completamente aislados y cifrados. Cumplimos con el RGPD europeo.' } },
        ],
      })}} />
    </>
  );
}
