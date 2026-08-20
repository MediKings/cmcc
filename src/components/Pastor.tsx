'use client';

import { Quote } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

export default function Pastor() {
  const { ref, visible } = useReveal();

  return (
    <section id="pasteur" className="relative py-24 sm:py-32 bg-primary-950 overflow-hidden">
      <div className="absolute top-0 left-0 w-72 h-72 rounded-full bg-accent-600/5 blur-3xl" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div ref={ref} className={`reveal ${visible ? 'reveal-visible' : ''} lg:col-span-2 relative`}>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/7219095/pexels-photo-7219095.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Pasteur Marcello Jérémie Tunasi"
                className="w-full h-[560px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-950 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-accent-400 text-sm font-semibold tracking-wide">Pasteur Principal Fondateur</p>
                <h3 className="text-2xl font-serif font-bold text-primary-50">Marcello Jérémie Tunasi</h3>
              </div>
            </div>
            {/* Decorative border */}
            <div className="absolute -inset-3 rounded-3xl border border-accent-400/20 -z-10" />
          </div>

          {/* Text */}
          <div className={`reveal ${visible ? 'reveal-visible' : ''} lg:col-span-3`} style={{ transitionDelay: '200ms' }}>
            <Quote className="w-12 h-12 text-accent-400/30 mb-6" />

            <p className="text-accent-400 text-sm font-semibold tracking-[0.25em] uppercase mb-3">Le Visionnaire</p>
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-primary-50 mb-6 leading-tight">
              Marcello Jérémie Tunasi
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-accent-500 to-transparent mb-8" />

            <p className="text-primary-200 leading-relaxed mb-5 text-lg">
              Marcello Jérémie Tunasi est le Leader de la communauté C.R.E.F.M (Centre de Réveil,
              d'Évangélisation, de Formation et de Mission), Président de Marcello Tunasi Ministries (MT)
              et Fondateur du Noyau Compassion International (NCI).
            </p>
            <p className="text-primary-300 leading-relaxed mb-8">
              Depuis 1998, il est le Pasteur principal fondateur des églises La Compassion dont le siège
              principal se situe à la 2ème rue Limete Industriel, numéro 6 à Kinshasa en République
              Démocratique du Congo. Compositeur de nombreux cantiques spirituels et metteur en scène de
              plusieurs pièces théâtrales, il se révèle être un véritable promoteur des jeunes et un
              passionné de la jeunesse estudiantine.
            </p>

            <div className="flex flex-wrap gap-3">
              {['C.R.E.F.M', 'Marcello Tunasi Ministries', 'Noyau Compassion International'].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 rounded-full bg-primary-800/60 border border-primary-700 text-primary-200 text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
