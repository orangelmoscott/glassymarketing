import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Calendar, User, Clock, ArrowLeft } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { posts } from '../posts-data';

export const dynamic = 'force-static';

const APP_URL = 'https://app.glassy.es';

export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};

  return {
    title: `${post.title} | Blog Glassy`,
    description: post.description,
    alternates: {
      canonical: `https://glassy.es/blog/${post.slug}/`,
    },
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.description,
    "datePublished": post.date,
    "author": {
      "@type": "Person",
      "name": post.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "Glassy SaaS",
      "logo": {
        "@type": "ImageObject",
        "url": "https://glassy.es/favicon.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://glassy.es/blog/${post.slug}/`
    }
  };

  return (
    <div className="min-h-screen bg-[#f6f9fc] font-['Figtree'] text-[#0a2540] overflow-x-hidden selection:bg-indigo-100 selection:text-indigo-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <Header />

      {/* Main Content Container */}
      <article className="pt-40 pb-24 bg-white">
        <div className="container mx-auto px-6 max-w-3xl">
          
          {/* Back button */}
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-bold text-[#635bff] hover:text-[#0a2540] transition-colors mb-10 group">
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Volver al blog
          </Link>

          {/* Article Header */}
          <header className="mb-12 border-b border-[#f6f9fc] pb-10">
            <span className="bg-indigo-50 text-[#635bff] text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider mb-6 inline-block">
              {post.category}
            </span>
            
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-8 leading-tight">
              {post.title}
            </h1>

            {/* Author and metadata */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-[#697386] font-semibold">
              <span className="flex items-center gap-1.5">
                <User size={16} /> {post.author}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar size={16} /> {post.date}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock size={16} /> {post.readTime}
              </span>
            </div>
          </header>

          {/* Body Content */}
          <div 
            className="prose prose-lg max-w-none text-[#425466] leading-relaxed space-y-6 font-medium"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* CTA Box inside Article */}
          <div className="mt-16 bg-[#f6f9fc] rounded-[32px] p-8 md:p-12 border border-[#e3e8ee] text-center">
            <h3 className="text-2xl md:text-3xl font-extrabold text-[#0a2540] mb-4">¿Quieres profesionalizar tu negocio?</h3>
            <p className="text-[#697386] text-sm md:text-base leading-relaxed mb-8 max-w-xl mx-auto font-medium">
              Con Glassy puedes calcular presupuestos en segundos, optimizar rutas y facturar legalmente con VeriFactu desde tu móvil.
            </p>
            <a href={`${APP_URL}/register`}>
              <button className="bg-[#635bff] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#0a2540] transition-all shadow-lg shadow-indigo-100 active:scale-95 text-sm">
                Probar Glassy 14 días gratis
              </button>
            </a>
          </div>

        </div>
      </article>

      <Footer />
    </div>
  );
}
