/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export' activo solo en producción para build estático con Nginx
  ...(process.env.NODE_ENV === 'production' ? { output: 'export' } : {}),
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

