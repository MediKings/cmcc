'use client';

import { BookOpen, Moon, Sun, Flame } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

const programs = [
  {
    day: 'Dimanche',
    icon: Sun,
    title: 'Cultes dominicaux',
    times: [
      { label: '1er Culte', time: '8h00 — 10h30' },
      { label: '2ème Culte (LIVE)', time: '11h30 — 14h00', live: true },
    ],
  },
  {
    day: 'Mercredi',
    icon: BookOpen,
    title: 'École Biblique pour tous',
    times: [{ label: 'Enseignement biblique', time: '17h00 — 19h30' }],
  },
  {
    day: 'Vendredi',
    icon: Moon,
    title: 'Veillée des Vaillants de Feu',
    times: [{ label: 'Veillée de prière', time: '23h00 — 5h00' }],
  },
];

export default function Programs() {
  const { ref, visible } = useReveal();

  return (
    <section id="programmes" className="relative py-24 sm:py-32 bg-primary-900">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref} className={`reveal ${visible ? 'reveal-visible' : ''} text-center mb-16`}>
          <p className="text-accent-400 text-sm font-semibold tracking-[0.25em] uppercase mb-3">Nos Programmes</p>
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-primary-50 mb-4">Nos rendez-vous hebdomadaires</h2>
          <p className="text-primary-300 max-w-2xl mx-auto leading-relaxed">
            Découvrez un programme riche en enseignements bibliques, en prières ferventes et en partages
            fraternels. Ensemble, avançons dans la foi et glorifions Dieu dans la joie et l'amour.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-accent-500 to-transparent mx-auto mt-6" />
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {programs.map((p, i) => {
            const Icon = p.icon;
            return (
              <div
                key={p.day}
                className={`reveal ${visible ? 'reveal-visible' : ''} group relative p-8 rounded-2xl bg-gradient-to-b from-primary-800/60 to-primary-800/20 border border-primary-700 hover:border-accent-400/40 transition-all duration-500`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-xl bg-primary-950/60 flex items-center justify-center group-hover:bg-accent-600/20 transition-colors">
                    <Icon className="w-7 h-7 text-accent-400" strokeWidth={1.5} />
                  </div>
                  <span className="text-xs font-semibold tracking-[0.2em] uppercase text-accent-400 px-3 py-1 rounded-full border border-accent-400/30">
                    {p.day}
                  </span>
                </div>

                <h3 className="text-xl font-serif font-semibold text-primary-50 mb-5">{p.title}</h3>

                <div className="space-y-4">
                  {p.times.map((t) => (
                    <div key={t.label} className="flex items-center justify-between border-b border-primary-700/50 pb-3 last:border-0">
                      <div>
                        <p className="text-primary-100 font-medium text-sm flex items-center gap-2">
                          {t.label}
                          {t.live && (
                            <span className="flex items-center gap-1 text-red-400 text-xs">
                              <Flame className="w-3 h-3" fill="currentColor" />
                              LIVE
                            </span>
                          )}
                        </p>
                      </div>
                      <p className="text-primary-300 text-sm font-mono">{t.time}</p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Live banner */}
        <div className={`reveal ${visible ? 'reveal-visible' : ''} mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-primary-800 to-primary-900 border border-accent-400/20 flex flex-col sm:flex-row items-center justify-between gap-4`} style={{ transitionDelay: '500ms' }}>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center">
              <span className="w-3 h-3 rounded-full bg-red-500 animate-pulse" />
            </div>
            <div>
              <p className="text-primary-50 font-semibold">Diffusion en direct sur Facebook & YouTube</p>
              <p className="text-primary-300 text-sm">Mercredis et vendredis à partir de 18h00 · Dimanches à partir de 10h30</p>
            </div>
          </div>
          <a
            href="#contact"
            className="px-6 py-3 rounded-full bg-accent-500 text-primary-950 font-semibold text-sm hover:bg-accent-400 transition-colors whitespace-nowrap"
          >
            Suivre le live
          </a>
        </div>
      </div>
    </section>
  );
}
