'use client';

import { Heart, Baby, Building2, ArrowRight } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

const projects = [
  {
    icon: Baby,
    title: 'Orphelinat',
    desc: "Un centre d'accueil pour les enfants abandonnés et orphelins de la ville de Kinshasa, offrant l'excellence et la prise en charge pour leur permettre de rêver à une vie meilleure.",
  },
  {
    icon: Building2,
    title: 'Le Chantier du Temple',
    desc: "Bâtir en plein cœur de l'Afrique, en RDC, un temple pour la gloire de notre Dieu. Un grand réveil pour l'humanité tout entière, selon la vision que Dieu nous a donnée.",
  },
];

export default function Donations() {
  const { ref, visible } = useReveal();

  return (
    <section id="don" className="relative py-24 sm:py-32 bg-primary-950 overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/10438600/pexels-photo-10438600.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt=""
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary-950 via-primary-950/90 to-primary-950" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div ref={ref} className={`reveal ${visible ? 'reveal-visible' : ''} text-center mb-16`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-500/10 border border-accent-400/30 mb-6">
            <Heart className="w-4 h-4 text-accent-400" fill="currentColor" />
            <span className="text-sm text-accent-300 font-medium">Faire un don</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-primary-50 mb-4">Agir pour l'avenir</h2>
          <p className="text-primary-300 max-w-2xl mx-auto leading-relaxed">
            Les dons ponctuels sont une manière simple et concrète d'agir à nos côtés en faveur des personnes
            les plus démunies. En donnant, vous aidez une personne à trouver de la valeur dans cette société.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-accent-500 to-transparent mx-auto mt-6" />
        </div>

        {/* Donation amounts */}
        <div className={`reveal ${visible ? 'reveal-visible' : ''} max-w-3xl mx-auto mb-16`}>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {['10', '25', '50', '100'].map((amount) => (
              <button
                key={amount}
                className="py-5 rounded-2xl bg-primary-800/50 border border-primary-700 hover:border-accent-400 hover:bg-accent-500/10 transition-all group"
              >
                <p className="text-2xl font-serif font-bold text-primary-50 group-hover:text-accent-400 transition-colors">
                  {amount}€
                </p>
              </button>
            ))}
          </div>
          <button className="w-full mt-4 py-4 rounded-2xl bg-primary-800/50 border border-primary-700 hover:border-accent-400 hover:bg-accent-500/10 transition-all text-primary-200 font-medium">
            Autre montant
          </button>
          <button className="w-full mt-4 flex items-center justify-center gap-2 py-4 rounded-2xl bg-gradient-to-r from-accent-500 to-accent-600 text-primary-950 font-semibold hover:shadow-xl hover:shadow-accent-500/40 hover:scale-[1.02] transition-all">
            <Heart className="w-5 h-5" fill="currentColor" />
            Faire mon don maintenant
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* Projects */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className={`reveal ${visible ? 'reveal-visible' : ''} group p-8 rounded-2xl glass border border-primary-700 hover:border-accent-400/40 transition-all`}
                style={{ transitionDelay: `${i * 200}ms` }}
              >
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-accent-500/15 flex items-center justify-center flex-shrink-0 group-hover:bg-accent-500/25 transition-colors">
                    <Icon className="w-7 h-7 text-accent-400" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-xl font-serif font-semibold text-primary-50 mb-3">{p.title}</h3>
                    <p className="text-primary-300 leading-relaxed text-sm">{p.desc}</p>
                    <a href="#contact" className="inline-flex items-center gap-2 mt-4 text-accent-400 text-sm font-medium hover:gap-3 transition-all">
                      En savoir plus <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
