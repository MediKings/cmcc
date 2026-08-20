import { ChevronDown, Play, Radio } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with slow zoom */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/34328505/pexels-photo-34328505.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Culte de louange"
          className="w-full h-full object-cover animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary-950/80 via-primary-950/60 to-primary-950" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-950/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-20">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-accent-400/30 mb-8 animate-fade-in">
          <Radio className="w-4 h-4 text-accent-400" />
          <span className="text-sm text-accent-300 font-medium">Culte en direct ce dimanche à 11h30</span>
          <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold text-primary-50 leading-[1.1] mb-6 animate-fade-in-up text-balance">
          Amour <span className="gold-text">·</span> Sainteté <span className="gold-text">·</span> Puissance <span className="gold-text">·</span> Équilibre
        </h1>

        <p className="text-lg sm:text-xl text-primary-200 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s', opacity: 0 }}>
          Une communauté chrétienne qui répand l'Évangile de Jésus-Christ avec un message d'amour,
          de sainteté, de puissance et d'équilibre.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.4s', opacity: 0 }}>
          <a
            href="#programmes"
            className="px-8 py-4 rounded-full bg-gradient-to-r from-accent-500 to-accent-600 text-primary-950 font-semibold text-base hover:shadow-xl hover:shadow-accent-500/40 hover:scale-105 transition-all"
          >
            Nos programmes
          </a>
          <a
            href="#histoire"
            className="flex items-center gap-2 px-8 py-4 rounded-full glass border border-primary-600 text-primary-50 font-medium hover:bg-primary-800/60 transition-all"
          >
            <Play className="w-5 h-5 text-accent-400" fill="currentColor" />
            Découvrir l'église
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#valeurs"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-primary-300 hover:text-accent-400 transition-colors animate-float"
        aria-label="Défiler vers le bas"
      >
        <ChevronDown className="w-8 h-8" />
      </a>
    </section>
  );
}
