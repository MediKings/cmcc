'use client';

import { MapPin, Users, Globe2 } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

export default function About() {
  const { ref, visible } = useReveal();

  return (
    <section id="histoire" className="relative py-24 sm:py-32 bg-primary-950 overflow-hidden">
      {/* Decorative element */}
      <div className="absolute top-1/2 -right-32 w-96 h-96 rounded-full bg-accent-600/5 blur-3xl" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image side */}
          <div ref={ref} className={`reveal ${visible ? 'reveal-visible' : ''} relative`}>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/36425622/pexels-photo-36425622.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Assemblée en prière"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-950/60 to-transparent" />
            </div>
            {/* Floating stat card */}
            <div className="absolute -bottom-6 -left-6 glass rounded-2xl p-6 shadow-xl border border-accent-400/20">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent-400 to-accent-600 flex items-center justify-center">
                  <Users className="w-7 h-7 text-primary-950" />
                </div>
                <div>
                  <p className="text-3xl font-serif font-bold text-primary-50">38</p>
                  <p className="text-sm text-primary-300">Extensions en RDC</p>
                </div>
              </div>
            </div>
          </div>

          {/* Text side */}
          <div className={`reveal ${visible ? 'reveal-visible' : ''}`} style={{ transitionDelay: '200ms' }}>
            <p className="text-accent-400 text-sm font-semibold tracking-[0.25em] uppercase mb-3">Notre Histoire</p>
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-primary-50 mb-6 leading-tight">
              Une église, plusieurs extensions
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-accent-500 to-transparent mb-8" />

            <p className="text-primary-200 leading-relaxed mb-6 text-lg">
              La Compassion est une communauté chrétienne qui répand l'Évangile de Jésus-Christ avec un
              message d'amour, de sainteté, de puissance et d'équilibre. Elle compte actuellement
              38 extensions à Kinshasa et dans les provinces.
            </p>
            <p className="text-primary-300 leading-relaxed mb-8">
              Nous voulons obéir et faire ce que Jésus nous a recommandé : « Allez et faites de toutes
              les nations des disciples » (Matth. 28:19). C'est pourquoi l'église La Compassion s'ouvre
              progressivement sur toutes les provinces de la République Démocratique du Congo.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex items-center gap-3 px-5 py-4 rounded-xl bg-primary-800/50 border border-primary-700">
                <Globe2 className="w-6 h-6 text-accent-400 flex-shrink-0" />
                <div>
                  <p className="text-primary-50 font-semibold text-sm">Kinshasa & Provinces</p>
                  <p className="text-primary-400 text-xs">Implantation en RDC</p>
                </div>
              </div>
              <div className="flex items-center gap-3 px-5 py-4 rounded-xl bg-primary-800/50 border border-primary-700">
                <MapPin className="w-6 h-6 text-accent-400 flex-shrink-0" />
                <div>
                  <p className="text-primary-50 font-semibold text-sm">2ème rue Limete Industriel</p>
                  <p className="text-primary-400 text-xs">Siège principal, n°6</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
