'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const APP_URL = 'https://app.glassy.es';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        scrolled ? 'bg-white/80 backdrop-blur-xl border-b border-[#e3e8ee] py-3 shadow-sm' : 'bg-transparent py-6'
      }`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3 group cursor-pointer">
            <div className="w-10 h-10 rounded-xl bg-[#635bff] flex items-center justify-center shadow-lg shadow-indigo-100 group-hover:rotate-12 transition-transform duration-300">
              <span className="text-white font-bold text-xl tracking-tighter">G</span>
            </div>
            <span className="text-2xl font-bold text-[#0a2540] tracking-tight">Glassy</span>
          </Link>
          
          <div className="hidden lg:flex items-center gap-10">
            <Link href="/#features" className="text-sm font-bold text-[#697386] hover:text-[#0a2540] transition-colors">Funcionalidades</Link>
            <Link href="/precios" className="text-sm font-bold text-[#697386] hover:text-[#0a2540] transition-colors">Precios</Link>
            <Link href="/blog" className="text-sm font-bold text-[#697386] hover:text-[#0a2540] transition-colors">Blog</Link>
            <Link href="/directorio" className="text-sm font-bold text-[#697386] hover:text-[#0a2540] transition-colors">Directorio</Link>
            <Link href="/industrias/limpieza-cristales" className="text-sm font-bold text-[#697386] hover:text-[#0a2540] transition-colors">Industria</Link>
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
      {mobileMenu && (
        <div className="fixed inset-0 z-[200] bg-white p-8 flex flex-col">
          <div className="flex justify-between items-center mb-12">
            <span className="text-2xl font-bold text-[#0a2540]">Glassy</span>
            <button onClick={() => setMobileMenu(false)} className="p-2 bg-[#f6f9fc] rounded-lg">
              <X size={24} />
            </button>
          </div>
          <div className="flex flex-col gap-8">
            <Link href="/#features" onClick={() => setMobileMenu(false)} className="text-2xl font-bold text-[#0a2540]">Funcionalidades</Link>
            <Link href="/precios" onClick={() => setMobileMenu(false)} className="text-2xl font-bold text-[#0a2540]">Precios</Link>
            <Link href="/blog" onClick={() => setMobileMenu(false)} className="text-2xl font-bold text-[#0a2540]">Blog</Link>
            <Link href="/directorio" onClick={() => setMobileMenu(false)} className="text-2xl font-bold text-[#0a2540]">Directorio</Link>
            <Link href="/industrias/limpieza-cristales" onClick={() => setMobileMenu(false)} className="text-2xl font-bold text-[#0a2540]">Industria</Link>
            <a href={`${APP_URL}/login`} className="text-2xl font-bold text-[#697386]">Iniciar sesión</a>
            <a href={`${APP_URL}/register`}>
              <button className="w-full bg-[#635bff] text-white py-4 rounded-xl font-bold text-lg">Empezar gratis</button>
            </a>
          </div>
        </div>
      )}
    </>
  );
}
