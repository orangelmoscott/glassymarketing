export const dynamic = 'force-static';

export default function sitemap() {
  const baseUrl = 'https://glassy.es';
  const currentDate = new Date().toISOString().split('T')[0];

  const staticPages = [
    { url: baseUrl, lastModified: currentDate, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${baseUrl}/precios/`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/blog/`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/llm-info/`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.3 },
    { url: `${baseUrl}/industrias/limpieza-cristales/`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/funciones/presupuestos/`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/funciones/rutas/`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/funciones/facturacion/`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/funciones/clientes/`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/funciones/operarios/`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/privacidad/`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.3 },
    { url: `${baseUrl}/aviso-legal/`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.3 },
    { url: `${baseUrl}/cookies/`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.3 },
  ];

  // Blog posts
  const blogPosts = [
    'como-hacer-presupuesto-limpieza-cristales',
    'precios-limpieza-cristales-como-cobrar',
    'guion-ventas-canvassing-cristaleros',
  ].map(slug => ({
    url: `${baseUrl}/blog/${slug}/`,
    lastModified: currentDate,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  // Cities
  const cities = [
    'madrid', 'barcelona', 'valencia', 'sevilla', 'zaragoza',
    'malaga', 'murcia', 'bilbao', 'alicante', 'cordoba',
    'valladolid', 'vigo', 'gijon', 'palma-de-mallorca', 'las-palmas',
    'inglaterra', 'italia', 'francia', 'portugal', 'alemania',
    'holanda', 'suiza'
  ].map(city => ({
    url: `${baseUrl}/software-empresas-limpieza-${city}/`,
    lastModified: currentDate,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [...staticPages, ...blogPosts, ...cities];
}
