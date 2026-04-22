import Link from 'next/link';
import { notFound } from 'next/navigation';

const APP_URL = 'https://app.glassy.es';

const locations = [
  { slug: 'madrid', name: 'Madrid', region: 'Comunidad de Madrid' },
  { slug: 'barcelona', name: 'Barcelona', region: 'Cataluña' },
  { slug: 'valencia', name: 'Valencia', region: 'Comunidad Valenciana' },
  { slug: 'sevilla', name: 'Sevilla', region: 'Andalucía' },
  { slug: 'zaragoza', name: 'Zaragoza', region: 'Aragón' },
  { slug: 'malaga', name: 'Málaga', region: 'Andalucía' },
  { slug: 'murcia', name: 'Murcia', region: 'Región de Murcia' },
  { slug: 'bilbao', name: 'Bilbao', region: 'País Vasco' },
  { slug: 'alicante', name: 'Alicante', region: 'Comunidad Valenciana' },
  { slug: 'cordoba', name: 'Córdoba', region: 'Andalucía' },
  { slug: 'valladolid', name: 'Valladolid', region: 'Castilla y León' },
  { slug: 'vigo', name: 'Vigo', region: 'Galicia' },
  { slug: 'gijon', name: 'Gijón', region: 'Asturias' },
  { slug: 'palma-de-mallorca', name: 'Palma de Mallorca', region: 'Islas Baleares' },
  { slug: 'las-palmas', name: 'Las Palmas', region: 'Canarias' },
  { slug: 'inglaterra', name: 'Inglaterra', region: 'Reino Unido' },
  { slug: 'italia', name: 'Italia', region: 'Europa' },
  { slug: 'francia', name: 'Francia', region: 'Europa' },
  { slug: 'portugal', name: 'Portugal', region: 'Europa' },
  { slug: 'alemania', name: 'Alemania', region: 'Europa' },
  { slug: 'holanda', name: 'Holanda', region: 'Europa' },
  { slug: 'suiza', name: 'Suiza', region: 'Europa' },
];

// Generar rutas estáticas para máximo SEO (HTML puro, sin JavaScript requerido)
export async function generateStaticParams() {
  return locations.map((loc) => ({ ciudad: loc.slug }));
}

// Generar metadata dinámica por ciudad
export async function generateMetadata({ params }) {
  const { ciudad } = await params;
  const loc = locations.find((l) => l.slug === ciudad);
  if (!loc) return {};

  return {
    title: `Software para Empresas de Limpieza de Cristales en ${loc.name} | Glassy`,
    description: `Glassy es el software nº1 para cristaleros en ${loc.name}. Optimiza rutas por ${loc.region}, automatiza facturas y gestiona tu equipo desde el móvil. Prueba 14 días gratis.`,
    alternates: { canonical: `https://glassy.es/software-empresas-limpieza-${loc.slug}` },
    openGraph: {
      title: `Software de Limpieza de Cristales en ${loc.name} | Glassy`,
      description: `El software que usan las empresas de cristalería en ${loc.name} para ahorrar horas cada semana.`,
      url: `https://glassy.es/software-empresas-limpieza-${loc.slug}`,
    },
  };
}

