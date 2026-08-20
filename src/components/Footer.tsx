import { Church, Facebook, Youtube, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-primary-950 border-t border-primary-800">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 rounded-full bg-gradient-to-br from-accent-400 to-accent-600 flex items-center justify-center">
                <Church className="w-6 h-6 text-primary-950" strokeWidth={2.5} />
              </div>
              <div className="leading-tight">
                <p className="font-serif font-bold text-lg text-primary-50">La Compassion</p>
                <p className="text-[10px] tracking-[0.2em] uppercase text-accent-400">C.R.E.F.M</p>
              </div>
            </div>
            <p className="text-primary-400 text-sm leading-relaxed mb-5">
              Une communauté chrétienne qui répand l'Évangile de Jésus-Christ avec un message d'amour,
              de sainteté, de puissance et d'équilibre.
            </p>
            <div className="flex gap-3">
              {[Facebook, Youtube, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-primary-800/60 border border-primary-700 flex items-center justify-center text-primary-300 hover:text-accent-400 hover:border-accent-400/50 hover:scale-110 transition-all"
                  aria-label="Réseau social"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-primary-50 font-semibold mb-5 text-sm tracking-wide uppercase">Navigation</h4>
            <ul className="space-y-3">
              {[
                { label: 'Accueil', href: '#hero' },
                { label: 'Nos Valeurs', href: '#valeurs' },
                { label: 'Notre Histoire', href: '#histoire' },
                { label: 'Programmes', href: '#programmes' },
                { label: 'Galerie', href: '#galerie' },
              ].map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-primary-400 hover:text-accent-400 text-sm transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Rendez-vous */}
          <div>
            <h4 className="text-primary-50 font-semibold mb-5 text-sm tracking-wide uppercase">Nos rendez-vous</h4>
            <ul className="space-y-3 text-sm text-primary-400">
              <li>
                <span className="text-primary-100 font-medium">Mercredi</span> : Soirée de Gloire, 17h — 19h30
              </li>
              <li>
                <span className="text-primary-100 font-medium">Vendredi</span> : Veillée des Vaillants de Feu, 23h — 5h
              </li>
              <li>
                <span className="text-primary-100 font-medium">Dimanche</span>
              </li>
              <li className="pl-2">1er Culte : 8h00 — 10h30</li>
              <li className="pl-2">2ème Culte (LIVE) : 11h30 — 14h00</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-primary-50 font-semibold mb-5 text-sm tracking-wide uppercase">Contact</h4>
            <ul className="space-y-4 text-sm text-primary-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent-400 flex-shrink-0 mt-0.5" />
                <span>2ème rue Limete Industriel, n°6, Kinshasa, RDC</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent-400 flex-shrink-0" />
                <span>+243 000 000 000</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent-400 flex-shrink-0" />
                <span>contact@lacompassion.org</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-primary-500 text-sm">
            Église La Compassion © 2025. Tous droits réservés.
          </p>
          <p className="text-primary-500 text-sm">
            Amour · Sainteté · Puissance · Équilibre
          </p>
        </div>
      </div>
    </footer>
  );
}
