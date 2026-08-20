'use client';

import { Heart, Sparkles, Flame, Scale } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

const values = [
  {
    icon: Heart,
    title: 'Amour',
    desc: "L'amour de Dieu répandu dans nos cœurs est le fondement de notre communion et de notre service.",
  },
  {
    icon: Sparkles,
    title: 'Sainteté',
    desc: 'Une vie consacrée, séparée du monde pour refléter le caractère de Christ dans notre quotidien.',
  },
  {
    icon: Flame,
    title: 'Puissance',
    desc: "La puissance du Saint-Esprit qui transforme les vies, guérit les cœurs et accomplit des miracles.",
  },
  {
    icon: Scale,
    title: 'Équilibre',
    desc: "Un ministère ancré dans la Parole, alliant profondeur spirituelle et pertinence pratique.",
  },
];

export default function Values() {
  const { ref, visible } = useReveal();

  return (
    <section id="valeurs" className="relative py-24 sm:py-32 bg-primary-900">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref} className={`reveal ${visible ? 'reveal-visible' : ''} text-center mb-16`}>
          <p className="text-accent-400 text-sm font-semibold tracking-[0.25em] uppercase mb-3">Nos Valeurs</p>
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-primary-50 mb-4">Les piliers de notre foi</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-accent-500 to-transparent mx-auto" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => {
            const Icon = v.icon;
            return (
              <div
                key={v.title}
                className={`reveal ${visible ? 'reveal-visible' : ''} group relative p-8 rounded-2xl bg-primary-800/50 border border-primary-700 hover:border-accent-400/50 transition-all duration-500 hover:-translate-y-2`}
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent-400/20 to-accent-600/10 flex items-center justify-center mb-6 group-hover:from-accent-400/30 group-hover:to-accent-600/20 transition-colors">
                  <Icon className="w-8 h-8 text-accent-400" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-serif font-semibold text-primary-50 mb-3">{v.title}</h3>
                <p className="text-primary-300 leading-relaxed text-sm">{v.desc}</p>
                <div className="absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl bg-gradient-to-r from-accent-400 to-accent-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