export default async function CityPage({ params }) {
  const { ciudad } = await params;
  const loc = locations.find((l) => l.slug === ciudad);

  if (!loc) notFound();

  const { name, region } = loc;

  // Schema de LocalBusiness por ciudad
  const localSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: `Glassy - Software de Limpieza en ${name}`,
    applicationCategory: 'BusinessApplication',
    description: `Software de gestión para empresas de limpieza de cristales en ${name}, ${region}`,
    url: `https://glassy.es/software-empresas-limpieza-${ciudad}`,
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR', description: 'Prueba gratuita 14 días' },
    areaServed: { '@type': 'Place', name: name },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localSchema) }} />

      {/* ─── NAV ─── */}
      <nav style={{ padding: '1.25rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--glass-border)', background: 'rgba(12,15,18,0.9)', backdropFilter: 'blur(20px)' }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }}>
          <div style={{ width: 36, height: 36, borderRadius: 10, background: 'linear-gradient(135deg, var(--water-dark), var(--water-deep))', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-display)', color: 'white', fontWeight: 'bold', fontSize: '1.1rem' }}>G</div>
          <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', color: 'var(--paper)' }}>Glassy</span>
        </Link>
        <a href={`${APP_URL}/register`} className="btn-primary" style={{ padding: '0.625rem 1.25rem', fontSize: '0.875rem' }}>
          Prueba gratis →
        </a>
      </nav>

      {/* ─── HERO ─── */}
      <section style={{ paddingTop: '5rem', paddingBottom: '4rem', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-20%', right: '-10%', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(58,155,189,0.1) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div className="container">
          <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'rgba(245,243,239,0.4)', fontSize: '0.85rem', textDecoration: 'none', marginBottom: '2rem' }}>
            ← Volver al inicio
          </Link>
          <span className="badge">{region}</span>
          <h1 className="text-display-lg animate-fade-up" style={{ marginTop: '1rem', maxWidth: 720 }}>
            Software de limpieza de cristales en{' '}
            <em style={{ color: 'var(--water)', fontStyle: 'italic' }}>{name}</em>
          </h1>
          <p className="animate-fade-up delay-100" style={{ marginTop: '1.25rem', maxWidth: 580, color: 'rgba(245,243,239,0.6)', lineHeight: 1.8, fontSize: '1.05rem' }}>
            Si tienes una empresa de limpieza en {name}, Glassy es la herramienta que necesitas
            para organizar tus rutas, gestionar a tu equipo y facturar sin esfuerzo.
            Ahorra más de 10 horas a la semana.
          </p>
          <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem', flexWrap: 'wrap' }}>
            <a href={`${APP_URL}/register?plan=basico`} className="btn-primary" style={{ fontSize: '1rem', padding: '1rem 2rem' }}>
              Empezar gratis en {name} →
            </a>
            <Link href="/#precios" className="btn-ghost">Ver planes</Link>
          </div>
          <p style={{ marginTop: '1rem', fontSize: '0.78rem', color: 'rgba(245,243,239,0.3)' }}>
            Sin tarjeta de crédito · 14 días gratis · Cancela cuando quieras
          </p>
        </div>
      </section>

      {/* ─── STATS / GEO Trust signals ─── */}
      <section style={{ paddingTop: '3rem', paddingBottom: '3rem', background: 'rgba(168,213,226,0.04)', borderTop: '1px solid var(--glass-border)', borderBottom: '1px solid var(--glass-border)' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem', textAlign: 'center' }}>
          {[
            { n: '35%', l: `Más servicios al día en ${name}`, sub: 'Rutas optimizadas automáticamente' },
            { n: '10h', l: 'Menos gestión a la semana', sub: 'Facturación y partes en automático' },
            { n: '14 días', l: 'Prueba completamente gratis', sub: 'Sin tarjeta de crédito' },
          ].map((s) => (
            <div key={s.n}>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', color: 'var(--water)' }}>{s.n}</p>
              <p style={{ fontWeight: 600, marginTop: '0.25rem', fontSize: '0.95rem' }}>{s.l}</p>
              <p style={{ fontSize: '0.78rem', color: 'rgba(245,243,239,0.4)', marginTop: '0.25rem' }}>{s.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── CARACTERÍSTICAS ─── */}
      <section>
        <div className="container" style={{ maxWidth: 860 }}>
          <h2 className="text-display-md" style={{ marginBottom: '2.5rem' }}>
            ¿Por qué las empresas de cristalería en {name} nos eligen?
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
            {[
              { icon: '🗺️', title: `Rutas optimizadas por ${name}`, desc: `Glassy calcula el recorrido más eficiente entre tus clientes en ${name}. Menos gasolina y más servicios al día.` },
              { icon: '🧾', title: 'Facturación automática', desc: 'Genera facturas legales al instante sin errors. Compatible con normativa española y europea.' },
              { icon: '👥', title: 'Gestión de operarios', desc: `Asigna rutas a cada trabajador en ${name} y ve el estado de cada servicio en tiempo real.` },
              { icon: '📱', title: 'App para cristaleros', desc: 'Tus trabajadores ven su ruta del día en el móvil. Sin WhatsApp, sin llamadas de coordinación.' },
            ].map((f) => (
              <div key={f.title} className="card-glass" style={{ padding: '1.75rem' }}>
                <span style={{ fontSize: '1.75rem', display: 'block', marginBottom: '0.75rem' }}>{f.icon}</span>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', marginBottom: '0.5rem' }}>{f.title}</h3>
                <p style={{ color: 'rgba(245,243,239,0.55)', fontSize: '0.875rem', lineHeight: 1.7 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section>
        <div className="container" style={{ textAlign: 'center', maxWidth: 600 }}>
          <div style={{ padding: '3rem', borderRadius: 24, background: 'linear-gradient(135deg, rgba(58,155,189,0.15), rgba(26,106,138,0.1))', border: '1px solid var(--glass-border)' }}>
            <h2 className="text-display-md">
              Digitaliza tu empresa en {name} hoy
            </h2>
            <p style={{ marginTop: '1rem', color: 'rgba(245,243,239,0.55)', lineHeight: 1.7, fontSize: '0.95rem' }}>
              14 días de prueba completamente gratis. Sin tarjeta de crédito.
              Empieza a ahorrar tiempo desde el primer día.
            </p>
            <a href={`${APP_URL}/register`} className="btn-primary" style={{ marginTop: '1.75rem', display: 'inline-flex', fontSize: '1rem', padding: '1rem 2.5rem' }}>
              Crear mi cuenta gratis →
            </a>
          </div>
        </div>
      </section>

      {/* ─── OTRAS CIUDADES ─── */}
      <section style={{ paddingTop: '3rem', paddingBottom: '3rem', borderTop: '1px solid var(--glass-border)' }}>
        <div className="container">
          <p style={{ fontSize: '0.75rem', color: 'rgba(245,243,239,0.25)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem' }}>
            También en
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {locations.filter((l) => l.slug !== ciudad).map((l) => (
              <Link key={l.slug} href={`/software-empresas-limpieza-${l.slug}`}
                style={{ fontSize: '0.78rem', padding: '0.35rem 0.875rem', borderRadius: 100, background: 'rgba(168,213,226,0.06)', border: '1px solid rgba(168,213,226,0.12)', color: 'rgba(245,243,239,0.4)', textDecoration: 'none', transition: 'all 0.2s', textTransform: 'capitalize' }}
              >
                {l.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer style={{ borderTop: '1px solid var(--glass-border)', padding: '2rem 1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', maxWidth: 1200, margin: '0 auto' }}>
        <span style={{ fontFamily: 'var(--font-display)', color: 'rgba(245,243,239,0.35)', fontSize: '0.9rem' }}>Glassy © 2026 — Software para Cristaleros en {name}</span>
        <Link href="/" style={{ fontSize: '0.8rem', color: 'rgba(245,243,239,0.3)', textDecoration: 'none' }}>← Volver a la página principal</Link>
      </footer>
    </>
  );
}
