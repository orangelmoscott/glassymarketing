'use client';

import Link from 'next/link';
import { Globe } from 'lucide-react';

const APP_URL = 'https://app.glassy.es';

export default function Footer() {
  return (
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
              <Link href="/#features" className="hover:text-white">Funcionalidades</Link>
              <Link href="/precios" className="hover:text-white">Precios</Link>
              <Link href="/directorio" className="hover:text-white">Directorio</Link>
              <a href={`${APP_URL}/register`} className="hover:text-white">Registro</a>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="font-bold uppercase tracking-widest text-xs text-white/40">Legal</h4>
            <div className="flex flex-col gap-4 text-white/60 text-sm font-bold">
              <Link href="/privacidad" className="hover:text-white">Privacidad</Link>
              <Link href="/aviso-legal" className="hover:text-white">Aviso Legal</Link>
              <Link href="/cookies" className="hover:text-white">Cookies</Link>
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
  );
}
