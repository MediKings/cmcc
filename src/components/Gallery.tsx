'use client';

import { useState } from 'react';
import { Play, X } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

const galleryItems = [
  {
    src: 'https://images.pexels.com/photos/34328517/pexels-photo-34328517.jpeg?auto=compress&cs=tinysrgb&w=1200',
    title: 'Culte de louange',
    category: 'Dimanche',
  },
  {
    src: 'https://images.pexels.com/photos/30550589/pexels-photo-30550589.jpeg?auto=compress&cs=tinysrgb&w=1200',
    title: 'Chorale & louange',
    category: 'Musique',
  },
  {
    src: 'https://images.pexels.com/photos/9589377/pexels-photo-9589377.jpeg?auto=compress&cs=tinysrgb&w=1200',
    title: 'Enseignement biblique',
    category: 'Mercredi',
  },
  {
    src: 'https://images.pexels.com/photos/34623696/pexels-photo-34623696.jpeg?auto=compress&cs=tinysrgb&w=1200',
    title: 'Communion fraternelle',
    category: 'Communauté',
  },
  {
    src: 'https://images.pexels.com/photos/36425621/pexels-photo-36425621.jpeg?auto=compress&cs=tinysrgb&w=1200',
    title: 'Veillée de prière',
    category: 'Vendredi',
  },
  {
    src: 'https://images.pexels.com/photos/7520347/pexels-photo-7520347.jpeg?auto=compress&cs=tinysrgb&w=1200',
    title: 'Chorale sous la lumière',
    category: 'Musique',
  },
];

export default function Gallery() {
  const { ref, visible } = useReveal();
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="galerie" className="relative py-24 sm:py-32 bg-primary-900">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref} className={`reveal ${visible ? 'reveal-visible' : ''} text-center mb-16`}>
          <p className="text-accent-400 text-sm font-semibold tracking-[0.25em] uppercase mb-3">Média</p>
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-primary-50 mb-4">Notre galerie</h2>
          <p className="text-primary-300 max-w-2xl mx-auto leading-relaxed">
            Revivez les instants inspirants de nos cultes, enseignements et temps forts de l'Église La Compassion.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-accent-500 to-transparent mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {galleryItems.map((item, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`reveal ${visible ? 'reveal-visible' : ''} group relative overflow-hidden rounded-2xl aspect-[4/3] cursor-pointer`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-950/80 via-primary-950/20 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-14 h-14 rounded-full bg-accent-500/90 flex items-center justify-center">
                  <Play className="w-6 h-6 text-primary-950" fill="currentColor" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 text-left">
                <p className="text-accent-400 text-xs font-semibold tracking-wide uppercase">{item.category}</p>
                <p className="text-primary-50 font-serif font-semibold">{item.title}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {active !== null && (
        <div
          className="fixed inset-0 z-[100] bg-primary-950/95 flex items-center justify-center p-6 animate-fade-in"
          onClick={() => setActive(null)}
        >
          <button className="absolute top-6 right-6 text-primary-50 hover:text-accent-400 transition-colors" aria-label="Fermer">
            <X className="w-8 h-8" />
          </button>
          <div className="max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <img src={galleryItems[active].src} alt={galleryItems[active].title} className="w-full rounded-2xl" />
            <div className="mt-4 text-center">
              <p className="text-accent-400 text-sm font-semibold tracking-wide uppercase">{galleryItems[active].category}</p>
              <p className="text-primary-50 font-serif text-xl">{galleryItems[active].title}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
