import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const dynamic = 'force-static';

export const metadata = {
  title: 'Política de Privacidad y Protección de Datos | Glassy',
  description: 'Consulta cómo tratamos tus datos de forma segura. Cumplimiento con RGPD, integración con Stripe, geolocalización ética y métricas transparentes.',
  alternates: {
    canonical: 'https://glassy.es/privacidad/',
  },
};

export default function PrivacidadPage() {
  return (
    <div className="min-h-screen bg-[#f6f9fc] font-sans">
      <Header />
      
      <main className="pt-32 pb-24 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-white rounded-3xl p-8 md:p-16 border border-[#e3e8ee] shadow-sm">
            <h1 className="text-4xl md:text-5xl font-bold text-[#0a2540] mb-4">
              Política de Privacidad
            </h1>
            <p className="text-[#697386] font-bold text-sm mb-12">
              Última actualización: 30 de junio de 2026
            </p>

            <div className="prose prose-indigo max-w-none text-[#425466] space-y-8 leading-relaxed">
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-[#0a2540]">1. Introducción y Responsable del Tratamiento</h2>
                <p>
                  <strong>Glassy SaaS</strong> es una plataforma tecnológica multi-inquilino (multi-tenant) diseñada para la gestión, optimización de rutas, facturación y control de equipos en empresas de limpieza de cristales.
                </p>
                <p>
                  Esta Política explica cómo tratamos los datos de los <strong>Inquilinos (Tenants)</strong>, de los <strong>Empleados/Operarios (Workers)</strong> registrados por los inquilinos, y de los <strong>Clientes Finales</strong> de dichos inquilinos.
                </p>
              </section>

              <section className="space-y-6">
                <h2 className="text-2xl font-bold text-[#0a2540]">2. Categorías de Datos Tratados y su Finalidad</h2>
                <p>Tratamos datos bajo tres perfiles distintos:</p>
                
                <div className="space-y-4 pl-4 border-l-2 border-indigo-500">
                  <h3 className="text-lg font-bold text-[#0a2540]">A. Datos del Inquilino (Suscripción al SaaS)</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li><strong>Datos recopilados:</strong> Nombre de la empresa, CIF/NIF, correo electrónico comercial, dirección de facturación, nombre del administrador.</li>
                    <li><strong>Finalidad:</strong> Creación de cuenta, provisión del servicio de software, comunicaciones administrativas y soporte técnico.</li>
                  </ul>
                </div>

                <div className="space-y-4 pl-4 border-l-2 border-indigo-500">
                  <h3 className="text-lg font-bold text-[#0a2540]">B. Datos de los Empleados/Operarios (Workers)</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li><strong>Datos recopilados:</strong> Nombre completo, correo electrónico, rol dentro del sistema, asignaciones de trabajo e historial de servicios realizados.</li>
                    <li><strong>Geolocalización en Tiempo Real y Rutas:</strong> La aplicación de Glassy recopila y procesa datos de geolocalización y ubicaciones de los operarios para calcular y optimizar las rutas de servicio diarias en el mapa, registrar el inicio/cierre de tareas y asegurar el cumplimiento de la asistencia al cliente.</li>
                  </ul>
                  <p className="text-sm bg-indigo-50/50 p-4 rounded-xl border border-indigo-100 text-indigo-950 font-medium">
                    <em>Nota Legal:</em> El rastreo de geolocalización de empleados solo se realiza durante su jornada laboral, con fines de optimización organizativa y de seguridad, requiriendo que la empresa inquilina obtenga previamente los consentimientos laborales e informe a sus trabajadores de acuerdo con la legislación vigente.
                  </p>
                </div>

                <div className="space-y-4 pl-4 border-l-2 border-indigo-500">
                  <h3 className="text-lg font-bold text-[#0a2540]">C. Datos de los Clientes Finales del Inquilino</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li><strong>Datos recopilados:</strong> Nombre del cliente, correo electrónico, teléfono, dirección del domicilio/oficina y firmas digitales de confirmación de servicio.</li>
                    <li><strong>Finalidad:</strong> Proveer al Inquilino una base de datos para organizar sus servicios, generar facturas automáticas en PDF y permitir al cliente firmar la realización correcta del trabajo.</li>
                  </ul>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-[#0a2540]">3. Política de Pagos y Seguridad Financiera (Stripe)</h2>
                <p>Los pagos y suscripciones de Glassy SaaS se procesan de forma estrictamente segura:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>Pasarela de Pago:</strong> Delegamos todo el procesamiento de cobros y facturación recurrente en <strong>Stripe, Inc.</strong></li>
                  <li><strong>Seguridad de las Tarjetas:</strong> <strong>Glassy no almacena, procesa ni registra en sus servidores ningún número de tarjeta de crédito, código CVC o fecha de vencimiento.</strong> Stripe maneja esta información de forma cifrada en cumplimiento de la normativa de seguridad PCI-DSS. Glassy solo recibe un token de transacción seguro para validar si la suscripción está activa.</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-[#0a2540]">4. Herramientas de Análisis de Terceros (Clarity y Analytics)</h2>
                <p>Utilizamos tecnologías de seguimiento en la plataforma SaaS para mejorar la experiencia de usuario y detectar errores de la aplicación:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>Microsoft Clarity:</strong> Registra la interacción del usuario en el panel (mapas de calor, clics y grabaciones de sesión) para comprender la usabilidad del software y detectar cuellos de botella en la interfaz. Toda la información personal sensible está enmascarada por defecto por Clarity.</li>
                  <li><strong>Google Analytics:</strong> Monitoriza las visitas a la página de marketing de Glassy y el uso general de la plataforma con fines estadísticos y de marketing.</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-[#0a2540]">5. Confidencialidad y Seguridad de los Datos Multi-Tenant</h2>
                <p>
                  Glassy utiliza mecanismos avanzados de aislamiento de base de datos a nivel de software para garantizar que la información de un inquilino no pueda ser accedida bajo ninguna circunstancia por otros inquilinos de la plataforma.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-[#0a2540]">6. Derechos de los Interesados (GDPR)</h2>
                <p>
                  Los administradores del SaaS pueden ejercer sus derechos de acceso, rectificación, portabilidad y supresión directamente desde su panel de configuración o enviando un correo al correo de soporte de Glassy. Los clientes finales de los inquilinos deberán ejercer sus derechos directamente ante la empresa inquilina que presta el servicio de limpieza.
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
