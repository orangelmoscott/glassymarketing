import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const dynamic = 'force-static';

export const metadata = {
  title: 'Política de Cookies | Glassy',
  description: 'Detalles sobre las cookies y tecnologías similares utilizadas en el sitio web de Glassy para mejorar tu experiencia.',
  alternates: {
    canonical: 'https://glassy.es/cookies/',
  },
};

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-[#f6f9fc] font-sans">
      <Header />
      
      <main className="pt-32 pb-24 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-white rounded-3xl p-8 md:p-16 border border-[#e3e8ee] shadow-sm">
            <h1 className="text-4xl md:text-5xl font-bold text-[#0a2540] mb-4">
              Política de Cookies
            </h1>
            <p className="text-[#697386] font-bold text-sm mb-12">
              Última actualización: 30 de junio de 2026
            </p>

            <div className="prose prose-indigo max-w-none text-[#425466] space-y-8 leading-relaxed">
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-[#0a2540]">1. ¿Qué son las Cookies?</h2>
                <p>
                  Una cookie es un fichero que se descarga en su ordenador o dispositivo móvil al acceder a determinadas páginas web o aplicaciones. Las cookies permiten a una página web, entre otras cosas, almacenar y recuperar información sobre los hábitos de navegación de un usuario o de su equipo y, dependiendo de la información que contengan y de la forma en que utilice su equipo, pueden utilizarse para reconocer al usuario.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-[#0a2540]">2. ¿Qué tipos de cookies utiliza este sitio web?</h2>
                <p>
                  Glassy utiliza cookies propias y de terceros para optimizar el rendimiento técnico, analizar la usabilidad de la web y recordar tus preferencias. A continuación, detallamos las cookies empleadas:
                </p>
                <ul className="list-disc pl-5 space-y-4">
                  <li>
                    <strong>Cookies Técnicas y Estrictamente Necesarias:</strong> Son aquellas que permiten al usuario la navegación a través de una página web y la utilización de las diferentes opciones o servicios que en ella existan (como el control del tráfico, identificar la sesión, realizar solicitudes de registro, o facilitar pagos seguros a través de Stripe).
                  </li>
                  <li>
                    <strong>Cookies de Análisis (Google Analytics & Microsoft Clarity):</strong> Son aquellas que nos permiten cuantificar el número de usuarios y realizar la medición y análisis estadístico de la utilización que hacen los usuarios de la web. Para ello se analiza su navegación en nuestro sitio con el fin de introducir mejoras en la oferta de productos o servicios que le ofrecemos.
                  </li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-[#0a2540]">3. Gestión y Desactivación de Cookies</h2>
                <p>
                  El usuario puede permitir, bloquear o eliminar las cookies instaladas en su equipo mediante la configuración de las opciones del navegador instalado en su ordenador o dispositivo.
                </p>
                <p>
                  A continuación, te facilitamos los enlaces de ayuda de los principales navegadores del mercado para que puedas consultar cómo gestionar las cookies:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">Google Chrome</a></li>
                  <li><a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">Apple Safari</a></li>
                  <li><a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">Mozilla Firefox</a></li>
                  <li><a href="https://support.microsoft.com/es-es/windows/eliminar-y-administrar-cookies-168dab11-0753-043d-7c16-ede5947fc64d" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">Microsoft Edge</a></li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-[#0a2540]">4. Consentimiento y Aceptación</h2>
                <p>
                  Al utilizar este sitio web sin desactivar previamente las cookies opcionales, consientes el tratamiento de la información obtenida conforme a las finalidades indicadas en esta política.
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
