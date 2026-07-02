import React from 'react';
import Link from 'next/link';
import { Calendar, User, Clock, ChevronRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { posts } from './posts-data';

export const dynamic = 'force-static';

export const metadata = {
  title: 'Blog de Consejos y Gestión para Cristaleros | Glassy',
  description: 'Aprende a gestionar tu empresa de limpieza de cristales. Estrategias de precios, guiones de ventas, plantillas de presupuestos y noticias del sector.',
  alternates: {
    canonical: 'https://glassy.es/blog/',
  },
};

export default function BlogListPage() {
  return (
    <div className="min-h-screen bg-[#f6f9fc] font-['Figtree'] text-[#0a2540] overflow-x-hidden selection:bg-indigo-100 selection:text-indigo-900">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-48 pb-16 bg-white text-center">
        <div className="container mx-auto px-6 relative z-10">
          <h1 className="text-5xl md:text-7xl font-extrabold text-[#0a2540] tracking-tight mb-6">
            Blog para Cristaleros
          </h1>
          <p className="text-xl text-[#697386] font-medium max-w-2xl mx-auto">
            Consejos de negocio, guías comerciales, fijación de precios y tecnología para empresas de limpieza de cristales.
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {posts.map((post, i) => (
              <div key={i} className="bg-[#f6f9fc] rounded-3xl border border-[#e3e8ee] overflow-hidden hover:border-[#635bff] transition-all hover:shadow-xl hover:shadow-indigo-100/20 group flex flex-col justify-between">
                <div className="p-8">
                  {/* Category & Read Time */}
                  <div className="flex justify-between items-center mb-6">
                    <span className="bg-indigo-50 text-[#635bff] text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                      {post.category}
                    </span>
                    <span className="text-xs text-[#697386] font-bold flex items-center gap-1">
                      <Clock size={12} /> {post.readTime}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-[#0a2540] mb-4 group-hover:text-[#635bff] transition-colors leading-tight">
                    {post.title}
                  </h3>
                  
                  <p className="text-[#697386] text-sm leading-relaxed font-medium mb-6">
                    {post.description}
                  </p>
                </div>

                <div className="px-8 pb-8">
                  <div className="border-t border-[#e3e8ee] pt-6 flex justify-between items-center">
                    <div className="flex items-center gap-2 text-xs text-[#697386] font-semibold">
                      <User size={12} />
                      <span>{post.author}</span>
                    </div>
                    <Link href={`/blog/${post.slug}`} className="text-sm font-bold text-[#635bff] flex items-center gap-1 group-hover:gap-2 transition-all">
                      Leer artículo <ChevronRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
