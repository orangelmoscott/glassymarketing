import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const dynamic = 'force-static';

export const metadata = {
  title: 'Aviso Legal y Condiciones de Uso | Glassy',
  description: 'Información legal reguladora del acceso y uso del sitio web Glassy.es y su software asociado.',
  alternates: {
    canonical: 'https://glassy.es/aviso-legal/',
  },
};

export default function AvisoLegalPage() {
  return (
    <div className="min-h-screen bg-[#f6f9fc] font-sans">
      <Header />
      
      <main className="pt-32 pb-24 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-white rounded-3xl p-8 md:p-16 border border-[#e3e8ee] shadow-sm">
            <h1 className="text-4xl md:text-5xl font-bold text-[#0a2540] mb-4">
              Aviso Legal
            </h1>
            <p className="text-[#697386] font-bold text-sm mb-12">
              Última actualización: 30 de junio de 2026
            </p>

            <div className="prose prose-indigo max-w-none text-[#425466] space-y-8 leading-relaxed">
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-[#0a2540]">1. Información General</h2>
                <p>
                  En cumplimiento del deber de información contemplado en el artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), se facilitan a continuación los siguientes datos de información general de este sitio web:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>Titular del sitio web:</strong> Orangel Moscott (en adelante, "Glassy")</li>
                  <li><strong>Contacto comercial:</strong> orangelmoscott@users.noreply.github.com</li>
                  <li><strong>Sitio Web Principal:</strong> https://glassy.es</li>
                  <li><strong>Aplicación Asociada:</strong> https://app.glassy.es</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-[#0a2540]">2. Condiciones de Uso y Acceso</h2>
                <p>
                  El acceso y/o uso de este portal atribuye la condición de USUARIO, que acepta, desde dicho acceso y/o uso, las Condiciones Generales de Uso aquí reflejadas.
                </p>
                <p>
                  El sitio web proporciona el acceso a multitud de informaciones, servicios, programas o datos (en adelante, "los contenidos") en Internet pertenecientes a Glassy o a sus licenciantes a los que el USUARIO pueda tener acceso. El USUARIO asume la responsabilidad del uso del portal.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-[#0a2540]">3. Propiedad Intelectual e Industrial</h2>
                <p>
                  Glassy por sí o como cesionaria, es titular de todos los derechos de propiedad intelectual e industrial de su página web, así como de los elementos contenidos en la misma (a título enunciativo, imágenes, sonido, audio, vídeo, software o textos; marcas o logotipos, combinaciones de colores, estructura y diseño, selección de materiales usados, programas de ordenador necesarios para su funcionamiento, acceso y uso, etc.).
                </p>
                <p>
                  Todos los derechos reservados. En virtud de lo dispuesto en los artículos 8 y 32.1, párrafo segundo, de la Ley de Propiedad Intelectual, quedan expresamente prohibidas la reproducción, la distribución y la comunicación pública, incluida su modalidad de puesta a disposición, de la totalidad o parte de los contenidos de esta página web, con fines comerciales, en cualquier soporte y por cualquier medio técnico, sin la autorización de Glassy.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-[#0a2540]">4. Exclusión de Garantías y Responsabilidad</h2>
                <p>
                  Glassy no se hace responsable, en ningún caso, de los daños y perjuicios de cualquier naturaleza que pudieran ocasionar, a título enunciativo: errores u omisiones en los contenidos, falta de disponibilidad del portal o la transmisión de virus o programas maliciosos o lesivos en los contenidos, a pesar de haber adoptado todas las medidas tecnológicas necesarias para evitarlo.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-[#0a2540]">5. Modificaciones</h2>
                <p>
                  Glassy se reserva el derecho de efectuar sin previo aviso las modificaciones que considere oportunas en su portal, pudiendo cambiar, suprimir o añadir tanto los contenidos y servicios que se presten a través de la misma como la forma en la que éstos aparezcan presentados o localizados en su portal.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-[#0a2540]">6. Enlaces de Terceros</h2>
                <p>
                  En el caso de que en glassy.es se dispusiesen enlaces o hipervínculos hacía otros sitios de Internet, Glassy no ejercerá ningún tipo de control sobre dichos sitios y contenidos. En ningún caso Glassy asumirá responsabilidad alguna por los contenidos de algún enlace perteneciente a un sitio web ajeno.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-[#0a2540]">7. Legislación Aplicable y Jurisdicción</h2>
                <p>
                  La relación entre Glassy y el USUARIO se regirá por la normativa española vigente y cualquier controversia se someterá a los Juzgados y tribunales de la ciudad de Madrid, España.
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
